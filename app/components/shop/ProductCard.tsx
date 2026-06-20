"use client";

import Image from "next/image";
import { Product } from "@/app/types/product";
import { useCart } from "@/app/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#121821] border border-white/10 rounded-2xl overflow-hidden">

      <div className="relative h-56 bg-[#1b2532]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-5"
        />
      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold">{product.name}</h3>

        <p className="text-gray-400 mt-1">
          {product.brand} • {product.vehicle}
        </p>

        <p className="text-orange-400 font-bold mt-3">
          KSh {product.price.toLocaleString()}
        </p>

        <button
          onClick={() => {
            console.log("ADDING:", product.id);
            addToCart(product);
          }}
          disabled={product.stock === 0}
          className="mt-4 w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}