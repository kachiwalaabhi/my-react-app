import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Books from "./components/BooksSlider/Books.jsx";
import Rect from "./components/Rect.jsx";
import ProductDetail from "./components/BooksSlider/ProductDetail.jsx";
import ProductDetail2 from "./components/BooksSlider/ProductDetail2.jsx"; // ✅ ADD THIS
import ProductDetail3 from "./components/BooksSlider/ProductDetail3.jsx";
import Subscribe from "./components/BooksSlider/message.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ handleOrderPopup }) => (
  <>
    <Hero handleOrderPopup={handleOrderPopup} />
    <Services handleOrderPopup={handleOrderPopup} />
    <Banner />
    <AppStore />
    <Books />
    <Subscribe />
    <Testimonial />
    <Rect />
  </>
);

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* Header */}
      <Navbar handleOrderPopup={handleOrderPopup} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product2/:id" element={<ProductDetail2 />} /> {/* ✅ NEW */}
        <Route path="/product3/:id" element={<ProductDetail3 />} /> {/* ✅ NEW */}

      </Routes>

      {/* Footer */}
      <Footer />

      {/* Popup */}
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;