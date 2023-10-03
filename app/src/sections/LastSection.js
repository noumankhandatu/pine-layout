import React from "react";
import Banner from "../components/banner";
import Appfont from "../Appfont/Appfont";
import vercelImg from "../assets/vercel.PNG";
import Image from "next/image";
const LastSection = () => {
  return (
    <div>
      <p className="text-[22px] mb-5 text-center font-bold">We are trusted by the best</p>
      <Appfont className={"text-center  mb-5"}>
        “This programming tool makes it easier for apps to <br /> work anywhere”
      </Appfont>
      <div className="flex justify-center">
        <Image src={vercelImg} width={"auto"} height={"auto"} alt="vercel" />
      </div>
      <div className="flex justify-center w-full pb-20 pt-10">
        <Banner />
      </div>
    </div>
  );
};

export default LastSection;
