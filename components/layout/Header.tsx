// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Villa",
    "Apartment",
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">ALX Listing</div>

       
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full max-w-md p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div className="hidden md:flex space-x-4">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-blue-600">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
