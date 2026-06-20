"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (user: User) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("currentUser");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const register = (newUser: User) => {
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const exists = users.find(
      (u: User) => u.email === newUser.email
    );

    if (exists) {
      return false;
    }

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    return true;
  };

  const login = (
    email: string,
    password: string
  ) => {
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const found = users.find(
      (u: User) =>
        u.email === email &&
        u.password === password
    );

    if (!found) {
      return false;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(found)
    );

    setUser(found);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}