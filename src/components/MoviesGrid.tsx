'use client'
import MovieCard from "./MovieCard"
import { useFavourite } from "@/context/useFavourite";

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string
    vote_average: number;
}

interface MoviesGridProps {
    movies: Movie[]
}

export default function MoviesGrid({ movies }: MoviesGridProps) {
    const { favourites } = useFavourite();

    return (
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} isFav={favourites.includes(movie.id)} />
            ))}
        </div>
    )
}