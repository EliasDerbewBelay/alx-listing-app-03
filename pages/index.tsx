// pages/index.tsx
import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE } from "@/constants";
import Image from "next/image";
// import { PropertyProps } from "@/interfaces";

const Pill: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border ${
        isActive
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
      } transition`}
    >
      {label}
    </button>
  );
};

const IndexPage: React.FC = () => {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Beachfront",
    "City View",
    "Countryside",
    "Luxury",
  ];
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="bg-opacity-50 p-8 rounded-lg z-1000">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
        <div className="absolute w-full bg-black h-[24rem] opacity-40"></div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? null : filter)
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.name}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={400}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-gray-600">
                  ${property.price.toLocaleString()}/night
                </p>
                <p className="text-yellow-500">★ {property.rating}</p>
                {property.discount && (
                  <p className="text-red-500">{property.discount}% off</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
