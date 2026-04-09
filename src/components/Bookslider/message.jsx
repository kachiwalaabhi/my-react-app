import React, { useState } from "react";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
<br>
</br>
<br>
</br>
<br></br>
    <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              See our website send your response
            </p>
            <h1 className="text-3xl font-bold">Submit Message</h1>
            <p className="text-xs text-gray-400">
            </p>
          </div>
      {/* 🔥 ADD ID HERE */}
      <div
        id="message"
        className={`bg-blue-600 py-12 px-4 ${
          showPopup ? "blur-sm" : ""
        }`}
      >

        
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

          {/* TITLE */}
          <h1 className="text-2xl text-center font-bold mb-6 text-gray-800">
            Send Message
          </h1>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
            >
              Submit
            </button>

          </form>
        </div>
      </div>

      {/* 🔥 POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">

          <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-xl">

            <h2 className="text-xl font-bold mb-4 text-center">
              Submitted Details
            </h2>

            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Name:</strong> {formData.username}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Message:</strong> {formData.message}</p>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Subscribe;