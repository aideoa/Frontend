import ImageCarousel from "../../../../components/carousel/ImageCarousel";
import React from "react";

const Section3 = () => {

  return (
    <div
      id="sec3"
      class="max-sm:flex max-sm:justify-center max-sm:items-center my-4 mx-auto max-sm:mx-4  sm:w-[640px] lg:w-[1000px] xl:w-[1250px] flex-wrap flex flex-col justify-center items-center"
    >
      <div class="content flex flex-col justify-center items-center text-lg">
        <p class=" text-xl my-3 font-bold">Photo Gallery</p>
        <p class="text-sm my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
          labore!
        </p>
      </div>
   <ImageCarousel />
    </div>
  );
};

export default Section3;

