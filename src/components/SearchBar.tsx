'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
    initialValue: string;
}

export default function SearchBar({ initialValue = "" }: SearchBarProps) {
    const [value, setValue] = useState(initialValue);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (value.trim()) {
                params.set("search", value);
                params.set("page", "1");
            } else {
                params.delete("search");
                params.set("page", "1");
            }

            router.push(`/?${params.toString()}`);
        }, 300);

        return () => clearTimeout(handler);
    }, [value])

    return (
        <div
            className="w-full mx-auto mb-6 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
            </span>
            <input
                type="text"
                value={value}
                placeholder="Search movies..."
                onChange={(e) => setValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-800 text-gray-100
                 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9ebc9e] 
                 transition"
            />
        </div>
    )
}
