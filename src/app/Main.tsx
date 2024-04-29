import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardContentWrapper } from '@/components/cards';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/button';

export default function Home() {
  return (
    <>
      <section>
        <div className=" sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          {/* header */}
          <div className="space-y-2 flex justify-between items-center pt-6 ">
            <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10  md:leading-14">Me</h1>
            <div className="flex gap-1 items-center ">
              <div className="relative w-6 h-6 flex justify-center items-center">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
              </div>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Available for work</p>
            </div>
          </div>
          <hr className="w-full bg-gray-700 h-[2px] border-none" />

          {/* profile */}
          <div className="container  flex flex-col justify-center sm:py-8 py-6  lg:flex-row lg:justify-between">
            <div className="flex flex-col relative  rounded-sm lg:max-w-md text-left">
              <div className="flex md:flex-col flex-row sm:gap-0 gap-2">
                <h1 className=" font-bold text-lg md:text-2xl">Charlie Framerling.</h1>
                <h1 className=" font-bold text-gray-500 text-lg md:text-2xl">Lead product designer</h1>
              </div>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <p className="mt-2 mb-8 text-sm sm:mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className=" mb-4 space-y-8  items-center  space-x-3">
                <a href="" className="bg-[#151619] border border-gray-600 p-2 font-medium text-sm text-white inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                        fill="#5BBCFF"
                      ></path>{' '}
                    </g>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a href="" className="bg-[#151619] border border-gray-600 p-2 font-medium text-sm text-white inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z"
                        fill="#ffff"
                      ></path>{' '}
                    </g>
                  </svg>
                  <span>Twitter</span>
                </a>
                <a href="" className="bg-[#151619] border border-gray-600 p-2 font-medium text-sm text-white inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#ffff"></path>{' '}
                      <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#ffff"></path>{' '}
                      <path
                        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                        fill="#ffff"
                      ></path>{' '}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                        fill="#ffff"
                      ></path>{' '}
                    </g>
                  </svg>
                  <span>Linkedin</span>
                </a>
              </div>
            </div>
            <div className="overflow-hidden lg:w-1/2  lg:justify-start lg:items-end h-64 ">
              <img
                src="https://images.unsplash.com/photo-1487744137800-5282ebdb0ba3?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover object-top w-full h-full "
              />
            </div>
          </div>

          <br />

          {/* work & edu */}
          <div className="flex md:justify-between flex-col md:flex-row justify-center my-4  gap-4 md:items-start">
            <div className="md:w-1/2 w-full h-full ">
              <div className=" w-full ">
                <h1 className="text-sm font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  sm:leading-10  md:leading-14">Project</h1>
                <hr className="w-full bg-gray-700 h-[2px] border-none" />
              </div>
              <div className="w-full flex flex-col gap-6 py-4 ">
                {/* card 1 */}
                <Card>
                  <CardHeader>
                    <CardContentWrapper>
                      <svg className="w-8 h-8" fill="#ffff" version="1.1" xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 512 512">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="7935ec95c421cee6d86eb22ecd114eed">
                            {' '}
                            <path d="M248.644,123.476c-5.45-29.71,8.598-60.285,25.516-80.89 c18.645-22.735,50.642-40.17,77.986-42.086c4.619,31.149-8.093,61.498-24.826,82.965 C309.37,106.527,278.508,124.411,248.644,123.476z M409.034,231.131c8.461-23.606,25.223-44.845,51.227-59.175 c-26.278-32.792-63.173-51.83-97.99-51.83c-46.065,0-65.542,21.947-97.538,21.947c-32.96,0-57.965-21.947-97.866-21.947 c-39.127,0-80.776,23.848-107.19,64.577c-9.712,15.055-16.291,33.758-19.879,54.59c-9.956,58.439,4.916,134.557,49.279,202.144 c21.57,32.796,50.321,69.737,87.881,70.059c33.459,0.327,42.951-21.392,88.246-21.616c45.362-0.258,53.959,21.841,87.372,21.522 c37.571-0.317,67.906-41.199,89.476-73.991c15.359-23.532,21.167-35.418,33.11-62.023 C414.435,352.487,389.459,285.571,409.034,231.131z">
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <CardTitle>Apple</CardTitle>
                    </CardContentWrapper>
                    <CardDescription className="font-bold">Lead product designer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</CardDescription>
                    <CardContentWrapper className="mt-2">
                      <CardContentWrapper>
                        <MapPin size={16} />
                        <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                      </CardContentWrapper>
                      <CardContentWrapper>
                        <MapPin size={16} />
                        <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                      </CardContentWrapper>
                    </CardContentWrapper>
                  </CardContent>
                </Card>
                {/* card 2 */}
                <Card>
                  <CardHeader>
                    <CardContentWrapper>
                      <svg className="w-8 h-8" fill="#ffff" version="1.1" xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 512 512">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="7935ec95c421cee6d86eb22ecd114eed">
                            {' '}
                            <path d="M248.644,123.476c-5.45-29.71,8.598-60.285,25.516-80.89 c18.645-22.735,50.642-40.17,77.986-42.086c4.619,31.149-8.093,61.498-24.826,82.965 C309.37,106.527,278.508,124.411,248.644,123.476z M409.034,231.131c8.461-23.606,25.223-44.845,51.227-59.175 c-26.278-32.792-63.173-51.83-97.99-51.83c-46.065,0-65.542,21.947-97.538,21.947c-32.96,0-57.965-21.947-97.866-21.947 c-39.127,0-80.776,23.848-107.19,64.577c-9.712,15.055-16.291,33.758-19.879,54.59c-9.956,58.439,4.916,134.557,49.279,202.144 c21.57,32.796,50.321,69.737,87.881,70.059c33.459,0.327,42.951-21.392,88.246-21.616c45.362-0.258,53.959,21.841,87.372,21.522 c37.571-0.317,67.906-41.199,89.476-73.991c15.359-23.532,21.167-35.418,33.11-62.023 C414.435,352.487,389.459,285.571,409.034,231.131z">
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <CardTitle>Apple</CardTitle>
                    </CardContentWrapper>
                    <CardDescription className="font-bold">Lead product designer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</CardDescription>
                    <CardContentWrapper className="mt-2">
                      <CardContentWrapper>
                        <MapPin size={16} />
                        <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                      </CardContentWrapper>
                      <CardContentWrapper>
                        <MapPin size={16} />
                        <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                      </CardContentWrapper>
                    </CardContentWrapper>
                  </CardContent>
                </Card>
                {/* card 2 */}
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col w-full ">
              <div className=" w-full ">
                <h1 className="text-sm font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  sm:leading-10  md:leading-14">Education</h1>
                <hr className="w-full bg-gray-700 h-[2px] border-none" />
              </div>
              <div className="w-full flex flex-col gap-6 py-4 ">
                {/* card 1 */}
                <Card>
                  <CardHeader>
                    <CardContentWrapper>
                      <svg className="w-8 h-8" fill="#ffff" version="1.1" xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 512 512">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="7935ec95c421cee6d86eb22ecd114eed">
                            {' '}
                            <path d="M248.644,123.476c-5.45-29.71,8.598-60.285,25.516-80.89 c18.645-22.735,50.642-40.17,77.986-42.086c4.619,31.149-8.093,61.498-24.826,82.965 C309.37,106.527,278.508,124.411,248.644,123.476z M409.034,231.131c8.461-23.606,25.223-44.845,51.227-59.175 c-26.278-32.792-63.173-51.83-97.99-51.83c-46.065,0-65.542,21.947-97.538,21.947c-32.96,0-57.965-21.947-97.866-21.947 c-39.127,0-80.776,23.848-107.19,64.577c-9.712,15.055-16.291,33.758-19.879,54.59c-9.956,58.439,4.916,134.557,49.279,202.144 c21.57,32.796,50.321,69.737,87.881,70.059c33.459,0.327,42.951-21.392,88.246-21.616c45.362-0.258,53.959,21.841,87.372,21.522 c37.571-0.317,67.906-41.199,89.476-73.991c15.359-23.532,21.167-35.418,33.11-62.023 C414.435,352.487,389.459,285.571,409.034,231.131z">
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <CardTitle>Apple</CardTitle>
                    </CardContentWrapper>
                    <CardDescription className="font-bold">Lead product designer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</CardDescription>
                    <CardContentWrapper className="mt-2">
                      <CardContentWrapper>
                        <MapPin size={16} />
                        <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                      </CardContentWrapper>
                      <CardContentWrapper>
                        <MapPin size={16} />
                        <CardDescription className="text-[12px]">11.2016 - current</CardDescription>
                      </CardContentWrapper>
                    </CardContentWrapper>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <br />
          {/* activity */}
          <div className="flex my-4 justify-center gap-4">
            <Card className="w-full">
              <CardHeader className="mb-0">
                <CardContentWrapper className="flex-col items-start">
                  <CardTitle>Join 5.600+ My Newsletter Readers </CardTitle>
                  <CardDescription>Unlocking Creativity: Your Biweekly Design Fix, spam-free</CardDescription>
                </CardContentWrapper>

                <CardContentWrapper className='gap-4'>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="name@gmail.com" />
                  </div>
                  <Button className='bg-[#24262b] py-1.5 px-4'>Subscribe</Button>
                </CardContentWrapper>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
