"use client";

import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    setLoading(true);

    const orderData = {
      customer: { name, phone, address },
      items: cart,
      total: subtotal,
      paymentMethod,
    };

    console.log("ORDER:", orderData);

    // 🔔 1. Simulate sending SMS/WhatsApp to owner
    await notifyOwner(orderData);

    // 🧹 2. Clear cart
    clearCart();

    // 🔁 3. Redirect
    router.push("/shop");
  };

  const notifyOwner = async (order: any) => {
    console.log("📲 Sending WhatsApp/SMS to owner...");
    console.log("Order notification:", order);

    // later: Twilio / WhatsApp API integration here
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-orange-500">
        Checkout
      </h1>

      <div className="mt-10 grid md:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <div className="space-y-4">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg"
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg"
          />

          {/* PAYMENT OPTIONS */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">
              Payment Method
            </h3>

            <label className="block mb-2">
              <input
                type="radio"
                value="mpesa"
                checked={paymentMethod === "mpesa"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              M-Pesa on Delivery
            </label>

            <label>
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              Cash on Delivery
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="w-full mt-6 py-3 bg-orange-500 rounded-lg font-bold"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-white/10 py-2"
              >
                <span>{item.name} x {item.quantity}</span>
                <span>KSh {item.price * item.quantity}</span>
              </div>
            ))
          )}

          <div className="mt-6 text-xl font-bold text-orange-400">
            Total: KSh {subtotal.toLocaleString()}
          </div>

        </div>

      </div>
    </div>
  );
}