
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/page-header";
export default function Projects() {
  return (
    <>
      <section className="z-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* header */}
        <div className="space-y-2 flex justify-between items-center pt-6 ">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10  md:leading-14">Me</h1>
          <div className="flex gap-1 items-center ">
            <div className="relative w-6 h-6 flex justify-center items-center">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
            </div>
            <p className="text-base leading-7 text-gray-500 dark:text-gray-400">Available for work</p>
          </div>
        </div>
        <hr className="w-full bg-gray-700 h-[2px] border-none" />

        {/* profile */}
        <div className="container  flex flex-col justify-center sm:py-8 py-6  lg:flex-row lg:justify-between">
            <div className="block sm:gap-0 lg:max-w-md w-full ">
              <PageHeaderHeading>From vision to implementation. <br className="hidden md:block"/><span className="text-gray-500 pl-2 md:pl-0">User-centric design deliver good results.</span></PageHeaderHeading>
            </div>
          {/* <div className="flex flex-col relative  rounded-sm lg:max-w-md text-left">
          </div> */}
          <div className="overflow-hidden lg:w-1/2  lg:justify-start lg:items-end h-64 ">
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <br />
      </section>
    </>
  );
}
