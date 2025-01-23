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
      console.log(data); // Check the structure of the response
      setd(Array.isArray(data?.data) ? data.data : []); // Ensure it's an array
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
    <div style={{ marginTop: "50px" }}>
      <div className="py-4 bg-white rounded-xl">
        {/* Header and Search Section */}
        <div className="flex space-x-4 mb-4 max-lg:flex-col-reverse max-lg:gap-2 px-4">
          {/* Other content... */}
          <div className="relative w-[55%]">
            <CiSearch className="absolute top-3 left-3" />
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
              placeholder="Search"
            />
          </div>
          {/* Other content... */}
        </div>

        {/* Table */}
        <div className="overflow-x-scroll w-full">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>{/* Table Headers */}</thead>
            <tbody>
              {Array.isArray(d) && d.length > 0 ? (
                d.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 h-16 cursor-pointer"
                  >
                    {/* Render Row */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No events available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {/* Pagination content */}
      </div>
    </div>
  );
};

export default Resources;
