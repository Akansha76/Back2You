import React from "react";

const LostItemsPage = () => {
  const lostItems = [
    {
      id: 1,
      name: "Black Wallet",
      description:
        "Lost near the cafeteria. Contains ID and some cash.",
      dateLost: "2025-07-04",
      location: "Campus Cafeteria",
      imageUrl:
        "https://lostowl.com/cdn/shop/products/art-deco-double-row-diamond-ring-300313_1024x1024.jpg?v=1698600015",
    },
    {
      id: 2,
      name: "Blue Nike Backpack",
      description:
        "Nike brand, contains books and a laptop.",
      dateLost: "2025-07-02",
      location: "Library",
      imageUrl:
        "https://the-english-workshop.com/wp-content/uploads/2024/01/clefs.jpg",
    },
    {
      id: 3,
      name: "Grey Laptop Backpack",
      description: "Contains a 15‑inch laptop and charger.",
      dateLost: "2025-07-02",
      location: "Library",
      imageUrl:
        "http://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back-980x537.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Lost Items
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {lostItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl bg-white p-6 shadow-lg transition
                       hover:scale-[1.02] hover:shadow-xl"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="mb-6 h-60 w-full rounded-md object-cover"
            />

            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>

            <p className="mt-2 text-sm text-gray-500">
              Lost on: {item.dateLost}
            </p>
            <p className="text-sm text-gray-500">
              Location: {item.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostItemsPage;
