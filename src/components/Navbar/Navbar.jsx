
import React from "react";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 3,
    name: "Services",
    link: "#library",
  },

   {
    id: 4,
    name: "Message",
    link: "#message",
  },
  {
    id: 2,
    name: "Social Use", // ✅ NEW BUTTON
    link: "#appstore", // ✅ TARGET SECTION
  },

  
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "#top-books",
  },
  {
    name: "Review",
    link: "#testimonial",
  },
  {
    name: "Authors",
    link: "#authors",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const handleScroll = (e, target) => {
    e.preventDefault();

    if (target === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.querySelector(target);
    const navbar = document.querySelector("nav");

    if (section) {
      const navbarHeight = navbar ? navbar.offsetHeight : 80;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-50">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Books
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <DarkMode />

            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    onClick={(e) => handleScroll(e, menu.link)}
                    className="inline-block py-4 px-4 hover:text-primary duration-200 cursor-pointer"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              {/* Dropdown */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex h-[72px] items-center gap-1">
                  Quick Links
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>

                <div className="absolute -left-6 z-50 hidden w-[160px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md group-hover:block">
                  <ul className="space-y-2">
                    {DropdownLinks.map((data, index) => (
                      <li key={index}>
                        <a
                          href={data.link}
                          onClick={(e) => handleScroll(e, data.link)}
                          className="block w-full rounded-md p-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
            >
              Order
              <FaCartShopping className="text-lg" />
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;