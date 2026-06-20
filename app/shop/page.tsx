"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

import SearchBar from "@/app/components/shop/SearchBar";
import ProductGrid from "@/app/components/shop/ProductGrid";

export default function ShopPage() {
  const router = useRouter();
  const { totalItems } = useCart();

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const keyword = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.vehicle.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-bold">
              Genuine{" "}
              <span className="text-orange-500">Auto Spares</span>
            </h1>

            <p className="mt-5 max-w-2xl text-gray-400">
              Browse high-quality spare parts for Toyota,
              Nissan, Subaru, Mazda, Honda and more.
            </p>
          </div>

          {/* CART ICON */}
          <button
            onClick={() => router.push("/cart")}
            className="relative text-3xl"
          >
            🛒

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </button>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <ProductGrid
          products={filteredProducts}
        />

      </section>

    </main>
  );
}