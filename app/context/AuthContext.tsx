"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface User {
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin";
}

interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (user: RegisterUser) => boolean;
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

  const register = (newUser: RegisterUser) => {
    const users: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const exists = users.find(
      (u) => u.email.toLowerCase() === newUser.email.toLowerCase()
    );

    if (exists) {
      return false;
    }

    const userToSave: User = {
      ...newUser,
      role: "customer",
    };

    users.push(userToSave);

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
    const users: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
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