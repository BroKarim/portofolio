import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/page-header';
import Info from '@/components/info';
import { Card, CardContentWrapper, CardHeader, CardTitle, CardDescription } from '@/components/cards';
import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <section>
        <div className="z-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <Info title="Projects" availableForWork={true} />
          <hr className="w-full bg-gray-700 h-[2px] border-none" />

          <PageHeader>
            <div className="block sm:gap-0 lg:max-w-md w-full ">
              <PageHeaderHeading>
                From vision to implementation. <br className="hidden md:block" />
                <span className="text-gray-500 pl-2 md:pl-0">User-centric design deliver good results.</span>
              </PageHeaderHeading>
            </div>

            <div className="overflow-hidden lg:w-1/2   lg:items-end ">
              <PageHeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PageHeaderDescription>
            </div>
          </PageHeader>
          <br />
          {/* my project */}
          <div className="flex md:justify-between flex-col md:flex-row justify-center  gap-4 md:items-start">
            <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-6 py-2 ">
              <Card>
                <CardHeader>
                  <CardTitle>Apple</CardTitle>
                  <CardDescription className="font-bold">Lead product designer</CardDescription>
                </CardHeader>
                <CardContentWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover object-top w-full h-[64] rounded-md "
                  />
                </CardContentWrapper>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Apple</CardTitle>
                  <CardDescription className="font-bold">Lead product designer</CardDescription>
                </CardHeader>
                <CardContentWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover object-top w-full h-[64] rounded-md "
                  />
                </CardContentWrapper>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Apple</CardTitle>
                  <CardDescription className="font-bold">Lead product designer</CardDescription>
                </CardHeader>
                <CardContentWrapper>
                  <img
                    src="https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover object-top w-full h-[64] rounded-md "
                  />
                </CardContentWrapper>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
