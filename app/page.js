import React from "react";
import FirstSection from "./src/sections/FirstSection";
import SecondSection from "./src/sections/SecondSection";
import ThirdSection from "./src/sections/ThirdSection";
import FourthSection from "./src/sections/FourthSection";
import LastSection from "./src/sections/LastSection";
import Navbar from "./src/components/navbar";
import Footer from "./src/components/footer";

function page() {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-10 bg-bgPrimary">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <LastSection />
      </div>
      <Footer />
    </>
  );
}

export default page;
