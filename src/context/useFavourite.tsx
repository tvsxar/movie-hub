'use client'
import { createContext, useState, useEffect, useContext } from "react";

interface Favourite {
    userId: string;
    movieId: number;
}

interface FavouriteContextType {
    favourites: number[]
}

const FavouriteContext = createContext<FavouriteContextType | null>(null);

export default function FavouriteProvider({ children }: { children: React.ReactNode }) {
    const [favourites, setFavourites] = useState<number[]>([]);

    useEffect(() => {
        async function fetchFavourites() {
            try {
                const response = await fetch('/api/favourites');
                const data = await response.json();
                const ids: number[] = data.favourites.map((favourite: Favourite) => favourite.movieId);
                setFavourites(ids);
            } catch (err) {
                console.error('Failed to fetch favourites', err);
                throw err;
            }
        }

        fetchFavourites();
    }, []);

    return <FavouriteContext.Provider value={{ favourites }}>{children}</FavouriteContext.Provider>
}

export function useFavourite(): FavouriteContextType {
    const context = useContext(FavouriteContext);

    if (!context) {
        throw new Error("useFavourite must be used within a FavouriteProvider");
    }

    return context;
}
