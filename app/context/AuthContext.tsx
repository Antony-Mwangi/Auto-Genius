"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: "customer" | "admin";
  createdAt?: string;
  updatedAt?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
  logout: async () => {},
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/me", {
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}