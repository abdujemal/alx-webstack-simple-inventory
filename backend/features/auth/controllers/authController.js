// controllers/authController.js

import  argon2 from 'argon2';
import  jwt from 'jsonwebtoken';
import  { OAuth2Client } from 'google-auth-library';
import User from '../models/user.js';

import env from 'dotenv'
import { getUserData } from '../services/authService.js';

env.config();


const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.CLIENT_SECRET,
    "http://127.0.0.1:3000/api/v1/auth/google/callback",
)//process.env.GOOGLE_CLIENT_ID);

export const register = async (req, res) => {
    const { name, email, password, role, pp } = req.body;
    try{      
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(200).json({ message: 'User already exists' });
        }
        // Hash the password using Argon2
        const hashedPassword = await argon2.hash(password);
      
        // Create a new user
        const user = new User({ name, email, role, pp, password: hashedPassword });
        await user.save();

      
        // Generate a JWT token
        const token = jwt.sign({ id: user._id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });
      
        res.status(201).json({ token, user: { name, email } });
    }catch(e){
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Verify the password using Argon2
  const isValid = await argon2.verify(user.password, password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  
  // Generate a JWT token
  const token = jwt.sign({ id: user._id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });

  res.json({ token, user: { name: user.name, email: user.email } });
};

export const logout = async (req, res) => {
    // Implement logout logic, e.g., invalidating the token
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the ID in the decoded token
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Invalidate the token (e.g., by storing it in a blacklist or revoking it)
    // This step depends on your authentication and session management strategy
    user.token = null;
    await user.save();
    
    res.json({ message: 'Logged out successfully' });
};
  
export const resetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        // Implement password reset logic, e.g., sending a reset password email
        res.json({ message: 'Password reset instructions sent' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const googleAuth = (req, res) => {
  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile  openid  https://www.googleapis.com/auth/userinfo.email',
    prompt: 'consent',
  });
  res.redirect(url);
};

export const googleCallback = async (req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
        res.header("Access-Control-Allow-Credentials", 'true');
        res.header("Referrer-Policy","no-referrer-when-downgrade");

        const { code } = req.query;
        const { tokens } = await client.getToken(code);
        


        client.setCredentials(tokens);
        // console.info('Tokens acquired.');
        const cred = client.credentials;
        // console.log('credentials',cred);
        const  data = await getUserData(cred.access_token);
        console.log(data);

        // const { id_token } = tokens;
        // const ticket = await client.verifyIdToken({
        //   idToken: id_token,
        //   audience: process.env.GOOGLE_CLIENT_ID,
        // });
       
        const { name,  picture, email } = data;
      
        let user = await User.findOne({ email });
        if (!user) {
          user = new User({ name, email,  pp: picture, password: '123456'});
          await user.save();
        }
      
        const token = jwt.sign({ id: user.id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });
        res.json({ token, user: { name, email, picture } });
        // res.redirect(303, 'https://localhost:5173/');
    }catch(e){
        res.status(500).json({err: e});
    }
};
