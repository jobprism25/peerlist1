"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="lg:w-[640px] w-full h-full pb-20  pt-14">
      <div
        aria-label="Center Top"
        className="h-14 z-60 lg:border-r border-b border-primaryBorder box-border lg:max-w-[640px] lg:w-[640px] fixed top-0 bg-gray-00 py-4  sm:px-6 lg:left-auto lg:right-auto flex items-center justify-between  w-full px-4"
      >
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="mr-2 justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
            fdprocessedid="mbmz2"
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5833 12H5M5 12L12 5M5 12L12 19"
                stroke="currentColor"
                strokeWidth="1.46"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </button>
          <p className="text-base text-gray-1k font-semibold paragraph-clamp1 mr-2 ">
            Jobs at R3
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
              title="Report this job"
              fdprocessedid="046hh8"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.0249 21C5.04385 19.2643 5.04366 17.5541 5.0366 15.9209M5.0366 15.9209C5.01301 10.4614 4.91276 5.86186 5.19475 4.04271C5.5611 1.67939 9.39301 3.82993 13.9703 5.59842L16.0328 6.48729C17.5508 7.1415 19.7187 8.30352 18.7662 9.66084C18.3738 10.22 17.56 10.8596 16.0575 11.567L5.0366 15.9209Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </button>
            <div id="dropdown-trigger-button" className="w-fit relative flex  ">
              <button
                type="button"
                id="radix-:ri:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                className="outline-none absolute h-full w-full -z-10"
                fdprocessedid="s6kjhe"
              />
              <div
                className=""
                role="button"
                tabIndex={0}
                fdprocessedid="yvpb99"
              >
                <button
                  type="button"
                  className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
                  data-tip="true"
                  data-for="share-button"
                  data-effect="solid"
                  currentitem="false"
                  fdprocessedid="iouj0s"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 21C18.2161 21 18.9028 20.7155 19.4092 20.2092C19.9155 19.7028 20.2 19.0161 20.2 18.3C20.2 17.5839 19.9155 16.8972 19.4092 16.3908C18.9028 15.8845 18.2161 15.6 17.5 15.6C16.7839 15.6 16.0972 15.8845 15.5908 16.3908C15.0845 16.8972 14.8 17.5839 14.8 18.3C14.8 19.0161 15.0845 19.7028 15.5908 20.2092C16.0972 20.7155 16.7839 21 17.5 21ZM17.5 8.4C18.2161 8.4 18.9028 8.11554 19.4092 7.60919C19.9155 7.10284 20.2 6.41608 20.2 5.7C20.2 4.98392 19.9155 4.29716 19.4092 3.79081C18.9028 3.28446 18.2161 3 17.5 3C16.7839 3 16.0972 3.28446 15.5908 3.79081C15.0845 4.29716 14.8 4.98392 14.8 5.7C14.8 6.41608 15.0845 7.10284 15.5908 7.60919C16.0972 8.11554 16.7839 8.4 17.5 8.4ZM6.7 14.7C7.41608 14.7 8.10284 14.4155 8.60919 13.9092C9.11554 13.4028 9.4 12.7161 9.4 12C9.4 11.2839 9.11554 10.5972 8.60919 10.0908C8.10284 9.58446 7.41608 9.3 6.7 9.3C5.98392 9.3 5.29716 9.58446 4.79081 10.0908C4.28446 10.5972 4 11.2839 4 12C4 12.7161 4.28446 13.4028 4.79081 13.9092C5.29716 14.4155 5.98392 14.7 6.7 14.7V14.7Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M15.2502 7.05005L8.9502 10.65M8.9502 13.35L15.2502 16.95"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="button"
              className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
              title="Save this job"
              fdprocessedid="2jduw4"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
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
      </div>
      <div className="mb-28 sm:mb-0 min-h-screen lg:min-h-[calc(100vh-132px)]">
        <div className="relative">
          <div className="border-b border-primaryBorder lg:p-6 p-4 bg-gray-50 ">
            <div className="mb-4 flex items-center justify-between">
              <a className="flex" href="/company/r3877">
                <img
                  alt="R3"
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full bg-center bg-no-repeat bg-cover bg-gray-00 flex justify-center items-center object-contain hover:opacity-90 transition-opacity border border-primaryBorder flex-grow rounded-full hover:opacity-80"
                  src="https://logo.clearbit.com/r3.com"
                  style={{ color: "transparent", width: 40, height: 40 }}
                />
              </a>
              <div className="flex items-center">
                <a
                  type="button"
                  className="h-6 px-3 flex items-center gap-1 justify-center text-center  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
                  href="https://r3.com/jobs/software-engineer/?ref=peerlist"
                  target="_blank"
                  rel="noreferrer"
                  title="Apply for Software Engineer at R3"
                >
                  Apply
                  <span className="-mr-1">
                    <span className="-rotate-45 block">
                      <svg
                        width={20}
                        height={20}
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
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-gray-1k font-semibold text-lg ">
                Software Engineer
              </h1>
              <p className="text-gray-1k font-normal text-sm ">
                at R3<span>&nbsp;•&nbsp;Full-time</span>
              </p>
            </div>
            <div className="flex pt-4 gap-6 flex-wrap">
              <div className="m-0">
                <p className="text-gray-700 font-normal text-xs mb-0.5">
                  Location
                </p>
                <p className="text-gray-1k font-medium text-xs text-gray-1k">
                  <span className="capitalize">hybrid (Mumbai, India)</span>
                </p>
              </div>
              <div className="m-0">
                <p className="text-gray-700 font-normal text-xs mb-0.5">
                  Experience
                </p>
                <p className="text-gray-1k font-medium text-xs text-gray-1k">
                  2+ years
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 sm:mx-6 mx-4 mt-6 ">
          <div className="flex flex-col gap-4">
            <p className="text-gray-1k font-semibold text-sm ">
              Must have skills
            </p>
            <ul className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="text-xs font-medium leading-4 border border-primaryBorder rounded-lg text-gray-1k inline-flex items-center justify-center gap-x-1 px-2 py-1 h-6 box-border hover:shadow-tag-hover transition-all ease-in-out select-none group/tag bg-gray-00 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 "
                aria-label="Skill button"
                fdprocessedid="uwm9qn"
              >
                <img
                  src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/java.svg"
                  alt="Java icon"
                  width={14}
                  height={14}
                  className="object-cover w-[14px] h-[14px] "
                />
                <span>Java</span>
              </button>
              <button
                type="button"
                className="text-xs font-medium leading-4 border border-primaryBorder rounded-lg text-gray-1k inline-flex items-center justify-center gap-x-1 px-2 py-1 h-6 box-border hover:shadow-tag-hover transition-all ease-in-out select-none group/tag bg-gray-00 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 "
                aria-label="Skill button"
                fdprocessedid="0j1iob"
              >
                <img
                  src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/kotlin.svg"
                  alt="Kotlin icon"
                  width={14}
                  height={14}
                  className="object-cover w-[14px] h-[14px] "
                />
                <span>Kotlin</span>
              </button>
              <button
                type="button"
                className="text-xs font-medium leading-4 border border-primaryBorder rounded-lg text-gray-1k inline-flex items-center justify-center gap-x-1 px-2 py-1 h-6 box-border hover:shadow-tag-hover transition-all ease-in-out select-none group/tag bg-gray-00 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 "
                aria-label="Skill button"
                fdprocessedid="6k5aom"
              >
                <span>JVM</span>
              </button>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-1k font-semibold text-sm ">
              About this Opportunity
            </p>
            <div className="job-description">
              <div className="break-words text-gray-1k text-sm font-normal">
                <p className="">
                  <br />
                  At R3 our vision is a world where value moves freely, and
                  business is done safely. Our mission is to enable an open,
                  trusted, and enduring digital economy. We are a scale up with
                  a startup’s grit. We encourage a workforce where no idea is
                  too small, and no two days are the same.
                </p>
                <p className="">
                  <strong>About the role</strong>
                  <br />
                  We are looking for experienced software engineers to join the
                  team working on the Corda 4 platform. Corda 4 is our
                  distributed ledger technology (DLT) platform, in production at
                  customer sites. You will be working on the design and
                  implementation of new features for the Corda 4 platform, these
                  features are driven by customer need. You will be involved in
                  design discussions and will contribute to the design and
                  implementation of the features. You will also be resolving
                  issues found in the platform.
                </p>
                <p className="">
                  <strong>Your responsibilities</strong>:<br />• Discuss, design
                  and implement features for the Corda 4 platform using Kotlin.
                  <br />• Investigate and resolve issues with elegant solutions
                  that stand the test of time.
                  <br />• Provide ad hoc support when required to our support
                  team in the investigation of potential issues.
                  <br />• Support other departments in r3 where engineering
                  assistance is required.
                </p>
                <p className="">
                  <strong>Your skills and experience</strong>:<br />• Maintains
                  a positive, can do, cheerful attitude.
                  <br />• Self-sufficient software engineer with distributed
                  system design skills.
                  <br />• Strong understanding of computer science and
                  engineering principles, obtained through academic study and
                  professional experience.
                  <br />• Strong experience in Java (or Kotlin), with an
                  eagerness to learn Kotlin. JVM knowledge, (garbage collection
                  tuning, performance and memory profiling), and/or familiarity
                  with the Java ecosystem is a bonus.
                  <br />• Able to work equally well as part of a team or
                  individually.
                  <br />• Typically 2+ years of extensive commercial experience.
                  Interacts with cross functional teams to take open
                  requirements to a working production system.
                  <br />• Has a delivery focused attitude.
                  <br />• Motivated by solving obscure problems.
                  <br />• Experience investigating issues with applications
                  running in production.
                  <br />• Experience debugging, reproducing or theorising edge
                  cases that might be reported by Quality Assurance testers or
                  customers.
                  <br />• Writes code that is simple, elegant and fit for the
                  long term.
                  <br />• Able to articulate complex concepts.
                  <br />• Thinks in the long term when engineering solutions.
                  <br />• Blockchain or Distributed Ledger Technology experience
                  not necessary but an eagerness to learn is.
                  <br />• Message Broker, Message Queueing or similar experience
                  beneficial.
                  <br />• Relational database and public key infrastructure
                  experience beneficial.
                </p>
                <p className="">
                  R3 is a leading enterprise technology firm specialising in
                  digital solutions for regulated financial markets. Our
                  technology enables financial markets to operate with greater
                  efficiency, transparency and enhanced connectivity. Our focus
                  is on progressing markets and fostering an open, trusted and
                  enduring digital economy.
                </p>
                <p className="">
                  R3ers center around our core values – Collaborative,
                  Ownership, Bold and Customer First – as a result our flagship
                  DLT platform, Corda, and R3 Digital Markets product suite is
                  trusted by the world’s leading financial market
                  infrastructures (FMIs), exchanges, central banks and
                  commercial banks.
                </p>
                <p className="">
                  R3 is proud to be an equal opportunity workplace. We are a
                  diverse and inclusive team that supports all ethnicities,
                  races, genders, sexual orientations, origins, disability and
                  veteran status and cultures. At R3, we’re committed to
                  fostering an environment where individuality–not conformity–is
                  embraced and valued because we believe our collective
                  differences are what make us better together.{" "}
                </p>
                <p className="">
                  If you don’t meet all of the above criteria, but you think
                  you’d be a great addition to R3, send us your CV/resume. We’re
                  always interested in meeting bold, collaborative people who
                  are excited to work with us.
                </p>
              </div>
            </div>
          </div>
          <div />
          <div className="flex flex-col gap-10 md:hidden">
            <div className="w-full group flex gap-4">
              <div className="lf-player-container">
                <div
                  id="lottie"
                  style={{
                    background: "transparent",
                    margin: "0px auto",
                    outline: "none",
                    overflow: "hidden",
                    height: 40,
                    width: 40,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1024 1024"
                    width={1024}
                    height={1024}
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "translate3d(0px, 0px, 0px)",
                      contentVisibility: "visible",
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_186">
                        <rect width={1024} height={1024} x={0} y={0} />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_186)">
                      <g
                        style={{ display: "block" }}
                        transform="matrix(1,0,0,1,29.048004150390625,501.2680358886719)"
                        opacity={1}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,185.0019989013672,220.23599243164062)"
                        >
                          <path
                            fill="rgb(252,215,53)"
                            fillOpacity={1}
                            d=" M119.04299926757812,-25.599000930786133 C51.88199996948242,-47.770999908447266 45.755001068115234,-72.76399993896484 34.46699905395508,-114.93099975585938 C34.46699905395508,-114.93099975585938 6.328999996185303,-213.61599731445312 6.328999996185303,-213.61599731445312 C4.636000156402588,-219.98599243164062 -11.972999572753906,-219.98599243164062 -13.746999740600586,-213.61599731445312 C-13.746999740600586,-213.61599731445312 -32.854000091552734,-122.4280014038086 -32.854000091552734,-122.4280014038086 C-44.222999572753906,-80.4219970703125 -68.41000366210938,-47.04399871826172 -109.69000244140625,-33.417999267578125 C-109.69000244140625,-33.417999267578125 -175.47999572753906,-4.877999782562256 -175.47999572753906,-4.877999782562256 C-184.59100341796875,-1.8949999809265137 -184.7519989013672,11.005000114440918 -175.64199829101562,14.069000244140625 C-175.64199829101562,14.069000244140625 -109.36799621582031,37.53099822998047 -109.36799621582031,37.53099822998047 C-68.2490005493164,51.15700149536133 -44.222999572753906,84.53500366210938 -32.77399826049805,126.37999725341797 C-32.77399826049805,126.37999725341797 -13.666000366210938,213.61599731445312 -13.666000366210938,213.61599731445312 C-11.892000198364258,219.98500061035156 4.636000156402588,219.98500061035156 6.328999996185303,213.61599731445312 C6.328999996185303,213.61599731445312 28.743000030517578,126.78299713134766 28.743000030517578,126.78299713134766 C40.111000061035156,84.69599914550781 57.5260009765625,51.23699951171875 113.39900207519531,37.53099822998047 C113.39900207519531,37.53099822998047 175.64199829101562,14.069000244140625 175.64199829101562,14.069000244140625 C184.7519989013672,10.923999786376953 184.67100524902344,-1.975000023841858 175.4810028076172,-4.956999778747559 C175.4810028076172,-4.956999778747559 119.04299926757812,-25.599000930786133 119.04299926757812,-25.599000930786133z"
                          />
                        </g>
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,275.1000061035156,110.30400085449219)"
                        >
                          <path
                            fill="rgb(255,237,87)"
                            fillOpacity={1}
                            d=" M-78.447998046875,-6.449999809265137 C-71.59500122070312,56.92100143432617 -68.12799835205078,74.49700164794922 -16.770000457763672,87.63899993896484 C-16.770000457763672,87.63899993896484 90.21900177001953,108.52100372314453 90.21900177001953,108.52100372314453 C89.09100341796875,106.98899841308594 87.47799682617188,105.6989974975586 85.302001953125,105.05400085449219 C85.302001953125,105.05400085449219 28.86400032043457,84.33300018310547 28.86400032043457,84.33300018310547 C-30.072999954223633,64.177001953125 -46.35900115966797,38.53799819946289 -57.404998779296875,-12.73900032043457 C-68.44999694824219,-64.01599884033203 -80.22200012207031,-97.4749984741211 -80.22200012207031,-97.4749984741211 C-84.33399963378906,-108.52100372314453 -90.21900177001953,-107.95700073242188 -90.21900177001953,-107.95700073242188 C-90.21900177001953,-107.95700073242188 -78.447998046875,-6.449999809265137 -78.447998046875,-6.449999809265137z"
                          />
                        </g>
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,275.9070129394531,334.8840026855469)"
                        >
                          <path
                            fill="rgb(244,180,0)"
                            fillOpacity={1}
                            d=" M-77.31900024414062,-9.795999526977539 C-77.31900024414062,-69.53900146484375 -44.66600036621094,-99.12799835205078 7.256999969482422,-99.12799835205078 C7.256999969482422,-99.12799835205078 88.04299926757812,-102.43399810791016 88.04299926757812,-102.43399810791016 C88.04299926757812,-102.43399810791016 83.36699676513672,-96.22599792480469 75.2229995727539,-94.29000091552734 C75.2229995727539,-94.29000091552734 22.493000030517578,-77.11699676513672 22.493000030517578,-77.11699676513672 C-22.253000259399414,-59.13800048828125 -42.6510009765625,-50.10900115966797 -56.518001556396484,11.086000442504883 C-56.518001556396484,11.086000442504883 -74.41699981689453,82.27799987792969 -77.8030014038086,89.7760009765625 C-82.47899627685547,100.25800323486328 -88.04199981689453,102.43399810791016 -88.04199981689453,102.43399810791016 C-88.04199981689453,102.43399810791016 -77.31900024414062,-9.795999526977539 -77.31900024414062,-9.795999526977539z"
                          />
                        </g>
                      </g>
                      <g
                        style={{ display: "block" }}
                        transform="matrix(1,0,0,1,340.9049987792969,43.23699951171875)"
                        opacity={1}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,325.8940124511719,460.70001220703125)"
                        >
                          <path
                            fill="rgb(252,215,53)"
                            fillOpacity={1}
                            d=" M309.5190124511719,-17.496000289916992 C309.5190124511719,-17.496000289916992 197.20799255371094,-53.696998596191406 197.20799255371094,-53.696998596191406 C125.37200164794922,-77.4000015258789 83.28700256347656,-135.52999877929688 63.53300094604492,-208.5760040283203 C63.53300094604492,-208.5760040283203 14.109000205993652,-449.3240051269531 14.109000205993652,-449.3240051269531 C12.819000244140625,-454.0799865722656 9.673999786376953,-460.4490051269531 -0.0010000000474974513,-460.4490051269531 C-8.142999649047852,-460.4490051269531 -12.819999694824219,-454.0799865722656 -14.109999656677246,-449.3240051269531 C-14.109999656677246,-449.3240051269531 -63.53300094604492,-208.49600219726562 -63.53300094604492,-208.49600219726562 C-83.36699676513672,-135.4510040283203 -125.37200164794922,-77.31999969482422 -197.20799255371094,-53.61600112915039 C-197.20799255371094,-53.61600112915039 -309.5199890136719,-17.413999557495117 -309.5199890136719,-17.413999557495117 C-325.40301513671875,-12.253999710083008 -325.6449890136719,10.159000396728516 -309.8420104980469,15.5600004196167 C-309.8420104980469,15.5600004196167 -196.7239990234375,54.50400161743164 -196.7239990234375,54.50400161743164 C-125.12899780273438,78.28800201416016 -83.36699676513672,136.33799743652344 -63.53300094604492,209.06100463867188 C-63.53300094604492,209.06100463867188 -14.029000282287598,447.14599609375 -14.029000282287598,447.14599609375 C-12.73900032043457,451.90301513671875 -10.07800006866455,460.45001220703125 0.0820000022649765,460.45001220703125 C10.803999900817871,460.45001220703125 12.899999618530273,451.90301513671875 14.1899995803833,447.14599609375 C14.1899995803833,447.14599609375 63.694000244140625,209.06100463867188 63.694000244140625,209.06100463867188 C83.5270004272461,136.25599670410156 125.29000091552734,78.20700073242188 196.88600158691406,54.50400161743164 C196.88600158691406,54.50400161743164 310.00201416015625,15.5600004196167 310.00201416015625,15.5600004196167 C325.6440124511719,10.07800006866455 325.4020080566406,-12.336000442504883 309.5190124511719,-17.496000289916992z"
                          />
                        </g>
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,489.885986328125,227.73399353027344)"
                        >
                          <path
                            fill="rgb(255,237,87)"
                            fillOpacity={1}
                            d=" M156.17100524902344,225.54800415039062 C154.3979949951172,221.11300659179688 150.92999267578125,217.2449951171875 145.52699279785156,215.4709930419922 C145.52699279785156,215.4709930419922 33.21799850463867,179.27000427246094 33.21799850463867,179.27000427246094 C-38.61899948120117,155.56700134277344 -80.70600128173828,97.43499755859375 -100.45999908447266,24.388999938964844 C-100.45999908447266,24.388999938964844 -149.88299560546875,-216.35800170898438 -149.88299560546875,-216.35800170898438 C-150.60800170898438,-219.0989990234375 -153.18800354003906,-224.0970001220703 -156.17100524902344,-225.54800415039062 C-156.17100524902344,-225.54800415039062 -140.20700073242188,16.083999633789062 -140.20700073242188,16.083999633789062 C-128.35400390625,126.37899780273438 -118.1969985961914,178.30299377441406 -30.15399932861328,193.4600067138672 C45.47200012207031,206.52200317382812 132.9510040283203,221.51699829101562 156.17100524902344,225.54800415039062z"
                          />
                        </g>
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,486.1369934082031,693.5040283203125)"
                        >
                          <path
                            fill="rgb(244,180,0)"
                            fillOpacity={1}
                            d=" M160.16099548339844,-227.64500427246094 C160.16099548339844,-227.64500427246094 -34.62900161743164,-182.97799682617188 -34.62900161743164,-182.97799682617188 C-103.24099731445312,-165.56300354003906 -141.05499267578125,-125.81600189208984 -141.05499267578125,-21.80900001525879 C-141.05499267578125,-21.80900001525879 -160.16200256347656,227.6439971923828 -160.16200256347656,227.6439971923828 C-153.6320037841797,227 -148.31100463867188,223.45199584960938 -146.05299377441406,214.34100341796875 C-146.05299377441406,214.34100341796875 -96.54900360107422,-23.7450008392334 -96.54900360107422,-23.7450008392334 C-76.71600341796875,-96.54900360107422 -34.95199966430664,-154.59800720214844 36.643001556396484,-178.30099487304688 C36.643001556396484,-178.30099487304688 149.75999450683594,-217.24400329589844 149.75999450683594,-217.24400329589844 C155.08099365234375,-219.17799377441406 158.46800231933594,-223.1300048828125 160.16099548339844,-227.64500427246094z"
                          />
                        </g>
                      </g>
                      <g
                        style={{ display: "block" }}
                        transform="matrix(1,0,0,1,216.9119873046875,43.97100830078125)"
                        opacity={1}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,142.70700073242188,172.45799255371094)"
                        >
                          <path
                            fill="rgb(244,180,0)"
                            fillOpacity={1}
                            d=" M118.03500366210938,6.449999809265137 C122.55000305175781,4.918000221252441 122.38899993896484,-1.531999945640564 117.79299926757812,-2.822000026702881 C117.79299926757812,-2.822000026702881 55.55099868774414,-19.591999053955078 55.55099868774414,-19.591999053955078 C42.48899841308594,-23.138999938964844 32.33000183105469,-33.21699905395508 28.621999740600586,-46.198001861572266 C28.621999740600586,-46.198001861572266 4.111999988555908,-147.38299560546875 4.111999988555908,-147.38299560546875 C2.9030001163482666,-152.30099487304688 -4.111999988555908,-152.30099487304688 -5.321000099182129,-147.302001953125 C-5.321000099182129,-147.302001953125 -28.3799991607666,-46.520999908447266 -28.3799991607666,-46.520999908447266 C-31.927000045776367,-33.137001037597656 -42.409000396728516,-22.816999435424805 -55.792999267578125,-19.350000381469727 C-55.792999267578125,-19.350000381469727 -117.63200378417969,-3.305999994277954 -117.63200378417969,-3.305999994277954 C-122.22799682617188,-2.0959999561309814 -122.55000305175781,4.354000091552734 -118.03500366210938,5.966000080108643 C-118.03500366210938,5.966000080108643 -52.808998107910156,28.541000366210938 -52.808998107910156,28.541000366210938 C-41.11899948120117,32.573001861572266 -32.0890007019043,42.08599853515625 -28.541000366210938,53.9379997253418 C-28.541000366210938,53.9379997253418 -5.241000175476074,147.3820037841797 -5.241000175476074,147.3820037841797 C-4.031000137329102,152.22000122070312 2.9030001163482666,152.30099487304688 4.111999988555908,147.3820037841797 C4.111999988555908,147.3820037841797 28.2189998626709,53.61600112915039 28.2189998626709,53.61600112915039 C31.847000122070312,41.76300048828125 40.957000732421875,32.33000183105469 52.729000091552734,28.3799991607666 C52.729000091552734,28.3799991607666 118.03500366210938,6.449999809265137 118.03500366210938,6.449999809265137z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={10}
                            stroke="rgb(244,180,0)"
                            strokeOpacity={1}
                            strokeWidth="8.063"
                            d=" M118.03500366210938,6.449999809265137 C122.55000305175781,4.918000221252441 122.38899993896484,-1.531999945640564 117.79299926757812,-2.822000026702881 C117.79299926757812,-2.822000026702881 55.55099868774414,-19.591999053955078 55.55099868774414,-19.591999053955078 C42.48899841308594,-23.138999938964844 32.33000183105469,-33.21699905395508 28.621999740600586,-46.198001861572266 C28.621999740600586,-46.198001861572266 4.111999988555908,-147.38299560546875 4.111999988555908,-147.38299560546875 C2.9030001163482666,-152.30099487304688 -4.111999988555908,-152.30099487304688 -5.321000099182129,-147.302001953125 C-5.321000099182129,-147.302001953125 -28.3799991607666,-46.520999908447266 -28.3799991607666,-46.520999908447266 C-31.927000045776367,-33.137001037597656 -42.409000396728516,-22.816999435424805 -55.792999267578125,-19.350000381469727 C-55.792999267578125,-19.350000381469727 -117.63200378417969,-3.305999994277954 -117.63200378417969,-3.305999994277954 C-122.22799682617188,-2.0959999561309814 -122.55000305175781,4.354000091552734 -118.03500366210938,5.966000080108643 C-118.03500366210938,5.966000080108643 -52.808998107910156,28.541000366210938 -52.808998107910156,28.541000366210938 C-41.11899948120117,32.573001861572266 -32.0890007019043,42.08599853515625 -28.541000366210938,53.9379997253418 C-28.541000366210938,53.9379997253418 -5.241000175476074,147.3820037841797 -5.241000175476074,147.3820037841797 C-4.031000137329102,152.22000122070312 2.9030001163482666,152.30099487304688 4.111999988555908,147.3820037841797 C4.111999988555908,147.3820037841797 28.2189998626709,53.61600112915039 28.2189998626709,53.61600112915039 C31.847000122070312,41.76300048828125 40.957000732421875,32.33000183105469 52.729000091552734,28.3799991607666 C52.729000091552734,28.3799991607666 118.03500366210938,6.449999809265137 118.03500366210938,6.449999809265137z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-gray-1k font-normal text-2xl font-instrument">
                    Find the perfect job!
                  </p>
                  <p className="text-gray-1k font-normal text-sm ">
                    Use Job Hunt AI to find the perfect job for you.
                  </p>
                </div>
                <a
                  type="button"
                  className="  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-xs leading-4 py-1 h-6 rounded-lg px-3 text-gray-00 bg-gray-900 border-gray-1k hover:bg-gray-1k disabled:bg-gray-900 dark:bg-gray-1k dark:border-gray-800 dark:hover:bg-gray-800 dark:disabled:bg-gray-800 shadow-10 hover:shadow-15 dark:shadow-10 dark:hover:hover:shadow-10"
                  href="/job-hunt-ai"
                >
                  Job Hunt AI
                  <span className="-mr-1">
                    <svg
                      width={14}
                      height={14}
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
        </div>
      </div>
    </div>
  );
};

export default page;
