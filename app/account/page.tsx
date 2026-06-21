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

type Order = {
  id: string;
  userEmail: string;
  userName: string;
  phone: string;
  location: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
  totalItems: number;
  paymentMethod: string;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  createdAt: string;
};

export default function AccountPage() {
  const { user, logout } = useAuth();
  const { totalItems, subtotal } = useCart();

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) return;

    const allOrders: Order[] = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const userOrders = allOrders.filter(
      (order) => order.userEmail === user.email
    );

    setOrders([...userOrders].reverse());
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
            Manage your orders and shopping activity.
          </p>
        </div>
      </section>

      {/* BODY */}
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

            <div className="flex justify-between">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between mt-2">
              <span>Total</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>

            <Link
              href="/cart"
              className="inline-block mt-6 bg-teal-500 px-5 py-3 rounded-lg font-semibold"
            >
              View Cart
            </Link>
          </div>

          {/* ORDERS */}
          <div className="lg:col-span-2 rounded-xl bg-[#121821] p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <FaBoxOpen className="text-orange-500" size={22} />
              <h2 className="text-xl font-semibold">My Orders</h2>
            </div>

            {orders.length === 0 ? (
              <p className="text-gray-400 text-center py-10">
                No orders found.
              </p>
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

                      {/* ✅ STATUS BADGE (UPDATED) */}
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Delivered"
                            ? "bg-green-500/20 text-green-400"
                            : order.status === "Shipped"
                            ? "bg-blue-500/20 text-blue-400"
                            : order.status === "Processing"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-gray-500/20 text-gray-300"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="mt-4 text-gray-300 space-y-1">
                      <p>Phone: {order.phone}</p>
                      <p>Location: {order.location}</p>
                      <p>Items: {order.totalItems}</p>
                      <p>Payment: {order.paymentMethod}</p>
                      <p className="text-orange-400 font-bold">
                        Total: KSh {order.totalAmount.toLocaleString()}
                      </p>
                    </div>

                    <div className="mt-3 text-sm text-gray-400">
                      {order.items.map((item) => (
                        <p key={item.id}>
                          • {item.name} x {item.quantity}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DELIVERY */}
          <div className="rounded-xl bg-[#121821] p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <FaTruck className="text-cyan-400" size={22} />
              <h2 className="text-xl font-semibold">Delivery</h2>
            </div>
            <p className="text-gray-400">
              Track your order status here.
            </p>
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