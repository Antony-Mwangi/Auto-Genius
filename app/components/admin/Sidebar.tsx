"use client";

import Link from "next/link";
import {
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#121821] border-r border-white/10 p-6">

      <h1 className="text-3xl font-bold text-orange-500">
        Admin
      </h1>

      <nav className="mt-10 space-y-4">

        <Link
          href="/admin"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          href="/admin/orders"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5"
        >
          <FaShoppingBag />
          Orders
        </Link>

        <Link
          href="/admin/customers"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5"
        >
          <FaUsers />
          Customers
        </Link>

        <Link
          href="/admin/products"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5"
        >
          <FaBoxOpen />
          Products
        </Link>

      </nav>

    </aside>
  );
}