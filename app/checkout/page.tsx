"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, subtotal, clearCart, totalItems } = useCart();
  const { user } = useAuth();

  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [loading, setLoading] = useState(false);

  // ✅ CLEAN ITEMS (available everywhere)
  const cleanItems = useMemo(() => {
    return cart.map((item) => ({
      id: item.id,
      name: item.name || "Unknown Item",
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1,
    }));
  }, [cart]);

  // ✅ TOTAL (always correct + reactive)
  const calculatedTotal = useMemo(() => {
    return cleanItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cleanItems]);

  const handleCheckout = () => {
    if (!user) {
      alert("Login first");
      router.push("/login");
      return;
    }

    if (!phone || !location) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    const existingOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const newOrder = {
      id: "ORD-" + Date.now(),

      userName: user?.name || "Unknown User",
      userEmail: user?.email || "Unknown Email",

      phone,
      location,

      items: cleanItems,

      totalItems,
      totalAmount: calculatedTotal,

      paymentMethod,
      status: "Pending",

      createdAt: new Date().toISOString(),
    };

    existingOrders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(existingOrders));

    clearCart();

    setLoading(false);

    alert("Order placed successfully!");

    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white p-8">

      <h1 className="text-3xl font-bold text-orange-500">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        {/* FORM */}
        <div className="space-y-4">

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />

          <textarea
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          >
            <option value="mpesa">M-Pesa</option>
            <option value="cash">Cash on Delivery</option>
          </select>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-orange-500 py-3 font-bold rounded"
          >
            {loading ? "Processing..." : "Place Order"}
          </button>

        </div>

        {/* SUMMARY */}
        <div className="bg-white/5 p-5 rounded border border-white/10">

          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          {cleanItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between py-2"
            >
              <span>
                {item.name} x {item.quantity}
              </span>

              <span>
                KSh {(item.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}

          <div className="mt-5 font-bold text-orange-400">
            Total: KSh {calculatedTotal.toLocaleString()}
          </div>

        </div>

      </div>
    </div>
  );
}