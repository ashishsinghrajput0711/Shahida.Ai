"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">
          Botika<span className="text-blue-500">.io</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-500">Features</a></li>
          <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-white p-4 space-y-4 text-center shadow-md">
          <li><a href="#" className="hover:text-blue-500">Features</a></li>
          <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
        </ul>
      )}
    </nav>
  );
}
