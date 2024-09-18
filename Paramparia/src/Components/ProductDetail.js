import React from 'react';
import millets from '../asstes/Frame 92.png'

const ProductDetail = () => {
  return (
    <div className="bg-[#0a1a2a] py-10 px-16">
      <div className=" mx-auto px-4 md:px-10 lg:px-16">
        <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-2">Millet Category</h2>
        <p className="text-center text-white text-sm md:text-base mb-8">
          Finest collection of organic millets, spices, and more delivered straight to your door.
        </p>

        <div className="rounded-lg flex flex-col md:flex-row md:items-center md:gap-[60px]  ">
          {/* Image Section */}
          <div className="">
            <img
              src={millets}
              alt="Millet"
              className="rounded-lg w-[614px] h-[423px]"
            />
          </div>

          {/* Product Info Section */}
          <div className="w-full  flex flex-col md:w-[626px] md:h-[456px] md:gap-[20px]">
            <h1 className="text-yellow-500 text-5xl font-bold ">LOREM IPSUM <br/> SIT AMETUM</h1>

            {/* Rating Section */}
            <div className="flex items-center ">
              <div className="bg-yellow-500 text-white font-bold px-2 py-1 rounded mr-2">
                4.7 ★
              </div>
              <p className="text-gray-700 text-lg">4567 Ratings</p>
            </div>

            {/* Description */}
            <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut.
            </p>

            {/* Quantity Selector */}
            <div className=" flex flex-row justify-between w-[44%] items-center">
              <label className="text-gray-700 font-semibold block mb-2" htmlFor="quantity">
                Select Quantity
              </label>
              <select
                id="quantity"
                className="bg-gray-100 border border-gray-300 text-gray-700 rounded-lg p-2 w-full md:w-auto">
                <option value="250mg">250 mg</option>
                <option value="500mg">500 mg</option>
                <option value="1kg">1 kg</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition duration-200">
                Add to Cart
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;