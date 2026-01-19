'use client'
import { createContext, useState, useEffect, useContext } from "react";

interface Favourite {
    userId: string;
    movieId: number;
}

interface FavouriteContextType {
    favourites: number[];
    toggleFavourite: (movieId: number) => Promise<void>;
    clearAllFavourites: () => Promise<void>;
}

const FavouriteContext = createContext<FavouriteContextType | null>(null);

export default function FavouriteProvider({ children }: { children: React.ReactNode }) {
    const [favourites, setFavourites] = useState<number[]>([]);

    useEffect(() => {
        async function fetchFavourites() {
            try {
                const response = await fetch('/api/favourites');

                if (!response.ok) {
                    setFavourites([]);
                    return;
                }

                const data = await response.json();
                const ids: number[] = Array.isArray(data.favourites)
                    ? data.favourites.map((f: Favourite) => f.movieId)
                    : [];
                setFavourites(ids);
            } catch (err) {
                console.error('Failed to fetch favourites', err);
            }
        }

        fetchFavourites();
    }, []);

    async function toggleFavourite(movieId: number) {
        const isFav = favourites.includes(movieId);

        try {
            const response = await fetch(isFav ? `/api/favourites/${movieId}` : '/api/favourites', {
                method: isFav ? 'DELETE' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: isFav ? undefined : JSON.stringify({ movieId })
            })

            if (!response.ok) throw new Error('Request failed');

            setFavourites(prev => {
                return isFav ? prev.filter(id => id !== movieId) : [movieId, ...prev]
            });
        } catch (err) {
            console.error('Failed to toggle favourite', err);
        }
    }

    async function clearAllFavourites() {
        try {
            const response = await fetch('/api/favourites', {
                method: 'DELETE'
            })

            if (!response.ok) throw new Error('Request failed');

            setFavourites([]);
        } catch (err) {
            console.error('Failed to delete all favourites', err);
        }
    }

    return <FavouriteContext.Provider value={{ favourites, toggleFavourite, clearAllFavourites }}>{children}</FavouriteContext.Provider>
}

export function useFavourite(): FavouriteContextType {
    const context = useContext(FavouriteContext);

    if (!context) {
        throw new Error("useFavourite must be used within a FavouriteProvider");
    }

    return context;
}
