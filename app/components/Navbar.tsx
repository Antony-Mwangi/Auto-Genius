"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const router = useRouter();

  const { user, loading, logout } = useAuth();

  const handleLogout = async () => {
    await logout();

    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-orange-500"
        >
          AutoSpare
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-gray-300 transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-gray-300 transition hover:text-orange-500"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="text-gray-300 transition hover:text-orange-500"
          >
            Categories
          </Link>

          <Link
            href="/brands"
            className="text-gray-300 transition hover:text-orange-500"
          >
            Brands
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="text-xl"
          >
            🛒
          </Link>

          {loading ? (
            <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-700" />
          ) : user ? (
            <>
              <span className="hidden text-gray-300 md:block">
                Hello,{" "}
                <span className="font-semibold text-teal-400">
                  {user.name}
                </span>
              </span>

              {user.role === "customer" ? (
                <Link
                  href="/account/orders"
                  className="rounded-lg border border-teal-500 px-4 py-2 text-sm text-teal-400 transition hover:bg-teal-500 hover:text-white"
                >
                  My Orders
                </Link>
              ) : (
                <Link
                  href="/admin"
                  className="rounded-lg border border-cyan-500 px-4 py-2 text-sm text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                >
                  Dashboard
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-teal-500 px-4 py-2 text-sm text-teal-400 transition hover:bg-teal-500 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}