import React from "react";
import { IoMdHome, IoIosPersonAdd, IoIosPeople } from "react-icons/io";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { FaRegQuestionCircle, FaPhoneSquareAlt, FaBell } from "react-icons/fa";
import { PiIdentificationBadgeDuotone } from "react-icons/pi";
import { SiChainlink } from "react-icons/si";
import { BiTransferAlt } from "react-icons/bi";
import { GoGoal } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa";  

const sidebar = [
  { icon: IoMdHome, heading: "Dashboard" },
  { icon: IoIosPersonAdd, heading: "Members" },
  { icon: RiMoneyRupeeCircleLine, heading: "Transaction" },
  { icon: RiMoneyRupeeCircleLine, heading: "Donation" },
  { icon: SlCalender, heading: "Events" },
  { icon: TiDocumentText, heading: "Resource" },
  { icon: FaNewspaper, heading: "Latest News" },
  { icon: FaRegQuestionCircle, heading: "Query" },

  { icon: BiTransferAlt, heading: "Mutual Transfer" },
  // { icon: PiIdentificationBadgeDuotone, heading: "ID Card" },
  { icon: FaBell, heading: "Newsletter" },

  // { icon: BiTransferAlt , heading: "Mutual Request" },

  { icon: GoGoal, heading: "Our Missions" },

];


const AdminSidebar = ({ sidebarRef, handleScroll, activeComponent, setActiveComponent }) => {
  return (
    <div className="bg-white w-full h-screen overflow-y-auto">
      <div className='bg-white w-[10%] lg:w-[20%] h-16 flex justify-center items-center fixed top-0 border-b z-10 left-0'>
    <div className="flex items-center">
      <img 
        src="/AIDEOA LOGO 3.png" 
        className="w-8" 
        alt="Logo" 
      /> 
      <span className="text-[#5A2175] text-2xl font-bold hidden lg:inline ml-2">AIDEOA</span>
    </div>
  </div>

      <div className="pt-20 px-2 lg:px-4" ref={sidebarRef} onScroll={handleScroll}>
        <ul className="flex flex-col gap-1 lg:gap-2">
          {sidebar.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className={`flex justify-between items-center p-2 lg:p-3 rounded-lg cursor-pointer transition-colors ${activeComponent === item.heading
                    ? "bg-[#5A2175] text-white"
                    : "hover:bg-gray-100"
                  }`}
                onClick={() => setActiveComponent(item.heading)}
              >
                <div className="flex items-center justify-start">
                  <Icon
                    className={`w-5 h-5 lg:w-6 lg:h-6 ${activeComponent === item.heading ? "text-white" : "text-black"
                      }`}
                    title={item.heading}
                  />
                  <span
                    className={`ml-3 text-sm lg:text-base font-medium hidden lg:inline ${activeComponent === item.heading
                        ? "text-white"
                        : "text-[#5A2175]"
                      }`}
                  >
                    {item.heading}
                  </span>
                </div>
                <span className="max-lg:hidden text-sm">{">"}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;