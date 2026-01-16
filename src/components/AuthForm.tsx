'use client'
import { useAuth } from '@/context/useAuth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
    isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
    const { auth } = useAuth();
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState({
        login: '',
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        setUserData({
            login: '',
            username: '',
            email: '',
            password: ''
        });
    }, [isLogin]);

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setUserData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const dataToSend = { ...userData };

        if (isLogin) {
            dataToSend.email = '';
            dataToSend.username = '';
        } else {
            dataToSend.login = '';
        }

        try {
            await auth(isLogin, dataToSend);
            router.push('/');

            setUserData({
                login: '',
                username: '',
                email: '',
                password: ''
            });
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4">

            {error && (
                <p className="text-red-400 text-sm text-center">
                    {error}
                </p>
            )}

            <input
                type="text"
                name={isLogin ? 'login' : 'username'}
                required
                onChange={handleInput}
                placeholder={isLogin ? "Username or Email" : "Username"}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ebc9e] transition"
            />
            {!isLogin && <input
                type="email"
                name="email"
                required
                onChange={handleInput}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ebc9e] transition"
            />}
            <input
                type="password"
                name="password"
                required
                onChange={handleInput}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ebc9e] transition"
            />

            <button
                type="submit"
                className="w-full py-3 mt-2 bg-[#9ebc9e] text-black font-semibold rounded-lg hover:bg-[#8aad8a] transition cursor-pointer"
            >
                {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
        </form>
    )
}
