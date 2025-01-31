import React, { useState } from 'react';
import Bicycle from "../images/Bicycle.png";
import Cloths from "../images/Cloths.png";
import Electrical from "../images/Electrical.png";

const flats = [
  { address: "Lane no.2, Sainagar, Kondhwa", contact: "987654321", image: Bicycle, rent: 3000, externalLink: "https://mywebar.com/p/Project_1_8rae0dh58y" },
  { address: "Lane no.3, Sukhsagar, Kondhwa", contact: "987654321", image: Cloths, rent: 2500, externalLink: "https://mywebar.com/p/Project_0_gq4odcnk6x" },
  { address: "Lane no.7, Om Society, Katraj", contact: "987654321", image: Electrical, rent: 400, externalLink: "https://example.com/electrical" },
];

const rentedItems = [
  { name: "Bicycle", image: Bicycle, description: "A mountain bicycle for rent.", rent: 300, contact: "987654321", externalLink: "https://mywebar.com/p/Project_1_8rae0dh58y" },
  { name: "Cloths", image: Cloths, description: "Used clothes for rent.", rent: 100, contact: "987654321", externalLink: "https://mywebar.com/p/Project_0_gq4odcnk6x" },
  { name: "Electrical Items", image: Electrical, description: "Various electrical items for rent.", rent: 500, contact: "987654321", externalLink: "https://example.com/electrical" },
];

const Card = ({ address, rent, contact, image, externalLink, buttonLabel, onClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-72 text-center mx-auto mb-10 cursor-pointer" onClick={onClick}>
      <img src={image} alt={address} className="w-full h-40 object-cover rounded-xl mb-4" />
      <p className="text-md font-semibold">{address}</p>
      {rent && <p className="text-sm">Rent: Rs. {rent}</p>}
      {contact && <p className="text-sm">Contact: {contact}</p>}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold">
        {buttonLabel} ➜
      </button>

      {/* Add External Link Button */}
      {externalLink && (
        <a 
          href={externalLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold block"
        >
          View Virtually
        </a>
      )}
    </div>
  );
};

const Rentify = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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
              <Card 
                key={index} 
                {...flat} 
                buttonLabel="Book now" 
                onClick={() => openModal(flat)} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <button 
          onClick={() => openModal(rentedItems[0])} 
          className="bg-blue-600 text-white px-6 py-2 rounded-xl mb-6 font-semibold"
        >
          View Your Rental Items
        </button>

        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-2xl w-96">
              <h2 className="text-2xl font-bold text-center mb-6">{selectedItem.name}</h2>
              <div className="space-y-6">
                <img src={selectedItem.image} alt={selectedItem.name} className="w-16 h-16 object-cover rounded-full" />
                <p>{selectedItem.description}</p>
                <p><strong>Rent: </strong> Rs. {selectedItem.rent}</p>
                <p><strong>Contact: </strong> {selectedItem.contact}</p>
              </div>
              <button 
                onClick={closeModal} 
                className="bg-red-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold"
              >
                Close
              </button>

              {/* External link button for modal */}
              {selectedItem.externalLink && (
                <a 
                  href={selectedItem.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold block"
                >
                  View Virtually
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rentify;
