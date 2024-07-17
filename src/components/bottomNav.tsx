'use client';
import React, { useState, useEffect } from 'react';
import {
  PersonStanding,
  Home,
  Layers2,
  Share,
  SquareMenu,
  Mail,
  ArrowDownToLine,
  Download,
  NotebookPen,
  BriefcaseBusiness,
  Wrench
} from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import path from 'path';
import { link } from 'fs';

const BottomNavigation = () => {
  const Tools = [
    { name: 'Home', icon: <SquareMenu color={'white'} size={20} />, link: '/' },
    {
      name: 'Contach',
      icon: <Mail color={'white'} size={20} />,
      link: '/',
      isDialog: true
    },
    {
      name: 'About',
      icon: <PersonStanding color={'white'} size={20} />,
      link: '/about'
    }
    // { name: 'Download', icon: <ArrowDownToLine size={20} /> },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      <div className=" fixed flex  gap-2 left-1/2 z-30 transform -translate-x-1/2 bottom-4  py-2 ">
        <ul className="flex   justify-center items-center relative rounded-md px-4 border border-gray-700 bg-[#09090b] py-2">
          {Tools.map((menu, i) => (
            <li key={i}>
              {menu.isDialog ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex flex-col text-center text-white items-center cursor-pointer px-2">
                      <span
                        className={`${active === i ? 'duration-700 opacity-100 font-bold' : 'opacity-40'}`}
                      >
                        {menu.icon}
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-[#16171a]">
                    <DialogHeader>
                      <DialogTitle className="text-white">Contact</DialogTitle>
                      <DialogDescription className="text-gray-400 ">
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex flex-col  gap-4">
                        <Input
                          type="email"
                          placeholder="Email"
                          className="border-none focus:outline-none bg-[#24262b]"
                        />
                      </div>
                      <div className="flex flex-col  gap-4">
                        <Textarea
                          placeholder="Message"
                          className="resize-none border-none focus:outline-none bg-[#24262b]"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Link href={menu.link}>
                  <button className="flex flex-col text-center text-white items-center cursor-pointer px-2">
                    <span
                      className={`${active === i ? 'duration-700 opacity-100 font-bold' : 'opacity-40'}`}
                    >
                      {menu.icon}
                    </span>
                  </button>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="px-2 border rounded-md border-gray-700 bg-[#09090b] py-2">
          <button className="flex items-center justify-center gap-2 text-xs font-medium rounded-md">
            <Download size={20} color={'#bd4242'} /> Build with Nextjs
          </button>
        </div>
        {/* kotak menu */}
      </div>
    </>
  );
};

export default BottomNavigation;
