import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Bell } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Mock login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide">Ajali!</h2>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/report" className="hover:underline">
            Report
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Bell className="w-5 h-5 cursor-pointer" />
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-1 rounded font-semibold">
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="bg-white text-blue-600 px-4 py-1 rounded font-semibold">
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="w-6 h-6" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="w-6 h-6" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-6 pb-4 text-lg space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:underline">
            Home
          </Link>
          <Link to="/report" onClick={() => setMenuOpen(false)} className="block hover:underline">
            Report
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:underline">
            About
          </Link>
          <div className="flex items-center justify-between pt-2">
            <Bell className="w-5 h-5" />
            {isLoggedIn ? (
              <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-1 rounded font-semibold">
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="bg-white text-blue-600 px-4 py-1 rounded font-semibold">
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
