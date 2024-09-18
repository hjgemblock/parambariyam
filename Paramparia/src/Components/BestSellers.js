import React from 'react';
import powder from '../asstes/powderImage.png';

const BestSellers = () => {
  return (
    <div className="bg-radial-white-black min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center items-center justify-center py-8">
        <h1 className="text-white text-4xl font-semibold mb-3">Our Best Sellers</h1>
        
        {/* Gold dashed line */}
        <div className="border-t-2 border-dashed border-yellow-500 w-24 mx-auto my-4"></div>

        <p className="text-white text-sm max-w-xl mx-auto">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Card */}
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="border-2 border-transparent rounded-lg p-8 bg-gradient-to-b from-[#041423a] to-blue-900 text-white relative shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,1)] transition-shadow duration-300 hover:border-yellow-400">
            <h2 className="text-4xl font-semibold mb-2 text-center">Kodo Millet</h2>
            <p className="text-sm mb-4 text-center">Discover the rich flavor of millet from the heart of India</p>

            <div className="flex flex-col md:flex-row gap-6 px-12 justify-center">
              <button className="bg-white w-full md:w-1/3 text-[#041423] font-semibold py-2 px-3 rounded-md text-center text-lg">
                Explore
              </button>
              <button className="bg-[#041423] w-full md:w-1/3 text-white font-semibold py-2 px-4 rounded-md text-center text-lg border-2 border-white">
                Buy Now
              </button>
            </div>

            <div className="flex justify-center items-center py-5 mt-5">
              <img className="h-76 w-auto" src={powder} alt="Kodo Millet" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
