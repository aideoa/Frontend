import { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";


import useDonation from "../../../hooks/useDonation";
const Donation = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchterm] = useState("");

  const {dataList:data,fetchData}=useDonation()

  const totalPages = data?.pagination?.totalPages
  const limit=6;

    useEffect(() => {
    fetchData(searchTerm,currentPage,limit );
  }, [ currentPage,searchTerm]);
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
  return (
    <div className="py-4 mt-16 bg-white rounded-xl lightdropshadowbox">
      <div className="flex px-4 space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center ">
          <h2 className="font-bold text-lg">Donations</h2>
        </div>
        <div className="flex justify-end flex-1  items-center space-x-4 ">
          <div className="relative w-[55%]">
            <CiSearch className="absolute  top-3 left-3" />
            <input
              type="text"
              className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
              placeholder="Search"
              onChange={(e)=>setSearchterm(e.target.value)}
            />
          </div>
       
        </div>
      </div>

      <div className="overflow-x-scroll rounded-b-2xl">
        <table className="min-w-full bg-white border border-gray-300 ">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className=" checked:bg-purple-500 checked:border-purple-500 size-4  bg-col"
                />
              </th>
           <th className="py-3 px-4 w-full text-left font-medium text-sm text-gray-500">
                Name
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Mobile
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Amount
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                UTR No
              </th>
        
           
     
            </tr>
          </thead>
          <tbody>
            {data&&data?.donations?.slice(0, limit)?.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16 ">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600   whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.name}
                </td>
              
                <td className="p-2 font-medium text-sm text-gray-600   whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.mobileNumber}
                </td>
              
                <td className="p-2 font-medium text-sm text-gray-600   whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.donationAmount}
                </td>
              
                <td className="p-2 font-medium text-sm text-gray-600   whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.utrNo}
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
                onClick={()=>setCurrentPage(page+1)}
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

export default Donation;
