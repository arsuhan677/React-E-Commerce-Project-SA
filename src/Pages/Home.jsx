import React, { useState, useEffect } from "react";
import Explore from "./Explore";
import Fatured from "./Fatured";
import ShopbyCategories from "./ShopbyCategories";
import Categories from "./Categories";

function Hero() {
  const images = [
    "/slide-img/sl3.webp",
    "/slide-img/sl4.webp",
    "/images1/15.webp",
    "/images1/16.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <section className="w-full overflow-hidden relative h-[250px] sm:h-[350px] mt-4 sm:mt-0 md:h-[500px] lg:h-[600px]">
        <div
          className="flex h-full w-full transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              className="sm:w-full px-3 rounded-2xl sm:px-0 sm:rounded-none h-full sm:object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                currentIndex === idx ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Sections below slider */}
      <div className="mt-10">
        <Categories /> 
        <div className="px-3 sm:px-6">
          <Explore /> 
        </div>
        <Fatured />
        <ShopbyCategories />
      </div>
    </>
  );
}

export default Hero;

// import React, { useState, useEffect } from "react";
// import Explore from "./Explore";
// import Fatured from "./Fatured";
// import ShopbyCategories from "./ShopbyCategories";
// import Categories from "./Categories";

// function Hero() {
//   const images = [
//     // "/slide-img/sl2.webp",
//     "/slide-img/sl3.webp",
//     "/slide-img/sl4.webp",
//     "/images1/15.webp",
//     "/images1/16.webp",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Hero Slider Only */}
//       <section className="h-[600px] w-full overflow-hidden relative">
//         <div
//           className="flex h-full w-full transition-transform duration-1000"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Slide ${idx}`}
//               className="w-full h-full object-cover flex-shrink-0"
//             />
//           ))}
//         </div>
//       </section>

//       <div className="mt-10">
//         <Categories />
//         <Explore />
//         <Fatured />
//         <ShopbyCategories />
//       </div>
//     </>
//   );
// }

// export default Hero;
