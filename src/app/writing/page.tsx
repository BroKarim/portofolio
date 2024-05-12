// ini terinspirasi dari : https://nextblog.nextjstemplates.com/
'use client';

import React, { useRef } from 'react';
import Info from '@/components/info';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/page-header';
import { Card, CardContentWrapper, CardHeader, CardTitle, CardDescription } from '@/components/cards';
import { Calendar, Fullscreen, X } from 'lucide-react';

export default function Writing() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  return (
    <>
      <section>
        <div className="z-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <Info title="Writing" availableForWork={false} />
          <hr className="w-full bg-gray-700 h-[2px] border-none" />
          <PageHeader>
            <div className="block sm:gap-0 lg:max-w-md w-full ">
              <PageHeaderHeading>
                From vision to implementation. <br className="hidden md:block" />
                <span className="text-gray-500 pl-2 md:pl-0">User-centric design deliver good results.</span>
              </PageHeaderHeading>
            </div>

            <div className="overflow-hidden lg:w-1/2  lg:justify-start lg:items-end ">
              <PageHeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PageHeaderDescription>
            </div>
          </PageHeader>
          <br />
          {/* my blog */}
          <div className="flex md:justify-between flex-col md:flex-row justify-center  gap-4 md:items-start">
            <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-6 py-2 ">
              <Card onClick={openModal}>
                <CardContentWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover hover:scale-105 transition duration-500 object-top w-full h-[64] rounded-md "
                  />
                </CardContentWrapper>
                <CardHeader className="my-4">
                  <CardTitle>Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life</CardTitle>
                </CardHeader>
                <CardDescription className="font-bold">In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.</CardDescription>
                <CardContentWrapper className="mt-2 justify-between">
                  <div className="flex gap-2">
                    <CardContentWrapper>
                      <Calendar size={16} />
                      <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                    </CardContentWrapper>
                    <CardContentWrapper>
                      <Calendar size={16} />
                      <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                    </CardContentWrapper>
                  </div>
                  <div>Health</div>
                </CardContentWrapper>
              </Card>
              <dialog id="modal" ref={modalRef} className="p-4 overflow-hidden ">
                <div className="w-full flex text-right gap-2 py-2 justify-end">
                  <a href="https://christoshrousis.com/05-how-to-communicate-with-an-iframe-using-react-hooks/" target="_blank">
                    <Fullscreen />
                  </a>
                  <X onClick={closeModal} />
                </div>
                <iframe src="https://christoshrousis.com/05-how-to-communicate-with-an-iframe-using-react-hooks/" width={1000} height={500}></iframe>
              </dialog>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
