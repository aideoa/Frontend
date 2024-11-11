import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { LuUploadCloud } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { BsPlus } from "react-icons/bs";

import { LuPen } from "react-icons/lu";
const data = {
  name: "Demi Wilkinson",
  employeeId: "#4564812",
  mobileNo: "9784115599",
  emailAddress: "depaksutharr@gmail.com",
  companyName: "American Asturias pvt. ltd",
  officeAddress: "American Asturias Flores 121, BA, UK",
  selfAddress: "USA, Golden City Slate, BA, USA",
};

const IdCardUpdate = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex   justify-between items-start lg:items-center mb-4">
        <div className="flex gap-2">
          <FaArrowLeft className="mt-2" />
          <div>
            <h2 className="text-xl font-semibold">Demi Wilkinson</h2>
            <p className="text-gray-500 text-xs">24 Sep. 2024 | 12:40:26 pm</p>
          </div>
        </div>
        <div className="text-gray-400 flex text-sm">
          <p>1245 of 1953</p>
          <button className="ml-2 bg-white shadow-lg px-3">❮</button>
          <button className="bg-white shadow-lg px-3">❯</button>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <div className="flex  ">
          <div className="flex flex-col  gap-4 w-1/2">
            <div className="flex items-center ">
              <label className="text-gray-600 w-1/5">Name:</label>
              <input
                type="text"
                value={data.name}
                className="border border-gray-300 max-md:flex-grow rounded-lg p-2 font-medium"
              />
            </div>
            <div className="flex items-center ">
              <label className="text-gray-600 w-1/5">Employee Id:</label>
              <input
                type="text"
                value={data.employeeId}
                className="border border-gray-300 max-md:flex-grow rounded-lg p-2 font-medium"
              />
            </div>
            <div className="flex items-center ">
              <label className="text-gray-600 w-1/5">Mobile No:</label>
              <input
                type="text"
                value={data.mobileNo}
                className="border border-gray-300 max-md:flex-grow rounded-lg p-2 font-medium"
              />
            </div>
            <div className="flex items-center ">
              <label className="text-gray-600 w-1/5">Email Address:</label>
              <input
                type="email"
                value={data.emailAddress}
                className="border border-gray-300 max-md:flex-grow rounded-lg p-2 font-medium"
              />
            </div>
            <div className="flex items-center ">
              <label className="text-gray-600 w-1/5">Company Name:</label>
              <input
                type="text"
                value={data.companyName}
                className="border border-gray-300 max-md:flex-grow rounded-lg p-2 font-medium"
              />
            </div>
            <div className="flex items-center ">
              <label className="text-gray-600 w-1/5">Office Address:</label>
              <input
                type="text"
                value={data.officeAddress}
                className="border border-gray-300 max-md:flex-grow rounded-lg p-2 font-medium"
              />
            </div>
            <div className="flex items-center ">
              <label className="text-gray-600 w-1/5">Self Address:</label>
              <input
                value={data.selfAddress}
                type="text"
                className="border border-gray-300 max-md:flex-grow rounded-lg p-2 font-medium"
              />
            </div>
          </div>
          <div className="flex  flex-col w-1/2 gap-5">
            <div className="flex items-center gap-10">
              <p className="text-gray-600 w-1/5">Id Card</p>
              <div className="w-80 h-36  border shadow-md rounded-xl p-2 bg-white">
                <label
                  htmlFor="file"
                  className="flex flex-col justify-center gap-1 items-center cursor-pointer h-full border-dashed border-2  rounded-xl"
                >
                  <LuUploadCloud size={20}/>
                  <span className="text-gray-400 text-sm text-center">Browse and chose the files you want to upload from your computer</span>
                  <span className="bg-[#4B0082] rounded-md text-sm font-semibold ">
                  <BsPlus  size={30} className="text-white"/>

                  </span>
                  {/* {file && <p className="text-gray-400"> {file.name}</p>} */}
                </label>
                <input
                  // onChange={handleFileChange}
                  type="file"
                  id="file"
                  className="hidden"
                />
              </div>
            </div>
            <div className="flex gap-10">
              <p className="w-1/5">Upload File</p>
              <div className="flex border items-center w-80 justify-between p-4 rounded-xl bg-white shadow-md">
                <div className="text-gray-600 flex items-center gap-2">
                  <div className="bg-purple-100 p-1 rounded-full">
                    <CiFileOn className="" />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">Id Card</p>
                    <p className="text-xs">200 KB</p>
                  </div>
                </div>
                <FaDownload />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6 text-sm">
          <button className="text-[#4B0082] duration-300 border font-medium border-[#4B0082] hover:bg-red-50 px-2  py-3 rounded-lg mr-4">
            Discard changes
          </button>

          <button className="bg-[#4B0082] duration-300 flex font-medium  items-center gap-1 text-white justify-center px-2 rounded-lg py-3 hover:opacity-75">
            <LuPen className="mt-1" />
            Update now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdCardUpdate;
