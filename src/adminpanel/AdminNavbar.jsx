import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AdminAuthContext } from "../context/adminAuthContext";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AdminAuthContext);

  const onLogout = () => {
    handleLogout();
    navigate("/admin/login");
  };

  return (
    <div className="bg-white w-[90%] lg:w-[80%] h-16 flex fixed top-0 right-0 shadow-[4px_4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      {/* Set z-index to a higher value like z-50 to make sure it appears above other elements */}
      <div className="flex-1 flex justify-center items-center">
        <h1 className="font-bold text-xl md:text-2xl">
          <span className="text-[#4B0082]">AIDEOA</span>
          <span className="hidden sm:inline"> DASHBOARD</span>
        </h1>
      </div>
      <div className="flex items-center mr-6">
        <button
          onClick={onLogout}
          className="btn hover:text-[#4B0082] hover:bg-white text-center rounded-2xl font-medium duration-200 p-2 md:p-3 px-3 md:px-4 text-xs md:text-sm text-white bg-[#4B0082] border border-[#4B0082]"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
