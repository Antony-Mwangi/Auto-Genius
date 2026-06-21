// // "use client";

// // import { useOrders } from "@/app/context/OrdersContext";

// // export default function AdminOrdersPage() {

// //   const {
// //     orders,
// //     updateStatus,
// //     deleteOrder,
// //   } = useOrders();

// //   return (

// //     <main className="min-h-screen bg-[#0b0f14] text-white p-10">

// //       <h1 className="text-4xl font-bold text-orange-500">

// //         Orders Dashboard

// //       </h1>

// //       <div className="mt-8 space-y-5">

// //         {orders.length === 0 && (

// //           <p>No orders yet.</p>

// //         )}

// //         {orders.map((order) => (

// //           <div
// //             key={order.id}
// //             className="rounded-xl border border-white/10 bg-[#121821] p-6"
// //           >

// //             <div className="flex justify-between">

// //               <div>

// //                 <h2 className="font-bold">

// //                   {order.customerName}

// //                 </h2>

// //                 <p>{order.phone}</p>

// //                 <p>{order.location}</p>

// //               </div>

// //               <div className="text-right">

// //                 <p>

// //                   KSh {order.totalAmount}

// //                 </p>

// //                 <p>

// //                   {order.status}

// //                 </p>

// //               </div>

// //             </div>

// //             <div className="mt-5 flex gap-3">

// //               <button
// //                 onClick={() =>
// //                   updateStatus(
// //                     order.id,
// //                     "Processing"
// //                   )
// //                 }
// //                 className="rounded bg-blue-500 px-4 py-2"
// //               >
// //                 Processing
// //               </button>

// //               <button
// //                 onClick={() =>
// //                   updateStatus(
// //                     order.id,
// //                     "Delivered"
// //                   )
// //                 }
// //                 className="rounded bg-green-500 px-4 py-2"
// //               >
// //                 Delivered
// //               </button>

// //               <button
// //                 onClick={() =>
// //                   deleteOrder(order.id)
// //                 }
// //                 className="rounded bg-red-500 px-4 py-2"
// //               >
// //                 Delete
// //               </button>

// //             </div>

// //           </div>

// //         ))}

// //       </div>

// //     </main>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";

// export default function AdminOrdersPage() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const loadOrders = () => {
//       const data = JSON.parse(localStorage.getItem("orders") || "[]");
//       setOrders(data.reverse());
//     };

//     loadOrders();

//     // 🔥 LIVE UPDATES
//     const interval = setInterval(loadOrders, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0b0f14] text-white p-6">

//       <h1 className="text-3xl font-bold text-orange-500 mb-6">
//         Admin Orders Dashboard
//       </h1>

//       {orders.length === 0 ? (
//         <p className="text-gray-400">No orders yet</p>
//       ) : (
//         <div className="space-y-4">

//           {orders.map((order: any) => (
//             <div
//               key={order.id}
//               className="p-5 bg-white/5 border border-white/10 rounded"
//             >

//               <div className="flex justify-between">
//                 <h2 className="font-bold">{order.id}</h2>
//                 <span className="text-orange-400">
//                   {order.status}
//                 </span>
//               </div>

//               <p className="text-sm text-gray-300 mt-2">
//                 Name: {order.userName}
//               </p>

//               <p className="text-sm text-gray-300">
//                 Email: {order.userEmail}
//               </p>

//               <p className="text-sm text-gray-300">
//                 Phone: {order.phone}
//               </p>

//               <p className="text-sm text-gray-300">
//                 Location: {order.location}
//               </p>

//               <div className="mt-3">
//                 {order.items.map((item: any) => (
//                   <p key={item.id} className="text-sm">
//                     • {item.name} x {item.quantity}
//                   </p>
//                 ))}
//               </div>

//               <p className="mt-3 font-bold text-orange-400">
//                 Total: KSh {order.totalAmount}
//               </p>

//             </div>
//           ))}

//         </div>
//       )}

//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Order, OrderStatus } from "@/app/types/order";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const load = () => {
      const data = JSON.parse(localStorage.getItem("orders") || "[]");
      setOrders(data.reverse());
    };

    load();
    const interval = setInterval(load, 2000);

    return () => clearInterval(interval);
  }, []);

  const updateStatus = (id: string, status: OrderStatus) => {
    const data: Order[] = JSON.parse(localStorage.getItem("orders") || "[]");

    const updated = data.map((order) =>
      order.id === id ? { ...order, status } : order
    );

    localStorage.setItem("orders", JSON.stringify(updated));
    setOrders(updated.reverse());
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white p-6">

      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Admin Orders
      </h1>

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order.id}
            className="p-5 bg-white/5 border border-white/10 rounded"
          >

            <div className="flex justify-between">
              <h2 className="font-bold">{order.id}</h2>
              <span className="text-orange-400">
                {order.status}
              </span>
            </div>

            <p>{order.userName}</p>
            <p className="text-gray-400">{order.userEmail}</p>
            <p className="text-gray-400">{order.phone}</p>
            <p className="text-gray-400">{order.location}</p>

            {/* ITEMS */}
            <div className="mt-3 text-sm">
              {order.items.map((item) => (
                <p key={item.id}>
                  • {item.name} x {item.quantity}
                </p>
              ))}
            </div>

            {/* STATUS CONTROLS */}
            <div className="mt-4 flex gap-2 flex-wrap">

              <button
                onClick={() => updateStatus(order.id, "Pending")}
                className="px-3 py-1 bg-gray-600 rounded"
              >
                Pending
              </button>

              <button
                onClick={() =>
                  updateStatus(order.id, "Processing")
                }
                className="px-3 py-1 bg-yellow-600 rounded"
              >
                Processing
              </button>

              <button
                onClick={() => updateStatus(order.id, "Shipped")}
                className="px-3 py-1 bg-blue-600 rounded"
              >
                Shipped
              </button>

              <button
                onClick={() =>
                  updateStatus(order.id, "Delivered")
                }
                className="px-3 py-1 bg-green-600 rounded"
              >
                Delivered
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}