export default function EmptyState({ isFav = false }: { isFav?: boolean }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🎬</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 text-center">
                {isFav ? 'No added movies' : 'No movies found'}
            </h2>
            <p className="mt-2 text-sm sm:text-md text-center">
                {isFav ? 'Add movies to see the list' : 'Try another title'}
            </p>
        </div>
    );
}