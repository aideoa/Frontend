import axios from "axios";
import useMutualTransfer from "../../../hooks/useMutualTransfer";
import { useEffect, useState } from "react";


import { CiSearch } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import useMutualPairs from "../../../hooks/useMutualPairs";

const MutualRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const {data,getPairs}=useMutualPairs()
  const totalPages =data && data?.pagination?.totalPages
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };
  const limit=6;
  const handleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  const handleNextPage = () => {
    console.log(currentPage);
    setCurrentPage((prev) => {
      if (prev < data?.pagination?.totalPages) {
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

console.log(data)
useEffect(()=>{
getPairs(searchTerm,limit,currentPage)
},[searchTerm,currentPage])
  return (
    <div className="bg-white rounded-xl py-4 lightdropshadowbox">
      <div className="flex flex-col">
        
        <div className="flex space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center px-3">
          <h2 className="font-bold text-lg">Mutual Request</h2>
        </div>
          <div className="flex justify-end flex-1 px-4 items-center space-x-4">
            <div className="relative w-[55%]">
              <CiSearch className="absolute top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
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

     
      </div>

      <div className="overflow-x-scroll rounded-b-2xl">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                />
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 w-52">
                Name
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                AIDEOA ID
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Mobile Number
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Current posted Subsidiary
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Current posted AREA
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Current Mines Name
              </th>
              <th className="p-2 gap-1 font-medium text-sm text-gray-500">
                GRADE
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Designation
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Preferred Transfer Subsidiary
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Preferred Transfer Area
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Preferred Transfer Mine
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Member2
              </th>
              <th className="p-2 font-medium text-sm text-gray-500 max-w-32">
                Email
              </th>
           
             
            </tr>
          </thead>

          <tbody>
            {data && data?.transferPairs && data?.transferPairs?.slice(0, limit)?.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 max-w-52">
                  {item.transferRequest.name}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.aideoaIdNo}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.mobileNumber}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.currentSubsidiary}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.transferRequest.currentPostedArea}
                </td>
                <td className="text-gray-400 max-w-32 p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.transferRequest.currentMinesName}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.grade}
                </td>
                <td className="text-gray-400 max-w-32 p-2 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.transferRequest.designationType}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.preferredTransferSubsidiary}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.preferredTransferArea}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.transferRequest.preferredTransferMine}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.user2.fullName}
                </td>
                <td className="p-2 font-medium text-xs text-gray-400">
                  {item.user2.email}
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
  );
};

export default MutualRequest
