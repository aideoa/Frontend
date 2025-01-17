import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuUploadCloud } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const initialData = [
  {
    name: "Olivia Rhye",
    employeeId: "#5412340",
    mobileNumber: "9876541230",
    email: "olivia@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Approve",
    selfAddress: "candiceTfghfghsaSasasafgsdasdasd d asd asdasd ",
    profileImage: "url-to-olivia-image",
  },
  {
    name: "Phoenix Baker",
    employeeId: "#5412310",
    mobileNumber: "9876541230",
    email: "phoenix@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Approve",
    selfAddress: "our area...",
    profileImage: "url-to-phoenix-image",
  },
  {
    name: "Lana Steiner",
    employeeId: "#9876120",
    mobileNumber: "9876541230",
    email: "lana@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Approve",
    selfAddress: "candiceT...",
    profileImage: "url-to-lana-image",
  },
  {
    name: "Demi Wilkinson",
    employeeId: "#2309876",
    mobileNumber: "9876541230",
    email: "demi@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Approve",
    selfAddress: "area hav...",
    profileImage: "url-to-demi-image",
  },
  {
    name: "Candice Wu",
    employeeId: "#9876120",
    mobileNumber: "9876541230",
    email: "candice@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Rejected",
    selfAddress: "candiceT...",
    profileImage: "url-to-candice-image",
  },
  {
    name: "Natali Craig",
    employeeId: "#9876120",
    mobileNumber: "9876541230",
    email: "natali@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Approve",
    selfAddress: "natali Th...",
    profileImage: "url-to-natali-image",
  },
  {
    name: "Drew Cano",
    employeeId: "#9876120",
    mobileNumber: "9876541230",
    email: "drew@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Approve",
    selfAddress: "drew can...",
    profileImage: "url-to-drew-image",
  },
  {
    name: "Kate Morrison",
    employeeId: "#9876120",
    mobileNumber: "9876541230",
    email: "kate@untitled.com",
    company: "22-5-2024",
    amount: "₹ 45000",
    status: "Approve",
    selfAddress: "katecand...",
    profileImage: "url-to-kate-image",
  },
];

const Transaction_page = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const totalPages = 3;

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelected(data.map((item) => item.employeeId)); // Select all IDs
    } else {
      setSelected([]); // Deselect all
    }
  };

  const handleCheckboxChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id)); // Deselect if already selected
    } else {
      setSelected([...selected, id]); // Add to selection
    }
  };

  return (
    <div className=" bg-white py-4 rounded-xl lightdropshadowbox">
      <div className="flex px-4 flex-col">
        <div className="flex  space-x-4 mb-4 items-center">
          <div className="flex w-[34%] h-[40%] items-center  gap-2">
            <h3 className="h-full  text-[18px] font-[500]">Transactions</h3>
            <p className="text-[14px] px-3 text-purple-800 rounded-lg bg-purple-200 my-auto">
              {data.length} tx
            </p>
          </div>
          <div className="flex justify-end flex-1  items-center space-x-4 ">
            <div className="relative w-[55%]">
              <CiSearch className="absolute  top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>
            {selected.length > 1 && <MdDelete size={26} />}
            <div className="flex max-lg:flex-col gap-2">
              <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                Download all
              </button>
              <button className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md">
                <LuUploadCloud size={18} className="" />
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  className=" checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
            <th className="py-3 px-4 text-left font-medium text-sm w-52 text-gray-500">
                Name
              </th>
<th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Aideoa ID
              </th>
       <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Mobile Number
              </th>
       <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Email Address
              </th>
       <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Date</th>
       <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Amount</th>
              <th className="flex items-center justify-center  gap-1 h-16 text-left font-medium text-sm text-gray-500">
                <span>Status</span> <FaArrowDownLong size={12} className="" />
              </th>
       <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className=" checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selected.includes(item.employeeId)}
                    onChange={() => handleCheckboxChange(item.employeeId)}
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600  max-w-52 ">
                  <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    <img
                      src="/public/user.png"
                      className="w-5 rounded-full"
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                  {item.employeeId}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                  {item.mobileNumber}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.email}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.company}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.amount}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  <span
                    className={` rounded-full px-1 ${
                      item.status === "Approve"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status === "Approve" ? "Completed" : "Cancelled"}
                  </span>
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 px-4">
        <button className="py-2 px-4 bg-white shadow-md border text-black rounded-md">
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
        <button className="py-2 px-4 bg-white shadow-md border text-black rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Transaction_page;
