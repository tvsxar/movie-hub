interface FavouritesHeaderProps {
    length: number
}

export default function FavouritesHeader({ length }: FavouritesHeaderProps) {
    return (
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end 
        md:justify-between border-b border-white/5 pb-8">
            <div className="space-y-1">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                        My
                        <span className="text-[#9ebc9e] drop-shadow-[0_0_15px_rgba(158,188,158,0.3)]">
                            Favorites
                        </span>
                    </h1>
                    <span className="hidden md:inline-flex items-center justify-center rounded-full 
                    bg-[#9ebc9e]/10 px-2.5 py-0.5 text-xs font-medium 
                    text-[#9ebc9e] ring-1 ring-inset ring-[#9ebc9e]/20">
                        {length}
                    </span>
                </div>
                <p className="text-base text-zinc-500 max-w-md leading-relaxed">
                    A curated collection of your must-watch movies and all-time classics.
                </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
                <div className="flex md:hidden items-center gap-2 rounded-xl bg-zinc-900/50 border
                 border-white/5 px-4 py-2 text-sm">
                    <span className="text-[#9ebc9e]">❤️</span>
                    <span className="text-zinc-300 font-medium">{length} items</span>
                </div>

                <button
                    className="group relative flex items-center gap-2 overflow-hidden rounded-xl border 
                    border-red-500/20 bg-red-500/5 px-5 py-2.5 text-sm font-medium text-red-400 
                    transition-all hover:border-red-500/40 hover:bg-red-500/10 active:scale-97 
                    disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    disabled={false}
                >
                    <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-12"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                        4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear collection
                </button>
            </div>
        </div>
    )
}