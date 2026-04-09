import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    name: "Rabindranath Tagore",
    role: "Poet and Writer",
    img: "https://www.tallengestore.com/cdn/shop/products/Portrait_Of_Gurudev_Rabindranath_Tagore_b268bfbc-a5f0-4cce-bb4b-5cad323c8220.jpg?v=1569048051",
  },
  {
    id: 2,
    name: "Chetan Bhagat",
    role: "Book Writer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfqRHuLeQ0fulezt3fHLcTurn4pLYdx-g4kA&s",
  },
  {
    id: 3,
    name: "Aakash Chopra",
    role: "Cricketer and Analyst",
    img: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/01/aakash-chopra.webp",
  },
  {
    id: 4,
    name: "Abhijit Banerjee",
    role: "Economist",
    img: "https://imgix.ranker.com/node_img/1545/30897660/original/abhijit-banerjee-writers-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=500",
  },
  {
    id: 5,
    name: "Harsha Bhogle",
    role: "Cricket Game Analyst",
    img: "https://yt3.googleusercontent.com/hriOPQhRfK70T_9g3eU6l8o7HT4g2u_Hdoh_PLcINaSmJsESgCY-wR3KeMdm8HNMpH6KVM-Ni4M=s900-c-k-c0x00ffffff-no-rj",
  },
];

const Rect = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisible = () => {
    return [
      data[(activeIndex - 1 + data.length) % data.length],
      data[activeIndex],
      data[(activeIndex + 1) % data.length],
    ];
  };

  return (
    <div
      id="authors" // ✅ IMPORTANT FIX
      className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300"
    >
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-14 text-gray-800 dark:text-white">
        Popular Authors
      </h2>

      {/* Cards */}
      <div className="flex justify-center items-center gap-12 max-w-7xl mx-auto px-6">
        {getVisible().map((item, i) => (
          <div
            key={item.id}
            className={`relative w-[300px] h-[420px] rounded-2xl overflow-hidden transition-all duration-500
            ${
              i === 1
                ? "scale-110 shadow-2xl z-10"
                : "scale-95 opacity-70"
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full p-5 
                            bg-white/40 dark:bg-black/40 backdrop-blur-md transition-colors duration-300">
              
              <p className="text-xs text-gray-600 dark:text-gray-300">
                AUTHOR
              </p>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {item.name}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.role}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-3">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${
                activeIndex === i
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Rect;