import MoviesGrid from '@/components/MoviesGrid';
import FavouritesHeader from '@/components/FavouritesHeader';
import EmptyState from '@/components/EmptyState';

const mockMovies = {
    page: 1,
    total_pages: 5,
    total_results: 100,
    results: [

    ],
};

export default function page() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-8 md:py-12 transition-all duration-300">
            <FavouritesHeader />
            {mockMovies.results.length === 0 ? <EmptyState isFav={true} /> : <MoviesGrid movies={mockMovies.results} />}
        </div>
    )
}
