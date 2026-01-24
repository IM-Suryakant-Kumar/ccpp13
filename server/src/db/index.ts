import { connect } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
export const connectDB = async () => await connect(MONGO_URI!);
