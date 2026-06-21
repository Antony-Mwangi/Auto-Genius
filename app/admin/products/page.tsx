"use client";

import { products } from "@/app/data/products";

export default function ProductsPage() {

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-[#121821] border border-white/10 rounded-xl p-5"
          >

            <h2 className="font-bold text-lg">
              {product.name}
            </h2>

            <p className="text-gray-400">
              {product.brand}
            </p>

            <p className="mt-2">
              Stock: {product.stock}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}