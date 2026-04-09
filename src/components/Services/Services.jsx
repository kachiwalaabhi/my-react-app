import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/books/b1.jpg";
import Img2 from "../../assets/books/b2.WEBP";
import Img3 from "../../assets/books/b3.jpg";
import { FaStar } from "react-icons/fa";

export const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "THE PLANET EARTH",
    description: "The Planet Earth is a fascinating exploration of our world.",
    price: "₹499",
  },
  {
    id: 2,
    img: Img2,
    title: "A VISION OF INDIA THE COUNTRY",
    description:
      "A Vision of India: The Country So presents a thoughtful reflection on India",
    price: "₹599",
  },
  {
    id: 3,
    img: Img3,
    title: "THE HOLY VEDAS",
    description:
      "The foundation of spiritual knowledge and wisdom in Hindu tradition",
    price: "₹699",
  },
];

const Services = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    if (id === 1) {
      navigate(`/product/${id}`);
    } else if (id === 2) {
      navigate(`/product2/${id}`);
    } else {
      navigate(`/product3/${id}`);
    }
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              You can see our unique books collection and select best book.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => handleNavigation(service.id)}
                className="cursor-pointer rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>

                <div className="p-4 text-center">
                  <div className="flex justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>

                  <h1 className="text-xl font-bold">{service.title}</h1>

                  <p className="text-gray-500 group-hover:text-white text-sm">
                    {service.description}
                  </p>

                  {/* ✅ PRICE ADDED */}
                  <p className="mt-2 font-semibold text-primary group-hover:text-white">
                    {service.price}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOrderPopup();
                    }}
                    className="bg-primary text-white py-1 px-4 rounded-full mt-4"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;