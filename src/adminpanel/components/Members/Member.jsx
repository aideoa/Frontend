import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { LuUploadCloud } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useMembers from "../../../hooks/useMembers";
import { handleDownloadAll } from "../Members/exportExcel";
import SearchBar from "./SearchBar";

const Member = () => {
  const [currentSection, setCurrentSection] = useState("All"); // Default section
  const [currentPage, setCurrentPage] = useState(2);
  const [userType, setUserType] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const { dataList, fetchData } = useMembers(userType, currentPage);
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  
const [data, setData] = useState([]);
  const totalPages = 3;

   const handleResults = (filteredData) => {
     // Handle filtered data here
   };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Filter data based on userType
  const filteredData =
    dataList?.users?.filter((item) =>
      userType === "All"
        ? true
        : userType === "Employees"
        ? item.type === "Employee"
        : item.type === "Student"
    ) || [];

  const handleSelectItem = (index) => {
    const newSelectedItems = selectedItems.includes(index)
      ? selectedItems.filter((item) => item !== index)
      : [...selectedItems, index];

    setSelectedItems(newSelectedItems);

    setSelectAll(
      newSelectedItems.length === dataList[currentSection]?.users?.length
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(dataList?.users?.map((_, index) => index) || []);
    }

    if (selectedItems.length + 1 === dataList?.users?.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }

    setSelectAll(!selectAll);
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    const rect = event.target.getBoundingClientRect();
    setMenuPosition({ x: rect.right - 5, y: rect.bottom + window.scrollY });
    setShowMenu((prev) => !prev);
  };

  const onDownloadAllClick = async () => {
    handleDownloadAll(userType);
  };

  // Close the menu when clicking outside
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    fetchData(userType, currentPage);
  }, [userType, currentPage]);

  React.useEffect(() => {
    if (showMenu) {
      window.addEventListener("click", closeMenu);
    } else {
      window.removeEventListener("click", closeMenu);
    }
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [showMenu]);

  console.log("dataList", dataList);

  const handleTableList = (type) => {
    setUserType(type);
    setCurrentPage(1);
    setSelectedItems([]);
    setSelectAll(false);
  };

  const handleNextPage = () => {
    console.log(currentPage);
    setCurrentPage((prev) => {
      if (prev <= dataList.pagination.totalPages) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>

      <div
        style={{ marginTop: "50px" }}
        className="bg-white py-4 rounded-xl lightdropshadowbox"
      >

        <div className="flex px-4 flex-col">
          <div className="flex  space-x-4 mb-4 items-center">
            <div className="flex w-[34%] h-[40%] items-center gap-2">
              <h3 className="h-full  text-[18px] font-[500]">Member</h3>
              {/* <p className="text-[14px] px-3 text-purple-800 rounded-lg bg-purple-200 my-auto">
                100 users
              </p> */}
            </div>

            <div className="flex justify-end flex-1  items-center space-x-4 ">
              <div className="relative w-[55%]">
                <SearchBar data={data} onResults={handleResults} />
              </div>
              {selectedItems.length >= 2 && <MdDelete size={26} />}
              <div className="flex max-lg:flex-col gap-2">
                <button
                  className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2"
                  onClick={onDownloadAllClick}
                >
                  Download all
                </button>
              </div>
              <button
              className="text-sm font-semibold bg-gradient-to-r from-[#5A00A0] to-[#9B4BFF] text-white py-2 px-6 h-12 rounded-full shadow-lg hover:from-[#3A0070] hover:to-[#6D2EDC] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleOpenPopup}
            >
              Add User
            </button>
            </div>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center justify-center">
              <button
                onClick={() => handleTableList("All")}
                className={`${
                  userType === "All"
                    ? "bg-[#4B0082] text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 px-4 w-full md:w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>All</span>
                {userType === "All" && (
                  <span
                    className={`text-xs font-bold px-2 rounded-md ${
                      userType === "All"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082] text-white"
                    }`}
                  >
                    {dataList?.pagination?.totalUsers || 0}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleTableList("Employees")}
                className={`${
                  userType === "Employees"
                    ? "bg-[#4B0082] text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 px-4 w-full md:w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>Employees</span>
                {userType === "Employees" && (
                  <span
                    className={`text-xs font-bold px-2 rounded-md ${
                      userType === "Employees"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082] text-white"
                    }`}
                  >
                    {dataList?.pagination?.totalUsers || 0}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleTableList("Students")}
                className={`${
                  userType === "Students"
                    ? "bg-[#4B0082] text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 px-4 w-full md:w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>Students</span>
                {userType === "Students" && (
                  <span
                    className={`text-xs font-bold px-2 rounded-md ${
                      userType === "Students"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082] text-white"
                    }`}
                  >
                    {dataList?.pagination?.totalUsers || 0}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pop-up Form */}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                onClick={handleClosePopup}
              >
                &times;
              </button>

              {/* Form Content */}
              <h2 className="text-xl font-bold text-gray-800 mb-4">Add User</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#5A00A0]"
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#5A00A0]"
                    placeholder="Enter email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5A00A0] to-[#9B4BFF] text-white py-2 rounded-lg shadow-md hover:from-[#3A0070] hover:to-[#6D2EDC] transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-200">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </td>
                <th className="py-3 px-4 text-left font-medium text-sm w-52 text-gray-500">
                  Name
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  AIDEOA ID.
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Mobile Number
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Email Address
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Date
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Name of Organization
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  ID Card
                </th>

                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Actions
                </th>

                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 flex flex-col items-center space-y-1">
                  <span className="font-semibold">Status</span>
                  <div className="flex space-x-2">
                    {/* Down Arrow (for Sorting) */}
                    <button className="text-gray-500 hover:text-green-700">
                      <FaArrowDownLong size={14} />
                    </button>

                    {/* Up Arrow (for Sorting) */}
                    <button className="text-gray-500 hover:text-red-700">
                      <FaArrowUpLong size={14} />
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {dataList &&
                dataList?.users &&
                dataList?.users?.slice(0, 7).map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 h-16">
                    <td className="p-2 px-4 font-medium text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                        checked={selectedItems.includes(index)}
                        onChange={() => handleSelectItem(index)}
                      />
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-600  max-w-52 ">
                      <td className="flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.fullName}
                      </td>
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400 ">
                      {item.aideoaIdNo}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400 ">
                      {item.mobile}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.email}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400 whitespace-nowrap">
                      {item.createdAt.slice(0, 10)}
                    </td>

                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.organization}
                    </td>
                    <td className="p-2 font-medium text-xs ">
                      <td
                        className={` rounded-full px-1 mb-1 ${
                          item.status === "Approve"
                            ? "bg-green-100 text-green-700 "
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status === "Approve" ? "Active" : "Inactive"}
                      </td>
                    </td>
                    <td
                      className="p-2 font-medium text-sm text-gray-600 cursor-pointer"
                      onClick={toggleMenu}
                    >
                      <BsThreeDotsVertical />
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                      <BsThreeDotsVertical />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Dropdown menu */}
        {showMenu && (
          <div
            className="absolute bg-white border border-gray-200 rounded shadow-md"
            style={{
              left: `${menuPosition.x}px`,
              top: `${menuPosition.y}px`,
              zIndex: 10,
            }}
          >
            <ul className="text-sm text-gray-700">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert("Edit clicked")}
              >
                Edit
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert("Download clicked")}
              >
                Download
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert("Suspend clicked")}
              >
                Suspend
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                onClick={() => alert("Delete clicked")}
              >
                Delete
              </li>
            </ul>
          </div>
        )}

        <div className="flex justify-between px-4 items-center mt-4">
          <button
            onClick={handlePrevPage}
            className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          >
            Previous
          </button>
          <div className="space-x-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                className={`py-2 px-4 rounded-md shadow-md border ${
                  currentPage === page + 1
                    ? "bg-purple-700 text-white"
                    : " bg-white  text-black "
                }`}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            className="py-2 px-4  bg-white shadow-md border text-black rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Member;
