'use client'
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function goToPage(page: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        router.push(`/?${params.toString()}`);
    }

    return (
        <div className="flex gap-2 justify-between mt-8 items-center">
            <button
                onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-2 rounded bg-gray-200/10 text-gray-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer hover:text-[#9ebc9e] hover:bg-gray-500/20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <p className="font-bold text-lg underline">{currentPage}</p>

            <button
                onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-2 rounded bg-gray-200/10 text-gray-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer hover:text-[#9ebc9e] hover:bg-gray-500/20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
        </div>
    )
}
