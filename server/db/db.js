import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://seanapowi:test123@cluster0.r9ggb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
