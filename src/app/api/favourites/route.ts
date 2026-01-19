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

export async function POST(req: NextRequest) {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { movieId } = await req.json();
    const parsedMovieId = Number(movieId);

    if (!parsedMovieId) {
      return NextResponse.json({ message: "Invalid movieId" }, { status: 400 });
    }

    const favouriteExists = await Favourite.findOne({
      userId,
      movieId: parsedMovieId,
    });

    if (favouriteExists) {
      return NextResponse.json(
        { message: "Movie already in favourites" },
        { status: 409 },
      );
    }

    const newFavourite = await Favourite.create({
      userId,
      movieId: parsedMovieId,
    });

    return NextResponse.json(
      {
        message: "Movie added to favourite list successfully",
        favourite: {
          _id: newFavourite._id,
          movieId: newFavourite.movieId,
          createdAt: newFavourite.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("ADDING ERROR:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const favourites = await Favourite.find({ userId }).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: "Favourite movies fetched successfully",
        favourites,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("GETTING ERROR:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
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
