import React from 'react';
import AiImage from "../images/Ai.png";
import XrImage from "../images/XR.jpg";
import BlockchainImage from "../images/BlockChain.png";
import CyberSecurityImage from "../images/CyberSecurity.jpg";

const Trends = () => {
  return (
    <div>
      <div className="text-5xl text-center mt-[90px] font-semibold">
        <h1>
          Explore Tech <span className="text-blue-800">Trends</span>
        </h1>
      </div>

      {/* AI Section */}
      <div className="group grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 mt-[30px] px-4 sm:px-8 md:px-16 lg:px-24 items-stretch">
        {/* Image Section */}
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
          <button className="mt-4 w-40 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transform group-hover:translate-y-[-10px] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* XR Section */}
      <div className="group grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 mt-8 px-4 sm:px-8 md:px-16 lg:px-24 items-stretch">
        <div className="flex flex-col justify-center text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl mb-6 font-semibold">XR</h1>
          <p className="text-lg text-black text-justify">
            The launch of Apple's Vision Pro has played a pivotal role in XR's transition to mainstream adoption. Devices like the Vision Pro combine AR with high-resolution displays, making immersive experiences more accessible and practical for everyday use. These advancements are pushing AR and VR into broader applications like gaming, entertainment, and education.
          </p>
          <button className="mt-4 w-40 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transform group-hover:translate-y-[-10px] transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={XrImage}
            alt="XR"
            className="w-full max-w-md object-contain rounded-3xl"
          />
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="group grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 mt-8 px-4 sm:px-8 md:px-16 lg:px-24 items-stretch">
        <div className="flex justify-center items-center">
          <img
            src={BlockchainImage}
            alt="Blockchain"
            className="w-full max-w-md object-contain rounded-3xl"
          />
        </div>

        <div className="flex flex-col justify-center text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl mb-6 font-semibold">Blockchain</h1>
          <p className="text-lg text-black text-justify">
            Blockchain technology is reshaping industries by enabling secure and transparent transactions. Its applications range from cryptocurrencies like Bitcoin to supply chain management and digital identity verification. With its decentralized nature, blockchain is revolutionizing how we think about trust and data integrity.
          </p>
          <button className="mt-4 w-40 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transform group-hover:translate-y-[-10px] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Cyber Security Section */}
      <div className="group grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 mt-8 px-4 sm:px-8 md:px-16 lg:px-24 items-stretch">
        <div className="flex flex-col justify-center text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl mb-6 font-semibold">Cyber Security</h1>
          <p className="text-lg text-black text-justify">
            Cybersecurity is the practice of protecting systems, networks, and data from digital threats like hacking, theft, or damage. It involves using tools like encryption, firewalls, and multi-factor authentication to secure sensitive information. As technology advances, cybersecurity must evolve to counter increasingly sophisticated cyberattacks.
          </p>
          <button className="mt-4 w-40 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transform group-hover:translate-y-[-10px] transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={CyberSecurityImage}
            alt="Cyber Security"
            className="w-full max-w-md object-contain rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Trends;
