import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB}`)
    console.log('mongoDB connect succesfully')
  } catch (error) {
    console.log("mongoose connection error", error);
  }
};

export default connectDB