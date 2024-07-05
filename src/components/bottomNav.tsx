'use client';
import React, { useState, useEffect } from 'react';
import { PersonStanding, Home, Layers2, Share, SquareMenu, Mail, ArrowDownToLine, Download, NotebookPen, BriefcaseBusiness, Wrench } from 'lucide-react';
import Link from 'next/link';
import path from 'path';

const BottomNavigation = () => {
  const Tools = [
    { name: 'Home', icon: <SquareMenu color={'white'} size={20} /> },
    { name: 'Resume', icon: <Mail color={'white'} size={20} /> },
    { name: 'About', icon: <PersonStanding color={'white'} size={20} /> },
    // { name: 'Download', icon: <ArrowDownToLine size={20} /> },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      <div className=" fixed flex  gap-2 left-1/2 z-30 transform -translate-x-1/2 bottom-4  py-2 ">
        <ul className="flex   justify-center items-center relative rounded-md px-4 border border-gray-700 bg-[#09090b] py-2">
          {Tools.map((menu, i) => (
            <li key={i}>
              <button className="flex flex-col text-center text-white items-center  cursor-pointer px-2">
                <span className={` ${active === i ? ' duration-700 opacity-100  font-bold' : 'opacity-40'} `}>{menu.icon}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="px-2 border rounded-md border-gray-700 bg-[#09090b] py-2">
          <button className="flex items-center justify-center gap-2 text-xs font-medium rounded-md">
            <Download size={20} color={'#bd4242'} /> Get Template
          </button>
        </div>
        {/* kotak menu */}
      </div>
    </>
  );
};

export default BottomNavigation;
