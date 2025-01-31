import React from 'react';

const flats = [
  { address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur", rent: 3000, food: "N/A", contact: "987654321", image: "https://via.placeholder.com/150" },
  { address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur", rent: 3000, food: "N/A", contact: "987654321", image: "https://via.placeholder.com/150" },
  { address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur", rent: 3000, food: "N/A", contact: "987654321", image: "https://via.placeholder.com/150" }
];

const flatmates = [
  { address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur", image: "https://via.placeholder.com/150" },
  { address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur", image: "https://via.placeholder.com/150" },
  { address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur", image: "https://via.placeholder.com/150" }
];

const Card = ({ address, rent, food, contact, image, buttonLabel }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-72 text-center">
      <img src={image} alt={address} className="w-full h-40 object-cover rounded-xl mb-4" />
      <p className="text-md font-semibold">{address}</p>
      {rent && <p className="text-sm">Rent: Rs. {rent}</p>}
      {food && <p className="text-sm">Food: {food}</p>}
      {contact && <p className="text-sm">Contact: {contact}</p>}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold">{buttonLabel} ➜</button>
    </div>
  );
};

const Rentify = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Vi-<span className="text-blue-600">Sync</span> Flat and Flatmates</h1>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6"><span className='text-black'>Find </span> Flats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flats.map((flat, index) => (
            <Card key={index} {...flat} buttonLabel="Book now" />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6"><span className='text-black'>Find </span> Flatmates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flatmates.map((flatmate, index) => (
            <Card key={index} {...flatmate} buttonLabel="Register" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rentify;
