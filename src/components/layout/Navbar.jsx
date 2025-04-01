import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
   <>
   <div className='flex justify-center w-[100%] bg-white items-center gap-2 border-b-2 p-3 '  >
           <div className='flex justify-between w-[70%] items-center b'>
           <FaSearch/>
            <input type="text" placeholder='Search anything here'  className='text-gray-700'/>
            <IoIosNotifications />
           </div>
            <div className='flex gap-2 items-center border-l-2 p-2'>
            <div className='bg-red-700 h-[40px] w-[40px] rounded-full items-center'>
                <img className='rounded-full border border-green-900' src="https://cdn.dribbble.com/users/18715471/avatars/normal/open-uri20240114-27308-ns171v?1705278697" alt="" />
            </div>
            <p>IshakuDyelshak</p>
            <MdOutlineArrowDropDown/>
            </div>
        </div>
   </>  
  )
}

export default Navbar