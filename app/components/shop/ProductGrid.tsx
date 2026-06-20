"use client";

import { Product } from "@/app/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-300">
          No products found
        </h2>

        <p className="text-gray-500 mt-3">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}