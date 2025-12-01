import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../store/counterSlice";

function Allproducts({ products }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    setCount(count + 1);
  };

  return (
    <div className="container mx-auto sm:px-1 mb-16">
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-5 sm:mt-16 mt-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 items-center rounded-lg border-gray-400 border-2 border-b-4 overflow-hidden xs:h-100"
          >
            <img
              className="w-full h-40 sm:h-50 rounded-lg"
              src={product.image}
              alt={product.name}
            />

            <div className="p-4">
              <h2 className="uppercase text-[12px] text-green-800 font-bold mb-2">
                {product.name}
              </h2>

              <div className="flex items-center justify-between">
                <p className="sm:text-xl text-xl font-semibold text-green-700">
                  $ {product.price}
                </p>

                <button
                  onClick={() => {
                    addToCart(product);
                    dispatch(increment());
                  }}
                  className="border border-gray-400 bg-green-200 p-1.5 text-black font-semibold cursor-pointer hover:bg-green-300 rounded-lg"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}

export default Allproducts;
