import { ProfileImage } from './profileImage';
import {
  MapPin,
  BriefcaseBusiness,
  File,
  Instagram,
  Github
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Profile = ({ description }: { description: string }) => {
  return (
    <>
      <div className=" md:w-[800px] mb-10 md:mb-0 w-full flex flex-col justify-center">
        <ProfileImage />
        <h1 className="mb-5 pr-16 text-2xl lg:text-4xl font-extrabold text-white">
          Bro {'   '}
          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
            Karim
          </span>
        </h1>
        <div className="flex space-x-10 gap-10 mb-4">
          <div className="text-base opacity-80 gap-2 flex">
            <MapPin />
            Aceh
          </div>
          <div className="text-base opacity-80 gap-2 flex">
            <BriefcaseBusiness />
            Urban farmer
          </div>
        </div>
        <p className="text-lg mb-2 md:px-2">{description}</p>
        <p className="text-lg md:px-2">
          <strong>Want to level up your frontend skills?</strong> Sign up for my
          free weekly project updates, code breakdowns, and source code👇🏻
        </p>
        <div className="mt-10 ">
          <div className="flex w-full max-w-sm items-center  space-x-2">
            <Input
              type="email"
              id="email-input"
              name="email"
              placeholder="Your email..."
              className="text-black"
            />
            <Button className="text-black bg-white" type="submit">
              Subscribe
            </Button>
          </div>
          {/* social media */}
          <div className="flex mt-8 gap-4">
            <div className="flex gap-1">
              <File />
              Resume
            </div>
            <div className="flex gap-1">
              <Instagram />
              Instagram
            </div>
            <div className="flex gap-1">
              <Github />
              Github
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
