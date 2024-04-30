'use client'
import React, { useState } from "react";
import { MapPin, Calendar, Share, SquareMenu, Mail, ArrowDownToLine } from 'lucide-react';

// FITUR TOOGLE
/**
 - Menu : Menu Toggle, Share, Email, Download/buy
 - selain menu toggle, laiinya pop up

 - Untuk menu toogle nengok aja di templat next

 */

const BottomNavigation = () => {
  const Menus = [
    { name: "Home", icon: <SquareMenu/>},
    { name: "Email", icon: <Mail/>},
    { name: "Share", icon: <Share/>},
    { name: "Download",  icon: <ArrowDownToLine/>},
  ];

  const [active, setActive] = useState(0);

  return (
    <div className=" fixed left-1/2 transform -translate-x-1/2  bottom-12 py-2 rounded-md px-4 border border-gray-700 bg-[#09090b] ">
      <ul className="flex  justify-center items-center relative"> 
        {Menus.map((menu, i) => (
          <li key={i} >
            <a
              className="flex flex-col text-center items-center cursor-pointer px-4"
              onClick={() => setActive(i)}
            >
               <span
                className={` ${
                  active === i
                    ? " duration-700 opacity-100 font-bold"
                    : "opacity-40"
                } `}
              >
                {menu.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavigation;