"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { CartItem as Item } from "@/app/context/CartContext";
import { useCart } from "@/app/context/CartContext";

interface Props {
  item: Item;
}

export default function CartItem({ item }: Props) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div
      className="
      bg-[#141c27]
      rounded-2xl
      border
      border-white/10
      p-5
      flex
      gap-6
      items-center
    "
    >
      <div className="relative w-28 h-28 bg-[#1b2532] rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex-1">

        <h2 className="text-xl font-bold">
          {item.name}
        </h2>

        <p className="text-gray-400">
          {item.brand}
        </p>

        <p className="text-orange-400 font-bold mt-2">
          KSh {item.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-3 mt-5">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="p-2 rounded-lg bg-gray-700"
          >
            <Minus size={18}/>
          </button>

          <span className="text-xl">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="p-2 rounded-lg bg-gray-700"
          >
            <Plus size={18}/>
          </button>

        </div>

      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-400 hover:text-red-600"
      >
        <Trash2 />
      </button>

    </div>
  );
}