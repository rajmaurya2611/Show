"use client";
import { Carousel, Card } from "../../components/homepage/ui/apple-cards-carousel";
import img from "../../assets/images/homepage/img1.jpg";
import forklift from "../../assets/images/homepage/forklift.jpg";
import Dwg from "../../assets/images/homepage/Dwg.jpg"
import Motherson_Translate from "../../assets/images/homepage/Motherson_Translate.jpg"
import Glove from "../../assets/images/homepage/Glove.jpg"
import M_Translate from "../../assets/images/homepage/M translate.jpg"

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black flex flex-col items-center text-center">
  <h2 className="text-xl md:text-5xl font-poppins font-light text-white">
    Our Products
  </h2>
  <Carousel items={cards} />
</div>

  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src={img} // Using a regular img tag
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DrawingComparison = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-center">
      {/* Image */}
      <img
        src= {Dwg} // Replace with your actual image URL
        alt="Drawing Comparison"
        className="w-full md:w-1/2 h-auto mx-auto object-contain mb-6"
      />

      {/* Heading */}
      <h2 className="text-3xl font-bold text-neutral-700 mb-4">Drawing Comparison</h2>

      {/* Description */}
      <p className="text-neutral-600 text-base md:text-lg max-w-3xl mx-auto mb-6">
        This section allows you to compare your drawings, track progress, and explore various
        drawing techniques. It’s perfect for artists looking to improve their skills and
        benchmark their work.
      </p>

      {/* Button */}
      <button
  onClick={() => window.location.assign("https://www.google.com")}
  className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-500 transition-all"
>
  Go to Google
</button>
    </div>
  );
};


const data = [
  {
    category: "",
    title: "Forklift Safety",
    src: forklift, // Direct reference to imported image
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Drawing Comparison",
    src: Dwg, // Direct reference to imported image
    content: <DrawingComparison/>,
  },
  {
    category: "",
    title: "Motherson Translate",
    src: Motherson_Translate, // Direct reference to imported image
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Glove Detection System",
    src: Glove, // Direct reference to imported image
    content: <DummyContent />,
  },
  {
    category: "",
    title: "M Translate",
    src: M_Translate, // Direct reference to imported image
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: img, // Direct reference to imported image
    content: <DummyContent />,
  },
];
