import React from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../../assets/Photos/Profile.jpg';

export default function Navbar() {
  const location = useLocation(); 

  //Get Page Title Based on Route
  const getPageTitle = (pathname) => {
    const path = pathname.split('/')[1];
    const titles = {
      Dashboard: 'Dashboard',
      Sales: 'Sales' ,
      Finance: 'Finance',
      Warehouse: 'Warehouse',
      HumanResources: 'Human Resources',
    };
    return titles[path] || 'Dasboard' ;
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className='w-[100%] md:w-full bg-[#02437B] p-2 border-s-1 border-white text-white flex justify-between items-center'>
      <h1 className='font-bold md:text-xl'>{pageTitle}</h1>

      {/* Input Search */}
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          className="w-[120px] md:w-[500px] py-1.5 px-4 ps-10 bg-white text-[#02437B] rounded-4xl"
          placeholder="Search.."
        />
      </div>

      <div className='flex'>
        <div className='w-[45px] h-[45px] mt-2 md:w-[55px] md:h-[55px]'>
          <img src={Profile} alt="Profile Photo" className='rounded-full' />
        </div>
        <div className='ms-2 md:ms-2 md:pe-6'>
          <h1 className='font-semibold'>Ahmed Faisal</h1>
          <h2 className='text-[#028BBF]'>faisal@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}
