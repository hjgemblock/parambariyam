import React from 'react';
import grains from '../asstes/grains.png'; // Ensure the path is correct

const CategorySection = () => {
  return (
    <div className="bg-radial-white-black w-full h-auto py-4">
      {/* Container for Category Name and Description */}
      <div className="relative w-full md:w-[90%] md:left-[50px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8">
        <h2 className="text-yellow-400 font-bold text-3xl md:text-3xl mb-4 md:mb-0 text-center md:text-left">
          Category Name
        </h2>
        <p className="text-xl w-full md:w-auto text-center md:text-left px-4 md:px-0">
          Essential millets that capture the flavors of Indian cuisine
        </p>
      </div>

      {/* Image with Overlay */}
      <div className="relative">
        <img
          src={grains} // Ensure you have the correct path to the image
          alt="Millets"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white bg-opacity-10 text-gray-800 rounded-full p-4 shadow-lg hover:bg-opacity-75 transition duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M8 5v14l11-7z" /> {/* Play Button Icon */}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
