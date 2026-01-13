import MovieCard from "./MovieCard"
import { getMovies } from "@/lib/actions";

export default async function MoviesGrid() {
    const moviesData = await getMovies();
    const movies = moviesData.results;
    console.log(moviesData);
    return (
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}