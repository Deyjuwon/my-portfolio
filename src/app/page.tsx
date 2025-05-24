'use client'

import React, { useState } from 'react';
import './marquee.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  const textColor = darkMode ? 'text-[#f7f7f7]' : 'text-[#1d1d1d]';
  const bgColor = darkMode ? 'bg-[#1d1d1d]' : 'bg-[#f7f7f7]';
  const toggleBg = darkMode ? 'bg-gray-700' : 'bg-gray-300';
  const toggleCircle = darkMode ? 'translate-x-6' : 'translate-x-1';

  return (
    <div className={`relative h-screen px-20 py-10 overflow-hidden flex flex-col justify-between transition-colors duration-500 ${bgColor}`}>  

      <nav style={{ fontFamily: "GrandSlang" }} className={`font-semibold flex items-center justify-between ${textColor}`}>
        <p>creative developer</p>
        <div className='flex gap-10'>
          <p>index</p>
          <p>about</p>
          <p>works</p>
          <p>contact</p>
        </div>
        <div className='flex items-center gap-5'>
          <p>lagos, nigeria, 15:03pm</p>
          <div 
          className={` w-14 h-8 flex items-center rounded-full cursor-pointer ${toggleBg} transition-colors duration-300`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${toggleCircle}`}
          />
        </div>

        </div>
        
      </nav>

      <div style={{ fontFamily: "GrandSlang" }} className={`leading-[0.98] pt-10 pb-0 ${textColor}`}>
        <p className='text-[160px] font-semibold'>ADEJUWON</p>
        <p className='text-[160px] font-semibold text-right'>OSHINDORO</p>
      </div>

      <div className="overflow-hidden mt-0">
        <div className={`marquee font-semibold font-montserrat text-[28px] flex gap-20 ${textColor}`}>
          <span className='pr-20'>CREATIVE DEVELOPER</span>
          <span className='pr-20'>BUSINESS DEVELOPER</span>
          <span className='pr-20'>AI ENTHUSIAST</span>
          <span className='pr-20'>CREATIVE DEVELOPER</span>
          <span className='pr-20'>BUSINESS DEVELOPER</span>
          <span className='pr-20'>AI ENTHUSIAST</span>
        </div>
      </div>

      <div className={`text-[22px] font-montserrat w-[50%] ${textColor}`}>
        <p>Currently working as a software engineer at Stark42 studio and business developer at tix.africa.</p>
      </div>
    </div>
  );
};

export default Home;
