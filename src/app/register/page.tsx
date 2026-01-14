import Link from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center px-4 py-8 min-h-[80vh]">
            <div className="border border-gray-200/50 w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
                <h1 className="text-2xl lg:text-3xl font-bold text-center text-white mb-6">
                    Create Account
                </h1>

                <AuthForm isLogin={false} />

                <p className="text-gray-400 text-sm text-center mt-4">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#9ebc9e] font-semibold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}
