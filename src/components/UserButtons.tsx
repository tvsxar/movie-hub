import Link from 'next/link';
import { HiLogout } from 'react-icons/hi';
import { FiBookmark } from 'react-icons/fi';

interface UserButtonsProps {
    username: string,
    logout: () => Promise<void>;
}

function UserButtons({ username, logout }: UserButtonsProps) {
    return (
        <div className='flex gap-3 sm:gap-4'>

            <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:h-8 sm:w-8 flex items-center justify-center rounded-full
                 bg-gray-700 text-gray-100 font-semibold text-sm">{username[0].toUpperCase()}</div>
                <p className='font-semibold hidden sm:flex'>{username}</p>
            </div>

            <div className="flex items-center gap-2">
                <Link href="/favourites" className="cursor-pointer bg-[#9ebc9e] rounded-xl 
                p-2 hover:bg-[#9ebc9e]/70 active:scale-97 text-black transition 
                hover:drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]">
                    <FiBookmark className="h-5 w-5 sm:w-6 sm:h-6" />
                </Link>

                <button onClick={logout}
                className='cursor-pointer bg-red-400/80 rounded-xl p-2
                 hover:bg-red-400/50 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)] 
                 active:scale-97 transition'>
                    <HiLogout className="h-5 w-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
    )
}

export default UserButtons
