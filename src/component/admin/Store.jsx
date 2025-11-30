import React, { useEffect, useState } from "react";

export default function Store() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderList")) || [];
    setOrders(data);
  }, []);

  const handleDelete = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem("orderList", JSON.stringify(updatedOrders));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-lg">No Orders Found!</p>
      ) : (
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-300 font-semibold">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <img
                    src={product.image}
                    className="w-16 h-16 object-cover rounded"
                    alt={product.name}
                  />
                </td>

                <td className="p-3">{product.name}</td>
                <td className="p-3 font-bold">৳ {product.price}</td>
                <td className="p-3">{product.quantity || 1}</td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
                  >
                    Order Complate
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
