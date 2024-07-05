'use client';

import { useEffect, useState, useRef } from 'react';
import CardProject from '@/components/cardProject';
import { cardData } from '@/data/chartData';
import { MapPin, BriefcaseBusiness } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Profile from '../../public/assets/profile.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="min-h-screen  pb-20 pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex md:flex-row flex-col lg:items-center lg:gap-8 ">
            <div className=" md:w-[800px] mb-10 md:mb-0 w-full flex flex-col justify-center">
              <div className="flex justify-start items-start w-full">
                <Image className="h-48 w-48 rounded-full dark:border-gray-800  my-4" src={Profile} alt="" />
              </div>
              <h1 className="mb-5 pr-16 text-2xl lg:text-4xl font-extrabold text-white">
                Bro {'   '}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">Karim</span>
              </h1>
              <div className="flex space-x-10 gap-10 mb-4">
                <div className="text-base opacity-80 gap-2 flex">
                  <MapPin />
                  Aceh
                </div>
                <div className="text-base opacity-80 gap-2 flex">
                  <BriefcaseBusiness />
                  Farmer
                </div>
              </div>
              <p className="text-lg ">An extremely passionate farmer who codes in between cleaning out the barn.</p>

              <div className="mt-10">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Lets work with" />
                  <Button className="text-black bg-white" type="submit">
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate_right  md:w-full h-[600px] overflow-y-scroll space-y-0  no-scrollbar  grid row-span-1 lg:gap-10 md:grid-cols-2 ">
              {cardData.map((card, index) => (
                <CardProject key={index} title={card.title} logo={card.logo} profit={card.profit} link={card.link} description={card.description} chartData={card.chartData} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
