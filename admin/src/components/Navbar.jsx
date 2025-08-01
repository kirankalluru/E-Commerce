import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({setToken}) => {
  return (
    <nav className=" text-white px-6 py-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <img src={assets.logo} alt="logo" className="h-10 w-auto" />

      {/* Logout Button */}
      <button onClick={()=>setToken("")} className="bg-gray-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition-all cursor-pointer">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
