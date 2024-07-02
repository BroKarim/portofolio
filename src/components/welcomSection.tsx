'use client';

import { useEffect, useState, useRef } from 'react';
import CardProject from './cardProject';
import { cardData } from '@/data/chartData';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Profile from '../../public/assets/profile.png';
import Image from 'next/image';

export function WelcomeSection() {
  let [count, setCount] = useState(0);

  return (
    <section className="min-h-screen bg-[#e6e6e6] pb-20 pt-10">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 ">
          <div className=" md:w-[500px] flex flex-col justify-center">
            <div className="flex justify-start items-start w-full">
              <Image className="h-48 w-48 rounded-full dark:border-gray-800  my-4" src={Profile} alt="" />
            </div>
            <h1 className="mb-5 pr-16 text-2xl lg:text-4xl font-extrabold text-black">
              Bro {'   '}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">Karim</span>
            </h1>
            <div className="flex gap-4 mb-4">
              <div className="text-base opacity-80 flex">
                <MapPin />
                Aceh/Indonesia
              </div>
              <div className="text-base opacity-80 flex">
                <MapPin />
                Aceh/Indonesia
              </div>
            </div>
            <p className="text-lg ">Solid Pro - Packed with all the key integrations you need for swift SaaS startup launch.</p>

            <div className="mt-10">
              <p className="mt-5 text-black dark:text-white">Try for free no credit card required.</p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Lets work with" />
                <Button type="submit">Contact</Button>
              </div>
            </div>
          </div>

          <div className="animate_right  md:w-full h-[600px] overflow-y-scroll no-scrollbar flex-1 grid gap-4 md:gap-4 md:grid-cols-2 ">
            {cardData.map((card, index) => (
              <CardProject key={index} title={card.title} logo={card.logo} profit={card.profit} description={card.description} chartData={card.chartData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
