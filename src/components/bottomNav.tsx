'use client';
import React, { useState, useEffect } from 'react';
import { PersonStanding, Home, Layers2, Share, SquareMenu, Mail, ArrowDownToLine, Download, NotebookPen, BriefcaseBusiness, Wrench } from 'lucide-react';
import Link from 'next/link';
import path from 'path';
// FITUR TOOGLE
/**
 - Menu : Menu Toggle, Share, Email, Download/buy
 - selain menu toggle, laiinya pop up

 - Untuk menu toogle nengok aja di templat next => play nextjs

 */

const BottomNavigation = () => {
  const Tools = [
    { name: 'Home', icon: <SquareMenu size={20} /> },
    { name: 'Email', icon: <Mail size={20} /> },
    { name: 'Share', icon: <Share size={20} /> },
    { name: 'Download', icon: <ArrowDownToLine size={20} /> },
  ];

  const Menus = [
    {
      id: 1,
      title: 'Home',
      icons: <Home size={15}/>,
      path: '/',
    },
    {
      id: 2,
      title: 'Case Studies',
      icons: <BriefcaseBusiness size={15}/>,
      path: '/projects',
    },
    {
      id: 3,
      title: 'Service',
      icons: <Wrench size={15}/>,
      path: '/',
    },
    {
      id: 4,
      title: 'Writing',
      icons: <NotebookPen size={15}/>,
      path: '/',
    },
    {
      id: 5,
      title: 'Stack',
      icons: <Layers2 size={15}/>,
      path: '/',
    },
    {
      id:6,
      title: 'About',
      icons: <PersonStanding size={15}/>,
      path: '/',
    },
  ];
  const [active, setActive] = useState(0);
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className=" fixed flex  gap-2 left-1/2 z-30 transform -translate-x-1/2 bottom-4  py-2 ">
        <ul className="flex   justify-center items-center relative rounded-md px-4 border border-gray-700 bg-[#09090b] py-2">
          {Tools.map((menu, i) => (
            <li key={i} >
              <button
                className="flex flex-col text-center items-center hover:bg-[#18181] cursor-pointer px-2"
                onClick={() => {
                  setActive(i);
                  if (menu.name === 'Home') {
                    navbarToggleHandler();
                  }
                }}
              >
                <span className={` ${active === i ? ' duration-700 opacity-100  font-bold' : 'opacity-40'} `}>{menu.icon}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="px-2 border rounded-md border-gray-700 bg-[#09090b] py-2">
          <button className="flex items-center justify-center gap-2 text-xs font-medium rounded-md"><Download size={20} color={'#bd4242'}/> Get Template</button>
        </div>
        {/* kotak menu */}
        <nav
          id="navbarCollapse"
          className={`navbar left-1/2  transform -translate-x-1/2 absolute  my-4 w-full rounded border-[.5px] border-[#24262b] bg-[#16171a]  py-4 duration-300 ${
            navbarOpen ? 'visibility bottom-10 opacity-100' : 'invisible bottom-[120%] opacity-0'
          }`}
        >
          <ul className="grid grid-cols-2 gap-2">
            {Menus.map((menu, index) => (
              <li key={menu.id} className='px-2'>
                <Link href={menu.path} scroll={false} onClick={closeNavbar} className="flex text-xs text-white flex-col gap-2 items-center py-2 px-2 bg-[#24262b] rounded-md hover:bg-[#51535a] w-full ">
                  {menu.icons}
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


      </div>
    </>
  );
};

export default BottomNavigation;
