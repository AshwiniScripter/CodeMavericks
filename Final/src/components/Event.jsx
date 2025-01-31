import React from "react";
import HackImage1 from "../images/Hackathon1.png";
import HackImage2 from "../images/Hackathon2.png";
import HackImage3 from "../images/Hackathon3.png";
import HackImage4 from "../images/Hackathon4.png";
import CulturalImage1 from "../images/CulturalImage1.png";
import CultureImage2 from "../images/CulturalImage2.png";
import CultureImage3 from "../images/CulturalImage3.png";
import CultureImage4 from "../images/CulturalImage4.png";

const HackathonCard = ({ image, title, date }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        📅 <span>{date}</span>
      </p>
      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
        Register
        <span className="material-icons">
          <svg
            className="ml-2 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

const UpcomingHackathons = () => {
  const hackathons = [
    {
      image: HackImage1,
      title: "XR Innovators Hackathon 🕶️",
      date: "March 10-12, 2025",
    },
    {
      image: HackImage2,
      title: "AI Nexus Hackathon 🤖",
      date: "April 20-22, 2025",
    },
    {
      image: HackImage3,
      title: "CodeQuest 2025 🖥️",
      date: "May 15-17, 2025",
    },
    {
      image: HackImage4,
      title: "CyberShield Hackathon 🔒",
      date: "June 5-7, 2025",
    },
  ];

  const culturalEvents = [
    {
      image: CultureImage2,
      title: "Literary Fest  📚",
      date: "March 15, 2025",
    },
    {
      image: CulturalImage1,
      title: "Dance Competition 💃",
      date: "April 10, 2025",
    },
    {
      image: CultureImage3,
      title: "Music Concert 🎵",
      date: "May 5, 2025",
    },
    {
      image: CultureImage4,
      title: "Drama/Skits  🎭",
      date: "June 25, 2025",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      {/* First Section */}
      <div className="text-5xl font-semibold text-center mt-[40px] mb-[30px]">
        <h1>
          <span className="text-blue-800">Vi-Sync</span> Opportunities!
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Upcoming <span className="text-blue-600">Hackathons</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hackathons.map((hackathon, index) => (
            <HackathonCard
              key={index}
              image={hackathon.image}
              title={hackathon.title}
              date={hackathon.date}
            />
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="text-5xl font-semibold text-center mt-[60px] mb-[30px]">
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Upcoming <span className="text-blue-600">Cultural Events</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {culturalEvents.map((event, index) => (
            <HackathonCard
              key={index}
              image={event.image}
              title={event.title}
              date={event.date}
            />
          ))}
        </div>
      </div>

      {/* New Section at the Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-between mb-10">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition flex items-center">
            Organize an Event
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Find your Hackathon Partner
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingHackathons;