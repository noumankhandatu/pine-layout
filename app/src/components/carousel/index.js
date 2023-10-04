"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import js from "../../assets/svg/JS.svg";
import chrome from "../../assets/svg/chrome.svg";
import php from "../../assets/svg/php.svg";
import rust from "../../assets/svg/rust.svg";
import python from "../../assets/svg/python.svg";
import c3 from "../../assets/svg/c 3.svg";
import ari from "../../assets/svg/Frame 48097727.svg";
import zs from "../../assets/svg/Group 48095750.svg";
import aris from "../../assets/svg/Group.svg";

const DATA = [
  {
    id: 1,
    imageURI: js,
  },
  {
    id: 2,
    imageURI: chrome,
  },
  {
    id: 3,
    imageURI: php,
  },
  {
    id: 4,
    imageURI: rust,
  },
  {
    id: 5,
    imageURI: python,
  },
  {
    id: 6,
    imageURI: c3,
  },
  {
    id: 3,
    imageURI: php,
  },
  {
    id: 4,
    imageURI: rust,
  },

  {
    id: 8,
    imageURI: ari,
  },
  {
    id: 9,
    imageURI: zs,
  },
  {
    id: 3,
    imageURI: php,
  },
  {
    id: 4,
    imageURI: rust,
  },
  {
    id: 10,
    imageURI: aris,
  },
  {
    id: 3,
    imageURI: php,
  },
  {
    id: 4,
    imageURI: rust,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Slider() {
  return (
    <div>
      <Carousel
        customTransition="3000ms ease-in-out"
        autoPlaySpeed={3000}
        autoPlay={true}
        draggable={true}
        infinite={true}
        slidesToSlide={10}
        responsive={responsive}
        arrows={false}
      >
        {DATA.map((items, id) => {
          return (
            <>
              <div className=" border-6 w-32 h-32 rounded-md ">
                <Image
                  src={items.imageURI}
                  alt="iamge"
                  id={items.id}
                  key={id}
                  className="w-22 h-22 border-6 rounded-sm "
                />
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
