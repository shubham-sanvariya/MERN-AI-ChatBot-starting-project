import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type User = {
    name: string;
    email: string;
}
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}
const Authcontext = createContext<UserAuth | null>(null);
export const AuthPorvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // fetch if the user's cookies are valid then skip login
    }, []);
    const login = async (email: string, password: string) => {

    };
    const signup = async (name: string, email: string, password: string) => {

    };
    const logout = async () => {

    };

    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup
    };
    return <Authcontext.Provider value={value}>
        {children}
    </Authcontext.Provider>
};

export const useAuth = () => useContext(Authcontext);