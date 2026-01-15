import Link from 'next/link';

export default function AuthButtons() {
    return (
        <div className="flex gap-2 sm:gap-3">
            <Link href="/login"
                className='border border-[#9ebc9e] text-[#9ebc9e] font-semibold text-md rounded-md h-8 px-3
                        flex items-center justify-center
                      hover:bg-[#9ebc9e] hover:text-black duration-200 cursor-pointer
                        drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]'>
                Sign In
            </Link>

            <Link href="/register"
                className='bg-[#9ebc9e] text-black font-semibold text-md rounded-md h-8 px-3
                        flex items-center justify-center
                      hover:bg-[#9ebc9e]/70 duration-200 cursor-pointer
                        drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]'>
                Sign Up
            </Link>
        </div>
    )
}
