import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL environment variable is not defined");
}

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

export default database;
