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
const sidebar = [
  { icon: IoMdHome, heading: "Dashboard" },
  { icon: IoIosPersonAdd, heading: "Members" },
  { icon: RiMoneyRupeeCircleLine, heading: "Transaction" },
  { icon: SlCalender, heading: "Events" },
  { icon: TiDocumentText, heading: "Resource" },
  { icon: TiDocumentText, heading: "Latest News" },
  { icon: FaRegQuestionCircle, heading: "Query" },
  { icon: PiIdentificationBadgeDuotone, heading: "ID Card" },
  { icon: FaBell, heading: "Newsletter" },
  { icon: BiTransferAlt , heading: "Mutual Transfer" },
  { icon: BiTransferAlt , heading: "Mutual Request" },
  { icon: GoGoal , heading: "Our Missions" },
  { icon: RiMoneyRupeeCircleLine, heading: "Donation" },
];

const AdminSidebar = ({ activeComponent, setActiveComponent }) => {
  return (
    <div className="flex">
      <div className="bg-white w-full h-screen p-4 max-md:px-2">
        <div className="text-[#5A2175] text-2xl font-bold mb-6 flex items-center">
          <img src="122.jpg" className="w-10" alt="Logo" />
          <span className="hidden lg:inline">AIDEOA</span>{" "}
          {/* Text hidden on smaller screens */}
        </div>
        <ul className="flex lg:p-5 flex-col gap-2">
          {sidebar.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className={`flex justify-between max-md:min-w-10 items-center p-2 py-3 rounded-lg cursor-pointer ${
                  activeComponent === item.heading
                    ? "bg-[#5A2175] text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveComponent(item.heading)}
              >
                <div className="flex items-center justify-start">
                  <Icon
                    className={`w-[24px] h-[24px] md:ml-1 ${
                      activeComponent === item.heading
                        ? "text-white"
                        : "text-black"
                    }`}
                    title={item.heading}
                  />
                  <span
                    className={`ml-4 text-lg font-semibold hidden lg:inline ${
                      activeComponent === item.heading
                        ? "text-white"
                        : "text-[#5A2175]"
                    }`}
                  >
                    {item.heading}
                  </span>
                </div>
                <span className="max-lg:hidden">{">"}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;