export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🎬</div>
            <h2 className="text-2xl font-semibold text-gray-200">
                No movies found
            </h2>
            <p className="mt-2 text-md">
                Try another title
            </p>
        </div>
    );
}