import React from "react";
import logo from '../asstes/logo.png'; // Corrected typo from 'asstes' to 'assets'

const Footer = () => {
  return (
    <footer className="bg-[#000719] text-white py-8">
      {/* Bottom Section with Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6 px-6 md:px-24">
        
        {/* Logo and About Section */}
        <div className="mb-8">
          <div className="mb-4">
            {/* Logo */}
            <img src={logo} alt="Logo" className="max-w-s md:max-w-xl mx-auto md:mx-0" />
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">
              PAARAMPARIYAA
            </h1>
          </div>
          <p className="text-sm">
            Some text on Parampara's journey and mission statement that wraps around like this.
          </p>
        </div>
        
        {/* Products Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Products</h2>
          <ul className="space-y-2">
            <li>Mattress</li>
            <li>Milk Makers</li>
            <li>Milk Packets</li>
            <li>Spices</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Store</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li>paramparaprima@gmail.com</li>
            <li>+91 999 888 7770</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
