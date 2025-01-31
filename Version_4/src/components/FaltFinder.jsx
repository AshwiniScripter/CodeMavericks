import React from 'react';
import FlatImage1 from "../images/Rent1.png";
import FlatImage2 from "../images/Rent2.png";
import FlatImage3 from "../images/Rent3.png";
import ProfileImage from "../images/Profile.png";
import Profile1Image from "../images/Profile1.png";
import Profile2Image from "../images/Profile2.png";

const flats = [
  { address: "Lane no.2, Sainagar, Kondhwa", rent: 3000, food: "N/A", contact: "987654321", image: FlatImage1 },
  { address: "Lane no.3, Sukhsagar, Kondhwa", rent: 3000, food: "N/A", contact: "987654321", image: FlatImage2 },
  { address: "Lane no.7, Om Society, Katraj", rent: 3000, food: "N/A", contact: "987654321", image: FlatImage3 },
];

const flatmates = [
  {
    address: "Lane no.4, Mansi Apartment, Sukhsagar",
    Rent: 4000,
    contact: "9876765456",
    flatmatesRequired: "2 Flatmates Required",
    image: ProfileImage,
  },
  {
    address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur",
    Rent: 3500,
    contact: "9876501234",
    flatmatesRequired: "1 Flatmate Required",
    image: Profile1Image,
  },
  {
    address: "Lane no.7, Down Hill Society, Rajaswa Nagar, Solapur",
    Rent: 3000,
    contact: "9876587654",
    flatmatesRequired: "3 Flatmates Required",
    image: Profile2Image,
  },
];

const Card = ({ address, rent, food, contact, image, flatmatesRequired, buttonLabel }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-72 text-center mx-auto">
      <img src={image} alt={address} className="w-full h-40 object-cover rounded-xl mb-4" />
      <p className="text-md font-semibold">{address}</p>
      {rent && <p className="text-sm">Rent: Rs. {rent}</p>}
      {food && <p className="text-sm">Food: {food}</p>}
      {contact && <p className="text-sm">Contact: {contact}</p>}
      {flatmatesRequired && (
        <span className="text-red-700 font-semibold animate-pulse">{flatmatesRequired}</span>
      )}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold">
        {buttonLabel} ➜
      </button>
    </div>
  );
};

const FlatFinder = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10">
        Vi-<span className="text-blue-600">Sync</span> Flat and Flatmates
      </h1>

      <div className="w-full max-w-6xl">
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 mx-10">
            <span className="text-black">Find </span> Flats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flats.map((flat, index) => (
              <Card key={index} {...flat} buttonLabel="Book now" />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 mx-10">
            <span className="text-black">Find </span> Flatmates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flatmates.map((flatmate, index) => (
              <Card
                key={index}
                address={flatmate.address}
                rent={flatmate.Rent}
                contact={flatmate.contact}
                flatmatesRequired={flatmate.flatmatesRequired}
                image={flatmate.image}
                buttonLabel="Register"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatFinder;
