import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.ATLAS_URI) {
      throw new Error('ATLAS_URI is not defined in .env');
    }
    
    const conn = await mongoose.connect(process.env.ATLAS_URI || "", {
      serverSelectionTimeoutMS: 10000, 
      tls: true, 
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message); 
    } else {
      console.error("An unknown error occurred");
    }
    process.exit(1);
  }
};

export default connectDB;