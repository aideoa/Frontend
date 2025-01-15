import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { SiChainlink } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";
const sidebar = [
  {
    icon: <IoMdHome className="w-[24px] text-white my-auto h-[24px] ml-1 " />,
    heading: "Dashboard",
  },
  {
    icon: (
      <IoIosPersonAdd className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Members",
  },
  {
    icon: (
      <RiMoneyRupeeCircleLine className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Transaction",
  },
  {
    icon: <SlCalender className="w-[24px] text-white my-auto h-[24px] ml-1 " />,
    heading: "Events",
  },
  {
    icon: (
      <TiDocumentText className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Resource",
  },
  {
    icon: (
      <TiDocumentText className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Lastest News",
  },
  {
    icon: (
      <FaRegQuestionCircle className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Query",
  },
  {
    icon: (
      <PiIdentificationBadgeDuotone className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "ID CARD",
  },
  {
    icon: (
      <FaPhoneSquareAlt className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Contact us",
  },
  {
    icon: <FaBell className="w-[24px] text-white my-auto h-[24px] ml-1 " />,
    heading: "Notification",
  },
  {
    icon: (
      <SiChainlink className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Common Links",
  },
  {
    icon: (
      <IoIosPeople className="w-[24px] text-white my-auto h-[24px] ml-1 " />
    ),
    heading: "Our Teams",
  },
];

const SideBar = () => {
  return (
    <>
      <div className="h-[72.91%] flex justify-center w-full">
        <div className="w-[85.71%] my-[30px] h-full border ">
          <span className="w-full h-[5.02%] flex justify-center items-center ">
            <div className="w-[91.66%] flex ">
              <img src="/images/logo.png" className="w-[40px] inline" alt="" />
              <div className="h-[27px] text-[#4B0082] text-[20px] font-[800] my-auto flex justify-start items-center">
                <p className="">AIDEOA</p>
              </div>
            </div>
          </span>
          <div className="h-[90.78%] w-full flex flex-col justify-evenly items-center">
            {sidebar.map((btn, index) => (
              <button
                key={index}
                className={`  flex w-[91.66%]  h-[7.69%] bg-[#4B0082] rounded-lg items-center`}
              >
                ${btn.icon}
                <p className="h-[44%] text-white text-left ml-1 my-auto text-[16px] w-[62.72%]">
                  {btn.heading}
                </p>
                <FaAngleRight className="w-[12px] text-white my-auto gap-[10px] h-[24px]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
