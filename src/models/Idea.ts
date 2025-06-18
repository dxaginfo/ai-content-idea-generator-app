// This is a sample Idea model schema for MongoDB with Mongoose
// In a real application, you would connect this to your MongoDB database

import mongoose from 'mongoose';

const IdeaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  contentType: {
    type: String,
    required: [true, 'Please specify content type'],
    enum: ['blog', 'video', 'social'],
  },
  industry: {
    type: String,
    required: [true, 'Please specify an industry'],
  },
  audience: {
    type: String,
    required: [true, 'Please specify a target audience'],
  },
  keywords: [{
    type: String,
  }],
  userId: {
    type: String,
    required: [true, 'Please provide a user ID'],
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
  },
  scheduledFor: {
    type: Date,
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
export default mongoose.models.Idea || mongoose.model('Idea', IdeaSchema);
