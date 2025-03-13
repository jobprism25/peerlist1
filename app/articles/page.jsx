import React from "react";
import Toprightbar from "../components/Toprightbar";
import ShortArticle from "../components/ShortArticle";

const page = () => {
  return (
    <div className="lg:w-[640px] w-full h-full pb-20  pt-14">
      <div
        aria-label="Center Top"
        className="h-14 z-60 lg:border-r border-b border-primaryBorder box-border lg:max-w-[640px] lg:w-[640px] fixed top-0 bg-gray-00 py-4  sm:px-6 lg:left-auto lg:right-auto flex items-center justify-between  left-12 right-12 px-2"
      >
        <h1 className="text-base text-gray-1k font-semibold ">Articles</h1>
        <button
          type="button"
          className="  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 text-gray-00 bg-gray-900 border-gray-1k hover:bg-gray-1k disabled:bg-gray-900 dark:bg-gray-1k dark:border-gray-800 dark:hover:bg-gray-800 dark:disabled:bg-gray-800 shadow-10 hover:shadow-15 dark:shadow-10 dark:hover:hover:shadow-10"
          fdprocessedid="tvpxc"
        >
          <span className="-ml-1">
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_22634_9256)">
                <path
                  d="M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M12 12V22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M10 5H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <defs>
                <clipPath id="clip0_22634_9256">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Write Article
        </button>
      </div>
      <div className="py-6 relative h-full">
        <div className="mb-20 space-y-2">
          <ShortArticle />
        </div>
      </div>
    </div>
  );
};

export default page;
