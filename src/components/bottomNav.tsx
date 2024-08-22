// konsep => https://github.com/BroKarim/portofolio/blob/reflected/src/components/bottomNav.tsx

"use client";
import React, { useState } from "react";
import { PersonStanding, Mail, CodeXml, Linkedin, Compass, Twitter } from "lucide-react";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";

const BottomNavigation = () => {
  const Tools = [
    {
      name: "Home",
      icon: <Compass className="text-black dark:text-white" size={20} />,
      link: "/",
    },
    {
      name: "Contact",
      icon: <Mail className="text-black dark:text-white" size={20} />,
      action: "toggle",
      // isDialog: true
    },
    {
      name: "About",
      icon: <PersonStanding className="text-black dark:text-white" size={20} />,
      link: "/about",
    },
  ];

  const ContactOpt = [
    {
      id: 1,
      icon: <Linkedin className="text-black dark:text-white" size={16} />,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/dzulkiram-hilmi/",
    },
    {
      id: 2,
      icon: <Mail className="text-black dark:text-white" size={16} />,
      title: "Email",
      action: "email",
    },
    {
      id: 3,
      icon: <Twitter className="text-black dark:text-white" size={16} />,
      title: "Twitter",
      link: "https://x.com/BroKariim",
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

  return (
    <>
      <div className=" fixed flex  gap-2 left-1/2 z-30 transform -translate-x-1/2 bottom-4  py-2 ">
        <ThemeSwitch />
        {/* main menu */}
        <ul className="flex bg-white justify-center items-center relative rounded-md px-4 border border-gray-700 dark:bg-[#09090b] py-2 ">
          {Tools.map((menu, index) => (
            <li key={index}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  {menu.link ? (
                    <Link href={menu.link} className="flex flex-col text-center  items-center cursor-pointer px-2 ">
                      <span className={`${active === index ? "duration-700 opacity-100 font-bold" : "opacity-40"}`}>{menu.icon}</span>
                    </Link>
                  ) : (
                    <button
                      className="flex flex-col text-center   items-center cursor-pointer px-2"
                      onClick={() => {
                        setActive(index);
                        if (menu.action === "toggle") {
                          navbarToggleHandler();
                        }
                      }}
                    >
                      <span className={`${active === index ? "duration-700 opacity-100 font-bold" : "opacity-40"}`}>{menu.icon}</span>
                    </button>
                  )}
                </HoverCardTrigger>

                <HoverCardContent className="w-80">
                  <div className="left-1/2 bottom-8 text-xs text-white transform -translate-x-1/2 absolute flex justify-center rounded-md border-[.5px] border-[#24262b] bg-[#16171a]  p-1 duration-300 space-x-4">{menu.name}</div>
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
        </ul>
        {/* source code */}
        <div className="px-2 border rounded-md border-gray-700 dark:bg-[#09090b] py-2">
          <HoverCard>
            <HoverCardTrigger>
              <Link href="https://github.com/BroKarim/portofolio" target="_blank" className="flex items-center justify-center gap-2 text-xs font-medium rounded-md">
                <CodeXml size={20} color={"#bd4242"} />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="left-1/2 bottom-8 text-xs text-white transform -translate-x-1/2 absolute flex justify-center rounded-md border-[.5px] border-[#24262b] bg-[#16171a]  p-1 duration-300 space-x-4">source code</div>
            </HoverCardContent>
          </HoverCard>
        </div>
        {/* kotak menu */}
        <div
          id="navbarCollapse"
          className={`navbar left-1/2 text-white dark:text-black  transform -translate-x-1/2 absolute  my-4 w-32 rounded-md border-[.5px] border-[#24262b] bg-white dark:bg-[#16171a]  py-1 duration-300  ${
            navbarOpen ? "visibility bottom-10 opacity-100" : "invisible bottom-[120%] opacity-0"
          }`}
        >
          <ul className="grid grid-cols-3 gap-2 px-2">
            {ContactOpt.map((contact, index) => (
              <li key={index}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    {contact.link ? (
                      <Link href={contact.link} target="_blank" className="flex text-xs text-white flex-col  items-center p-2  dark:bg-[#24262b] rounded-md hover:bg-[#51535a]  ">
                        <button onClick={closeNavbar}>{contact.icon}</button>
                      </Link>
                    ) : (
                      <button
                        className="flex text-xs text-white flex-col  items-center p-2  dark:bg-[#24262b] rounded-md hover:bg-[#51535a] "
                        onClick={() => {
                          setActive(index);
                          if (contact.action === "email") {
                            window.open("mailto:yastrasw@gmail.com");
                          }
                          closeNavbar();
                        }}
                      >
                        {contact.icon}
                      </button>
                    )}
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="left-1/2 bottom-10 text-xs text-white transform -translate-x-1/2 absolute flex justify-center rounded-md border-[.5px] border-[#24262b] bg-[#16171a]  p-1 duration-300 space-x-4">{contact.title}</div>
                  </HoverCardContent>
                </HoverCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
