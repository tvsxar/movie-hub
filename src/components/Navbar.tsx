import Link from 'next/link';
import AuthButtons from '@/components/AuthButtons';
import UserButtons from '@/components/UserButtons';

export default function Navbar() {
    const mockUsername = 'username';

    return (
        <nav
            className="flex select-none items-center justify-between 
            border-b border-gray-100/30 py-4 px-4 sm:px-12 lg:px-25">
            <Link href="/" className='font-bold text-lg sm:text-2xl flex items-center justify-center'>
                Movie<span className="text-[#9ebc9e] drop-shadow-[0_0_4px_rgba(158,188,158,0.6)]">Hub</span>
            </Link>

            {true ? <AuthButtons /> : <UserButtons username={mockUsername} />}
        </nav>
    )
}
