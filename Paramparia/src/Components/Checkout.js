import React from 'react';

const CheckoutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-[#002E4D] text-white py-10 px-4">
            {/* Progress Bar */}
            <div className="flex justify-center mb-8">
                <div className="flex items-center">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#FFB100] w-10 h-10 rounded-full flex items-center justify-center text-lg">1</div>
                        <p className="mt-2 text-sm">Order Details</p>
                    </div>
                    <div className="w-40 h-2 bg-[#FFB100] mx-6"></div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#FFB100] w-10 h-10 rounded-full flex items-center justify-center text-lg">2</div>
                        <p className="mt-2 text-sm">Delivery & Payment</p>
                    </div>
                    <div className="w-16 h-1 bg-[#595959] mx-2"></div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#595959] w-10 h-10 rounded-full flex items-center justify-center text-lg">3</div>
                        <p className="mt-2 text-sm">Confirmation</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-8">
                {/* Left Section - Billing and Delivery Details */}
                <div className="flex-1">
                    {/* Billing Details */}
                    <div className="bg-[#002E4D] p-6 rounded-lg mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
                        <div className="flex flex-wrap gap-4">
                            <input type="text" placeholder="First Name" className="flex-1 p-2 rounded-md bg-[#001F3F]  text-white" />
                            <input type="text" placeholder="Last Name" className="flex-1 p-2 rounded-md bg-[#001F3F]  text-white" />
                        </div>
                        <input type="email" placeholder="Email Address" className="p-2 rounded-md w-full bg-[#001F3F] text-white mt-4" />
                        <div className="flex items-center mt-4">
                            <div className="flex items-center space-x-2 bg-[#001F3F]  p-2 rounded-md">
                                <img src="https://cdn.countryflags.com/thumbs/india/flag-400.png" alt="India Flag" className="w-6" />
                                <span>+91</span>
                            </div>
                            <input type="text" placeholder="Phone Number" className="p-2 rounded-md w-full bg-[#001F3F]  text-white ml-4" />
                        </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="bg-[#002E4D] p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
                        <input type="text" placeholder="House Number And Street Name" className="p-2 rounded-md w-full bg-[#001F3F]   text-white mb-4" />
                        <input type="text" placeholder="Apartment, Suite, Etc. [Optional]" className="p-2 rounded-md w-full bg-[#001F3F] text-white mb-4" />
                        <div className="flex flex-wrap gap-4">
                            <input type="text" placeholder="Country" className="flex-1 p-2 rounded-md bg-[#001F3F]  text-white" />
                            <input type="text" placeholder="State" className="flex-1 p-2 rounded-md bg-[#001F3F]  text-white" />
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <input type="text" placeholder="City/Town" className="flex-1 p-2 rounded-md bg-[#001F3F]   text-white" />
                            <input type="text" placeholder="Pin Code" className="flex-1 p-2 rounded-md bg-[#001F3F]  text-white" />
                        </div>
                    </div>

                    {/* Payment Option */}
                    <div className="bg-[#002E4D] p-6 rounded-lg mt-6 flex items-center justify-between ">
                       <div className=''> 
                        <h2 className="text-2xl font-semibold">Pay With</h2></div>
                        <div >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg" alt="GPay" className="w-24" />
                        </div>
                    </div>
                </div>

                {/* Right Section - Order Summary */}
                {/* <div className="bg-[#002E4D] p-6 rounded-lg flex-1">
          <h2 className="text-2xl font-semibold mb-4">ORDER TOTAL</h2>
          <div className="mb-4">
            <p className="flex justify-between"><span>Products</span> <span>08</span></p>
            <p className="flex justify-between"><span>Subtotal</span> <span>₹ 23,994</span></p>
            <p className="flex justify-between"><span>Shipping</span> <span>Free</span></p>
            <p className="flex justify-between text-green-500"><span>You Save</span> <span>₹ 6,000</span></p>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span> <span>₹ 23,994</span>
          </div>
          <button className="w-full bg-[#FFB100] text-[#002E4D] p-3 rounded-lg mt-6 font-semibold hover:bg-[#FFD700]">
            Place Your Order
          </button>
        </div> */}
            <div className="bg-[#002E4D] p-6 rounded-lg border-2 border-[#FFD700] w-[333px] h-[334px]">
  <h2 className="text-2xl font-semibold mb-4">ORDER TOTAL</h2>
  <div className="mb-4">
    <p className="flex justify-between"><span>Products</span> <span>08</span></p>
    <div className="border-b border-dotted border-[#FFD700] my-2"></div>
    <p className="flex justify-between"><span>Subtotal</span> <span>₹ 23,994</span></p>
    <div className=" my-2"></div>
    <p className="flex justify-between"><span>Shipping</span> <span>Free</span></p>
    <div className=" my-2"></div>
    <p className="flex justify-between text-green-500"><span>You Save</span> <span>₹ 6,000</span></p>
  </div>
  <div className="border-b border-dotted border-[#FFD700] my-2"></div>
  <div className="flex justify-between font-bold text-xl mt-2">
    <span>Total</span> <span>₹ 23,994</span>
  </div>
  <button className="w-full bg-[#FFB100] text-[#002E4D] p-3 rounded-lg mt-6 font-semibold hover:bg-[#FFD700]">
    Place Your Order
  </button>
</div>


            </div>
        </div>
    );
};

export default CheckoutPage;