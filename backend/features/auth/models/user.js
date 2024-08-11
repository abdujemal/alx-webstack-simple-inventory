import mongoose from 'mongoose';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: "Sales"
  },
  pp: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

export default User;