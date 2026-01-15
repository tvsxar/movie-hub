import { NextResponse } from "next/server";
import { cookieOptions } from "@/lib/utils";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.set("token", "", { ...cookieOptions, maxAge: 0 });
  return res;
}
