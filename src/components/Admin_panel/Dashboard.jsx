import React, { useState } from "react";
import SideBar from "./SideBar";

import { HiOutlineDotsVertical } from "react-icons/hi";

import ContactUs from "./Main-Content/Contact_Us/Contact-us";
import Notification from "./Main-Content/Notifications/Notifications";
import OurTeams from "./Main-Content/Our-Teams/Our-Teams";

const Dashboard = () => {
  // Define the dynamic data as an array of objects
  const [contactData, setContactData] = useState([
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Olivia Rhye",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Phoenix Baker",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      message: "Our area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Lana Steiner",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className=" size-4  bg-col" />,
      name: "Demi Wilkinson",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      message: "Area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      action: <HiOutlineDotsVertical />,
    },
    // Add more objects here as needed
  ]);

  return (
    <div className="w-screen flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[18.5%] flex justify-center border-r border-gray-200 h-full py-[30px] bg-white shadow-md">
        <SideBar />
      </div>
      {/* Main Content Area */}
      {/* <ContactUs /> */}
      {/* <Notification/> */}
      <OurTeams />
    </div>
  );
};

export default Dashboard;
