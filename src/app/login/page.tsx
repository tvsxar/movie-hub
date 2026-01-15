import Link from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center px-4 py-8 min-h-[80vh]">
            <div className="border border-gray-200/50 w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
                <h1 className="text-2xl lg:text-3xl font-bold text-center text-white mb-6">
                    Login to Account
                </h1>

                <AuthForm isLogin={true} />

                <p className="text-gray-400 text-sm text-center mt-4">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-[#9ebc9e] font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}
