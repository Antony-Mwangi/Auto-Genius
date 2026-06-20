"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartSummary() {

  const {
    subtotal,
    clearCart,
  } = useCart();

  const shipping = subtotal > 10000 ? 0 : 500;

  const total = subtotal + shipping;

  return (
    <div
      className="
      bg-[#141c27]
      border
      border-white/10
      rounded-2xl
      p-6
      sticky
      top-24
    "
    >
      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-3 mt-8">

        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>
            KSh {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>

          <span>
            KSh {shipping.toLocaleString()}
          </span>
        </div>

        <hr className="border-white/10"/>

        <div className="flex justify-between text-2xl font-bold text-orange-400">

          <span>Total</span>

          <span>
            KSh {total.toLocaleString()}
          </span>

        </div>

      </div>

      <Link
        href="/checkout"
        className="
        block
        mt-8
        text-center
        bg-orange-500
        py-3
        rounded-xl
        font-semibold
        hover:bg-orange-600
      "
      >
        Proceed To Checkout
      </Link>

      <button
        onClick={clearCart}
        className="
        mt-4
        w-full
        py-3
        rounded-xl
        border
        border-red-500
        text-red-400
        hover:bg-red-500/10
      "
      >
        Clear Cart
      </button>

    </div>
  );
}