import React from "react";
import BooksStack from "../../assets/website/library.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div
        id="library"
        className="min-h-[100vh] flex items-center pb-20 bg-gray-100 dark:bg-gray-800"
        style={{ scrollMarginTop: "90px" }} // ✅ FIXED OFFSET (match navbar height)
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Image */}
            <div>
              <img
                src={BooksStack}
                alt="library"
                className="max-w-[400px] h-[350px] w-full mx-auto 
                drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Library at your fingertips
              </h1>

              <p className="text-sm text-gray-500 leading-5">
                Our Book Store service is phenomenal and very unique. Makes your trust on us permanently.
              </p>

              <div className="flex flex-col gap-4">
                
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 p-4 rounded-full bg-violet-100" />
                  <p>Quality Books</p>
                </div>

                <div className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 p-4 rounded-full bg-orange-100" />
                  <p>Fast Delivery</p>
                </div>

                <div className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 p-4 rounded-full bg-green-100" />
                  <p>Easy Payment method</p>
                </div>

                <div className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 p-4 rounded-full bg-yellow-100" />
                  <p>Get Offers on Books</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;