import React, { useState } from "react"

export default function ItemCard({ title, description, image }) {
  const label = title.toLowerCase().includes("found") ? "Found" : "Lost"
  const labelColor = label === "Found" ? "bg-green-500" : "bg-red-500"

  // Static mock data (you can pass these as props later)
  const additionalImages = [
    image,
    "https://source.unsplash.com/200x100/?lost", // Mock image 1
    "https://source.unsplash.com/200x100/?found" // Mock image 2
  ]
  const location = title.includes("iPhone") ? "Cafeteria" : title.includes("Backpack") ? "Library" : "Main Gate"
  const date = "June 20, 2025"
  const time = "3:45 PM"

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Responsive Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col sm:flex-row">
        {/* Image Section */}
        <div className="sm:w-1/3 w-full">
          <img src={image} alt={title} className="1/3 h-48 object-cover" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <span className={`text-xs font-semibold ${labelColor} text-white px-2 py-1 rounded-full`}>
              {label}
            </span>
            <h3 className="text-md font-bold text-gray-900 dark:text-white mt-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              📍 {location} | 🗓️ {date} | ⏰ {time}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-3 w-fit bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-medium"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg w-full max-w-2xl p-6 mx-4 relative overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black dark:hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            {/* Large Image */}
            <img src={image} alt={title} className="w-full h-64 object-cover rounded mb-4" />

            {/* Additional Images */}
            <div className="flex gap-2 overflow-x-auto mb-4">
              {additionalImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Additional ${idx}`}
                  className="w-24 h-20 object-cover rounded"
                />
              ))}
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm mb-2">{description}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              <strong>Location:</strong> {location} <br />
              <strong>Date:</strong> {date} <br />
              <strong>Time:</strong> {time}
            </p>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                Claim
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm">
                Report
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
