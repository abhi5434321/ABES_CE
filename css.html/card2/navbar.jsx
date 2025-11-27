import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white shadow-lg">
      <div className="text-xl font-bold">MyWebsite</div>
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
      <div className="md:hidden cursor-pointer text-2xl">☰</div>
    </nav>
  );
};

export default Navbar;
