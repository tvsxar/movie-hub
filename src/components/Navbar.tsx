export default function Navbar() {
    return (
        <nav
            className="flex select-none items-center justify-between 
    border-b border-gray-100/30 py-4 px-4 sm:px-12 lg:px-25">
            <h1 className='font-bold text-lg sm:text-2xl'>
                Movie<span className="text-[#9ebc9e] drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]">Hub</span>
            </h1>

            <div className="flex gap-2 sm:gap-3">
                <button className='border border-[#9ebc9e] text-[#9ebc9e] font-semibold text-md rounded-md px-3 h-8
    hover:bg-[#9ebc9e] hover:text-black duration-200 cursor-pointer drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]'>
                    <p>Sign In</p>
                </button>

                <button className='bg-[#9ebc9e] text-black font-semibold text-md rounded-md px-3 h-8
      hover:bg-[#9ebc9e]/70 duration-200 cursor-pointer drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]'>
                    <p>Sign Up</p>
                </button>
            </div>
        </nav>
    )
}
