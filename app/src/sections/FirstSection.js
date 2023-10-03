"use client";

import React from "react";
import Appfont, { AppCustomFont, AppHeading } from "../Appfont/Appfont";
import Image from "next/image";
import { PillBtn } from "../components/button";
import ubuntuImg from "../../src/assets/ubuntu.png";
import Slider from "../components/carousel";

const FirstSection = () => {
  return (
    <>
      <div>
        <AppHeading className={"text-center"}>Run , Publish & Deploy</AppHeading>
        <AppHeading className={"text-center"}>any code - anywhere</AppHeading>
        <div className="h-32"></div>
        <div className="relative">
          <Slider />
          <Slider />
          <Slider />
          <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center pt-10">
              <Image
                src={ubuntuImg}
                alt="image"
                width={350}
                height={"auto"}
                style={{
                  backgroundColor: "#0f0518",
                  boxShadow: `0px 0px 73px 16px #A691C0`,
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <Appfont className={"text-center pt-12 mb-5"}>
            Serve sandboxed WebAssembly apps anywhere through a single <br /> runtime and do in days
            what others do in months.
          </Appfont>
          <AppCustomFont className={" text-center text-[18px] text-black font-bold"}>
            Reach for the stars, we do too.
          </AppCustomFont>
          <div className="flex justify-center pt-6 pb-6">
            <PillBtn />
          </div>
        </div>
        <div className="h-32"></div>
      </div>
    </>
  );
};

export default FirstSection;
