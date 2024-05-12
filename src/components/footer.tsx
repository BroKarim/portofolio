// footer ngikutin https://reflected.framer.website/posts
import { Dribbble, Instagram, Figma } from 'lucide-react';
import DateTime from './dateTime';
export default function Footer() {
  return (
    <>
      <footer className="w-full mt-auto">
        <div className="container mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-2xl mb-3"> BroKariim </h3>
            <DateTime />
            {/* <p> Friday, May 10, 2024 14:30:26 </p> */}
            <div className="flex justify-center my-4">
              <div className="flex items-center  ring-gray-300 ring-1 rounded-lg px-4 py-3  mx-2">
                <Dribbble size={20} color={'#9CA3AF'} />
              </div>
              <div className="flex items-center ring-gray-300 ring-1 rounded-lg px-4 py-3  mx-2">
                <Instagram size={20} color={'#9CA3AF'} />
              </div>
              <div className="flex items-center ring-gray-300 ring-1 rounded-lg px-4 py-3  mx-2">
                <Figma size={20} color={'#9CA3AF'} />
              </div>
            </div>
          </div>
          <div className="mt-10 flex border-t border-gray-700 py-4 flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {' '}
              Proudly built with <span className="font-bold text-white">NextJs</span>{' '}
            </p>
            <div className="order-1 md:order-2">
              <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Created by BroKarim </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
