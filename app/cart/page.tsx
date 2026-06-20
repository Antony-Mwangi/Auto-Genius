"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white px-6 py-10">

      <h1 className="text-3xl font-bold mb-8 text-orange-500">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-white/10 p-4 rounded-xl"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-400 text-sm">
                  KSh {item.price.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-3">

                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6 border-t border-white/10">
            <h2 className="text-xl font-bold">
              Total: KSh {subtotal.toLocaleString()}
            </h2>

            <button
              onClick={() => router.push("/checkout")}
              className="bg-orange-500 px-6 py-3 rounded-lg font-semibold"
            >
              Checkout
            </button>
          </div>

        </div>
      )}

    </main>
  );
}