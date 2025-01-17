import React, { useCallback, useRef } from "react";
import { FaSearch } from "react-icons/fa";
const Seclast = () => {
  
  return (
    <div
      id="lll"
      className="container mt-20 my-4 rounded-lg bg-[#0000000D] 
      justify-center items-center border  flex sm:w-[450px] sm:mx-auto max-md:w-full max-md:flex-col md:w-[500px] md:flex-col lg:w-[800px] lg:flex-row xl:flex-row xl:w-[1050px] xl:h-[250px] 2xl:w-[1200px]"
    >
      <div className="flex max-md:flex-col max-md:px-2 md:flex-col xl:flex-row">
        <div className="flex text-[35px]  max-md:my-3 justify-center items-center xl:px-5 sm:my-3 sm:px-4">
          <h1 className="sm:mx-auto  text-center ">
            GET READY TO KNOW THE LATEST UPDATE!
          </h1>
        </div>
        <div className="flex justify-center text-[20px] items-center xl:px-5 max-lg:my-3 max-lg:mx-6 ">
          <p
            className="flex justify-center items-center text-[#00000099] max-md:px-8  max-md:mx-auto max-md:text-justify
          md:px-4 xl:text-center"
          >
            Join us for our latest upcoming events by subscribing us & get
            notified..
          </p>
        </div>
      </div>
      <form className="relative max-md:my-6">
        <input
          placeholder="Enter Search..."
          className="text-black rounded-full h-[50px] max-sm:w-[330px] max-md:px-3 max-sm:text-[15px] sm:w-[350px] md:w-[400px] lg:w-[350px] lg:mx-auto xl:w-[300px] "
          type="text"
        />
        <button className="absolute bg-purple-800  text-white rounded-full max-sm:left-[250px] max-md:left-[280px] h-[50px] px-4 py-2 max-lg:left-[330px] lg:left-[265px] xl:left-[220px]">
          Search
        </button>
      </form>
    </div>
  );
};

export default Seclast;
