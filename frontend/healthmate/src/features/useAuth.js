import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ isAuthenticated: false });

    useEffect(() => {
        // Check for the token in local storage when the app initializes
        const token = localStorage.getItem('token');
        if (token) {
            // If a token exists, the user is considered logged in
            setUser({ isAuthenticated: true });
        }
    }, []);

    const login = (token) => {
        // Set the user as authenticated and store the token
        setUser({ isAuthenticated: true });
        localStorage.setItem('token', token);
    };

    const logout = () => {
        // Clear the token and set the user as unauthenticated
        localStorage.removeItem('token');
        setUser({ isAuthenticated: false });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
