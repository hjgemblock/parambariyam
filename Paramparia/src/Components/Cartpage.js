import React from 'react';
import SingleImg from '../asstes/SingleImage.png';

const CartPage = () => {
  return (
    <div className=" bg-radial-white-black from-blue-900 to-black text-white p-8">
      {/* Header Progress Bar */}
      <div className="flex items-center justify-center mb-10">
  <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
    {/* Step 1 */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-black sm:w-10 sm:h-10 sm:text-xl md:w-8 md:h-8 md:text-lg lg:w-10 lg:h-10 lg:text-xl">1</div>
      <span className='text-lg py-2 text-yellow-500 sm:text-base md:text-sm'>Order Details</span>
    </div>

    {/* Dashed Line */}
    <div className="border-t-2 border-yellow-500 border-dashed w-[240px] sm:w-[200px] md:w-[160px] lg:w-[240px]"></div>

    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl font-bold sm:w-10 sm:h-10 sm:text-xl md:w-8 md:h-8 md:text-lg lg:w-10 lg:h-10 lg:text-xl">2</div>
      <span className='text-lg py-2 sm:text-base md:text-sm'>Delivery & Payment</span>
    </div>

    {/* Dashed Line */}
    <div className="border-t-2 border-yellow-500 border-dashed w-[240px] sm:w-[200px] md:w-[160px] lg:w-[240px]"></div>

    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl font-bold sm:w-10 sm:h-10 sm:text-xl md:w-8 md:h-8 md:text-lg lg:w-10 lg:h-10 lg:text-xl">3</div>
      <span className='text-lg py-2 sm:text-base md:text-sm'>Confirmation</span>
    </div>
  </div>
</div>




      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-center md:text-left">My Cart</h2>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Product List */}
          <div className="flex-1">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="bg-[#041423] rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-center sm:items-start"
              >
                <img
                  src={SingleImg}
                  alt="Product"
                  className="w-[157px] h-[191px] object-cover mr-0 sm:mr-4 mb-4 sm:mb-0"
                />
                <div className="flex flex-col h-auto sm:h-[169px] ">
                  <h3 className="text-3xl font-bold">Kodo Millet</h3>
                  <p className="text-lg text-gray-300">
                    Discover the rich flavor of millets from the heart of India. Discover the rich flavor of millets from the heart of India.
                  </p>
                  <button className="w-full mt-2 bg-white text-[#041423] text-lg px-4 py-2 rounded-md font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-[#041423] p-6 rounded-lg w-full h-[441px] lg:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl text-yellow-500 font-bold mb-4">ORDER TOTAL</h3>
              <div className="h-[171px] space-y-2 text-lg">
                <div className="flex justify-between">
                  <span className='text-gray-400'>Subtotal</span>
                  <span className='text-gray-400'>₹ 23,994</span>
                </div>
                <div className="flex justify-between">
                  <span className='text-gray-400'>Shipping</span>
                  <span className='text-gray-400'>Free</span>
                </div>
                <hr className="my-4 border-yellow-500 border-dashed" />
                <div className="flex justify-between text-xl font-semibold">
                  <span className='text-gray-200'>Total</span>
                  <span className='text-gray-200'>₹ 23,994</span>
                </div>
              </div>
            </div>

            {/* Buttons section */}
            <div className="space-y-4">
              <button className="w-full text-xl bg-yellow-500 text-black py-3 font-semibold rounded-md">
                Checkout
              </button>
              <button className="w-full text-xl bg-transparent border py-3 font-semibold rounded-md">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Again Section */}
      <div className="container mx-auto mt-12">
        <div className="text-center mb-12 relative">
          <h1 className="text-3xl font-semibold mb-2">Buy Again</h1>
          <div className="relative flex justify-center items-center">
            <hr className="w-[490px] border-t-2 border-dashed border-yellow-500" />
          </div>
          <p className="text-gray-400 mt-4">Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish</p>
        </div>

        {/* Product Grid Section */}
        <div className="mx-auto w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="bg-[#000719] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
              <img
                src={SingleImg}
                alt="Product"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
