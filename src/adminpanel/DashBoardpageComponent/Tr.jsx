import React from "react";
import MyAreaChart from "./LineChart";

const Tr = () => {
  return (
    <div className="w-[65%] max-lg:w-full  bg-white p-5 rounded-lg mb-5 shadow-md">
      <div className="flex max-xl:flex-col gap-y-2 max-xl:justify-center items-center justify-between mb-4">
        <h2 className="text-lg mb-1 max-xsm:text-sm font-semibold my-1 border-b-black border-b-2">
          Report
        </h2>
        <div className="flex gap-1 w-full xl:w-[70%]  md:flex-nowrap flex-wrap max-xl:justify-around ">
          <button className=" lg:px-3 p-1 lg:py-1 border w-[40%] md:w-[25%] text-sm md:text-base border-gray-300 bg-white rounded-md focus:outline-none lg:text-base">
            12 Months
          </button>
          <button className="lg:px-3 p-1 lg:py-1 border w-[40%] md:w-[25%] text-sm border-gray-300 bg-white rounded-md focus:outline-none lg:text-base">
            6 Months
          </button>
          <button className="lg:px-3 p-1 lg:py-1 border w-[40%] md:w-[25%] text-sm border-gray-300 bg-white rounded-md focus:outline-none lg:text-lg">
            30 Days
          </button>
          <button className="lg:px-3 p-1 lg:py-1 border w-[40%] md:w-[25%] text-sm border-gray-300 bg-white rounded-md focus:outline-none lg:text-lg">
            7 Days
          </button>
        </div>
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none mt-1 text-lg">
          Export PDF
        </button>
      </div>
      <div className="h-[180px]">
        <MyAreaChart />
      </div>
    </div>
  );
};

export default Tr;
