// "use client";

// import { useEffect, useState } from "react";

// export default function AdminPage() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedOrders = JSON.parse(
//       localStorage.getItem("orders") || "[]"
//     );

//     setOrders(storedOrders);
//     setLoading(false);
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#0b0f14] text-white p-6">

//       <h1 className="text-3xl font-bold text-orange-500">
//         Admin Dashboard
//       </h1>

//       <p className="text-gray-400 mt-2">
//         Manage all customer orders
//       </p>

//       <div className="mt-8 space-y-4">

//         {loading ? (
//           <p className="text-gray-400">Loading orders...</p>
//         ) : orders.length === 0 ? (
//           <p className="text-gray-400">No orders yet</p>
//         ) : (
//           orders.map((order) => (
//             <div
//               key={order.id}
//               className="p-4 rounded-xl bg-white/5 border border-white/10"
//             >
//               <div className="flex justify-between">
//                 <h2 className="font-bold text-orange-400">
//                   {order.id}
//                 </h2>

//                 <span className="text-sm text-green-400">
//                   {order.status}
//                 </span>
//               </div>

//               <p className="text-sm text-gray-300 mt-2">
//                 Customer: {order.customerName}
//               </p>

//               <p className="text-sm text-gray-300">
//                 Phone: {order.phone}
//               </p>

//               <p className="text-sm text-gray-300">
//                 Location: {order.location}
//               </p>

//               <p className="text-sm text-gray-300">
//                 Total: KSh {order.totalAmount}
//               </p>
//             </div>
//           ))
//         )}

//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(data);
  }, []);

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {orders.map((order) => (
        <div key={order.id} className="border p-4 mt-3">
          <p>Order: {order.id}</p>
          <p>Name: {order.userName}</p>
          <p>Email: {order.userEmail}</p>
          <p>Phone: {order.phone}</p>
          <p>Location: {order.location}</p>

          <div>
            {order.items.map((item: any, i: number) => (
              <p key={i}>
                • {item.name} x {item.quantity}
              </p>
            ))}
          </div>

          <p className="text-orange-400">
            Total: KSh {order.totalAmount}
          </p>
        </div>
      ))}
    </div>
  );
}