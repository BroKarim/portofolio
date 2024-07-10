import Image from 'next/image';
import Profile from '../../public/assets/profile.png';

const BroKariim = () => (
  <Image
    className="h-48 w-48 rounded-full dark:border-gray-800  my-4"
    src={Profile}
    alt=""
  />
);

export const ProfileImage = () => {
  return (
    <div className="flex justify-start items-start w-full">
      <BroKariim />
    </div>
  );
};
