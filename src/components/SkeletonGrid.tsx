import SkeletonCard from "./SkeletonCard";

export default function SkeletonGrid({ count = 20 }) {
    return (
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );
}