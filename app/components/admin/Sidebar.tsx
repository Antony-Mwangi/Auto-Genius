"use client";

import Link from "next/link";
import {
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaBoxOpen,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* MOBILE TOP BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 flex items-center justify-center rounded-md bg-[#121821] p-3 text-white shadow lg:hidden"
      >
        <FaBars />
      </button>

      {/* OVERLAY (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72
          bg-[#121821] border-r border-white/10 p-6
          transition-transform duration-300 ease-in-out

          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-orange-500">
            Admin
          </h1>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white lg:hidden"
          >
            <FaTimes />
          </button>
        </div>

        {/* NAV */}
        <nav className="mt-10 space-y-3">

          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-white/5"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            href="/admin/orders"
            className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-white/5"
          >
            <FaShoppingBag />
            Orders
          </Link>

          <Link
            href="/admin/customers"
            className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-white/5"
          >
            <FaUsers />
            Customers
          </Link>

          <Link
            href="/admin/products"
            className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-white/5"
          >
            <FaBoxOpen />
            Products
          </Link>

        </nav>
      </aside>
    </>
  );
}