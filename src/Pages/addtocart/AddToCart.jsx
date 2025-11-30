import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(items.map((item) => ({ ...item, quantity: 1 })));
  }, []);

  const updateQuantity = (index, type) => {
    const updated = [...cartProducts];
    if (type === "increment") {
      updated[index].quantity += 1;
    } else if (type === "decrement" && updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }
    setCartProducts(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Delete function
  const deleteProduct = (index) => {
    const updated = [...cartProducts];
    updated.splice(index, 1);
    setCartProducts(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    console.log(deleteProduct);
  };

  // import { useNavigate } from "react-router";

  const navigate = useNavigate();

  const handleOrder = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("No products to order!");
      return;
    }

    console.log("cart products", cartProducts);
    console.log("exist orders", localStorage.getItem("orderList"));
    const exitOrders = JSON.parse(localStorage.getItem("orderList"));
    const newAllOrders = [...exitOrders, ...cartProducts]

    localStorage.setItem("orderList", JSON.stringify(newAllOrders));

    localStorage.removeItem("cart");

    navigate("/");
  };

  return (
    <div className="bg-gray-50">
      <div className="p-6 container mx-auto flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 space-y-3 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-6 p-6">Your Cart</h2>
          {cartProducts.length === 0 ? (
            <p className="mx-6">No products added yet!</p>
          ) : (
            cartProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center rounded p-4 gap-12 border-b-2"
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-400 w-80">{product.description}</p>
                </div>

                {/* Price */}
                <div className="items-center">
                  <p className="text-black font-semibold mb-2">
                    ৳ {product.price * product.quantity}
                  </p>
                  <div>
                    <button
                      onClick={() => deleteProduct(index)}
                      className="bg-red-400 py-1 px-2 rounded-sm cursor-pointer hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* <div> */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(index, "decrement")}
                    className="bg-gray-400 text-black px-3 py-1 cursor-pointer rounded"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border border-gray-800 hover:border-gray-500">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(index, "increment")}
                    className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-black px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              // </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 p-6 rounded space-y-4">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal ({cartProducts.length} items)</span>
            <span>৳ {subtotal}</span>
          </div>
          <div className="flex justify-between cursor-pointer">
            <span>Shipping Fee</span>
            <span>free</span>
          </div>
          <div className="border-b-2"></div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>৳ {subtotal}</span>
          </div>
          <button
            onClick={handleOrder}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 cursor-pointer rounded mt-2"
          >
            Order
          </button>

          {/* <button className="bg-orange-500 text-white w-full py-2 rounded">
            PROCEED TO CHECKOUT ({cartProducts.length})
          </button> */}
        </div>
      </div>
    </div>
  );
}
