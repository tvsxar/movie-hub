import User from "@/lib/models/userModel";
import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { login, password } = await req.json();

    if (!login || !password) {
      return NextResponse.json(
        { message: "Login and password are required" },
        { status: 400 }
      );
    }

    const loginValue = login.trim();

    const query = loginValue.includes("@")
      ? { email: loginValue.toLowerCase() }
      : { username: loginValue };

    await connectDB();

    const user = await User.findOne(query);

    if (!user) {
      return NextResponse.json(
        { message: "User doesn`t exist!" },
        { status: 400 }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json({ message: "Wrong password!" }, { status: 400 });
    }

    return NextResponse.json({
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
