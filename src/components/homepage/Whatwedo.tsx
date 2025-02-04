// import React from "react";
// import BackgroundImage from "../../assets/images/homepage/bg.jpg";
// import cv from "../../assets/images/homepage/cv.jpg";
// import nlp from "../../assets/images/homepage/nlp.jpg";
// import iot from "../../assets/images/homepage/iot.jpg";

// const Card = ({ image, title, description }: { image: string; title: string; description: string }) => {
//   return (
//     <div className="flex w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
//       {/* Left Side: Image */}
//       <div className="w-1/3 h-80">
//         <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
//       </div>

//       {/* Right Side: Text */}
//       <div className="w-2/3 p-6 flex flex-col justify-center">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-2 font-poppins">{title}</h2>
//         <p className="text-lg text-gray-600 font-poppins">{description}</p>
//       </div>
//     </div>
//   );
// };

// const Whatwedo = () => {
//   const cardData = [
//     {
//       image: nlp,  // Replace with appropriate image for NLP+Gen AI
//       title: "NLP & Gen AI",
//       description: "Explore the world of Natural Language Processing and Generative AI. Dive into how AI can understand, generate, and interact with human language in various applications, from chatbots to advanced language models.",
//     },
//     {
//       image: cv,  // Replace with appropriate image for Computer Vision
//       title: "Computer Vision",
//       description: "Discover the capabilities of Computer Vision. Learn how machines can interpret and understand visual data, enabling applications like facial recognition, object detection, and autonomous vehicles.",
//     },
//     {
//       image: iot,  // Replace with appropriate image for IoT
//       title: "Internet of Things (IoT)",
//       description: "The Internet of Things connects devices to the internet, enabling smarter decision-making. Learn how IoT is transforming industries by enabling automation, remote monitoring, and real-time data analytics.",
//     },
//   ];

//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* Overlay to ensure text readability */}
//       <div className="absolute inset-0 bg-black/90"></div>

//       {/* Content inside the background */}
//       <div className="relative z-10">
//         <h2 className="text-xl md:text-5xl font-poppins font-light text-white text-center pt-16 mb-8">
//           Our Expertise
//         </h2>
//         <div className="space-y-6 pb-10 pt-12">
//           {cardData.map((card, index) => (
//             <Card key={index} image={card.image} title={card.title} description={card.description} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Whatwedo;

// import React from "react";
// import BackgroundImage from "../../assets/images/homepage/bg.jpg";
// import cv from "../../assets/images/homepage/cv.jpg";
// import nlp from "../../assets/images/homepage/nlp.jpg";
// import iot from "../../assets/images/homepage/iot.jpg";

// const Card = ({ image, title, description }: { image: string; title: string; description: string }) => {
//   return (
//     <div className="flex w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
//       {/* Left Side: Image */}
//       <div className="w-1/3 h-80">
//         <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
//       </div>

//       {/* Right Side: Text */}
//       <div className="w-2/3 p-6 flex flex-col justify-center">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-2 font-poppins">{title}</h2>
//         <p className="text-lg text-gray-600 font-poppins">{description}</p>
//       </div>
//     </div>
//   );
// };

// const Whatwedo = () => {
//   const cardData = [
//     {
//       image: nlp,  // Replace with appropriate image for NLP+Gen AI
//       title: "NLP & Gen AI",
//       description: "Explore the world of Natural Language Processing and Generative AI. Dive into how AI can understand, generate, and interact with human language in various applications, from chatbots to advanced language models.",
//     },
//     {
//       image: cv,  // Replace with appropriate image for Computer Vision
//       title: "Computer Vision",
//       description: "Discover the capabilities of Computer Vision. Learn how machines can interpret and understand visual data, enabling applications like facial recognition, object detection, and autonomous vehicles.",
//     },
//     {
//       image: iot,  // Replace with appropriate image for IoT
//       title: "Internet of Things (IoT)",
//       description: "The Internet of Things connects devices to the internet, enabling smarter decision-making. Learn how IoT is transforming industries by enabling automation, remote monitoring, and real-time data analytics.",
//     },
//   ];

//   return (
//     <div className="relative bg-black"> {/* Set black background instead of bg-cover */}
//       {/* Overlay to ensure text readability */}
//       <div className="absolute inset-0 bg-black/90"></div>

//       {/* Content inside the background */}
//       <div className="relative z-10">
//         <h2 className="text-xl md:text-5xl font-poppins font-light text-white text-center pt-16 mb-8">
//           Our Expertise
//         </h2>
//         <div className="space-y-6 pb-10 pt-12">
//           {cardData.map((card, index) => (
//             <Card key={index} image={card.image} title={card.title} description={card.description} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Whatwedo;


// optimize
import React, { memo } from "react";
import BackgroundImage from "../../assets/images/homepage/bg.jpg";
import cv from "../../assets/images/homepage/cv.jpg";
import nlp from "../../assets/images/homepage/nlp.jpg";
import iot from "../../assets/images/homepage/iot.jpg";

// Card Component - Wrapped with React.memo for optimization
const Card = memo(({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="flex w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
      {/* Left Side: Image */}
      <div className="w-1/3 h-80">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover "  // Lazy loading for images
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-2/3 p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 font-poppins">{title}</h2>
        <p className="text-lg text-gray-600 font-poppins">{description}</p>
      </div>
    </div>
  );
});

// Main Component: Whatwedo
const Whatwedo = () => {
  const cardData = [
    {
      image: nlp,  // Replace with appropriate image for NLP+Gen AI
      title: "NLP & Gen AI",
      description:
        "Explore the world of Natural Language Processing and Generative AI. Dive into how AI can understand, generate, and interact with human language in various applications, from chatbots to advanced language models.",
    },
    {
      image: cv,  // Replace with appropriate image for Computer Vision
      title: "Computer Vision",
      description:
        "Discover the capabilities of Computer Vision. Learn how machines can interpret and understand visual data, enabling applications like facial recognition, object detection, and autonomous vehicles.",
    },
    {
      image: iot,  // Replace with appropriate image for IoT
      title: "Internet of Things (IoT)",
      description:
        "The Internet of Things connects devices to the internet, enabling smarter decision-making. Learn how IoT is transforming industries by enabling automation, remote monitoring, and real-time data analytics.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }} // Ensure background image scaling
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Content inside the background */}
      <div className="relative z-10">
        <h2 className="text-xl md:text-5xl font-poppins font-light text-white text-center pt-16 mb-8">
          Our Expertise
        </h2>
        <div className="space-y-6 pb-10 pt-12">
          {cardData.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
