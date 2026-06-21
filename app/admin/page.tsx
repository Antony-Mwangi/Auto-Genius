"use client";

import { useEffect, useState } from "react";
import NotificationsPanel from "./components/NotificationsPanel";

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const loadOrders = () => {
      const data = JSON.parse(localStorage.getItem("orders") || "[]");
      setOrders(data.reverse());
    };

    loadOrders();

    // 🔥 LIVE updates (no refresh needed)
    const interval = setInterval(loadOrders, 2000);

    window.addEventListener("storage", loadOrders);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", loadOrders);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Admin Dashboard
      </h1>

      {/* NOTIFICATIONS */}
      <div className="mb-8">
        <NotificationsPanel />
      </div>

      {/* ORDERS */}
      <div className="space-y-5">
        {orders.length === 0 ? (
          <p className="text-gray-400">No orders yet</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="border border-white/10 bg-white/5 p-5 rounded-xl"
            >
              {/* ORDER HEADER */}
              <div className="flex justify-between">
                <p className="font-bold text-orange-400">
                  {order.id}
                </p>

                <span className="text-sm text-gray-400">
                  {order.createdAt}
                </span>
              </div>

              {/* CUSTOMER INFO */}
              <div className="mt-3 text-sm text-gray-300 space-y-1">
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
              <div className="mt-4 border-t border-white/10 pt-3">
                {order.items?.map((item: any, i: number) => (
                  <p key={i} className="text-sm text-gray-300">
                    • {item.name} x {item.quantity}
                  </p>
                ))}
              </div>

              {/* TOTAL */}
              <p className="mt-4 text-orange-400 font-bold">
                Total: KSh {order.totalAmount?.toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}