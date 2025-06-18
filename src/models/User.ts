// This is a sample User model schema for MongoDB with Mongoose
// In a real application, you would connect this to your MongoDB database

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  image: {
    type: String,
  },
  preferences: {
    industries: [{
      type: String,
    }],
    contentTypes: [{
      type: String,
    }],
    audience: [{
      type: String,
    }],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists to prevent recompilation error in development
export default mongoose.models.User || mongoose.model('User', UserSchema);
