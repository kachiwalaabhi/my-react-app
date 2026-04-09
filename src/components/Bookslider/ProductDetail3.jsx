import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "../Services/Services";

const ProductDetail = () => {
  const { id } = useParams();

  const product = ServicesData.find(
    (item) => item.id === Number(id)
  );

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // ⏱ Auto hide after 15 sec
  useEffect(() => {
    if (submittedData) {
      const timer = setTimeout(() => {
        setSubmittedData(null);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [submittedData]);

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl font-bold">
        Product Not Found
      </h1>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShowPopup(false);

    setFormData({
      name: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className="container py-20">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-[300px] rounded-lg shadow-lg hover:scale-105 duration-300"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>

          {/* 🕉️ HOLY VEDAS DETAILS */}
          <p className="mb-2">
            “The Holy Vedas” is a sacred collection of ancient Indian scriptures
            that form the foundation of Hindu philosophy and spiritual knowledge.
            These texts contain timeless wisdom about life, universe, and human existence.
          </p>

          <p className="mb-2">
            The Vedas include teachings on rituals, meditation, ethics, and the
            deeper meaning of life. They guide individuals toward spiritual growth,
            self-realization, and inner peace.
          </p>

          <p className="mb-2">
            This book is ideal for spiritual seekers, scholars, and readers who
            wish to understand ancient Indian traditions and philosophy in a
            simplified and meaningful way.
          </p>

          {/* Extra Info */}
          <p className="mb-2"><strong>Author:</strong> Ancient Rishis</p>
          <p className="mb-2"><strong>Category:</strong> Spiritual / Religious</p>
          <p className="mb-2"><strong>Price:</strong> ₹699</p>
          <p className="mb-4"><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 duration-300"
          >
            Order Now
          </button>
        </div>

      </div>

      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[300px]">

            <h2 className="text-xl font-bold mb-4 text-center">
              Order Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

              <textarea
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

              <button
                type="submit"
                className="bg-primary text-white w-full py-2 rounded"
              >
                Submit Order
              </button>

              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="w-full mt-2 text-red-500"
              >
                Cancel
              </button>

            </form>
          </div>
        </div>
      )}

      {/* ================= SHOW DATA ================= */}
      {submittedData && (
        <div className="mt-10 p-5 border rounded bg-green-100 dark:bg-green-900">
          <h2 className="text-xl font-bold mb-2">Order Details</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Book:</strong> {product.title}</p>
          <p className="text-sm text-gray-500 mt-2">
            (This will disappear in 15 seconds)
          </p>
        </div>
      )}

    </div>
  );
};

export default ProductDetail;