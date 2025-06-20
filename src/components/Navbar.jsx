// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold">
//           <Link to="/">Lost & Found</Link>
//         </div>
//         <ul className="flex space-x-6 font-medium">
//           <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
//           <li><Link to="/found" className="hover:text-gray-200">Found Items</Link></li>
//           <li><Link to="/lost" className="hover:text-gray-200">Lost Items</Link></li>
//           <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
//         </ul>
//         <div className="space-x-4">
//           <Link to="/signup" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100">Sign Up</Link>
//           <Link to="/login" className="border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-600">Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";

export default function Navbar() {
  return (
    <div style={{ background: "#333", color: "#fff", padding: "1rem", textAlign: "center" }}>
      Navbar Works ✅
    </div>
  );
}

