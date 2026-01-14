import mongoose from "mongoose";

declare global {
  var mongoose:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const mongoURI = process.env.MONGO_URI as string;

if (!mongoURI) {
  throw new Error("❌ MongoDB URI is not defined in environment variables!");
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(mongoURI);
  console.log("✅ MongoDB connected");
}
