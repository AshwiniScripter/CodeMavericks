import React, { useState } from 'react';
import Bicycle from "../images/Bicycle.png";
import Cloths from "../images/Cloths.png";
import Electrical from "../images/Electrical.png";

const flats = [
  { address: "Lane no.2, Sainagar, Kondhwa", contact: "987654321", image: Bicycle },
  { address: "Lane no.3, Sukhsagar, Kondhwa", contact: "987654321", image: Cloths },
  { address: "Lane no.7, Om Society, Katraj", contact: "987654321", image: Electrical },
];

const rentedItems = [
  { name: "Bicycle", image: Bicycle },
  { name: "Cloths", image: Cloths },
  { name: "Electrical Items", image: Electrical },
];

const Card = ({ address, rent, food, contact, image, flatmatesRequired, buttonLabel }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-72 text-center mx-auto">
      <img src={image} alt={address} className="w-full h-40 object-cover rounded-xl mb-4" />
      <p className="text-md font-semibold">{address}</p>
      {rent && <p className="text-sm">Rent: Rs. {rent}</p>}
      {food && <p className="text-sm">Food: {food}</p>}
      {contact && <p className="text-sm">Contact: {contact}</p>}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold">
        {buttonLabel} ➜
      </button>
    </div>
  );
};

const Rentify = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Filter to only show the Bicycle item in the modal
  const bicycleItem = rentedItems.filter(item => item.name === "Bicycle");

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10">
        Vi-<span className="text-blue-600">Sync</span> Rental
      </h1>

      <div className="w-full max-w-6xl">
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 mx-10">
            <span className="text-black">Lease </span> Item
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flats.map((flat, index) => (
              <Card key={index} {...flat} buttonLabel="Book now" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <button 
          onClick={openModal} 
          className="bg-blue-600 text-white px-6 py-2 rounded-xl mb-6 font-semibold"
        >
          View Your Rental Items
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-2xl w-96">
              <h2 className="text-2xl font-bold text-center mb-6">Your Rental Items</h2>
              <div className="space-y-6">
                {bicycleItem.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
                    <p className="text-lg font-semibold">{item.name}</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={closeModal} 
                className="bg-red-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rentify;
