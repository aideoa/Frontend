import React, { useEffect, useRef } from "react";
import Slide from "./Slide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Scroll = () => {
  const data = [
    "Central Coalfields Limited",
    "Eastern Coalfields Limited",
    "Mahandi Coalfields Limited",
    "Bharat Cooking Coal Limited",
    "South Eastern Coalfields Limited",
    "Central Coalfields Limited",
    "Eastern Coalfields Limited",
    "Mahandi Coalfields Limited",
    "Bharat Cooking Coal Limited",
    "South Eastern Coalfields Limited",
    "Central Coalfields Limited",
    "Eastern Coalfields Limited",
    "Mahandi Coalfields Limited",
    "Bharat Cooking Coal Limited",
    "South Eastern Coalfields Limited",
  ];
  gsap.registerPlugin(ScrollTrigger);
  const line1 = useRef(null);
  const line2 = useRef(null);
  // const line3 = useRef(null);
  useGSAP(() => {
    gsap.to(line1.current, {
      x: 1000,
      duration: 5,
      repeat: -1,
      yoyo: true,
      // scrollTrigger: {
      //   trigger: line1.current,
      //   scroller: "body",
      //   markers: true,
      //   start: "top 1654px",
      //   end: "bottom 2400px",
      //   scrub: 2,
      // },
    });
    gsap.to(line2.current, {
      x: -1000,
      duration: 5,
      repeat: -1,
      yoyo: true,
    });
    // gsap.to(line3.current, {
    //   x: 1000,
    //   repeat: -1,
    //   duration: 5,
    //   yoyo: true,
    // });
    gsap.to(".teamupdata", {
      opacity: 0,
      duration: 2,
      delay: 1,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div
      id="sec2"
      class="h-full m-4 overflow-x-hidden max-w-[96%]  flex flex-col justify-center items-center"
    >
      <img src="./images/logo.png" className="w-[100px] h-[100px]" alt="" />
      <div class="dibba my-3">
        {" "}
        <h1 class=" teamupdata flex justify-center items-center font-bold text-[30px]">
          Already team up and moving forward!
        </h1>
      </div>
      <p class="my-3 text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni?
      </p>
      <div
        id="scroller"
        class="big flex flex-col justify-center items-center gap-10 "
      >
        <div
          ref={line1}
          class="medium my-5 -translate-x-[115px] flex gap-5 justify-center items-center"
        >
          {/* line1 start here */}
          {data.map((d, index) => (
            <div key={index}>
              <Slide data={d} />
            </div>
          ))}

          {/* line1 ends here */}
        </div>
        <div
          ref={line2}
          class="medium my-5 -translate-x-5 flex gap-5 justify-center items-center"
        >
          {/* line1 start here */}
          {data.map((d) => (
            <Slide data={d} />
          ))}

          {/* line1 ends here */}
        </div>
        {/* <div
          ref={line3}
          class="medium my-5 -translate-x-[115px] flex gap-5 justify-center items-center"
        >
          {/* line1 start here */}
        {/* {data.map((d) => (
            <Slide data={d} />
          ))} */}

        {/* line1 ends here */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Scroll;
