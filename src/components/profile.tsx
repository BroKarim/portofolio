import { ProfileImage } from "./profileImage";
import {
  MapPin,
  BriefcaseBusiness,
  File,
  Instagram,
  Github
} from "lucide-react";
import Link from "next/link";
import EmailSubscribe from "./emailSubsciber";

export const Profile = ({ description }: { description: string }) => {
  return (
    <>
      <div className=" md:w-[800px] mb-10 md:mb-0 w-full flex flex-col text-black justify-center dark:text-white">
        <ProfileImage />
        <h1 className="mb-5 pr-16 text-2xl lg:text-4xl  font-extrabold ">
          Bro {"   "}
          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
            Karim
          </span>
        </h1>
        <div className="flex space-x-10 gap-10 mb-4 font-semibold">
          <div className="text-base  gap-2 flex">
            <MapPin />
            Aceh
          </div>
          <div className="text-base  gap-2 flex">
            <BriefcaseBusiness />
            Urban farmer
          </div>
        </div>
        <p className="text-lg mb-2 md:px-2">{description}</p>
        <p className="text-lg md:px-2 ">
          <strong className="underline underline-offset-8 decoration-yellow-300 decoration-2 dark:no-underline">
            Want to level up your frontend skills?
          </strong>{" "}
          Sign up for my free weekly project updates, code breakdowns, and
          source code👇🏻
        </p>
        <div className="mt-10 ">
          <EmailSubscribe />

          {/* social media */}
          <div className="flex mt-8 gap-4">
            <div className="flex gap-1 font-semibold">
              <File />
              Resume
            </div>
            <Link
              href="https://www.instagram.com/brokariim/"
              className="flex gap-1 font-semibold"
            >
              <Instagram />
              Instagram
            </Link>
            <Link
              href="https://github.com/BroKarim"
              className="flex gap-1 font-semibold"
            >
              <Github />
              Github
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
