import React from "react";
import star from '../asstes/Frame 143.png'
// Sample data for recipes
import Recipe from '../asstes/Recipe (2).png'
const steps = [
  {
    step: "Step 1",
    description: "Wash the 100g Millet in a bowl with 200ml hot water",
    imageUrl: star, // Replace with actual image path
  },
  {
    step: "Step 2",
    description: "Add the soaked Millet to a pot with 400ml of water",
    imageUrl: star,
  },
  {
    step: "Step 3",
    description: "Bring the water to a boil, then reduce to a simmer",
    imageUrl: star,
  },
  {
    step: "Step 4",
    description: "Fluff the Millet in the bowl with a fork and serve hot",
    imageUrl: star,
  },
];

const otherRecipes = [
  {
    title: "Foxtail Millet Pulao",
    imageUrl: Recipe,
    time: "5 minutes",
  },
  {
    title: "Millet Gravy",
    imageUrl: Recipe,
    time: "10 minutes",
  },
  {
    title: "Chickpea Curry",
    imageUrl: Recipe,
    time: "10 minutes",
  },
];

const StarRecipe = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a1a2a] to-[#001f3f] py-10 px-16">
      {/* Star Recipe Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Try Our Star Recipe</h2>
        <p className="text-white text-sm mt-2">
          Explore the essential millets that capture the authentic flavors of
          Indian cuisine in every dish
        </p>
      </div>

      {/* Steps Section */}
      {/* <div className="flex flex-row justify-between">
        {steps.map((step, index) => (
          <div key={index} className=" rounded-lg shadow-md p-4 text-center md:w-[390px] h-[258px]">
            <img
              src={step.imageUrl}
              alt={step.step}
              className="rounded-lg mb-4 w-full h-full "
            />
            <button className="text-yellow-500 font-bold mb-2">{step.step}</button>
            <p className="text-white">{step.description}</p>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col justify-between md:flex-row">
        {steps.map((step, index) => (
          <div key={index} className="rounded-lg shadow-md p-4 text-center md:w-[390px] h-[258px] relative">
            <div className="flex flex-col "> <div> <img
              src={step.imageUrl}
              alt={step.step}
              className="rounded-lg mb-4 w-full h-full"
            />
              <button className="absolute top-6 left-6 bg-yellow-500 text-white font-bold py-1 px-3 rounded-lg">
                {step.step}
              </button>
            </div>
              <div>
                <p className="text-white  ">{step.description}</p></div>
            </div>
          </div>
        ))}
      </div>


      {/* Other Recipes Section */}
      <div className="mt-12 px-16">
        <h3 className="text-2xl font-semibold text-white mb-4">Try Other Recipes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherRecipes.map((recipe, index) => (
            <div
              key={index}
              className="relative  rounded-lg shadow-md overflow-hidden w-[420px] h-[244px]"
            >
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-[420px] h-[244px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 top:[2px]">
                <div className="flex flex-row justify-between">
                <h4 className="text-lg font-bold text-white">{recipe.title}</h4>
                <p className="text-gray-300">{recipe.time}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarRecipe;