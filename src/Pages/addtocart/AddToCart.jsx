import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(items.map((item) => ({ ...item, quantity: 1 })));
  }, []);

  const updateQuantity = (index, type) => {
    const updated = [...cartProducts];
    if (type === "increment") updated[index].quantity += 1;
    else if (type === "decrement" && updated[index].quantity > 1)
      updated[index].quantity -= 1;

    setCartProducts(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const deleteProduct = (index) => {
    const updated = [...cartProducts];
    updated.splice(index, 1);
    setCartProducts(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("No products to order!");
      return;
    }

    const exitOrders = JSON.parse(localStorage.getItem("orderList")) || [];
    const newAllOrders = [...exitOrders, ...cartProducts];

    localStorage.setItem("orderList", JSON.stringify(newAllOrders));
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-4 sm:p-6 container mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4 lg:space-y-6 bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-2xl font-bold mb-4 sm:mb-6">Your Cart</h2>

          {cartProducts.length === 0 ? (
            <p className="mx-2 text-gray-500">No products added yet!</p>
          ) : (
            cartProducts.map((product, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded p-3 sm:p-4 gap-4 sm:gap-6 border-b"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:w-28 h-28 sm:h-28 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  {product.description && (
                    <p className="text-gray-400 text-sm mt-1 sm:mt-2">
                      {product.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0">
                  <p className="text-black font-semibold">
                    ৳ {product.price * product.quantity}
                  </p>
                  <button
                    onClick={() => deleteProduct(index)}
                    className="bg-red-400 py-1 px-3 rounded-sm cursor-pointer hover:bg-red-500 text-white text-sm"
                  >
                    Delete
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => updateQuantity(index, "decrement")}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border border-gray-400 rounded">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(index, "increment")}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order */}
        <div className="w-full lg:w-1/3 p-4 sm:p-6 rounded-lg flex flex-col gap-4">
          <h2 className="text-xl font-bold">Order Summary</h2>

          <div className="flex justify-between">
            <span>Subtotal ({cartProducts.length} items)</span>
            <span>৳ {subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>

          <div className="border-b my-2"></div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>৳ {subtotal}</span>
          </div>

          <button
            onClick={handleOrder}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded mt-2"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
