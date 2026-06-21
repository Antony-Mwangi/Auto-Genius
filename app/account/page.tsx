"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  FaShoppingBag,
  FaShoppingCart,
  FaBoxOpen,
  FaTruck,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

import { Order } from "@/app/types/order";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const { totalItems, subtotal } = useCart();

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) return;

    const loadOrders = () => {
      const allOrders: Order[] = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );

      // ✅ FIX: use userEmail (NOT customerEmail)
      const userOrders = allOrders.filter(
        (order) => order.userEmail === user.email
      );

      setOrders([...userOrders].reverse());
    };

    loadOrders();

    // 🔥 LIVE UPDATES (no refresh)
    const interval = setInterval(loadOrders, 2000);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">

      {/* HEADER */}
      <section className="border-b border-white/10 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-4xl font-bold">
            Welcome,{" "}
            <span className="text-orange-500">{user?.name}</span>
          </h1>

          <p className="mt-2 text-gray-400">
            Manage your shopping activity and track orders in real time.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-2">

          {/* SHOP */}
          <div className="rounded-xl bg-[#121821] p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <FaShoppingBag className="text-orange-500" size={22} />
              <h2 className="text-xl font-semibold">Continue Shopping</h2>
            </div>

            <Link
              href="/shop"
              className="inline-block mt-4 bg-orange-500 px-5 py-3 rounded-lg font-semibold"
            >
              Shop Now
            </Link>
          </div>

          {/* CART */}
          <div className="rounded-xl bg-[#121821] p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <FaShoppingCart className="text-teal-400" size={22} />
              <h2 className="text-xl font-semibold">Cart</h2>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span>Total</span>
                <span>KSh {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <Link
              href="/cart"
              className="inline-block mt-4 bg-teal-500 px-5 py-3 rounded-lg font-semibold"
            >
              View Cart
            </Link>
          </div>

          {/* ORDERS (REAL DATA) */}
          <div className="lg:col-span-2 rounded-xl bg-[#121821] p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <FaBoxOpen className="text-orange-500" size={22} />
              <h2 className="text-xl font-semibold">My Orders</h2>
            </div>

            {orders.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                No orders found yet.
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-lg bg-white/5 p-5"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-sm text-gray-400">
                          {order.createdAt}
                        </p>
                      </div>

                      <span className="rounded-full bg-orange-500/20 px-3 py-1 text-orange-400 text-sm">
                        {order.status}
                      </span>
                    </div>

                    <div className="mt-3 text-gray-300 text-sm">
                      <p>Items: {order.totalItems}</p>
                      <p>Payment: {order.paymentMethod}</p>
                      <p>Total: KSh {order.totalAmount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PROFILE */}
          <div className="rounded-xl bg-[#121821] p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <FaUserCircle className="text-yellow-400" size={22} />
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>

            <p>{user?.name}</p>
            <p className="text-gray-400">{user?.email}</p>
          </div>

          {/* LOGOUT */}
          <div className="lg:col-span-2 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="flex items-center gap-3 mb-5">
              <FaSignOutAlt className="text-red-400" size={22} />
              <h2 className="text-xl font-semibold text-red-400">
                Logout
              </h2>
            </div>

            <button
              onClick={() => {
                logout();
                window.location.href = "/";
              }}
              className="bg-red-500 px-6 py-3 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}