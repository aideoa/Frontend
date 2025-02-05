import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUploadCloud } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { eventgetdata } from "../../../Connection/Api";
import axios from "axios";
import toast from "react-hot-toast";

const Resources = ({ setActiveComponent, setEventsData }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [d, setd] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getdata = async (searchTerm) => {
    try {
      const data = await eventgetdata(searchTerm);
      console.log(data.data.events); // Check the structure of the response
      setd(data?.data.events); // Ensure it's an array
    } catch (error) {
      console.log(`Error in getdata in Events.jsx: ${error}`);
    }
  };

  useEffect(() => {
    getdata(searchTerm);
  }, [searchTerm]);

  const handleDeleteEvent = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/events/delete/${id}`
      );
      if (res.status === 200) {
        getdata(searchTerm);
        toast.success("Link Deleted");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      throw new Error("Error deleting event: " + error);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(d.map((_, index) => index));
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

  return (
    <div className="py-4 bg-white rounded-xl mt-16">
      {/* Header Section */}
      <div className="flex space-x-4 mb-4 max-lg:flex-col-reverse max-lg:gap-2 px-4">
        <div className="flex space-x-4">
          <div className="bg-[#4B0082] w-32 text-center text-white shadow-md rounded-xl flex flex-col justify-center items-center p-2 h-16">
            <p className="text-nowrap">AIDEOA Events</p>
            <p className="font-bold">{d.length}</p>
          </div>
        </div>

        <div className="flex justify-end flex-1 items-center space-x-4">
          <div className="relative w-[55%]">
            <CiSearch className="absolute top-3 left-3" />
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
              placeholder="Search"
            />
          </div>

          {/* {selectedItems.length >= 2 && <MdDelete size={26} className="cursor-pointer"
            onClick={handleDeleteSelected} />} */}
          <div className="flex max-lg:flex-col gap-2">
            <button onClick={() => setActiveComponent("Add Events")} className="bg-[#4B0082] text-nowrap font-semibold border shadow-md text-white py-2 px-4 rounded-md mr-2">
              Create
            </button>

          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="overflow-x-scroll w-full">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Title
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Event Date & Time
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Days
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Location
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Description
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {d.length > 0 ? (
              d.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 h-16 cursor-pointer"
                >
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
                  <td className="py-3 px-4 text-gray-500 text-sm">
                    {item.date}-{item.time}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.days}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.location}
                  </td>
                  <td className="p-2 font-medium text-sm text-gray-400">
                    {item.description.substring(0, 20)}...
                  </td>
                  <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center text-gray-600 cursor-pointer">
                    <RiDeleteBin6Line
                      onClick={() => handleDeleteEvent(item.id)}
                    />
                    <FiEdit2
                      onClick={() => {
                        setEventsData(item);
                        setActiveComponent("Events Details");
                      }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  {/* Want of content: Customize this message if required */}
                  No events available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4 px-4">
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={false} // Example: Add your condition here
          onClick={() => console.log("Go to previous page")} // Replace with actual functionality
        >
          Previous
        </button>
        <div className="space-x-2">
          {/* Want of content: Add pagination controls dynamically */}
          <button className="py-2 px-4 rounded-md shadow-md border bg-purple-700 text-white">
            1
          </button>
        </div>
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          onClick={() => console.log("Go to next page")} // Replace with actual functionality
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Resources;
