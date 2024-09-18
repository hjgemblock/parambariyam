import React from 'react';
import innerLogo from '../asstes/innerLogo.png';
import OuterImage from '../asstes/outerImage.png';

const AboutUs = () => {
  return (
    <div className="bg-radial-white-black min-h-screen flex flex-col items-center p-4 md:p-10 lg:p-6">
      {/* Review Section */}
      <div className="w-full max-w-5xl text-center py-6 md:py-10 lg:py-14">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold mb-3">
          Tell Us What You Feel!
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg mb-6">
          Share your experience and let us know how our spices have elevated your cooking.
        </p>
        <div className="bg-[#041432] border-2 border-yellow-500 rounded-lg p-4 md:p-6 lg:p-10 mx-auto max-w-[1100px]">
          <div className="flex flex-col items-start mb-4">
            <i className="fas fa-quote-left text-yellow-500 text-2xl md:text-3xl lg:text-4xl"></i>
            <textarea
              className="bg-transparent text-base md:text-lg lg:text-xl text-white w-full h-32 p-3 md:p-4 lg:p-5 mt-2 outline-none resize-none"
              placeholder="Type your review here and share your thoughts with us..."
            />
          </div>
          <div className="text-right">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl hover:bg-gray-200 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">About</h2>
            <h3 className="text-yellow-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              PAARAMPARIYAA
            </h3>
            <p className="text-white text-sm md:text-base lg:text-lg mb-6">
              At Paarampariyaa, we are dedicated to preserving the rich heritage of Indian cuisine. Our passion lies in
              crafting authentic spices that bring the traditional flavors of India to your kitchen, ensuring every dish
              is a true celebration of culture and taste.
            </p>
            <p className="text-white text-xs md:text-sm lg:text-base mb-6">
              Join us on a flavorful journey and explore our spices to bring the taste of tradition to your table today!
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
              <button className="bg-white w-full md:w-1/2 text-[#041423] font-semibold py-2 px-3 rounded-md text-sm md:text-lg lg:text-xl">
                Explore our Spices
              </button>
              <button className="bg-[#041423] w-full md:w-1/2 text-white font-semibold py-2 px-4 rounded-md text-sm md:text-lg lg:text-xl border-2 border-white">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex justify-center items-center">
            <img
              className="rounded-lg w-full h-auto"
              src={OuterImage}
              alt="Various spices arranged in a circular pattern with a logo in the center"
            />
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 md:w-1/6 lg:w-1/8"
              src={innerLogo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
