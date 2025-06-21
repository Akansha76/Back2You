// src/pages/Home.jsx
// 4. Home.jsx (in src/pages/Home.jsx)
import Navbar from "../components/Navbar"
import ItemCard from "../components/ItemCard"
import { useState } from "react"

const mockItems = [
  {
    title: "Lost iPhone 13",
    description: "Last seen near cafeteria on June 20.",
    image: "//cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back-980x537.jpeg",
  },
  {
    title: "Found Backpack",
    description: "Black Adidas backpack found in library.",
    image: "https://www.80scasualclassics.co.uk/images/adidas-originals-classic-backpack-black-p10295-63907_zoom.jpg",
  },
  {
    title: "Lost Wallet",
    description: "Brown leather wallet lost at main gate.",
    image: "https://thumbs.dreamstime.com/b/lost-leather-wallet-money-street-ground-159234461.jpg",
  },
]

export default function Home() {
  const [search, setSearch] = useState("")
  const filtered = mockItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="bg-gradient-to-br from-pink-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Lost or Found Something?</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Let us help you get it back or report it for others.</p>
        <div className="flex justify-center gap-4">
          <a href="/report-lost" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
            Report Lost
          </a>
          <a href="/report-found" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
            Report Found
          </a>
        </div>
      </div>

      {/* Search and Trending Items */}
      <section className="px-6 pb-12 max-w-6xl mx-auto">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search lost or found items..."
            className="w-full p-3 rounded-md border dark:bg-gray-800 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">🔍 Recent Listings</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filtered.length > 0 ? (
    filtered.map((item, idx) => <ItemCard key={idx} {...item} />)
  ) : (
    <p className="text-center text-gray-600 dark:text-gray-300 col-span-full">No items found.</p>
  )}
</div>

       

      </section>
    </div>
  )
}