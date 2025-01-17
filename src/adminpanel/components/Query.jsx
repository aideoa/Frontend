import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUploadCloud } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useQuery from "../../hooks/useQuery";
import { RiDeleteBin6Line } from "react-icons/ri";

const Query = () => {
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
    // Add other items here...
  ];
  const [searchTerm,setSearchTerm]=useState("")
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const {dataList,fetchData,deleteQuery}=useQuery()
  const totalPages = dataList?.pagination?.totalPages
  const limit=6;

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(dataList.map((_, index) => index));
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
    fetchData(searchTerm,currentPage,limit );
  }, [ searchTerm,currentPage]);
  const handleNextPage = () => {
    console.log(currentPage);
    setCurrentPage((prev) => {
      if (prev < dataList?.pagination?.totalPages) {
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
        <div className="flex space-x-3 items-center">
          <h2 className="font-bold text-lg">Query</h2>
          <span className="bg-purple-200 px-2 text-xs rounded-full">
            {dataList?.totalQueries} query
          </span>
        </div>
        <div className="flex justify-end flex-1 items-center space-x-4">
          <div className="relative w-[55%]">
            <CiSearch className="absolute top-3 left-3" />
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
                Name
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Mobile Number
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Email Address
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Company</th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Working Area
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 w-32">
                Query
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList&&dataList?.queries?.slice(0,limit).map((item, index) => (
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
                  {item.name}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.mobile}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.email}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.companyName}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.workingArea}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.query}
                </td>
               
                <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                <RiDeleteBin6Line  onClick={()=>deleteQuery(item.id)}/>
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

export default Query;
