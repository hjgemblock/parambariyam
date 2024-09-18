import React from "react";
import { FiSearch, FiShoppingCart, FiUser, FiHome } from "react-icons/fi"; // Import icons from react-icons
import Logo from '../../asstes/logo.png';

const Header1 = () => {
  return (
    <header className="bg-[#0B1120] text-white py-4 sm:py-6">
      <div className="container mx-auto flex flex-row sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-12">
        
        {/* Left - Store */}
        <div className="flex items-center mb-2 sm: flex flex-col mr-1 mb-0">
          <FiHome className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> {/* Store Icon */}
          <span className="text-sm sm:text-base">Store</span>
        </div>

        {/* Middle - Logo */}
        <div className="flex flex-col items-center mb-2 sm:mb-0  ">
          <img src={Logo} alt="Logo" className="h-8 w-8 mb-1 sm:mr-2" />
          <span className="font-bold text-xl sm:text-lg text-yellow-500">PAARAMPARIYAA</span>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Search Icon */}
          <FiSearch className="h-5 w-5 sm:h-6 sm:w-6" />

          {/* Cart Icon */}
          <FiShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />

          {/* User Icon */}
          <FiUser className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>
    </header>
  );
};

export default Header1;
