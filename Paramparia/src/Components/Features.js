import React from 'react';
// import flavour from "../assets/Group.png";
import flavour from "../asstes/Group.png"
import Natural from "../asstes/Frame 60.png"
import Premium from "../asstes/Frame 61.png"
import Health from "../asstes/Group 11.png"

const WhyChooseUs = () => {
  const features = [
    {
      title: "Authentic Flavors",
      description: "Experience genuine flavors rooted in Indian heritage",
      icon: flavour,
    },
    {
      title: "100% Natural",
      description: "No artificial flavors, colors, or preservatives are added",
      icon: Natural,
    },
    {
      title: "Premium Quality",
      description: "Only the finest and natural ingredients in every product",
      icon: Premium,
    },
    {
      title: "Health Focused",
      description: "Nutrient-rich products for a healthier lifestyle",
      icon: Health,
    },
  ];

  return (
    <section className="bg-[#0a1a2a] px-0 md:px-44 py-16  text-white">
      <div className="container  px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
        <p className="text-center mb-12">
          Finest collection of organic millets, spices, and more delivered straight to your door.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 bg-[#041423] rounded-lg flex flex-col items-center text-center space-y-4"
            >
              <img src={feature.icon} alt={feature.title} className="w-[114px] h-[127px]" /> {/* Use src attribute */}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;