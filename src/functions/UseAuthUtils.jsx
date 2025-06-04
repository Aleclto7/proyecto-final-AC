import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        if (savedToken) {
            setToken(savedToken);
            setUser(savedUser);
        }
    }, [])

    const login = (username, password) => {
        if (username === 'admin' && password === '1234') {
            const fakeToken = 'fake-jwt-token';
            setToken(fakeToken);
            setUser(username);
            localStorage.setItem('token', fakeToken)
            localStorage.setItem('user', username)
            return true;
        }
        return false;
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);
