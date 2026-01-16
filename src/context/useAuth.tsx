'use client'
import { createContext, useState, useEffect, useContext } from "react";

interface UserType {
    username: string,
    email: string,
    _id: string
}

interface UserDataType {
    login?: string,
    email?: string,
    username?: string,
    password: string
}

interface AuthContextType {
    user: UserType | null,
    logout: () => Promise<void>;
    auth: (isLogin: boolean, userData: UserDataType) => Promise<void>;
    loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function getUser() {
            try {
                setLoading(true);
                const response = await fetch('/api/auth/me', {
                    cache: 'no-store',
                });
                const data = await response.json();
                setUser(data.user);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
                setUser(null);
                setLoading(false);
            }
        }

        getUser();
    }, [])

    async function logout() {
        try {
            setLoading(true);
            const response = await fetch('/api/auth/logout', { method: 'POST', cache: 'no-store' });
            setUser(null);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    async function auth(isLogin: boolean, userData: { login?: string, email?: string, username?: string, password: string }) {
        try {
            setLoading(true);
            const response = await fetch(isLogin ? '/api/auth/login' : '/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
                cache: 'no-store'
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Authentication failed');
            }

            setUser(data.user);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    return <AuthContext.Provider value={{ user, logout, auth, loading }}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}
