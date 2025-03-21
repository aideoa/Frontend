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
  const [currentPage, setCurrentPage] = useState(1);
  const [userType, setUserType] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const { dataList, fetchData, updateMemberStatus } = useMembers(
    userType,
    currentPage
  );
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [order, setOrder] = useState("desc");
  const [viewingPdf, setViewingPdf] = useState(null);
  const [isStudent, setIsStudent] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const isUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const totalPages = dataList?.pagination.totalPages;

  const handleResults = (filteredData) => {
    console.log(filteredData);
    fetchData(userType, currentPage, order, filteredData);
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
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handleSelectAll = () => {
    const currentPageIds = dataList.users.map((item) => item.id);
    if (selectAll) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => !currentPageIds.includes(id))
      );
    } else {
      setSelectedItems((prevSelected) => [
        ...prevSelected,
        ...currentPageIds.filter((id) => !prevSelected.includes(id)),
      ]);
    }
    setSelectAll(!selectAll);
  };
  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent click from propagating to parent elements

    const rect = event.target.getBoundingClientRect(); // Get the bounding rectangle of the clicked element

    setMenuPosition({
      x: rect.left + window.scrollX, // Horizontal position with scroll offset
      y: rect.bottom + window.scrollY, // Vertical position with scroll offset
    });

    setShowMenu((prev) => !prev); // Toggle menu visibility
  };

  const onDownloadAllClick = async () => {
    handleDownloadAll(userType);
  };

  // Close the menu when clicking outside
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    console.log(order);
    fetchData(userType, currentPage, order);
  }, [userType, currentPage, order]);

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

  //another
  const handleNextPage = () => {
    setCurrentPage((prev) => {
      if (prev < dataList.pagination.totalPages) {
        // Fix: < instead of <=
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev)); // Shorter & cleaner
  };

  const IdDisplay = ({ viewingPdf }) => {
    return (
      <div>
        {isUrl(viewingPdf) ? (
          <img src={viewingPdf} alt="ID Proof" />
        ) : (
          <p className="text-white text-2xl font-semibold bg-purple-600  rounded-lg py-2 px-4">
            ID Card Number: {viewingPdf}
          </p>
        )}
      </div>
    );
  };

  const viewIdProof = (pdfUrl) => {
    console.log(pdfUrl);
    setViewingPdf(pdfUrl); // Show PDF modal
  };

  return (
    <>
      <div
        style={{ marginTop: "50px" }}
        className="bg-white py-4 rounded-xl lightdropshadowbox"
      >
        <div className="flex px-2 flex-col">
          <div className="flex  mb-4 items-center">
            <div className="flex w-[34%] h-[40%] items-center gap-2">
              <h3 className="h-full  text-[18px] font-[500]">Member</h3>
              <p className="text-[14px] px-3 text-purple-800 rounded-lg bg-purple-200 my-auto">
                {dataList?.pagination?.totalUsers || 0} users
              </p>
            </div>

            <div className="flex justify-end flex-1  items-center space-x-4 ">
              <div className="relative w-[55%]">
                <SearchBar onResults={handleResults} />
              </div>
              {selectedItems.length >= 2 && <MdDelete size={26} />}
              <div className="py-3 px-4 text-left font-medium text-sm text-gray-500 flex flex-col items-center space-y-1">
                <span className="font-semibold">sorting</span>
                <div className="flex space-x-2">
                  {/* Down Arrow (for Sorting) */}
                  <button
                    className="text-gray-500 hover:text-green-700 "
                    onClick={() => {
                      setOrder("desc");
                    }}
                  >
                    <FaArrowDownLong size={14} />
                  </button>

                  {/* Up Arrow (for Sorting) */}
                  <button
                    className="text-gray-500 hover:text-red-700"
                    onClick={() => {
                      setOrder("asc");
                    }}
                  >
                    <FaArrowUpLong size={14} />
                  </button>
                </div>
              </div>
              <div className="flex max-lg:flex-col gap-2">
                <button
                  className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2"
                  onClick={onDownloadAllClick}
                >
                  Download all
                </button>
              </div>
              <button
                className="text-sm font-semibold  bg-[#5A00A0] text-white py-2 px-3 w-24 h-10 rounded-lg shadow-lg  hover:shadow-xl "
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
                  Address
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
                  Id Proof
                </th>

                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Actions
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
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
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
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.address ? item.address : "N/A"}
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
                          item.idCardStatus === "APPROVED"
                            ? "bg-green-100 text-green-700 "
                            : item.idCardStatus == "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.idCardStatus === "APPROVED"
                          ? "APPROVED"
                          : item.idCardStatus == "PENDING"
                          ? "PENDING"
                          : "REJECTED"}
                      </td>
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                      <button
                        onClick={() => viewIdProof(item.idCard)} // URL or identifier for the ID proof PDF
                        className="underline text-[#5A00A0] px-4 py-2 rounded"
                      >
                        View
                      </button>
                    </td>
                    <td
                      className="p-2 font-medium text-sm text-gray-600 cursor-pointer"
                      onClick={(event) => {
                        toggleMenu(event);
                        setIsStudent(item.userType === "student");
                        setStudentId(item.id);
                      }}
                    >
                      <BsThreeDotsVertical />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {viewingPdf && <div className="pdf-modal-overlay"></div>}
          {viewingPdf && (
            <div className="pdf-modal h-[80%] overflow-scroll">
              <button className="close-btn" onClick={() => setViewingPdf(null)}>
                Close
              </button>
              <IdDisplay className="text-white" viewingPdf={viewingPdf} />
            </div>
          )}
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
              {isStudent ? (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => updateMemberStatus(studentId, "APPROVED")}
                  >
                    Approve
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => updateMemberStatus(studentId, "REJECTED")}
                  >
                    Reject
                  </li>
                </>
              ) : (
                <></>
              )}
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
                onClick={() => setCurrentPage(page + 1)}
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
