import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Sachin Tendulkar",
    text: "I had a great experience with this bookstore! The website is very easy to use, and I found my favorite books quickly. The delivery was fast and the packaging was excellent.",
    img: "https://hips.hearstapps.com/hmg-prod/images/indian-cricket-legend-sachin-teldulkar-poses-for-a-news-photo-1701204803.jpg?crop=0.670xw:1.00xh;0.152xw,0&resize=1200:*",
  },
  {
    id: 1,
    name: "Virat Kohli",
    text: "This is one of the best online book stores I’ve used. The design of the website is clean and smooth, and browsing books is very enjoyable. Highly recommended for book lovers!",
    img: "https://www.wisden.com/static-assets/images/players/3993.png?v=23.77",
  },
  {
    id: 1,
    name: "Rohit Sharma",
    text: "Amazing service and a beautiful website! Ordering books was simple, and I loved the variety available. The whole experience felt modern and user-friendly.", 
    img: "https://pbs.twimg.com/media/GL2eGkvbQAAJbVk.jpg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div
  id="testimonial"   // ✅ ADD THIS
  data-aos="fade-up"
  data-aos-duration="300"
  className="py-10"
></div>
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
