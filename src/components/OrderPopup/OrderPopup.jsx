import React, { useState } from "react"; // 🔴 useState added
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {

  // 🔴 NEW: state to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  // 🔴 NEW: state to control second popup
  const [showDetails, setShowDetails] = useState(false);

  // 🔴 NEW: handle input change (controlled inputs)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔴 NEW: handle order button click
  const handleOrder = () => {
    setShowDetails(true); // show details popup
  };

  return (
    <>
      {/* Main Form Popup */}
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md w-[300px]">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1>Order Your Book</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Body */}
            <div className="mt-4">
              
              {/* 🔴 UPDATED: added name, value, onChange */}
              <input
                type="text"
                name="name" 
                placeholder="Name"
                value={formData.name} 
                onChange={handleChange}
                className="w-full rounded-full border px-2 py-1 mb-4"
              />

              {/* 🔴 UPDATED */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-full border px-2 py-1 mb-4"
              />

              {/* 🔴 UPDATED */}
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-full border px-2 py-1 mb-4"
              />

              <div className="flex justify-center">
                {/* 🔴 UPDATED: added onClick */}
                <button
                  onClick={handleOrder}
                  className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔴 NEW: Details Popup */}
      {showDetails && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md w-[300px]">
            <h2 className="text-lg font-bold mb-3">Order Details</h2>

            {/* 🔴 NEW: Display entered data */}
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>

            {/* 🔴 NEW: close button */}
            <button
              onClick={() => {
                setShowDetails(false);
                setOrderPopup(false);
              }}
              className="mt-4 bg-green-500 text-white px-4 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;