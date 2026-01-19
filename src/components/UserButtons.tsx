import Link from 'next/link';
import { HiLogout } from 'react-icons/hi';
import { FiBookmark } from 'react-icons/fi';

interface UserButtonsProps {
    username: string,
    logout: () => Promise<void>;
}

const iconButtonClass = "cursor-pointer rounded-xl p-2 transition active:scale-97";

function UserButtons({ username, logout }: UserButtonsProps) {
    return (
        <div className='flex gap-3 sm:gap-4'>

            <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:h-8 sm:w-8 flex items-center justify-center rounded-full
                 bg-gray-700 text-gray-100 font-semibold text-sm">{username[0].toUpperCase()}</div>
                <p className='font-semibold hidden sm:flex'>{username}</p>
            </div>

            <div className="flex items-center gap-2">
                <Link href="/favourites"
                    className={`${iconButtonClass} bg-[#9ebc9e] hover:bg-[#9ebc9e]/70 
                    text-black hover:drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]`}>
                    <FiBookmark className="h-5 w-5 sm:w-6 sm:h-6" />
                </Link>

                <button onClick={logout}
                    className={`${iconButtonClass} bg-red-400/80 hover:bg-red-400/50 
                    hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]`}>
                    <HiLogout className="h-5 w-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
    )
}

export default UserButtons
