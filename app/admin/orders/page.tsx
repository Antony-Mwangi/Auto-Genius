"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    setOrders(
      JSON.parse(localStorage.getItem("orders") || "[]")
    );
  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Orders
      </h1>

      <div className="space-y-5">

        {orders.length === 0 && (
          <p>No Orders Found</p>
        )}

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-[#121821] border border-white/10 rounded-xl p-6"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-bold">
                  {order.customer.name}
                </h2>

                <p>{order.customer.phone}</p>

                <p>{order.customer.address}</p>

              </div>

              <div>

                <p className="text-orange-500">
                  {order.paymentMethod}
                </p>

                <p>
                  KSh {order.total.toLocaleString()}
                </p>

              </div>

            </div>

            <div className="mt-6">

              {order.items.map((item: any) => (

                <div
                  key={item.id}
                  className="flex justify-between py-2 border-b border-white/10"
                >

                  <span>
                    {item.name} x {item.quantity}
                  </span>

                  <span>
                    KSh {item.price}
                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}