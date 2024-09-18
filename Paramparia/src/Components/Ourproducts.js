import React from 'react';
import single from '../asstes/SingleImage.png'

const OurProducts = () => {
  return (
    <div className="bg-radial-white-black justify-center text-white py-12 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold mb-2">Choose Our Products from Millets</h1>
          <div className="absolute inset-0 flex items-center">
      <hr className="w-full border-t-2 border-dashed border-yellow-500" />
    </div>
          <p className="text-gray-400">Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish</p>
        </div>

        {/* Product Grid Section */}
        <div className="mx-auto w-full max-w-[1280px] h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Product Card 1 */}
          <div className="bg-[#000719] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src={single}
              alt="Kodo Millet Chilli Powder"
              className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-m text-yellow-300 font-semibold uppercase mb-1">PARAMPARIYAA</h3>
              <h2 className="text-3xl font-semibold mb-3">Kodo Millet</h2>
              <p className="text-gray-300 mb-4">Discover the rich flavor of millet from the heart of India. Discover the rich flavor of millet from the heart of India.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white w-full sm:w-auto text-[#041423] font-semibold py-2 px-3 rounded-md text-lg">
                  Explore
                </button>
                <button className="bg-[#041423] w-full sm:w-auto text-white font-semibold py-2 px-3 rounded-md text-lg border-2 border-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-[#000719] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src={single}
              alt="Kodo Millet Chilli Powder"
              className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-m text-yellow-300 font-semibold uppercase mb-1">PARAMPARIYAA</h3>
              <h2 className="text-3xl font-semibold mb-3">Kodo Millet</h2>
              <p className="text-gray-300 mb-4">Discover the rich flavor of millet from the heart of India. Discover the rich flavor of millet from the heart of India.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white w-full sm:w-auto text-[#041423] font-semibold py-2 px-3 rounded-md text-lg">
                  Explore
                </button>
                <button className="bg-[#041423] w-full sm:w-auto text-white font-semibold py-2 px-3 rounded-md text-lg border-2 border-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-[#000719] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src={single}
              alt="Kodo Millet Chilli Powder"
              className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-m text-yellow-300 font-semibold uppercase mb-1">PARAMPARIYAA</h3>
              <h2 className="text-3xl font-semibold mb-3">Kodo Millet</h2>
              <p className="text-gray-300 mb-4">Discover the rich flavor of millet from the heart of India. Discover the rich flavor of millet from the heart of India.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white w-full sm:w-auto text-[#041423] font-semibold py-2 px-3 rounded-md text-lg">
                  Explore
                </button>
                <button className="bg-[#041423] w-full sm:w-auto text-white font-semibold py-2 px-3 rounded-md text-lg border-2 border-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-[#000719] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src={single}
              alt="Kodo Millet Chilli Powder"
              className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-m text-yellow-300 font-semibold uppercase mb-1">PARAMPARIYAA</h3>
              <h2 className="text-3xl font-semibold mb-3">Kodo Millet</h2>
              <p className="text-gray-300 mb-4">Discover the rich flavor of millet from the heart of India. Discover the rich flavor of millet from the heart of India.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white w-full sm:w-auto text-[#041423] font-semibold py-2 px-3 rounded-md text-lg">
                  Explore
                </button>
                <button className="bg-[#041423] w-full sm:w-auto text-white font-semibold py-2 px-3 rounded-md text-lg border-2 border-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
