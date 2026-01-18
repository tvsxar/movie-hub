import Favourite from "@/lib/models/favouriteModel";
import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

function getUserIdFromToken(req: NextRequest): string | null {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };
    return decoded.id;
  } catch {
    return null;
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    await Favourite.deleteMany({ userId });

    return NextResponse.json(
      { message: "All favourite movies deleted successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error("DELETING ERROR:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
