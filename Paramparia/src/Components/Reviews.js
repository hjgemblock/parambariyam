import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "K. Maumita",
      rating: 5,
      text: "As a working-class woman, I am constantly juggling busy work schedules and an un-existing social life. I got this because I was tired of waking up with my hair all tangled. But now with KLISME, I have found a simple and effective way to pamper myself and wake up refreshed and radiant. It's been two weeks of sleeping on this thing, and I have 90% fewer knots in my hair overall. Happy about the purchase."
    },
    {
      name: "L. Andrei",
      rating: 5,
      text: "I am a busy professional always on the go. I decided to try KLISME to see if it can help me wake up feeling refreshed and ready to tackle the day. After using it for a couple of weeks, I can confidently say that my hair has become more manageable, and I am loving the results."
    },
    {
      name: "M. Sophie",
      rating: 4,
      text: "Being a new mom means I have limited time for self-care. KLISME has been a game-changer for me. I no longer wake up with crazy bed hair, and my mornings have become much smoother. I highly recommend it to all the busy moms out there!"
    }
  ];

  return (
    <div className="bg-[#0a1a2a] text-white p-10">
      <h2 className="text-3xl font-bold text-center mb-4">See What Others Are Saying</h2>
      <p className="text-center mb-6 text-gray-300">
        Authentic stories of satisfaction and experience, fostering enduring trust with each interaction.
      </p>
      <div className='flex flex-col md:flex-row md:space-x-8'>
        {/* Left Side - Ratings Section */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="bg-yellow-400 rounded-full px-4 py-2 text-black text-xl font-bold mb-2">
            4.7 ⭐ 
          </div>
          <p>4,567 Ratings | 43 Reviews</p>
          <div className="flex flex-col space-y-1 mt-4">
            <div className="flex flex-row space-x-2 text-center">
              <p>43%</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <div className="flex flex-row space-x-2 text-center">
              <p>27%</p>
              <div className="text-yellow-400">★★★★☆</div>
            </div>
            <div className="flex flex-row space-x-2 text-center">
              <p>15%</p>
              <div className="text-yellow-400">★★★☆☆</div>
            </div>
            <div className="flex flex-row space-x-2 text-center">
              <p>10%</p>
              <div className="text-yellow-400">★★☆☆☆</div>
            </div>
            <div className="flex flex-row space-x-2 text-center">
              <p>6%</p>
              <div className="text-yellow-400">★☆☆☆☆</div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Reviews Section */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#0a1a2a] rounded-lg p-6 shadow-md border border-gray-600"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <div className="flex">
                    {Array(review.rating).fill().map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;