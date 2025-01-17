import { useState } from "react";


import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import useOnlineTest from "../../../hooks/useOnlineTest";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import useEmployeeNews from "../../../hooks/useEmployeeNews";

const EmployeeNews = ({setActiveComponent}) => {
  const data = [
    {
      title: "AIDEOA Hostsdasdsa sdsadas safdsad Summit",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "2 days",
      location: "Hotel Baker",
      description: "candiceThe roads in our area...",
      url: "https://www.example.com",
    },
    {
      title: "Phoenix Baker Alumni",
      eventDateTime: "12 Nov 2025 5:30 am - 6:30 pm",
      days: "15 days",
      location: "Hotel Baker",
      description: "our area have developed...",
      url: "https://www.example.com",
    },
  
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
  const {dataList,deletenews}=useEmployeeNews()
  return (
    <div className="py-4 bg-white rounded-xl lightdropshadowbox">
      <div className="flex px-4 space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center">
          <h2 className="font-bold text-lg">Employee</h2>
          <span className="bg-purple-200 px-2 text-xs rounded-full">
            {dataList.length} News
          </span>
        </div>
        <div className="flex justify-end flex-1 items-center space-x-4">
          {/* <div className="relative w-[55%]">
            <CiSearch className="absolute top-3 left-3" />
            <input
              type="text"
              className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
              placeholder="Search"
            />
          </div> */}
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button onClick={()=>setActiveComponent("Add Employeenews")} className="bg-[#4B0082] text-nowrap font-semibold border shadow-md text-white py-2 px-4 rounded-md mr-2">
              Create
            </button>

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
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="py-3 px-4 text-left  font-medium text-sm text-gray-500">
                Title
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Description
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Category
              </th>
         
              
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 max-w-52 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.description}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.category}
                </td>
                
                <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center  text-gray-600 cursor-pointer">
                  <RiDeleteBin6Line  onClick={()=>deletenews(item.id)}/>
                  <FiEdit2 onClick={()=>{
                 
                  }}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 px-4">
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                  : "bg-white text-black"
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeNews;
