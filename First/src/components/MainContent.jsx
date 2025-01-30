import React from 'react';
import EventImage from "../images/Event.png";
import RentImage from "../images/Rent.png";
import FlatImage from "../images/Flatmate.png";

const MainContent = () => {
  return (
    <div>
      <div className="text-5xl text-center font-semibold mt-[70px]">
        <h1>
          Our College, Our<br />
          Community In <span className="text-blue-800">Sync</span>
        </h1>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[80px] px-4 justify-center">
        {/* Event */}
        <div className="p-6 rounded-lg shadow-lg text-center max-w-[300px] mx-auto">
          <img
            src={EventImage}
            alt="Event"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">Event</h2>
          <p className="text-black text-justify"> Where You Might Find ‘The One’ (or Just Free WiFi 😏)
          Explore hackathons, tech & non-tech events, and more!</p>
          <button className="flex items-center bg-blue-600 w-[100px] h-[30px] rounded-xl mt-4">
            <h2 className='text-center mx-2 text-white font-semibold'>Event</h2>
            <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                color='white'
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

        {/* Flat */}
        <div className="p-6 rounded-lg shadow-lg text-center max-w-[300px] mx-auto">
          <img
            src={RentImage}
            alt="Rent"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">FlatFinder</h2>
          <p className="text-black text-justify">Find a flatmate who won’t just share rent but also your Netflix account.
          Explore flats that make you feel home like!</p>
          <button className="flex items-center bg-blue-600 w-[140px] h-[30px] rounded-xl mt-4">
            <h2 className='text-center mx-2 text-white font-semibold'>FlatFinder</h2>
            <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                color='white'
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

        {/* Rent */}
        <div className=" p-6 rounded-lg shadow-lg text-center max-w-[300px] mx-auto">
        <img
            src={FlatImage}
            alt="Rent"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">Rentify</h2>
          <p className="text-black text-justify">Renting’s the new dating – get something you want, and send it back when you're done. No strings attached!</p>
          <button className="flex items-center bg-blue-600 w-[100px] h-[30px] rounded-xl mt-4">
            <h2 className='text-center mx-2 text-white font-semibold'>Rentify</h2>
            <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                color='white'
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

export default MainContent;
