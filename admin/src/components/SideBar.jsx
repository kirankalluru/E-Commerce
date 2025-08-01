import React from 'react';
import { NavLink } from 'react-router-dom'; // Correct import
import { assets } from '../assets/assets';

const SideBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-1'>                           
        <div className=" flex flex-col gap-4 pl-[20%] pt-6 text-lg">
      <NavLink to="/add" className="flex items-center border border-r-0 border-pink-200 px-3 py-2 rounded-l hover:bg-pink-200 transition-all">
        <img src={assets.add_icon} alt="Add Icon" className="w-5 h-5" />
        <p className='hidden md:block text-gray-900 mx-2'>Add Item</p>
      </NavLink>

      <NavLink to="/list" className="flex items-center border border-r-0 border-pink-300 px-3 py-2 rounded-l hover:bg-pink-200 transition-all">
        <img src={assets.order_icon} alt="Add Icon" className="w-5 h-5" />
        <p className='hidden md:block text-gray-900 mx-2'>List Items</p>
      </NavLink>

      <NavLink to="/orders" className="flex items-center border border-r-0 border-pink-300 px-3 py-2 rounded-l hover:bg-pink-200 transition-all">
        <img src={assets.order_icon} alt="Add Icon" className="w-5 h-5" />
        <p className='hidden md:block text-gray-900 mx-2'>Orders</p>
      </NavLink>
    </div>
    </div>
  );
};

export default SideBar;
