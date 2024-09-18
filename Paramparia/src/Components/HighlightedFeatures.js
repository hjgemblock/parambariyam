import React from 'react';
import agriculture from '../asstes/agriculture.png'
const HighlightedFeatures = () => {
  const features = [
    {
      label: "Highlight",
      title: "Essential millets that capture the flavors of Indian cuisine",
      imageUrl: agriculture,
    },
    {
      label: "Lowlight",
      title: "Innovative grains inspired by global cultures",
      imageUrl: agriculture,
    },
    {
      label: "Spotlight",
      title: "Nutritious seeds packed with plant-based proteins",
      imageUrl: agriculture,
    },
    {
      label: "Highlight",
      title: "Essential millets that capture the flavors of Indian cuisine",
      imageUrl: agriculture,
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a1a2a] to-[#001f3f] py-10 px-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Highlighted Features</h2>
        <p className="text-white text-sm mt-2">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-16 px-6 mt-8 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-cover bg-center md:w-[350px] h-[474px]" // Changed height to h-96
            style={{ backgroundImage:`url(${feature.imageUrl})` }}
          >
            <div className="absolute inset-0"></div> {/* Dark overlay for better text contrast */}
            
            {/* Text at the top */}
            <div className="relative z-10 p-4">
              <h3 className="text-gray-200 font-bold text-sm">{feature.label}</h3>
              <p className="text-lg font-semibold text-white mt-2">{feature.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightedFeatures;