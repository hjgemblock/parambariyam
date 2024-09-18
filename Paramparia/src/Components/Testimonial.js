import React, { useState } from 'react';
import { ImQuotesLeft } from 'react-icons/im'; // Import the ImQuotesLeft icon
import innerImage from '../asstes/innerImage.png'; // Update this path to your local image path
import color from '../asstes/color.png'; // Add the path to your cover image

const Testimonials = () => {
    const testimonials = [
        {
            text: "I never expected a simple product like quinoa to have such a profound impact on my well-being. It's amazing how it has transformed my daily routine and health.",
            author: "Maria"
        },
        {
            text: "Since using the product, my life has changed for the better. It has truly made my life easier and more fulfilling.",
            author: "Dhinakaran"
        },
        {
            text: "Switching to the barley product has been a game-changer for me. I feel more energized and vibrant every day, thanks to this addition to my diet.",
            author: "Anonymous"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-radial-white-black text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                    See What Others Are Saying
                </h2>

                {/* Dashed Line */}
                <div className="flex justify-center mb-4">
                    <div className="border-t-2 border-dashed border-yellow-500 w-[300px] sm:w-[606px]"></div>
                </div>

                <p className="text-center text-base sm:text-lg lg:text-xl mb-16">
                    Authentic stories of satisfaction and experience, fostering enduring trust with each interaction.
                </p>

                {/* Testimonial Cards Display */}
                <div className="relative flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`testimonial-item bg-[#112240] p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out 
                            ${currentIndex === index ? 'opacity-100 scale-100' : 'opacity-50 scale-90'} 
                            w-full sm:w-[300px] md:w-[400px] lg:w-[500px] text-center`}
                        >
                            <blockquote className="flex flex-col text-sm sm:text-base lg:text-lg italic mb-4">
                                {/* Opening Quote Icon */}
                                <ImQuotesLeft className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mb-2" />
                                <p>"{testimonial.text}"</p>
                            </blockquote>
                            <p className="text-right text-sm sm:text-base">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-row justify-center items-center mt-8 sm:mt-10 lg:mt-12 space-x-4">
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={handlePrev}
                    >
                        &larr;
                    </button>
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={handleNext}
                    >
                        &rarr;
                    </button>
                    <button
                        className="bg-white hover:bg-gray-600 text-gray-700 font-bold py-2 px-4 rounded-lg"
                        onClick={handleNext}
                    >
                        Find out more
                    </button>
                </div>

                {/* Bottom Image Section */}
                <div className="relative mt-12 sm:mt-16">
                    <img
                        src={innerImage}
                        alt="Background"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <img
                        src={color}
                        alt="Cover"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
