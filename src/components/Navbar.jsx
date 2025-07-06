import { Link, NavLink } from "react-router-dom";
import { Search, Settings, LogIn, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Found Items", to: "/found-items" },
    { label: "Lost Items", to: "/lost-items" },
    { label: "About Us", to: "/about" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-0 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-wide text-white">
          <Search className="w-5 h-5 text-indigo-400" />
          <span>
            <span className="text-white">B</span>
            <span className="text-indigo-500">ack2</span>
            <span className="text-white">You</span>
          </span>
        </Link>

        <Link to="/found-items" className="flex items-center gap-2 text-xl font-bold tracking-wide text-white">
        
        </Link>

        <Link to="/about" className="flex items-center gap-2 text-xl font-bold tracking-wide text-white">
        
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "group relative font-medium transition-colors duration-200",
                  isActive ? "text-indigo-400" : "text-gray-200 hover:text-indigo-400",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={[
                      "absolute -bottom-1 left-0 h-px w-full bg-indigo-400 transition-transform duration-300",
                      isActive ? "scale-100" : "scale-0 group-hover:scale-100",
                    ].join(" ")}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Auth + Settings */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow"
          >
            SIGNUP
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold shadow"
          >
            <LogIn className="w-4 h-4" />
            LOGIN
          </Link>
          <button
            type="button"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="w-6 h-6 text-gray-100" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    "text-lg font-medium transition-colors",
                    isActive ? "text-indigo-400" : "text-gray-200 hover:text-indigo-400",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/signup"
              onClick={() => setMobileOpen(false)}
              className="w-11/12 text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow"
            >
              SIGN&nbsp;UP
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="w-11/12 text-center flex items-center justify-center gap-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold shadow"
            >
              <LogIn className="w-4 h-4" />
              LOGIN
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}