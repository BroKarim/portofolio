"use client";

import CardProject from "@/components/cardProject";
import { cardData } from "@/data/chartData";
import { Profile } from "@/components/profile";

export default function Home() {
  return (
    <>
      <section className="min-h-screen  pb-20 pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex md:flex-row flex-col lg:items-center lg:gap-8 ">
            <Profile description="An extremely passionate farmer who codes in between cleaning out the barn." />

            <div className="animate_right  md:w-full h-[600px] overflow-y-scroll space-y-0  no-scrollbar  grid row-span-1 lg:gap-10 md:grid-cols-2 ">
              {cardData.map((card, index) => (
                <CardProject
                  key={index}
                  title={card.title}
                  logo={card.logo}
                  profit={card.profit}
                  link={card.link}
                  description={card.description}
                  chartData={card.chartData}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
