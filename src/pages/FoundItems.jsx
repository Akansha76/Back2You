import { useState } from "react";
import React from 'react';

const foundItems = [
  {
    id: 1,
    name: "Black Wallet",
    description: "Found near the library. Contains some ID cards and cash.",
    dateFound: "2025-07-04",
    location: "Library Block",
    image: "https://i.pinimg.com/originals/60/de/b3/60deb334a5026627eecabbbc98def86c.jpg"
  },
  {
    id: 2,
    name: "Samsung Phone",
    description: "Found on bench in the canteen area. Screen cracked.",
    dateFound: "2025-07-03",
    location: "Canteen",
    image: "https://www.80scasualclassics.co.uk/images/adidas-originals-classic-backpack-black-p10295-63907_zoom.jpg"
  },
  {
    id: 2,
    name: "HeadPhone",
    description: "Noise Newly Launched Airwave Max 5 Wireless Over Ear Headphones Found on bench in the canteen area. Screen cracked.",
    dateFound: "2025-07-03",
    location: "Canteen",
    image: "https://m.media-amazon.com/images/I/51YKwVXBhIL._SX522_.jpg"
  }
  // Add more found items here
];

const FoundItems = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6">Found Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foundItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-65 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="mt-2 text-sm text-gray-500">📍 {item.location}</p>
              <p className="text-sm text-gray-500">📅 Found on: {item.dateFound}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Claim
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundItems;
