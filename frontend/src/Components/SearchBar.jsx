import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets';
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible,setVisible] = useState(false);
    

    useEffect(()=>{
        if(location.pathname.includes('Collection'))
        {
            setVisible(true);
            
        }
        else{
            setVisible(false);
        }
        
    },[location])
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm ' type="text" placeholder='Search' />
        <img src={assets.search_icon} className='w-4 ' alt="sicon" />
        </div>
        <img onClick={()=>setShowSearch(false)} src={assets.cross_icon} className='inline w-4 cursor-pointer' alt="crossicon" />
      
    </div>
  ):null
}

export default SearchBar
