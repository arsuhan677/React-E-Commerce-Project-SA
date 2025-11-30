import React from "react";

function Categories() {
  const Products = [
    { id: 1, name: "boAt Airdopes Alpha", price: "25000", images: "./public/images/1.avif" },
    { id: 2, name: "boAt Stone 350 Pro", price: "840", images: "./public/images/2.avif" },
    { id: 3, name: "boAt Nirvana Zenita Zenith Pro", price: "550", images: "./public/images/3.avif" },
    { id: 4, name: "boAt Lunar Discovery", price: "230", images: "./public/images/4.avif" },
    { id: 5, name: "boAt Rockerz 255 Pro+", price: "340", images: "./public/images/5.avif" },
    { id: 6, name: "boAt EnergyShroom PB300 Pro", price: "25000", images: "./public/images/7.avif" },
  ];

  return (
    <div className="container px-3 sm:px-0 mx-auto mb-16">
      <h1 className="text-3xl font-bold text-black mb-6 text-center sm:text-left">Categories</h1>
      <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-200 rounded-lg border-2 border-b-4 border-gray-400 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
          >
            <div className="w-full ">
              <img
                src={product.images}
                alt={product.name}
                className="w-full sm:h-40 h-35 object-cove"
              />
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-sm sm:text-base font-semibold text-black line-clamp-1 mb-1">{product.name}</h2>
              <p className="text-green-700 font-bold sm:text-[14px]">{product.price} ৳</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;







// import React from "react";

// function Categories() {

//   const Products = [
//     {
//       id: 1,
//       name: "boAt Airdopes Alpha",
//       price: "25000",
//       images: "./public/images/1.avif"
//     },
//     {
//       id: 2,
//       name: "boAt Stone 350 Pro",
//       price: "840",
//       images: "./public/images/2.avif"
//     },
//     {
//       id: 3,
//       name: "boAt Nirvana Zenita Zenith Pro",
//       price: "550",
//       images: "./public/images/3.avif"
//     },
//     {
//       id: 4,
//       name: "boAt Lunar Discovery",
//       price: "230",
//       images: "./public/images/4.avif"
//     },
//     {
//       id: 5,
//       name: "boAt Rockerz 255 Pro+",
//       price: "340",
//       images: "./public/images/5.avif"
//     },
//     {
//       id: 6,
//       name: "boAt EnergyShroom PB300 Pro",
//       price: "25000",
//       images: "./public/images/7.avif"
//     },
    
    
//   ]


//   return (
//     <div className="container mx-auto px-3 sm:px-1 mb-16">
//       <div className="gap-3 sm:gap-6 grid grid-cols-2 sm:grid-cols-6 sm:mt-16 mt-12">
//       {Products.map((product) => (
//         <div className="bg-gray-200 items-center rounded-lg border-b-4 border-gray-400 border-2 overflow-hidden xs:h-100 w-50">
//           <img className="w-full sm:h-40 "
//             src={product.images}
//             alt={product.name}
//           />
//            <div className="p-4">
//             <div key={product.id}>
//             <h2 className="sm:text-l font-bold text-ellipsis line-clamp-1 text-sm text-black mb-2">{product.name}</h2>
//             <h2 className="sm:text-[14px] font-bold text-xl mb-2 text-ellipsis line-clamp-1">{product.price}</h2>
//           </div>
//         </div> 
//       </div>
//           ))}
//       </div>
//     </div>
//   );
// }
// export default Categories;