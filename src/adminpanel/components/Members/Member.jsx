import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuUploadCloud } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useMembers from "../../../hooks/useMembers";

const Member = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userType, setUserType] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const { dataList, fetchData } = useMembers(userType, currentPage);

  const [searchTerm,setSearchTerm]=useState("")
  const totalPages = 3;

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  useEffect(() => {
    fetchData(userType, currentPage);
  }, [userType, currentPage]);

  console.log("dataList", dataList);

  const handleTableList = (type) => {
    setUserType(type);
    setCurrentPage(1);
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
      <div className=" bg-white  py-4 rounded-xl lightdropshadowbox">
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
                <CiSearch className="absolute  top-3 left-3" />
                <input
                  type="text"
                  onChange={(e)=>setSearchTerm(e.target.value)}
                  className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                  placeholder="Search"
                />
              </div>
              {selectedItems.length >= 2 && <MdDelete size={26} />}
              <div className="flex max-lg:flex-col gap-2">
                <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                  Download all
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex space-x-3 items-center ">
              <button
                onClick={() => handleTableList("All")}
                className={` ${
                  userType === "All"
                    ? "bg-[#4B0082]  text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>All</span>
                {userType === "All" && (
                  <span
                    className={`text-xs  font-bold px-2 rounded-md ${
                      userType === "All"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082]  text-white"
                    }`}
                  >
                    {dataList&& dataList.users && dataList?.users?.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleTableList("Employees")}
                className={` ${
                  userType === "Employees"
                    ? "bg-[#4B0082]  text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>Employees</span>
                {userType === "Employees" && (
                  <span
                    className={`text-xs  font-bold px-2 rounded-md   ${
                      userType == "Employees"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082]  text-white"
                    }`}
                  >
                  {dataList&& dataList.users && dataList?.users?.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleTableList("Students")}
                className={` ${
                  userType === "Students"
                    ? "bg-[#4B0082]  text-white"
                    : "bg-white text-[#4B0082]"
                } rounded-t-2xl text-sm py-2 w-40 font-medium flex gap-2 justify-center items-center`}
              >
                <span>Students</span>
                {userType === "Students" && (
                  <span
                    className={`text-xs  font-bold px-2 rounded-md   ${
                      userType != "Employees"
                        ? "bg-white text-[#4B0082]"
                        : "bg-[#4B0082]  text-white"
                    }`}
                  >
                 {dataList&& dataList.users && dataList?.users?.length}
                  </span>
                )}
              </button>
            </div>
            <button className="text-sm font-semibold">Filter by</button>
          </div>
        </div>

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
                  Name & Photo
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

                <th className="p-2 flex items-center gap-1 font-medium text-sm text-gray-400">
                  Status <FaArrowDownLong size={12} className="" />
                </th>

                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dataList && dataList?.users &&
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
                        <img
                          src="/public/user.png"
                          className="w-5 rounded-full"
                        />{" "}
                        {item.fullName}
                      </td>
                    </td>

                    <td className="p-2 font-medium text-sm text-gray-400 ">
                      {item.mobile}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.email}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.createdAt.slice(0, 10)}
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

                    <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                      <BsThreeDotsVertical />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

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
