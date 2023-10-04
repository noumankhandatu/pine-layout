import React from "react";
import Appfont, { AppHeading } from "../../Appfont/Appfont";

const Banner = () => {
  return (
    <div
      style={{ backgroundColor: "#0f0518", boxShadow: `0px 0px 73px 16px #A490C3` }}
      class=" text-white p-8 relative w-4/5 rounded-lg  "
    >
      <div style={{ height: "20px" }}></div>
      <p class="text-white text-[48px]">Get Started</p>
      <div style={{ height: "30px" }}></div>
      <Appfont class="text-base mb-10 ">
        Join the vibrant Wasmer community. Create your fist package, run it from the shell and
        deploy it to the Edge
      </Appfont>
      <div class="absolute bottom-6 right-5 p-2">
        <button class="bg-white w-12 h-12 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              class="h-6 w-6 text-gray-400"
              d="M2.25 1.75781H10.5M10.5 1.75781V10.0078M10.5 1.75781L1.5 10.7578"
              stroke="#0F0518"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default Banner;

export const SecondSectionBanner = ({ lableOne, lableTwo, color }) => {
  return (
    <div
      style={{ backgroundColor: "#0f0518", boxShadow: `0px 0px 73px 16px ${color}` }}
      class=" text-white p-8 relative lg:w-4/5  w-full rounded-lg "
    >
      <p class="text-white text-[28px] mb-4"> {lableOne}</p>
      <Appfont class="text-base mb-10">{lableTwo}</Appfont>
      <div class="absolute bottom-2 right-5 p-2">
        <button class="bg-white w-12 h-12 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              class="h-6 w-6 text-gray-400"
              d="M2.25 1.75781H10.5M10.5 1.75781V10.0078M10.5 1.75781L1.5 10.7578"
              stroke="#0F0518"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
