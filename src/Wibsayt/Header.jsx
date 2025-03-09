import React from "react";
import PIPATKA from "../assets/fi-rr-search.png";
import MAGAZ from "../assets/fi-rr-shopping-cart.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="flex flex-wrap justify-between items-center p-4 md:px-10">
        <strong className="text-xl sm:text-2xl">CodeHorizon</strong>

        {/* Navigation links */}
        <div className="hidden md:flex gap-6">
          <p>Home</p>
          <NavLink to="/Curs">
            <p>Catalog</p>
          </NavLink>
          <p>About us</p>
          <p>Contact us</p>
        </div>

        {/* Icons for small and large screens */}
        <div className="flex gap-4">
          <button>
            <img src={PIPATKA} alt="Search" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button>
            <img src={MAGAZ} alt="Shopping Cart" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex justify-center py-2 border-t border-gray-700">
        <div className="flex gap-4 text-sm">
          <p>Home</p>
          <NavLink to="/Curs">
            <p>Catalog</p>
          </NavLink>
          <p>About us</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
    