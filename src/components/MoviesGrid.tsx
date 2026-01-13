import { mockMovies } from "@/lib/mock/movies"
import MovieCard from "./MovieCard"

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string
    vote_average: number;
}

export default function MoviesGrid() {
    return (
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mockMovies.results.map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}