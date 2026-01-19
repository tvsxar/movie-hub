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

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ movieId: string }> }) {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const resolvedParams = await params; 
    const movieId = Number(resolvedParams.movieId);
    if (!movieId) {
      return NextResponse.json({ message: "Invalid movieId" }, { status: 400 });
    }

    await connectDB();

    const deleted = await Favourite.findOneAndDelete({
      userId,
      movieId,
    });

    if (!deleted) {
      return NextResponse.json(
        { message: "Movie not found in favourites" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "Favourite movie deleted successfully",
        deleted,
      },
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
