import React from "react";
import Book1 from "../../assets/books/b1.jpg";
import Book2 from "../../assets/books/b2.webp";
import Book3 from "../../assets/books/b3.jpg";
import Book4 from "../../assets/books/b4.jpg";
import Book5 from "../../assets/books/b5.jpg";

import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "THE PLANET EARTH",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "A VISION OF INDIA",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "THE HOLY VEDAS",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book4,
    title: "INDIAN CULTURE",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book5,
    title: "INDIAN CRICKET",
    rating: 4.5,
    author: "Someone",
  },
];

const Books = () => {
  return (
    <>
      {/* ✅ IMPORTANT: ID added */}
      <div id="top-books" className="mt-14 mb-12">
        <div className="container">
          
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              You can select any book and it's useful in your life
            </p>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {booksData.map(({ id, img, title, rating, author }) => (
              <div key={id} className="space-y-3">
                <img
                  src={img}
                  alt={title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-700">{author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="mt-10 bg-primary text-white py-1 px-5 rounded-md">
              View All Books
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Books;