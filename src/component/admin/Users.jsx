import React, { useState } from "react";

function Users() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    images: "",
    categoryId: "",
    inStock: true,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    try {
      const result = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (result.ok) {
        setProduct({
          categoryId: "",
          price: "",
          description: "",
          images: "",
          inStock: true,
          name: "",
        });
        alert("Post successfull...");
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
      alert("Product post failed...");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-5 text-center">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            placeholder="Sample Product"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded"
            placeholder="1999"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            rows="3"
            placeholder="Nice thing."
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            className="w-full border p-2 rounded"
            placeholder="/images/sample.jpg"
            value={product.images}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Category ID</label>
          <input
            type="number"
            name="categoryId"
            className="w-full border p-2 rounded"
            placeholder="1"
            value={product.categoryId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">In Stock</label>
          <select
            name="inStock"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          >
            <option value={true}>Available</option>
            <option value={false}>Out of Stock</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Users;
