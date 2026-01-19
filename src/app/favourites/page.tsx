'use client'
import MoviesGrid from '@/components/MoviesGrid';
import FavouritesHeader from '@/components/FavouritesHeader';
import EmptyState from '@/components/EmptyState';
import SkeletonGrid from '@/components/SkeletonGrid';
import { getMoviesByIds } from '@/lib/actions';
import { useFavourite } from '@/context/useFavourite';
import { useEffect, useState } from 'react';

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
}

export default function FavouritesPage() {
    const { favourites } = useFavourite();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchFavouriteMovies() {
            if (favourites.length === 0) {
                setMovies([])
                setLoading(false)
                return
            }

            try {
                setLoading(true);
                const moviesData = await getMoviesByIds(favourites);
                setMovies(moviesData);
            } catch (err) {
                console.error('Failed to fetch favourite movies', err);
                setMovies([]);
            } finally {
                setLoading(false)
            }
        }

        fetchFavouriteMovies();
    }, [favourites])

    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-25 py-8 transition-all duration-300">
                <FavouritesHeader length={movies.length} />
                {loading
                    ? <SkeletonGrid count={movies.length} />
                    : movies.length === 0
                        ? <EmptyState isFav={true} />
                        : <MoviesGrid movies={movies} />}
            </div>
        </div>
    )
}
