"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          AutoSpare
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-gray-300 hover:text-orange-500">
            Home
          </Link>

          <Link href="/shop" className="text-gray-300 hover:text-orange-500">
            Shop
          </Link>

          <Link href="/categories" className="text-gray-300 hover:text-orange-500">
            Categories
          </Link>

          <Link href="/brands" className="text-gray-300 hover:text-orange-500">
            Brands
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link
            href="/cart"
            className="text-2xl hover:text-orange-500 transition"
          >
            🛒
          </Link>

          {/* Guest Actions ONLY */}
          <Link
            href="/login"
            className="rounded-lg border border-teal-500 px-4 py-2 text-sm text-teal-400 hover:bg-teal-500 hover:text-white transition"
          >
            Login (Admin Only)
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition"
          >
            Register
          </Link>

        </div>
      </div>
    </header>
  );
}