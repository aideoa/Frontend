import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AdminAuthContext } from "../context/adminAuthContext"; // Update the path as needed

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AdminAuthContext); // Use handleLogout from context

  const onLogout = () => {
    handleLogout(); // Call the context's logout function
    navigate("/admin/login"); // Redirect to login page
  };

  return (
    <div className="bg-white w-[80%] h-16 flex justify-center items-center fixed top-0 shadow-md z-10">
      <div className="flex-1 text-center">
        <h1 className="font-bold text-xl">
          <span className="text-[#4B0082]">AIDEOA</span> DASHBOARD
        </h1>
      </div>
      <button
        onClick={onLogout}
        className="btn mt-3 mx-6 hover:text-[#4B0082] hover:bg-white text-center rounded-3xl font-medium duration-200 p-3 px-6 text-white bg-[#4B0082] border border-[#4B0082] mb-3"
      >
        Log Out
      </button>
    </div>
  );
};

export default AdminNavbar;
