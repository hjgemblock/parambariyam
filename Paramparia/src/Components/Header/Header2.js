import React from "react";

const Header2 = () => {
  return (
    <nav className="bg-[#000719] text-white py-2">
      <div className="container mx-auto">
        <ul className="flex flex-col sm:flex-row justify-center text-center sm:space-x-10 text-sm font-semibold">
          <li className="hover:text-gray-400 cursor-pointer mb-2 sm:mb-0">MILLETS</li>
          <li className="hover:text-gray-400 cursor-pointer mb-2 sm:mb-0">NUTRI BITES</li>
          <li className="hover:text-gray-400 cursor-pointer mb-2 sm:mb-0">MILK MIXES</li>
          <li className="hover:text-gray-400 cursor-pointer mb-2 sm:mb-0">IDLY PODIES</li>
          <li className="hover:text-gray-400 cursor-pointer mb-2 sm:mb-0">SPICES</li>
          <li className="hover:text-gray-400 cursor-pointer mb-2 sm:mb-0">SKIN AND HAIRCARE</li>
          <li className="hover:text-gray-400 cursor-pointer mb-2 sm:mb-0">CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header2;
