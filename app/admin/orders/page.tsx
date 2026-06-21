"use client";

import { useOrders } from "@/app/context/OrdersContext";

export default function AdminOrdersPage() {

  const {
    orders,
    updateStatus,
    deleteOrder,
  } = useOrders();

  return (

    <main className="min-h-screen bg-[#0b0f14] text-white p-10">

      <h1 className="text-4xl font-bold text-orange-500">

        Orders Dashboard

      </h1>

      <div className="mt-8 space-y-5">

        {orders.length === 0 && (

          <p>No orders yet.</p>

        )}

        {orders.map((order) => (

          <div
            key={order.id}
            className="rounded-xl border border-white/10 bg-[#121821] p-6"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="font-bold">

                  {order.customerName}

                </h2>

                <p>{order.phone}</p>

                <p>{order.location}</p>

              </div>

              <div className="text-right">

                <p>

                  KSh {order.totalAmount}

                </p>

                <p>

                  {order.status}

                </p>

              </div>

            </div>

            <div className="mt-5 flex gap-3">

              <button
                onClick={() =>
                  updateStatus(
                    order.id,
                    "Processing"
                  )
                }
                className="rounded bg-blue-500 px-4 py-2"
              >
                Processing
              </button>

              <button
                onClick={() =>
                  updateStatus(
                    order.id,
                    "Delivered"
                  )
                }
                className="rounded bg-green-500 px-4 py-2"
              >
                Delivered
              </button>

              <button
                onClick={() =>
                  deleteOrder(order.id)
                }
                className="rounded bg-red-500 px-4 py-2"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}