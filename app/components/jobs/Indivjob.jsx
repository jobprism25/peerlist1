import React from "react";

const Indivjob = () => {
  return (
    <div className="w-full relative hover:bg-gray-25 ease-in duration-100">
      <a
        className="flex items-start gap-2 p-4 sm:px-6 sm:py-4"
        href="/company/metyis/careers/frontend-developer/jobhlkndron8rmkmocln8gma9bbone?utm_source=jobs-page"
      >
        <div className="shrink-0">
          <img
            alt=""
            loading="lazy"
            width={40}
            height={40}
            decoding="async"
            data-nimg={1}
            className="rounded-full bg-center bg-no-repeat bg-cover bg-gray-00 flex justify-center items-center object-contain hover:opacity-90 transition-opacity border border-primaryBorder flex-grow rounded-full hover:opacity-80"
            src="https://logo.clearbit.com/metyis.com"
            style={{ color: "transparent", width: 40, height: 40 }}
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center mb-0.5">
            <p className="text-gray-1k font-normal text-sm ">
              <span className="font-semibold text-sm">Frontend Developer</span>{" "}
              at Metyis
              <span className="text-gray-500 dark:text-gray-600 font-normal text-[10px] text-gray-400 inline sm:hidden ml-2">
                1d ago
              </span>
            </p>
            <div className="flex items-start gap-2">
              <span className="text-gray-500 dark:text-gray-600 font-normal text-[10px] text-gray-400 sm:inline hidden">
                1d ago
              </span>
            </div>
          </div>
          <div className="flex items-center flex-wrap mt-1">
            <p className="text-gray-500 dark:text-gray-600 font-normal text-xs text-gray-400 capitalize">
              in-office (Bengaluru, India)
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Indivjob;
