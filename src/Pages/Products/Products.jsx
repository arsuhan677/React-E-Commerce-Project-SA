import React, { useState } from "react";
import { Outlet } from "react-router";
import AboutCategories from "./AboutCategories";
import Allproducts from "./Allproducts";

const Products = () => {
  const [query, setQuery] = useState("");

  const products = [
    { id: 1, name: "Winter Jacket", price: "25", image: "./public/images1/1.avif" },
    { id: 2, name: "KeyBoard", price: "30", image: "./public/images1/2.avif" },
    { id: 3, name: "T-Shirt", price: "35", image: "./public/images1/3.avif" },
    { id: 4, name: "Leptop HP", price: "40", image: "./public/images1/4.avif" },
    { id: 5, name: "T-Shirt", price: "45", image: "./public/images1/5.avif" },
    { id: 6, name: "Winter Jacket", price: "50", image: "./public/images1/6.avif" },
    { id: 7, name: "T-Shirt", price: "60", image: "./public/images1/7.avif" },
    { id: 8, name: "Winter Jacket", price: "20", image: "./public/images1/8.avif" },
    { id: 9, name: "T-Shirt", price: "50", image: "./public/images1/10.avif" },
    { id: 10, name: "Winter Jacket", price: "20", image: "./public/images1/9.avif" },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-3">
      <div className="mt-14">
        <div className="items-center justify-center mb-6 space-y-2">
          <h2 className="text-3xl font-bold">All Products</h2>
          <p className="font-semibold text-gray-600 text-lg">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="mb-6 font-medium flex-col space-y-2">
          <span>Search</span>

          <div className="mb-8">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border w-full border-gray-300 rounded-lg py-2.5 px-6"
              type="text"
              placeholder="filter products..."
            />
          </div>

          <AboutCategories />
        </div>
      </div>

      <Allproducts products={filteredProducts} />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Products;
