"use client";

import Link from "next/link";

import { useCart } from "@/app/context/CartContext";

import CartItem from "@/app/components/cart/CartItem";
import CartSummary from "@/app/components/cart/CartSummary";

export default function CartPage() {

  const { cart } = useCart();

  if (cart.length === 0) {

    return (

      <main className="min-h-screen bg-[#0b0f14] flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-white">
            Your Cart is Empty
          </h1>

          <p className="text-gray-400 mt-5">
            Start shopping for premium auto parts.
          </p>

          <Link
            href="/shop"
            className="
            inline-block
            mt-8
            px-8
            py-3
            rounded-xl
            bg-orange-500
            text-white
          "
          >
            Continue Shopping
          </Link>

        </div>

      </main>

    );
  }

  return (

    <main className="min-h-screen bg-[#0b0f14] text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (

              <CartItem
                key={item.id}
                item={item}
              />

            ))}

          </div>

          <CartSummary/>

        </div>

      </div>

    </main>

  );
}