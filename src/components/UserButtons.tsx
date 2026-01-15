import Link from 'next/link';
import { HiLogout } from 'react-icons/hi';
import { FiBookmark } from 'react-icons/fi';

interface UserButtonsProps {
    username: string
}

function UserButtons({ username }: UserButtonsProps) {
    return (
        <div className='flex gap-4'>

            <div className="hidden sm:flex items-center gap-2">
                <div className="h-8 w-8 flex items-center justify-center rounded-full
                 bg-gray-700 text-gray-100 font-semibold text-sm">{username[0]}</div>
                <p className='font-semibold'>{username}</p>
            </div>

            <div className="flex items-center gap-2">
                <Link href="/favourites" className="cursor-pointer bg-[#9ebc9e] rounded-xl 
                p-2 hover:bg-[#9ebc9e]/70 active:scale-97 text-black transition 
                hover:drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]">
                    <FiBookmark className="w-6 h-6" />
                </Link>

                <button className='cursor-pointer bg-red-400/80 rounded-xl p-2
                 hover:bg-red-400/50 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)] 
                 active:scale-97 transition'>
                    <HiLogout className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default UserButtons
