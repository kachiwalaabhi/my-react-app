import React from "react";
import Book1 from "../../assets/books/b1.jpg";
import Book2 from "../../assets/books/b2.webp";
import Book3 from "../../assets/books/b3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "THE PLANET EARTH",
    description:
      "The Planet Earth is a fascinating exploration of our world, revealing how nature, climate, and life are deeply interconnected. It highlights the beauty and complexity of Earth while reminding us of our responsibility to protect it for future generations.",
  },
  {
    id: 2,
    img: Book2,
    title: "A VISION OF INDIA THE COUNTRY",
    description:
      "A Vision of India: The Country So presents a thoughtful reflection on India’s rich heritage, diversity, and cultural unity. It inspires readers to see India’s potential for growth and harmony while embracing its traditions and modern progress."

  },
  {
    id: 3,
    img: Book3,
    title: "THE HOLY VEDAS",
    description:
      "The Holy Vedas are ancient sacred texts that form the foundation of spiritual knowledge and wisdom in Hindu tradition. They explore themes of creation, duty, and the pursuit of truth, guiding humanity toward a harmonious and meaningful life.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("THE PLANET EARTH");
  const [description, setDescription] = React.useState(
    "The Planet Earth is a fascinating exploration of our world, revealing how nature, climate, and life are deeply interconnected. It highlights the beauty and complexity of Earth while reminding us of our responsibility to protect it for future generations."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p class="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
