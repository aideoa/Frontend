import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useMissions from "../../../hooks/useMissions";
const Missions = ({ setActiveComponent,setMissionData }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const {dataList:data,deleteMission,fetchData}=useMissions()

  const totalPages = data?.pagination?.totalPages
  const limit=6;
  const handleDelete=async(id)=>{
    await deleteMission(id)
  }
    useEffect(() => {
    fetchData(currentPage,limit );
  }, [ currentPage,limit]);
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
    <div className="py-4 bg-white rounded-xl lightdropshadowbox">
      <div className="flex px-4 space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center ">
          <h2 className="font-bold text-lg">Our Missions</h2>
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
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button
              onClick={() => setActiveComponent("Add Missions")}
              className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md"
            >
              <LuUploadCloud size={18} className="" />
              <span>Add new</span>
            </button>
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
                Mission
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Actions
              </th>
        
           
     
            </tr>
          </thead>
          <tbody>
            {data&&data?.missions?.slice(0, limit)?.map((item, index) => (
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
                  {item.mission}
                </td>
              
                <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center  text-gray-600 cursor-pointer">
                  <RiDeleteBin6Line  onClick={()=>handleDelete(item.id)}/>
                  <FiEdit2 onClick={()=>{
                    setActiveComponent("Update Missions")
                    setMissionData(item)
                  }}/>
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

export default Missions;
