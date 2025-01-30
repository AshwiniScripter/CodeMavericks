import React from 'react';
import AiImage from "../images/Ai.png";
import XrImage from "../images/XR.jpg";

const Trends = () => {
  return (
    <div>
      <div className="text-5xl text-center mt-[80px] font-semibold">
        <h1>
          Explore Tech <span className="text-blue-800">Trends</span>
        </h1>
      </div>

      {/* Grid Layout for AI Section */}
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 mt-8 px-4 sm:px-8 md:px-16 lg:px-24 items-stretch">
        <div className="flex justify-center items-center">
          <img
            src={AiImage}
            alt="AI"
            className="w-full max-w-md object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl mb-6 font-semibold">AI</h1>
          <p className="text-lg text-black text-justify">
            The launch of DeepSeek, a Chinese AI startup, has intensified global competition in the AI landscape. DeepSeek's AI chatbot, which claims to rival models like OpenAI's ChatGPT at lower costs, has prompted companies like Meta to reinforce their commitment to AI investment. Meta CEO Mark Zuckerberg emphasized that the rise of such competitors strengthens their focus on AI, with plans for substantial investments in AI infrastructure.
          </p>
          <button className="mt-4 w-40 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>

      {/* XR Section */}
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] mt-6 px-4 sm:px-8 md:px-16 lg:px-24 items-stretch">
        <div className=" p-6 text-white rounded-lg shadow-lg flex justify-center items-center">
          <p className="text-lg font-semibold">
            {/* XR content */}
          </p>
        </div>

        <div className="p-6 text-white shadow-lg flex justify-center items-center">
          <img
            src={XrImage}
            alt="XR"
            className="max-h-full max-w-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Trends;
