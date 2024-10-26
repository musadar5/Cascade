import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI; 

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let isConnected = false; 

export default async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}
