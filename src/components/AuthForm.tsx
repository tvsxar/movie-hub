interface AuthFormProps {
    isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
    return (
        <form className="flex flex-col gap-4">
            {!isLogin &&
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ebc9e] transition"
                />}
            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ebc9e] transition"
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ebc9e] transition"
            />

            <button
                type="submit"
                className="w-full py-3 mt-2 bg-[#9ebc9e] text-black font-semibold rounded-lg hover:bg-[#8aad8a] transition cursor-pointer"
            >
                Sign Up
            </button>
        </form>
    )
}
