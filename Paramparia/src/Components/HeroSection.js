import React from "react";
import Hero from "../asstes/hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat md:h-[560px]"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute inset-0"></div> {/* Optional dark overlay */}
      <div className="relative container mx-auto h-full flex items-center">
        {/* Text Section */}
        <div className="text-white space-y-6 px-4 md:max-w-lg z-10 ">
          {/* Heading */}
          <h2 className="md:text-[3rem]  style={{ lineHeight: '1.3' }} ">
            <span className="text-white">Discover the</span> <br />
            <span className="font-bold text-yellow-500">
              Authentic Taste <br/> of India
            </span>
          </h2>
          
          {/* Paragraph */}
          <p className="md:text-2xl font-light">
            Authentic Indian millets, carefully crafted to bring the rich and
            vibrant flavors of India to your dishes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// import React from "react";
// import Hero from "../assests/hero.png";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat "
//       style={{ backgroundImage: url(${Hero}) }}
//     >
//       <div className="absolute inset-0"></div> {/* Optional dark overlay */}
//       <div className="relative container mx-auto h-full flex items-center">
//         {/* Text Section */}
//         <div className="text-white space-y-6 px-4 md:max-w-lg z-10">
//           {/* Heading */}
//           <h2 className="md:text-[3rem] leading-tight sm:text-[2rem] sm:leading-snug">
//             <span className="text-white">Discover the</span> <br />
//             <span className="font-bold text-yellow-500">
//               Authentic Taste <br /> of India
//             </span>
//           </h2>
          
//           {/* Paragraph */}
//           <p className="md:text-2xl font-light ">
//             Authentic Indian millets, carefully crafted to bring the rich and
//             vibrant flavors of India to your dishes
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;