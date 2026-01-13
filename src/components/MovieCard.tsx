import Image from 'next/image';
import formatDate from '@/lib/utils';

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string
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
          hover:shadow-[0_10px_30px_rgba(158,188,158,0.25)]">
            <div className="">
                <div className="relative aspect-2/3 overflow-hidden rounded-t-xl">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-101"
                    />

                    <div
                        className="
                            absolute inset-0
                            bg-linear-to-t
                            from-black/60 via-black/20 to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                        "
                    />
                </div>

                <div className="p-4 flex flex-col gap-4">
                    <h2 className='font-semibold text-md text-gray-100 line-clamp-2'>{movie.title}</h2>

                    <div className="flex justify-between text-xs text-gray-400">
                        <p>{formatDate(movie.release_date)}</p>

                        <p className="text-[#9ebc9e] font-bold">
                            ★ {movie.vote_average}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
