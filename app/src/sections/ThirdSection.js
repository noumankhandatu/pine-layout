import React from "react";
import Appfont, { AppCustomFont } from "../Appfont/Appfont";
import AppButton from "../components/button";
import { DarkIcon, Line } from "../assets/icons";
import { SecondSectionBanner } from "../components/banner";
import vercelImg from "../assets/vercel.PNG";
import Image from "next/image";
import Card from "../components/card";

const ThirdSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Line className="h-4 w-2 border-l border-[rgba(15,5,24,0.20)]" />
      </div>
      <div className="flex items-center text-center justify-center pt-16 ">
        <AppButton className={"ml-1 mr-1 px-[20px] py-[8px]"} startIcon={<DarkIcon />}>
          Registry
        </AppButton>
      </div>
      <AppCustomFont className={" text-center pt-5 pb-4 text-[30px] text-black font-bold"}>
        Better together
      </AppCustomFont>
      <Appfont className={"text-center  mb-5"}>
        Packages are limited by their languages no more. Collaborate across <br /> stacks, leverage
        all and contribute your own.
      </Appfont>
      <div className="green-gradienttwo">
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex justify-center lg:flex-row flex-col">
            {[1, 2, 3].map((items, id) => {
              return (
                <div className="mr-2 mb-8" key={id}>
                  <Card />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-4/5 absolute bottom-5 lg:left-60 left-10 transform translate-x-(-50) translate-y-(-50)">
          <SecondSectionBanner
            lableOne="All languages, fully containerized & collaborative"
            lableTwo="See more info about Registry"
            color=" rgba(247,200,155,1)"
          />
        </div>
      </div>
      <Appfont className={"text-center  mb-5"}>
        “This programming tool makes it easier for apps to <br /> work anywhere”
      </Appfont>
      <div className="flex justify-center">
        <Image src={vercelImg} width={"auto"} height={"auto"} alt="vercel" />
      </div>
    </div>
  );
};

export default ThirdSection;
