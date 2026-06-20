"use client";

import { useMemo, useState } from "react";

import { products } from "@/app/data/products";

import SearchBar from "@/app/components/shop/SearchBar";
import ProductGrid from "@/app/components/shop/ProductGrid";

export default function ShopPage() {
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

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <h1 className="text-5xl font-bold">
            Genuine
            <span className="text-orange-500"> Auto Spares</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-400">
            Browse high-quality spare parts for Toyota,
            Nissan, Subaru, Mazda, Honda and more.
          </p>

        </div>
      </section>

      {/* Products */}
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