import React from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import DownloadIdCardButton from "../../Cards/DownloadIdCardButton";
const MembershipComponent = () => {
  return (
    <div className="max-sm:h-[90%] min-h-screen mainBackgroundImg object-contain  flex justify-center max-sm:justify-start flex-col items-center">
      <div className="flex justify-center mt-3">
        <img src={"logoback.png"} className="w-25 " alt="Aideoalogo" />
      </div>
      <div className=" p-2  flex flex-col gap-4 max-w-[831px]  items-center text-center">
        <h1 className="font-black text-3xl text-white leading-relaxed ">
          AIDEOA - All India Diploma Engineers & Officials Association
        </h1>
        <p className="font-medium text-xl text-gray-200 leading-9 ">
          One step With Transparency
        </p>
        <div className="flex flex-col gap-14 items-center">
          <Link to={"/home"}>
            <div className="glass-effect relative flex justify-center rounded-full w-72 h-14 cursor-pointer">
              <button className="text-white font-medium text-lg mr-10"> Join Membership</button>
              <p className="w-14 h-14  absolute top-0 right-0 rounded-full membershipBtn">  <MdOutlineArrowRightAlt size={30} className="top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] text-white absolute" /></p>

            </div>
          </Link>

         <DownloadIdCardButton />
        </div>
      </div>
    </div>
  );
};

export default MembershipComponent;
