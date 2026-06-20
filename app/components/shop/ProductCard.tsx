"use client";

import Image from "next/image";
import { Product } from "@/app/types/product";
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div
      className="
      bg-[#121821]
      border border-white/10
      rounded-2xl
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-orange-500/60
      hover:shadow-[0_0_25px_rgba(249,115,22,.25)]
    "
    >
      {/* Product Image */}
      <div className="relative h-56 bg-[#1b2532]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-5"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span
          className="
          inline-block
          px-3
          py-1
          rounded-full
          text-xs
          bg-cyan-500/10
          text-cyan-300
        "
        >
          {product.category}
        </span>

        {/* Name */}
        <h3 className="mt-3 text-xl font-bold">
          {product.name}
        </h3>

        {/* Brand */}
        <p className="mt-2 text-gray-400">
          Brand:
          <span className="text-teal-400 ml-1">
            {product.brand}
          </span>
        </p>

        {/* Vehicle */}
        <p className="text-gray-400">
          Fits:
          <span className="text-white ml-1">
            {product.vehicle}
          </span>
        </p>

        {/* Stock */}
        <div className="mt-3">
          {product.stock > 0 ? (
            <span className="text-green-400 text-sm">
              In Stock ({product.stock})
            </span>
          ) : (
            <span className="text-red-400 text-sm">
              Out of Stock
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-gray-400 text-sm">
              Price
            </p>

            <h2 className="text-2xl font-bold text-orange-400">
              KSh {product.price.toLocaleString()}
            </h2>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="
            px-5
            py-3
            rounded-xl
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            hover:from-orange-400
            hover:to-orange-500
            font-semibold
            transition
            shadow-lg
            shadow-orange-500/30
            disabled:opacity-50
            disabled:cursor-not-allowed
            "
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}