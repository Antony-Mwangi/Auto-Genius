"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const { totalItems, subtotal } = useCart();

  const recentOrders = [
    {
      id: "ORD-1001",
      status: "Delivered",
      total: "KSh 0",
    },
    {
      id: "ORD-1002",
      status: "Processing",
      total: "KSh 0",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">

      {/* Header */}

      <section className="border-b border-white/10 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-6 py-10">

          <h1 className="text-4xl font-bold">
            Welcome,
            <span className="text-orange-500">
              {" "}
              {user?.name || "Customer"}
            </span>
          </h1>

          <p className="mt-3 text-gray-400">
            Manage your orders, profile and shopping activity.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Recent Orders */}

          <div className="rounded-2xl border border-white/10 bg-[#121821] p-6">

            <h2 className="mb-5 text-xl font-bold text-orange-400">
              📦 Recent Orders
            </h2>

            <div className="space-y-4">

              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-xl bg-white/5 p-4"
                >
                  <p className="font-semibold">{order.id}</p>

                  <p className="text-sm text-gray-400">
                    {order.status}
                  </p>

                  <p className="mt-2 text-orange-400">
                    {order.total}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Saved Parts */}

          <div className="rounded-2xl border border-white/10 bg-[#121821] p-6">

            <h2 className="mb-5 text-xl font-bold text-pink-400">
              ❤️ Saved Parts
            </h2>

            <p className="text-gray-400">
              Feature coming soon.
            </p>

          </div>

          {/* Cart Summary */}

          <div className="rounded-2xl border border-white/10 bg-[#121821] p-6">

            <h2 className="mb-5 text-xl font-bold text-teal-400">
              🛒 Cart Summary
            </h2>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Total Items</span>

                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>KSh {subtotal.toLocaleString()}</span>
              </div>

            </div>

            <Link
              href="/cart"
              className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-400"
            >
              View Cart
            </Link>

          </div>

          {/* Delivery */}

          <div className="rounded-2xl border border-white/10 bg-[#121821] p-6">

            <h2 className="mb-5 text-xl font-bold text-cyan-400">
              🚚 Delivery Status
            </h2>

            <div className="space-y-3">

              <div className="rounded-lg bg-white/5 p-4">
                <p className="font-semibold">
                  No active deliveries
                </p>

                <p className="text-sm text-gray-400">
                  Your upcoming deliveries will appear here.
                </p>
              </div>

            </div>

          </div>

          {/* Profile */}

          <div className="rounded-2xl border border-white/10 bg-[#121821] p-6">

            <h2 className="mb-5 text-xl font-bold text-yellow-400">
              👤 Profile Information
            </h2>

            <div className="space-y-3">

              <div>

                <p className="text-gray-400">
                  Name
                </p>

                <p>{user?.name}</p>

              </div>

              <div>

                <p className="text-gray-400">
                  Email
                </p>

                <p>{user?.email}</p>

              </div>

            </div>

          </div>

          {/* Logout */}

          <div className="rounded-2xl border border-white/10 bg-[#121821] p-6">

            <h2 className="mb-5 text-xl font-bold text-red-400">
              🚪 Logout
            </h2>

            <p className="mb-5 text-gray-400">
              Securely sign out from your account.
            </p>

            <button
              onClick={() => {
                logout();
                window.location.href = "/";
              }}
              className="w-full rounded-lg bg-red-500 py-3 font-semibold transition hover:bg-red-600"
            >
              Logout
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}