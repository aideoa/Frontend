import React from "react";

const Slide = (props) => {
  return (
    <>
      <div
        class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
        style={{ boxShadow: "2px 2px 5px 5px gray" }}
      >
        <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
          <img
            src="/images/base.png"
            class="object-contain absolute left-[-8px]"
            alt=""
          />
        </div>
        <div class=" ">
          <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
            {props.data}
          </p>
        </div>
      </div>
    </>
  );
};

export default Slide;
