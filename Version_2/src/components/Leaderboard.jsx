import React from "react";
import Person1Image from "../images/Testimonial1.png";
import Person2Image from "../images/Testimonial2.png";
import Person3Image from "../images/Testimonial3.png";
import Person4Image from "../images/Testimonial4.png";

const profiles = [
  { name: "Adwait Deshmukh", college: "VIIT'27", score: 453672, image: Person3Image },
  { name: "Maya Renke", college: "PICT'2025", score: 245638, image: Person1Image },
  { name: "Raj Bansal", college: "VBSD'29", score: 124578, image: Person2Image },
  { name: "Priya Joshi", college: "MIT'25", score: 567432, image: Person4Image }
];

const Card = ({ name, college, score, image }) => {
  return (
    <div className="bg-blue-600 text-white rounded-2xl p-6 w-full sm:w-80 flex flex-col items-center mx-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-[220px] h-[150px] mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm">{college}</p>
      <p className="text-md flex items-center mt-3">
        <span className="text-xl mr-2">⭐</span> {score}
      </p>
    </div>
  );
};

const Leaderboard = () => {
  return (
    <div>
      <div className="text-5xl font-semibold text-center mt-[90px]">
        <h1>Live <span className="text-blue-800">Leaderboard</span></h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-10 px-4 sm:px-8 md:px-16 lg:px-24 overflow-x-auto">
        {profiles.map((profile, index) => (
          <Card key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
