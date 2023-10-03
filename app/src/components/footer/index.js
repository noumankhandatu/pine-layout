import React from "react";
import Appfont from "../../Appfont/Appfont";
import logo from "../../assets/logo.PNG";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-bgPrimary text-textPrimary py-8 relative">
        <div className="container mx-auto flex flex-wrap">
          {/* First Column */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-4 text-center flex  flex-col items-center	">
            <h2 className="text-2xl font-semibold mb-4">
              <Image src={logo} width="auto" height="auto" alt="logo" />
            </h2>
            <Appfont className="mb-2">Making software</Appfont>
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                />
              </svg>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-4">
            <h3 className="text-md text-black font-semibold mb-2">Explore</h3>
            <Appfont className={"mb-2 "}>Packages</Appfont>
            <Appfont className={"mb-2 "}>Blogs</Appfont>
          </div>

          {/* Third Column */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-4">
            <h3 className="text-md text-black font-semibold mb-2">Products</h3>
            <Appfont className={"mb-2 "}>Run</Appfont>
            <Appfont className={"mb-2 "}>Packages</Appfont>
            <Appfont className={"mb-2 "}>Blogs</Appfont>
          </div>

          {/* Fourth Column */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-4">
            <h3 className="text-md text-black font-semibold mb-2">Developers</h3>
            <Appfont className={"mb-2"}>Documentation</Appfont>
            <Appfont className={"mb-2 "}>Runtime</Appfont>
            <Appfont className={"mb-2 "}>Register</Appfont>
            <Appfont className={"mb-2 "}>Deploy</Appfont>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
