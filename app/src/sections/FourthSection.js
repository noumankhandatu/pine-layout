import React from "react";
import Appfont, { AppCustomFont } from "../Appfont/Appfont";
import AppButton from "../components/button";
import { CIcon, DarkIcon, DocketIcon, FlyIcon, LightIcon, Line, RustIcon } from "../assets/icons";
import { SecondSectionBanner } from "../components/banner";
import vercelImg from "../assets/vercel.PNG";
import Image from "next/image";
import banner from "../assets/baner.png";
// eslint-disable-next-line react/jsx-key
const Icons = [<DocketIcon />, <RustIcon />, <CIcon />];

const FourthSection = () => {
  return (
    <div className="pb-32">
      <div className="flex justify-center items-center">
        <Line className="h-4 w-2 border-l border-[rgba(15,5,24,0.20)]" />
      </div>
      <div className="flex items-center text-center justify-center pt-16 ">
        <AppButton className={"ml-1 mr-1 px-[20px] py-[8px]"} startIcon={<FlyIcon />}>
          Edge
        </AppButton>
      </div>
      <AppCustomFont className={" text-center pt-5 pb-4 text-[30px] text-black font-bold"}>
        Above the clouds{" "}
      </AppCustomFont>
      <Appfont className={"text-center  mb-5"}>
        Get the scalability of serverless and the reusability of cloud. Deploy to <br /> the edge,
        save your users time and yourself money.
      </Appfont>
      <div className="green-gradientthree">
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              className="lg:w-full  w-[370px]"
              style={{
                maxWidth: "none",
                height: "auto",
              }}
              src={banner}
              alt="img"
            />
          </div>
          <div className="flex lg:flex-row flex-col-reverse gap-2 justify-center items-center mt-10 mb-10">
            <div className="flex  justify-center items-center ">
              <LightIcon />
              <Appfont className=" text-white text-[22px] text-center mr-4">
                Infinite scalability
              </Appfont>
            </div>
            <div className="flex  justify-center items-center ">
              <DarkIcon />
              <Appfont className=" text-white text-[22px] text-center">Instant cold starts</Appfont>
            </div>
          </div>
        </div>
        <div className="w-4/5 absolute bottom-5 lg:left-60 left-10 transform translate-x-(-50) translate-y-(-50)">
          <SecondSectionBanner
            lableOne="Faster, cheaper & indefinitely scalable"
            lableTwo=""
            color="#B091E0"
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

export default FourthSection;
