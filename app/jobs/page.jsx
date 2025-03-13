import React from "react";
import Indivjob from "../components/jobs/Indivjob";

const page = () => {
  return (
    <div className="lg:w-[640px] w-full h-full pb-20 relative  mb-36 lg:mb-20 pt-14">
      {/* top part  */}
      <div
        aria-label="Center Top"
        className="h-14 z-60 lg:border-r border-b border-primaryBorder box-border lg:max-w-[640px] lg:w-[640px] fixed top-0 bg-gray-00 py-4  sm:px-6 lg:left-auto lg:right-auto flex items-center justify-between  left-12 right-12 px-2"
      >
        <h1 className="text-base text-gray-1k font-semibold ">All Jobs</h1>
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            type="button"
            className="  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
            href="/job-hunt-ai"
          >
            <span className="-ml-1">
              <span className=" text-yellow-200">
                <svg
                  width={17}
                  height={16}
                  viewBox="0 0 25 24"
                  fill="#F2C94C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33203 15C13.2067 15 15.332 12.949 15.332 8C15.332 12.949 17.4424 15 22.332 15C17.4424 15 15.332 17.1104 15.332 22C15.332 17.1104 13.2067 15 8.33203 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M2.33203 6.5C5.46579 6.5 6.83203 5.18153 6.83203 2C6.83203 5.18153 8.18872 6.5 11.332 6.5C8.18872 6.5 6.83203 7.85669 6.83203 11C6.83203 7.85669 5.46579 6.5 2.33203 6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </span>
            <span className="hidden md:block">AI Job Search</span>
          </a>
          <div className="hidden md:block">
            <button
              type="button"
              className="  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 text-gray-00 bg-gray-900 border-gray-1k hover:bg-gray-1k disabled:bg-gray-900 dark:bg-gray-1k dark:border-gray-800 dark:hover:bg-gray-800 dark:disabled:bg-gray-800 shadow-10 hover:shadow-15 dark:shadow-10 dark:hover:hover:shadow-10"
              fdprocessedid="yzdf5k"
            >
              <span className="-ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    d="M19 6h2m0 0h2m-2 0V4m0 2v2M12 15v1.5M3 11l.153 2.863c.164 3.614.246 5.42 1.406 6.529S7.527 21.5 11.145 21.5h1.71c3.618 0 5.427 0 6.586-1.108s1.242-2.915 1.406-6.529L21 11"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    d="M21 11c-1.7 3.231-5.38 4-9 4s-7.454-1.326-9.153-4.557C2.036 8.901 2.65 6 4.648 6H16"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    d="m16 6-.088-.31c-.44-1.54-.66-2.31-1.184-2.75s-1.22-.44-2.611-.44h-.234c-1.391 0-2.087 0-2.61.44-.525.44-.745 1.21-1.185 2.75L8 6"
                  />
                </svg>
              </span>
              Post a Job
            </button>
          </div>
          <button
            type="button"
            className="lg:hidden flex justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* jobs  */}
      <div>
        <ul>
          <Indivjob />
        </ul>
      </div>
    </div>
  );
};

export default page;
