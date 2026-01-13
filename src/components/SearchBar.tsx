export default function SearchBar() {
    return (
        <div className="w-full mx-auto mb-6 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
            </span>
            <input
                type="text"
                placeholder="Search movies..."
                className="
      w-full
      pl-10
      pr-4
      py-2
      rounded-lg
      bg-zinc-800
      text-gray-100
      placeholder-gray-500
      focus:outline-none
      focus:ring-2 focus:ring-[#9ebc9e]
      transition
    "
            />
        </div>
    )
}
