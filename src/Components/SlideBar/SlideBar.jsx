import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineProduct } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";


export default function SlideBar() {
  
  return <>
    <div className='bg-[#02437B]  md:h-[100%] md:pt-8 md:ps-8 text-white'>
      <h1 className='text-2xl font-bold hidden md:block
      '>ERP Dashboard</h1>
      <div className='font-semibold md:mt-10 flex gap-4 justify-around md:flex-col md:gap-0'>

        <NavLink to="/" title='Dashboard' className="flex items-center gap-2">
          <AiOutlineProduct className="text-2xl md:text-xl" />
           <span className='hidden md:block'>Dashboard</span>
        </NavLink>
        
        <NavLink to={'/Sales'} title='Sales' className='my-5 flex items-center gap-2'>
          <GiReceiveMoney className='text-2xl md:text-xl'/>
          <span className='hidden md:block'>Sales</span>
        </NavLink>

        <NavLink to={'/Finance'} title='Finance' className='flex items-center gap-2'>
          <AiOutlineBarChart className='text-2xl md:text-xl'/>
          <span className='hidden md:block'>Finance</span>
        </NavLink>

        <NavLink to={'/HumanResources'} title='Human Resources' className='my-5 flex items-center gap-2'>
          <AiOutlineUser className='text-2xl md:text-xl'/>
          <span className='hidden md:block'>Human Resources</span>
        </NavLink>

        <NavLink to={'/Warehouse'} title='Warehouse' className='flex items-center gap-2'>
          <AiOutlineCodepen className='text-2xl md:text-xl'/>
          <span className='hidden md:block'>Warehouse</span>
        </NavLink>
      </div>
    </div>
  </>
}