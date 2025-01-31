import React, { useEffect, useState } from "react";
import Person1Image from "../images/Testimonial1.png";
import Person2Image from "../images/Testimonial2.png";
import Person3Image from "../images/Testimonial3.png";
import Person4Image from "../images/Testimonial4.png";

const profiles = [
  { email: "adwait@gmail.com", name: "Adwait Deshmukh", college: "VIIT'27", score: 453672, image: Person3Image },
  { email: "maya@gmail.com", name: "Maya Renke", college: "PICT'2025", score: 245638, image: Person1Image },
  { email: "raj@gmail.com", name: "Raj Bansal", college: "VBSD'29", score: 124578, image: Person2Image },
  { email: "priya@gmail.com", name: "Priya Joshi", college: "MIT'25", score: 567432, image: Person4Image }
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
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("userEmail");
    if (loggedInEmail) {
      const foundProfile = profiles.find(profile => profile.email === loggedInEmail);
      setUserProfile(foundProfile);
    }
  }, []);

  return (
    <div>
      <div className="text-5xl font-semibold text-center mt-[90px]">
        <h1>Live <span className="text-blue-800">Leaderboard</span></h1>
      </div>
      <div className="flex justify-center items-center mt-10 px-4">
        {userProfile ? <Card {...userProfile} /> : <p className="text-center text-gray-700">No profile found</p>}
      </div>
    </div>
  );
};

export default Leaderboard;
