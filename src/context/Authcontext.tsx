'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import { createClient } from "@/lib/supabase/client"

type MinimalUser = {
    id: string;
    email: string;
    role: 'student' | 'admin' | 'instructor' | null;
};

type AuthContextType = {
    user: MinimalUser | null;
    setUserFromToken: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<MinimalUser | null>(null);
    const supabase = createClient();
    const setUserFromToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.warn('No token found in localStorage');
            setUser(null);
            return;
        }

        try {
            type DecodedToken = {
                userId: string;
                email: string;
                [key: string]: unknown;
            };
            const decoded = jwtDecode<DecodedToken>(token);
            console.log('Decoded token:', decoded);
            const userId = decoded?.userId;
            const email = decoded?.email;

            if (!userId || !email) {
                console.error('Invalid token: missing user ID or email');
                setUser(null);
                return;
            }

            const { data, error } = await supabase
                .from('profiles')
                .select('role') 
                .eq('id', userId)
                .single();

            if (error) {
                console.error('Error fetching role from Supabase:', error.message);
                setUser({ id: userId, email, role: null });
                return;
            }

            setUser({ id: userId, email, role: data.role });
        } catch (err) {
            console.error('Token decode or fetch failed:', err);
            setUser(null);
        }
    };

    useEffect(() => {
        setUserFromToken();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUserFromToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
