import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi";

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
}

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className="group
            rounded-xl
            border border-zinc-500/50
            w-full max-w-xl
            transition
            hover:-translate-y-1
            hover:shadow-[0_10px_30px_rgba(158,188,158,0.25)]
            flex flex-col h-full"
        >
            <div className="relative aspect-2/3 overflow-hidden rounded-t-xl">
                {movie.poster_path ? <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    loading="eager"
                />
                    :
                    <div className="relative aspect-2/3 bg-linear-to-t from-gray-950 via-gray-850 to-gray-750 flex items-center justify-center text-gray-100 font-bold text-sm">
                        🖼 Poster Not Available
                    </div>}

                <div className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/60 via-black/20 to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                " />

                <button
                    className="
                        absolute top-3 right-3 z-10
                        w-9 h-9
                        flex items-center justify-center
                        rounded-xl
                        bg-black/60 backdrop-blur
                        text-lg
                        transition
                        hover:scale-110
                        hover:bg-black/80
                        active:scale-95 cursor-pointer
                    "
                >
                    {true ? <HiOutlineBookmark size={20} /> : <HiBookmark size={22} />}
                </button>
            </div>

            <div className="p-4 flex flex-col flex-1">
                <h2 className="font-semibold text-md text-gray-100 line-clamp-2 flex-1">
                    {movie.title}
                </h2>

                <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <p>{movie.release_date ? formatDate(movie.release_date) : "Unknown"}</p>
                    <p className="text-[#9ebc9e] font-bold">
                        {movie.vote_average ? `★ ${movie.vote_average.toFixed(1)}` : "No rating"}
                    </p>
                </div>
            </div>
        </div>
    )
}
