import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { LuPen } from "react-icons/lu";
const IdCardDetails = () => {
  return (
    <div className=" p-4 bg-gray-50 min-h-screen">
      <div className="flex  md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex gap-2">
          <FaArrowLeft className="mt-2" />
          <div>
            <h2 className="text-xl font-semibold">Demi Wilkinson</h2>
            <p className="text-gray-500 text-xs">24 Sep. 2024 | 12:40:26 pm</p>
          </div>
        </div>
        <div className="text-gray-400 text-sm">
          <span>1245 of 1953</span>
          <button className="ml-2 bg-white shadow-lg px-3">❮</button>
          <button className="bg-white shadow-lg px-3">❯</button>
        </div>
      </div>

      <div className=" flex flex-col gap-3">
       
            <p className="text-gray-600">
              Name: <span className="font-medium">Demi Wilkinson</span>
            </p>
            <p className="text-gray-600">
              Employee Id: <span className="font-medium">#4564812</span>{" "}
            </p>
            <p className="text-gray-600">
              Mobile No: <span className="font-medium">9784115599</span>{" "}
            </p>
            <p className="text-gray-600">
              Email Address: 
              <span className="font-medium"> depaksutharr@gmail.com</span>{" "}
            </p>

            <p className="text-gray-600">
              Company Name:
              <span className="font-medium"> American Asturias Pvt. Ltd</span>
            </p>
            <p className="text-gray-600">
              Office Address:
              <span className="font-medium">
                 American Asturias Flores 121, BA, UK
              </span>{" "}
            </p>
            <p className="text-gray-600">
              Self Address: 
              <span className="font-medium">
                 USA, Golden City Slate, BA, USA
              </span>{" "}
            </p>
         

        <div className="flex flex-col gap-3">
          <div className="flex items-center w-96 justify-between p-4 rounded-lg bg-white shadow-md">
            <div className="text-gray-600 flex items-center gap-2">
            <div className="bg-purple-100 p-1 rounded-full">
            <CiFileOn className=""/>
            </div>
           
            <div>
            <p className="font-semibold text-sm">Id Card</p>
            <p className="text-xs">200 KB</p>
            </div>
             
            </div>
            <FaDownload />
          </div>
          <div className="flex items-center w-96 justify-between bg-white shadow-md p-4 rounded-lg">
            <div className="text-gray-600 flex items-center gap-2">
            <div className="bg-purple-100 p-1 rounded-full">
            <CiFileOn className=""/>
            </div>
           
            <div>
            <p className="font-semibold text-sm">Personal Picture</p>
            <p className="text-xs">200 KB</p>
            </div>
             
            </div>
            <FaDownload />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="text-[#4B0082] border font-medium border-[#4B0082] hover:bg-red-50  w-24 py-1 rounded-lg mr-4">
            Rejected
          </button>
          <button className="text-green-600 border font-medium border-green-600 hover:bg-green-50  w-24 py-1 rounded-lg mr-4">
            Approve
          </button>
          <button className="bg-[#4B0082] flex font-medium  items-center gap-1 text-white justify-center w-24 rounded-lg py-1 hover:bg-purple-700">
          <LuPen  className="mt-1"/>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdCardDetails;
