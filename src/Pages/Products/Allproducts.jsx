import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { storeProducts } from "../../store/productSlice";
import { increment } from "../../store/counterSlice";

function Allproducts() {
  const [count, setCount] = useState();
  // const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch()
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    setCount(count + 1);
  };

  const Products = [
    {
      id: 1,
      name: "Winter Jacket",
      price: "25000",
      image: "./public/images1/1.avif",
    },
    {
      id: 2,
      name: "KeyBoard",
      price: "25000",
      image: "./public/images1/2.avif",
    },
    {
      id: 3,
      name: "T-Shirt",
      price: "25000",
      image: "./public/images1/3.avif",
    },
    {
      id: 4,
      name: "Leptop HP",
      price: "25000",
      image: "./public/images1/4.avif",
    },
    {
      id: 5,
      name: "T-Shirt",
      price: "25000",
      image: "./public/images1/5.avif",
    },
    {
      id: 6,
      name: "Winter Jacket",
      price: "25000",
      image: "./public/images1/6.avif",
    },
    {
      id: 7,
      name: "T-Shirt",
      price: "25000",
      image: "./public/images1/7.avif",
    },
    {
      id: 8,
      name: "Winter Jacket",
      price: "25000",
      image: "./public/images1/8.avif",
    },
    {
      id: 9,
      name: "T-Shirt",
      price: "25000",
      image: "./public/images1/10.avif",
    },
    {
      id: 10,
      name: "Winter Jacket",
      price: "25000",
      image: "./public/images1/9.avif",
    },
    {
      id: 11,
      name: "Winter Jacket",
      image: "./public/images1/1.avif",
      price: "25000",
    },
    {
      id: 12,
      name: "KeyBoard",
      price: "25000",
      image: "./public/images1/2.avif",
    },
  ];

  //   const addToCart = () => {
  //       setCount(count + 1)
  //   }

  return (
    <div className="container mx-auto px-3 sm:px-1 mb-16">
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-4 sm:mt-16 mt-12">
        {Products.map((product) => (
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
              <div key={product.id}>
                <h2 className="uppercase text-[12px] text-green-800 font-bold mb-2">
                  {product.name}
                </h2>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="sm:text-xl text-xl font-semibold text-green-700">
                    $ {product.price}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      addToCart(product)
                      dispatch(increment())

                    }}
                    className="border border-gray-400 bg-green-200 p-1.5 text-black font-semibold cursor-pointer hover:bg-green-300 rounded-lg"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Allproducts;
