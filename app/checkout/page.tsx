"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaMoneyBillWave,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, subtotal, totalItems, clearCart } = useCart();

  const { user } = useAuth();

  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("mpesa");

  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    if (!user) {
      alert("Please login first.");
      router.push("/login");
      return;
    }

    if (!phone || !location) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    const existingOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const newOrder = {
      id: "ORD-" + Date.now(),

      customerName: user.name,

      customerEmail: user.email,

      phone,

      location,

      paymentMethod,

      items: cart,

      totalItems,

      totalAmount: subtotal,

      status: "Pending",

      createdAt: new Date().toLocaleString(),
    };

    existingOrders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(existingOrders)
    );

    clearCart();

    alert("Order placed successfully.");

    router.push("/account");
  };

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="text-4xl font-bold text-orange-500">

          Checkout

        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div className="rounded-2xl bg-[#121821] p-8 border border-white/10">

            <h2 className="mb-8 text-2xl font-semibold">

              Delivery Details

            </h2>

            <div className="space-y-5">

              <div>

                <label className="mb-2 flex items-center gap-2">

                  <FaUser />

                  Customer

                </label>

                <input
                  value={user?.name || ""}
                  disabled
                  className="w-full rounded-lg bg-white/5 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2">

                  <FaPhone />

                  Phone Number

                </label>

                <input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="0712345678"
                  className="w-full rounded-lg bg-white/5 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2">

                  <FaMapMarkerAlt />

                  Delivery Location

                </label>

                <textarea
                  rows={4}
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  placeholder="Town, Estate, Building, Landmark..."
                  className="w-full rounded-lg bg-white/5 px-4 py-3"
                />

              </div>

              <div>

                <h3 className="mb-4 text-lg font-semibold">

                  Payment Method

                </h3>

                <label className="mb-3 flex cursor-pointer items-center gap-3 rounded-lg bg-white/5 p-4">

                  <input
                    type="radio"
                    checked={paymentMethod === "mpesa"}
                    onChange={() =>
                      setPaymentMethod("mpesa")
                    }
                  />

                  <FaMobileAlt className="text-green-400" />

                  M-Pesa on Delivery

                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-white/5 p-4">

                  <input
                    type="radio"
                    checked={paymentMethod === "cash"}
                    onChange={() =>
                      setPaymentMethod("cash")
                    }
                  />

                  <FaMoneyBillWave className="text-yellow-400" />

                  Cash on Delivery

                </label>

              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-orange-500 py-4 text-lg font-bold transition hover:bg-orange-400"
              >

                <FaCheckCircle />

                {loading
                  ? "Processing..."
                  : "Place Order"}

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-2xl bg-[#121821] p-8 border border-white/10">

            <h2 className="mb-6 text-2xl font-semibold">

              Order Summary

            </h2>

            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex justify-between border-b border-white/10 pb-4"
                >

                  <div>

                    <p className="font-semibold">

                      {item.name}

                    </p>

                    <p className="text-sm text-gray-400">

                      Qty: {item.quantity}

                    </p>

                  </div>

                  <p>

                    KSh {(item.price * item.quantity).toLocaleString()}

                  </p>

                </div>

              ))}

            </div>

            <div className="mt-8 space-y-3">

              <div className="flex justify-between">

                <span>Total Items</span>

                <span>{totalItems}</span>

              </div>

              <div className="flex justify-between text-2xl font-bold text-orange-500">

                <span>Total</span>

                <span>

                  KSh {subtotal.toLocaleString()}

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}