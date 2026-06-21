"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaBoxOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function AdminNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#121821] border-b border-white/10">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-4">

        {/* BRAND */}
        <h1 className="text-xl font-bold text-orange-500">
          Admin Panel
        </h1>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-xl lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-300">

          <Link
            href="/admin"
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            href="/admin/orders"
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaShoppingBag />
            Orders
          </Link>

          <Link
            href="/admin/customers"
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaUsers />
            Customers
          </Link>

          <Link
            href="/admin/products"
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaBoxOpen />
            Products
          </Link>

        </nav>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-gray-300">

          <Link
            href="/admin"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            href="/admin/orders"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaShoppingBag />
            Orders
          </Link>

          <Link
            href="/admin/customers"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaUsers />
            Customers
          </Link>

          <Link
            href="/admin/products"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaBoxOpen />
            Products
          </Link>

        </div>
      )}

    </header>
  );
}