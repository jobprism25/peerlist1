import React from "react";

const Toprightbar = () => {
  return (
    <div className="flex h-14 top-0 lg:w-348 w-full float-right relative z-50">
      <div
        aria-label="App Navbar"
        className="lg:w-348 z-[50] -mt-px w-full fixed top-0 bg-gray-00 lg:px-6 flex-shrink-0 lg:border-l lg:border-b border-primaryBorder"
      >
        <div className="lg:py-3">
          <div className="hidden lg:flex justify-end items-center gap-4 h-full box-border">
            <a
              type="button"
              className="justify-center  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 text-gray-00 bg-gray-900 border-gray-1k hover:bg-gray-1k disabled:bg-gray-900 dark:bg-gray-1k dark:border-gray-800 dark:hover:bg-gray-800 dark:disabled:bg-gray-800 shadow-10 hover:shadow-15 dark:shadow-10 dark:hover:hover:shadow-10"
              href="/login"
            >
              Log in
            </a>
            <a
              type="button"
              className="justify-center  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 bg-green-300 text-white border-green-500 hover:border-green-600 disabled:bg-green-400 disabled:border-green-400 dark:hover:bg-green-400 dark:hover:border-green-400 dark:disabled:bg-green-400 shadow-10 hover:shadow-15"
              href="/signup"
            >
              Create Profile
            </a>
          </div>
        </div>
        <div className="block lg:hidden ">
          <div className="border-b border-primaryBorder flex items-center w-full h-14 sticky top-0 bg-gray-00 z-10">
            <nav className="flex items-center justify-between px-4 lg:px-10 max-w-screen w-full mx-auto">
              <div className="flex items-center gap-x-6">
                <a className="outline-none" href="/">
                  <div className="block dark:hidden">
                    <img
                      alt="Peerlist"
                      loading="lazy"
                      width={124}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover hidden lg:block"
                      src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full-light.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="hidden dark:block">
                    <img
                      alt="Peerlist"
                      loading="lazy"
                      width={124}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover hidden lg:block"
                      src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full-dark.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="block lg:hidden">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <g id="Logo Colour=Primary, Logo Type=LogoMark, Shape=Squircle">
                        <g id="bg">
                          <path
                            id="mask"
                            d="M28 0C6.22222 0 0 6.22222 0 28C0 49.7778 6.23778 56 28 56C49.7622 56 56 49.7778 56 28C56 6.22222 49.7622 0 28 0Z"
                            fill="#00AA45"
                          />
                          <path
                            id="mask (Stroke)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.24755 7.24755C3.5875 10.9076 2 17.153 2 28C2 38.8461 3.59108 45.0918 7.25306 48.7521C10.9153 52.4127 17.1612 54 28 54C38.8388 54 45.0847 52.4127 48.7469 48.7521C52.4089 45.0918 54 38.8461 54 28C54 17.1539 52.4089 10.9082 48.7469 7.24787C45.0847 3.58733 38.8388 2 28 2C17.153 2 10.9076 3.5875 7.24755 7.24755ZM0 28C0 6.22222 6.22222 0 28 0C49.7622 0 56 6.22222 56 28C56 49.7778 49.7622 56 28 56C6.23778 56 0 49.7778 0 28Z"
                            fill="#219653"
                          />
                        </g>
                        <g id="logo">
                          <path
                            id="shadow"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27.0769 13H15V47H24.3846V39.8889H27.0769C34.7305 39.8889 41 33.9048 41 26.4444C41 18.984 34.7305 13 27.0769 13ZM24.3846 30.7778V22.1111H27.0769C29.6194 22.1111 31.6154 24.0864 31.6154 26.4444C31.6154 28.8024 29.6194 30.7778 27.0769 30.7778H24.3846Z"
                            fill="#24292E"
                          />
                          <path
                            id="solid"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 12H29.0769C36.2141 12 42 17.5716 42 24.4444C42 31.3173 36.2141 36.8889 29.0769 36.8889H25.3846V44H18V12ZM25.3846 29.7778H29.0769C32.1357 29.7778 34.6154 27.39 34.6154 24.4444C34.6154 21.4989 32.1357 19.1111 29.0769 19.1111H25.3846V29.7778Z"
                            fill="white"
                          />
                          <path
                            id="outline"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 11H29.0769C36.7305 11 43 16.984 43 24.4444C43 31.9048 36.7305 37.8889 29.0769 37.8889H26.3846V45H17V11ZM19 13V43H24.3846V35.8889H29.0769C35.6978 35.8889 41 30.7298 41 24.4444C41 18.1591 35.6978 13 29.0769 13H19ZM24.3846 18.1111H29.0769C32.6521 18.1111 35.6154 20.9114 35.6154 24.4444C35.6154 27.9775 32.6521 30.7778 29.0769 30.7778H24.3846V18.1111ZM26.3846 20.1111V28.7778H29.0769C31.6194 28.7778 33.6154 26.8024 33.6154 24.4444C33.6154 22.0864 31.6194 20.1111 29.0769 20.1111H26.3846Z"
                            fill="#24292E"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
                <div className="lg:flex items-center gap-x-2 hidden">
                  <p className="text-2xl font-light text-gray-400">/</p>
                  <div className="flex items-center gap-x-2.5 ">
                    <a
                      className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl  hover:border-gray-300 hover:shadow-focus-border whitespace-nowrap "
                      href="/individuals"
                    >
                      Individuals
                    </a>
                    <a
                      className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl  hover:border-gray-300 hover:shadow-focus-border whitespace-nowrap "
                      href="/companies"
                    >
                      Companies
                    </a>
                    <a
                      className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl  hover:border-gray-300 hover:shadow-focus-border whitespace-nowrap "
                      href="/launchpad"
                    >
                      Launchpad
                    </a>
                    <a
                      className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl  hover:border-gray-300 hover:shadow-focus-border whitespace-nowrap "
                      href="/jobs/role"
                    >
                      Find Jobs
                    </a>
                  </div>
                </div>
                <div className="absolute block lg:hidden bg-gray-00 top-14 transition-all ease-in-out duration-300 w-full shadow-xl left-0 h-0 opacity-0 invisible">
                  <div className="flex flex-col mt-4">
                    <a
                      className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
                      href="/individuals"
                    >
                      <p>
                        <span className="text-gray-400">for</span> Individuals
                      </p>
                      <span className="group-focus:translate-x-1">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
                      href="/companies"
                    >
                      <p>
                        <span className="text-gray-400">for</span> Companies
                      </p>
                      <span className="group-focus:translate-x-1">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
                      href="/launchpad"
                    >
                      <p>
                        <span className="text-gray-400">for</span> Launchpad
                      </p>
                      <span className="group-focus:translate-x-1">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      className="px-4 py-2 font-medium text-2xl font-instrument flex items-center justify-between group"
                      href="/jobs/role"
                    >
                      <p>
                        <span className="text-gray-400">for</span> Find Jobs
                      </p>
                      <span className="group-focus:translate-x-1">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <a
                  className="capitalize font-medium text-sm px-4 py-1.5 transition-all ease-in-out border border-transparent rounded-3xl  hover:border-gray-300 hover:shadow-focus-border whitespace-nowrap "
                  href="/login"
                >
                  Log in
                </a>
                <a
                  type="button"
                  className="  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 bg-green-300 text-white border-green-500 hover:border-green-600 disabled:bg-green-400 disabled:border-green-400 dark:hover:bg-green-400 dark:hover:border-green-400 dark:disabled:bg-green-400 shadow-10 hover:shadow-15"
                  href="/signup"
                >
                  Create Profile
                </a>
                <button
                  type="button"
                  className="p-1 rounded block lg::hidden transition-all duration-200"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5H21M3 12H21M3 19H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toprightbar;
