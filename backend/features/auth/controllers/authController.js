// controllers/authController.js

import  argon2 from 'argon2';
import  jwt from 'jsonwebtoken';
import  { OAuth2Client } from 'google-auth-library';
import User from '../models/user.js';
import request from 'request'
import env from 'dotenv'
import { getUserData } from '../services/authService.js';
import Conversation from '../../chat/models/conversation.js';

env.config();

const redirect_uri = "https://alx-webstack-simple-inventory.onrender.com/api/v1/auth/google/callback";
const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirect_uri,
)

export const register = async (req, res) => {
    const { name, email, password, role, } = req.body;
    try{      
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(401).json({ message: 'User already exists' });
        }

        if(!req.file){
          return res.status(404).json({ message: 'Image is required' });
        }

        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        // Hash the password using Argon2
        const hashedPassword = await argon2.hash(password);
      
        // Create a new user
        const user = new User({ name, email, role, pp:imageUrl, password: hashedPassword });
        await user.save();
      
        // Generate a JWT token
        const token = jwt.sign({ id: user._id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });
      
        res.status(201).json({ token, user });
    }catch(e){
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const update = async (req, res) => {
  const { name, email, password, role, pp } = req.body;
  const { id } = req.user;

  try{ 
      if(!req.file){
        
        let hashedPassword = null;
        if(password){
          // Hash the password using Argon2
          hashedPassword = await argon2.hash(password);
        }                      
        
        // Check if user already exists
        const user = await User.findByIdAndUpdate(
          id,
          hashedPassword ? 
          { name, email, password: hashedPassword, role, pp}: 
          { name, email, role, pp},
          {
            new: true,        // Return the updated document
            runValidators: true // Validate the update against the schema
          }
        );

        const myConvs = await Conversation.find({
          participants: { $elemMatch: { _id: id } }
        })

        for(var i in myConvs){
          var conv = myConvs[i]
          var participantId = 0;
          if(conv.participants[0]._id == id){
            participantId = 0;
          }else{
            participantId = 1;
          }
          conv.participants[participantId].username = name;
          await Conversation.findByIdAndUpdate(conv._id, conv, { new: true })
        }
        
        // Generate a JWT token
        const token = jwt.sign({ id: user._id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });

        res.status(201).json({ token, user });
      }else{
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`; 
        
        let hashedPassword = null;
        if(password){
          // Hash the password using Argon2
          hashedPassword = await argon2.hash(password);
        }                
        
        // Check if user already exists
        const user = await User.findByIdAndUpdate(
          id,
          hashedPassword !== null ? 
          { name, email, password: hashedPassword, role, pp: imageUrl}: 
          { name, email, role, pp: imageUrl},
          {
            new: true,        // Return the updated document
            runValidators: true // Validate the update against the schema
          }
        );
        
        const myConvs = await Conversation.find({
          participants: { $elemMatch: { _id: id } }
        })

        for(var i in myConvs){
          var conv = myConvs[i]
          var participantId = 0;
          if(conv.participants[0]._id == id){
            participantId = 0;
          }else{
            participantId = 1;
          }
          conv.participants[participantId].username = name;
          conv.participants[participantId].profileImage = imageUrl;
          await Conversation.findByIdAndUpdate(conv._id, conv, { new: true })
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });

        res.status(201).json({ token, user });
      }
  }catch(e){
      res.status(500).json({ error: e });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if(user.isGoogle){
    return res.status(401).json({ message: 'This email is signed as a google account' });
  }

  // Verify the password using Argon2
  const isValid = await argon2.verify(user.password, password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  
  // Generate a JWT token
  const token = jwt.sign({ id: user._id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });

  res.json({ token, user });
};

export const getUser = async (req, res) => {
  
  // Find the user
  
  const user = await User.findOne({ _id: req.user.id });
  console.log(user);
  
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  res.json({ user });
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
    redirect_uri
  });
  res.redirect(url);
};

export const googleCallback = async (req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", '*');
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
          user = new User({ name, email, pp: picture, isGoogle: true, password: '123456'});
          await user.save();
        }
      
        const token = jwt.sign({ id: user.id, username: user.name, profileImage: user.pp }, process.env.JWT_SECRET, { expiresIn: '3d' });
        // res.json({ token, user });{
        res.redirect(`https://alx-webstack-simple-inventory-frontend.onrender.com?token=${token}`);
    }catch(e){
        res.status(500).json({err: e});
    }
};
