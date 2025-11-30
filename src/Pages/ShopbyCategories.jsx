import React from "react";

const ShopbyCategories = () => {
  const Products = [
    {
      id: 1,
      name: "boAt Airdopes Alpha",
      images: "./public/shopims/1.png",
    },
    {
      id: 2,
      name: "boAt Stone 350 Pro",
      images: "./public/shopims/9.webp",
    },
    {
      id: 3,
      name: "boAt Nirvana Zenita Zenith Pro",
      images: "./public/shopims/3.png",
    },
    {
      id: 4,
      name: "boAt Lunar Discovery",
      images: "./public/shopims/4.webp",
    },
    {
      id: 5,
      name: "boAt Rockerz 255 Pro+",
      images: "./public/shopims/5.webp",
    },
    {
      id: 6,
      name: "boAt EnergyShroom PB300 Pro",
      images: "./public/shopims/6.webp",
    },
    {
      id: 7,
      name: "boAt EnergyShroom PB300 Pro",
      images: "./public/shopims/7.webp",
    },
    {
      id: 8,
      name: "boAt EnergyShroom PB300 Pro",
      images: "./public/shopims/8.webp",
    },
    {
      id: 9,
      name: "boAt EnergyShroom PB300 Pro",
      images: "./public/shopims/2.png",
    },
  ];
  return (
    <div className="container mx-auto px-3 sm:px-1 mb-16">
      <div className=" flex items-center justify-between">
        <div className="text-2xl font-semibold">
          Shop <span className="font-bold">by Categories</span>
        </div>

        <p className="font-bold text-blue-900">View all</p>
      </div>
      <div className="gap-3 sm:gap-6 grid grid-cols-3 sm:grid-cols-9 sm:mt-16 mt-12">
        {Products.map((product) => (
          <div className="xs:h-100 h-35 w-32">
            <img
              className="w-25 sm:h-22  "
              src={product.images}
              alt={product.name}
            />
            <div className="p-4">
              <div key={product.id}>
                <h2 className="sm:text-l font-bold text-ellipsis line-clamp-1 text-sm text-black mb-2">
                  {product.name}
                </h2>
                <h2 className="sm:text-[14px] font-bold text-xl mb-2 text-ellipsis line-clamp-1">
                  {product.price}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopbyCategories;
