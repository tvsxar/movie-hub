export default function SkeletonCard() {
    return (
        <div className="animate-pulse rounded-xl border border-zinc-600/20 w-full max-w-xl flex flex-col h-full">
            <div className="bg-zinc-900 aspect-2/3 rounded-t-xl" />
            <div className="p-4 flex flex-col flex-1 gap-2">
                <div className="h-4 bg-zinc-800 rounded w-3/4" />
                <div className="h-3 bg-zinc-800 rounded w-1/2 mt-auto" />
            </div>
        </div>
    );
}