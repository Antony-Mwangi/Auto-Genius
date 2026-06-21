"use client";

import { useEffect, useState } from "react";
import NotificationsPanel from "./components/NotificationsPanel";

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const loadOrders = () => {
      const data = JSON.parse(localStorage.getItem("orders") || "[]");
      setOrders([...data].reverse());
    };

    loadOrders();

    const interval = setInterval(loadOrders, 2000);

    window.addEventListener("storage", loadOrders);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", loadOrders);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">

      {/* HEADER */}
      <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0b0f14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-orange-500">
            Admin Dashboard
          </h1>

        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

        {/* NOTIFICATIONS */}
        <div className="mb-6">
          <NotificationsPanel />
        </div>

        {/* ORDERS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {orders.length === 0 ? (
            <p className="text-gray-400">No orders yet</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 hover:bg-white/10 transition"
              >

                {/* ORDER HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="font-bold text-orange-400 text-sm sm:text-base break-all">
                    {order.id}
                  </p>

                  <span className="text-xs sm:text-sm text-gray-400">
                    {order.createdAt}
                  </span>
                </div>

                {/* CUSTOMER INFO */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">

                  <p>
                    <span className="text-gray-400">Name:</span>{" "}
                    {order.userName}
                  </p>

                  <p>
                    <span className="text-gray-400">Email:</span>{" "}
                    {order.userEmail}
                  </p>

                  <p>
                    <span className="text-gray-400">Phone:</span>{" "}
                    {order.phone}
                  </p>

                  <p>
                    <span className="text-gray-400">Location:</span>{" "}
                    {order.location}
                  </p>

                </div>

                {/* ITEMS */}
                <div className="mt-4 border-t border-white/10 pt-3 space-y-1">
                  {order.items?.map((item: any, i: number) => (
                    <p key={i} className="text-sm text-gray-300">
                      • {item.name} × {item.quantity}
                    </p>
                  ))}
                </div>

                {/* TOTAL */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-orange-400 font-bold">
                    Total
                  </p>

                  <p className="text-orange-400 font-bold">
                    KSh {order.totalAmount?.toLocaleString()}
                  </p>
                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}