import React, { useState } from "react";
import { Link } from "react-router";

const AboutCategories = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const categories = [
    { name: "All Categories", path: "/products" },
    { name: "Electronics", path: "/products/electronics" },
    { name: "Office", path: "/products/home-office" },
    { name: "Fashion", path: "/products/fashion" },
    { name: "Sports", path: "/products/sports" },
  ];

  return (
    <div className="w-full bg-white rounded-lg">
      <h2 className="text-gray-600 font-semibold mb-3">Category</h2>

      {/* containeer */}
      <div className="
        flex gap-3 
        overflow-x-auto 
        whitespace-nowrap 
        sm:overflow-visible sm:flex-wrap
        scrollbar-hide
        py-1
      ">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            onClick={() => setActiveCategory(cat.name)}
            className={`
              px-4 py-2 rounded-lg font-medium
              transition-all duration-200
              text-sm sm:text-base
              ${
                activeCategory === cat.name
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutCategories;
