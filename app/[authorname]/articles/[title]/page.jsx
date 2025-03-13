// "use client";
import React from "react";

const Page = async ({ params }) => {
  const { authorname, title } = await params; // Destructure the parameters
  console.log(authorname, title); // Check if these values are being logged correctly

  return (
    <>
      <div className="py-10 mt-14 mx-auto w-full max-w-640 px-4 sm:px-6">
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <div className="mb-0.5">
              <span className="max-w-fit ">
                <a
                  className="mx-auto"
                  href="https://peerlist.io/ankitmathur/articles"
                >
                  <div className="w-10 h-10 relative">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -right-1 bottom-0 outline-none z-1"
                    >
                      <rect
                        x={1}
                        y={1}
                        width={18}
                        height={18}
                        rx={9}
                        fill="rgb(var(--gray-00))"
                      />
                      <path
                        d="M8.4773 2.80234C9.21702 1.73255 10.7828 1.73255 11.5225 2.80234C11.9706 3.45043 12.7717 3.74544 13.5267 3.54042C14.773 3.20199 15.9725 4.22029 15.8595 5.52087C15.791 6.30877 16.2173 7.05577 16.9259 7.38975C18.0957 7.94104 18.3675 9.50115 17.4547 10.424C16.9017 10.983 16.7537 11.8325 17.0844 12.5492C17.6302 13.7322 16.8473 15.1042 15.5618 15.2174C14.783 15.286 14.1299 15.8405 13.9279 16.6046C13.5944 17.8658 12.1231 18.4076 11.0663 17.6583C10.4262 17.2044 9.57363 17.2044 8.93345 17.6583C7.87671 18.4076 6.40539 17.8658 6.07192 16.6046C5.86989 15.8405 5.21682 15.286 4.43803 15.2174C3.15249 15.1042 2.36961 13.7322 2.91544 12.5492C3.24611 11.8325 3.09807 10.983 2.54507 10.424C1.63224 9.50115 1.90413 7.94104 3.07386 7.38975C3.78249 7.05577 4.20875 6.30877 4.1403 5.52087C4.02731 4.22029 5.22675 3.20199 6.47304 3.54042C7.22807 3.74544 8.02918 3.45043 8.4773 2.80234Z"
                        fill="url(#paint0_linear_11664_9169)"
                      />
                      <path
                        d="M6.66667 10.254L8.66667 12.1112L13.3333 7.77783"
                        stroke="#fff"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x={1}
                        y={1}
                        width={18}
                        height={18}
                        rx={9}
                        stroke="rgb(var(--gray-00))"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_11664_9169"
                          x1="9.9999"
                          y1={2}
                          x2="9.9999"
                          y2={18}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#27AE60" />
                          <stop offset={1} stopColor="#1E874B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="w-10 h-10 rounded-full overflow-hidden ">
                      <img
                        className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1   bg-gray-00"
                        src="https://dqy38fnwh4fqs.cloudfront.net/UHMQLEANQ97N67BH6DAJQDKKBA6J/hmqleanq97n67bh6dajqdkkba6j-profile.webp"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </a>
              </span>
            </div>
            <span className="max-w-fit ">
              <a href="https://peerlist.io/ankitmathur/articles">
                <p className="text-gray-1k font-semibold text-sm hover:underline transition-all ease-in-out mb-0.5">
                  Ankit Mathur
                </p>
              </a>
            </span>
            <p className="text-gray-500 dark:text-gray-600 font-normal text-xs flex items-center mt-1">
              Mar 08, 2025&nbsp;•&nbsp;4 min read
            </p>
          </div>
        </div>
        <h1 className="text-gray-1k font-semibold text-xxxl mb-2 leading-10 text-center">
          Blockchain for Beginners - A Compact Guide
        </h1>
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://dqy38fnwh4fqs.cloudfront.net/UHMQLEANQ97N67BH6DAJQDKKBA6J/blog/featured-bfdbe767-4473-47a9-8da2-d2bf78652eda.webp"
            alt="Blockchain for Beginners - A Compact Guide"
            className="w-full rounded-2xl border border-primaryBorder"
          />
        </div>
        <div>
          <div className="peerlist-blog">
            <div className="break-words text-gray-1k ">
              <p className="">
                Blockchain is creating a radical change in which we record and
                maintain tamper-free transactions. Its decentralized and
                transparent framework finds immense value in various industries.
                Perhaps, this explains why the industry is poised to grow from
                USD 20.1 billion in 2024 to USD 248.9 billion in 2029. This
                comes to a Compounded Annual Growth Rate of 65.5% during the
                period. It is found to be prominently used in areas like
                payments, smart contracts, and digital identities.
              </p>
              <p className="">
                Let us explore the nuances of this interesting technology for
                beginners.
              </p>
              <h2>What is Blockchain?</h2>
              <p className="">
                We begin the discussion by looking at the concept. Blockchain
                can be described as a digital ledger system used to store secure
                transaction data. It possesses a decentralized network of nodes
                helps record information and confirm it in a block.
              </p>
              <p className="">
                There are transactions in each of these blocks which are
                confirmed by certain consensus mechanisms before being added to
                the online ledger. Such verifications are done using either the
                Proof of Stake or Proof of Work.
              </p>
              <p className="">
                The best part is that once the data is added to the blockchain,
                it is nearly impossible to alter it. This immutable property has
                a lot of significance in sectors like{" "}
                <a
                  href="https://www.oxtrys.com/techandfinancial"
                  rel="noreferrer nofollow ugc"
                  target="_blank"
                  className="text-green-500"
                >
                  finance
                </a>{" "}
                and supply chain.
              </p>
              <h2>How it Works?</h2>
              <p className="">
                Blockchain works on a simple premise of secure record-keeping
                free that cannot be tampered with. Here is a list of steps on
                how it works.
              </p>
              <p className="">1 - Initiate Transaction</p>
              <p className="">
                A user will initiate a transaction. It may be either making a
                payment or executing a smart contract. Even transfer of digital
                assets can come under this step.
              </p>
              <p className="">2 – Verify the Transaction</p>
              <p className="">
                The data is broadcast across a network of nodes. It uses either
                Proof of Work or Proof of Stake to process the transaction and
                create new blocks. Here, the entries are verified before
                entering into a distributed database.
              </p>
              <p className="">3 – Block Formation</p>
              <p className="">
                Verified transactions are grouped in a block. A unique hash is
                generated to ensure total security.
              </p>
              <p className="">4 – Block Linking</p>
              <p className="">
                The new block is now linked to the existing block. This creates
                a chain of immutable blocks.
              </p>
              <p className="">5 – Decentralized Storage</p>
              <p className="">
                The transaction data is updated on all nodes. As a result, it
                prevents issues due to a single point of
                failure.&nbsp;&nbsp;&nbsp;
              </p>
              <h2>What are the features of Blockchain?</h2>
              <p className="">1 - Decentralization</p>
              <p className="">
                Blockchain is able to distribute control among various nodes.
                This is done in such a way that there is no dependence on
                central authorities. Such measures serve to prevent fraud and
                censorship. As a result, it helps with trustless transactions.
              </p>
              <p className="">
                This also leads to better security and transparency in
                blockchain. This is why the technology is so prominent in areas
                like finance and governance.
              </p>
              <p className="">2 - Security</p>
              <p className="">
                With cryptographic hashing and decentralized validation,
                blockchain guarantees security. Transactions take the form of
                encrypted ones that cannot be altered. Plus, they are confirmed
                via consensus protocols such as PoW or PoS.
              </p>
              <p className="">
                The design of this system reduces cyber threats and unauthorized
                changes. Hence, blockchain becomes an effective tool for online
                payments and safe record keeping.
              </p>
              <p className="">3 - Transparency</p>
              <p className="">
                Every transaction is recorded on a public ledger in blockchains
                ensuring that nothing is hidden. The information stored is in
                such a way that it cannot be changed, therefore creating trust
                and responsibility among users of such information.
              </p>
              <p className="">
                The financial, healthcare and logistic industries benefit
                immensely from this technology. It offers increased compliance
                and better fraud detection and prevention.
              </p>
              <h2>How is Blockchain used</h2>
              <p className="">1 - Finance</p>
              <p className="">
                The use of blockchain technology makes it possible to have
                transactions which are safe and cannot be changed. It also helps
                in reducing the reliance on intermediaries. Smart contracts
                automate processes such as loan agreements and insurance claims.
                The latter lowers costs by improving efficiency. Moreover,
                blockchain enhances quick cross-border transactions that in turn
                boost liquidity as well financial inclusion.
              </p>
              <p className="">
                A real-world example of how blockchain affects the finance
                sector is Bank Of America. It states that tokenization of assets
                like commodities and equities is a 'key driver of digital asset
                adoption'. For them, putting up these tangible assets on the
                blockchain presents the convenience of buying and selling round
                the clock. This is made possible because there are no
                intermediaries or brokers involved.
              </p>
              <p className="">2 - Healthcare</p>
              <p className="">
                In healthcare, blockchain secures patient data. It ensures a
                high degree of privacy and interoperability among providers. It
                enhances the medical supply chain by tracking pharmaceuticals.
                This helps in lowering the shipments of counterfeit drugs and
                ensuring authenticity. Moreover, blockchain streamlines billing
                and claims as well. In this space, it curbs fraud and reduces
                administrative costs.
              </p>
              <p className="">3 - Supply Chain</p>
              <p className="">
                Blockchain is very effective in this sector too. It enhances
                transparency and traceability because every transaction is
                recorded on a tamper-proof digital ledger. As a result, the
                likelihood of fraud is decreased. In addition, one will be able
                to determine the originality of products while experiencing
                better inventory control. Stakeholders are capable of monitoring
                goods at the moment; hence trust among them within the entire
                supply chain is increased.
              </p>
              <p className="">
                The trends show that this sector will continue its upward march.
                This growth is largely fueled by an increase in venture capital
                funding and sustained investments in blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end pr-4 ">
        <div className="fixed bottom-14 md:top-[50%] -translate-y-[50%] z-5 bg-gray-00 md:bg-transparent p-2 rounded-xl flex md:flex-col flex-row items-end gap-4">
          <div
            className="flex gap-2 items-center flex-row-reverse md:flex-row"
            data-tip="true"
            data-for="comments"
            currentitem="false"
          >
            <p className="text-gray-500 dark:text-gray-600 font-normal text-xs ">
              0
            </p>
            <button
              type="button"
              className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6H22M18 2V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H11.5M6.5 18C6.29454 19.0019 5.37769 21.1665 6.31569 21.8651C6.806 22.2218 7.58729 21.8408 9.14987 21.0789C10.2465 20.5441 11.3562 19.9309 12.5546 19.655C12.9931 19.5551 13.4395 19.5125 14 19.5C17.7712 19.5 19.6569 19.5 20.8284 18.3284C21.947 17.2098 21.9976 15.4403 21.9999 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </button>
          </div>
          <div
            className="flex gap-2 items-center flex-row-reverse md:flex-row"
            data-tip="true"
            data-for="likes"
            currentitem="false"
          >
            <p className="text-gray-500 dark:text-gray-600 font-normal text-xs ">
              0
            </p>
            <button
              type="button"
              className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4626 3.9941C16.7809 2.34918 14.4404 4.01206 13.0344 5.06796C12.4578 5.50091 12.1696 5.71738 12 5.71738C11.8304 5.71738 11.5422 5.50091 10.9656 5.06796C9.55962 4.01206 7.21909 2.34918 4.53744 3.9941C1.01807 6.15289 0.22172 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15289 19.4626 3.9941Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </button>
          </div>
          <div
            className="flex gap-2 items-center flex-row-reverse md:flex-row"
            data-tip="true"
            data-for="bookmarks"
            currentitem="false"
          >
            <p className="text-gray-500 dark:text-gray-600 font-normal text-xs ">
              0
            </p>
            <button
              type="button"
              className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
            >
              <svg
                width={16}
                height={16}
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
          <div className="hidden md:block">
            <div
              className="flex gap-2 items-center flex-row-reverse md:flex-row"
              data-tip="true"
              data-for="screenshot"
              currentitem="false"
            >
              <button
                type="button"
                className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.9835 2C6.17689 2.06395 4.53758 2.33111 3.41752 3.44729C2.43723 4.42418 2.10954 5.79744 2 8M15.0165 2C17.8231 2.06395 19.4624 2.33111 20.5825 3.44729C21.5628 4.42418 21.8905 5.79744 22 8M15.0165 22C17.8231 21.9361 19.4624 21.6689 20.5825 20.5527C21.5628 19.5758 21.8905 18.2026 22 16M8.9835 22C6.17689 21.9361 4.53758 21.6689 3.41752 20.5527C2.43723 19.5758 2.10954 18.2026 2 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="flex gap-2 items-center flex-row-reverse md:flex-row"
            data-tip="true"
            data-for="copy-link"
            currentitem="false"
          >
            <button
              type="button"
              className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 w-8 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 14.5L14.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M16.8463 14.6095L19.4558 12C21.5147 9.94112 21.5147 6.60302 19.4558 4.54415C17.397 2.48528 14.0589 2.48528 12 4.54415L9.39045 7.1537M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39045"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
