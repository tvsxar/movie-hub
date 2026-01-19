import Link from 'next/link';

const baseClass = 'font-semibold text-md rounded-md h-8 px-3 flex items-center justify-center drop-shadow-[0_0_4px_rgba(158,188,158,0.6)] cursor-pointer duration-200';

export default function AuthButtons() {
    return (
        <div className="flex gap-2 sm:gap-3">
            <Link
                href="/login"
                className={`${baseClass} border border-[#9ebc9e] text-[#9ebc9e] hover:bg-[#9ebc9e] hover:text-black`}
            >
                Sign In
            </Link>

            <Link
                href="/register"
                className={`${baseClass} bg-[#9ebc9e] text-black hover:bg-[#9ebc9e]/70`}
            >
                Sign Up
            </Link>
        </div>
    )
}