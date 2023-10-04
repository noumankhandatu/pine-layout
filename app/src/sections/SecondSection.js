import React from "react";
import Appfont, { AppCustomFont, AppHeading } from "../Appfont/Appfont";
import AppButton from "../components/button";
import {
  Arow,
  BatteryIcon,
  CIcon,
  DarkIcon,
  DeployIcon,
  DocketIcon,
  FlyIcon,
  GoIcon,
  JSIcon,
  LightIcon,
  Line,
  PythonIcon,
  RustIcon,
} from "../assets/icons";
import { SecondSectionBanner } from "../components/banner";
import vercelImg from "../assets/vercel.PNG";
import Image from "next/image";
// eslint-disable-next-line react/jsx-key
const Icons = [<DocketIcon />, <RustIcon />, <CIcon />, <JSIcon />, <PythonIcon />, <GoIcon />];

const SecondSection = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-center pt-10 ">
        <AppHeading className={"text-[32px]"}>Create apps that</AppHeading>
        <AppButton className={"ml-2 mr-2 py-[8px] px-[20px]"} endIcon={<DarkIcon />} startIcon={<LightIcon />}>
          Run
        </AppButton>
        <AppHeading className={"text-[32px]"}>everywhere</AppHeading>{" "}
      </div>
      <div className="flex items-center text-center justify-center">
        <AppButton className={"ml-2 mr-2 py-[8px] px-[20px]"} endIcon={<Arow />} startIcon={<FlyIcon />}>
          Publish
        </AppButton>
        <AppHeading className={"text-[32px]"}>and share with the community</AppHeading>
      </div>
      <div className="flex items-center text-center justify-center">
        <AppHeading className={"text-[32px]"}>and</AppHeading>
        <AppButton className={"ml-2 mr-2 py-[8px] px-[20px]"} endIcon={<FlyIcon />} startIcon={<DeployIcon />}>
          Publish
        </AppButton>
        <AppHeading className={"text-[32px]"}>to the edge , globally</AppHeading>
      </div>
      <div className="flex justify-center items-center">
        <Line className="h-4 w-2 border-l border-[rgba(15,5,24,0.20)]" />
      </div>
      <div className="flex items-center text-center justify-center pt-16 ">
        <AppButton className={"ml-2 mr-2 py-[8px] px-[20px]"} startIcon={<LightIcon />}>
          Runtime
        </AppButton>
      </div>
      <AppCustomFont className={" text-center pt-5 pb-4 text-[30px] text-black font-bold"}>
        Run the world
      </AppCustomFont>
      <Appfont className={"text-center  mb-5"}>
        Using a binary for each platform and chip is the past. Rise above with <br /> lightweight
        containerized apps that simply run everywhere.
      </Appfont>
      <div className="green-gradient">
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
            {Icons.map((items, id) => {
              return (
                <div className="mr-2" key={id}>
                  {items}
                </div>
              );
            })}
          </div>
          <Appfont className="mt-10 text-white text-[18px]">
            Supports almost every programming language
          </Appfont>
        </div>
        <div
          className="w-4/5"
          style={{
            position: "absolute",
            bottom: "0%",
            left: "60%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <SecondSectionBanner color='#88C2AB' lableOne={'Truly universal, runs everywhere & fast as native'} lableTwo={'See more info about Runtime'} />
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

export default SecondSection;
