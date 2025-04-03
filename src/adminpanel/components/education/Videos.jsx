import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import useEducation from "../../../hooks/useEducation";
import { ThreeCircles } from "react-loader-spinner";

const Videos = ({ value, setVideoData, setActiveComponent }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 7;
  const { dataList, deleteFile, fetchData } = useEducation();

  useEffect(() => {
    setLoading(true);
    fetchData(value)
      .finally(() => setLoading(false)); // Hide loader after fetching data
  }, [value]);

  const totalItems = dataList?.length || 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  // Ensure currentPage is within valid range
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Get items for current page
  const paginatedData =
    dataList?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ) || [];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedData.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // Handle page number click
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
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
              <th className="py-3 px-4 text-left font-medium max-w-52 text-sm text-gray-500">
                Title
              </th>
              <th className="py-3 px-4 w-full text-left font-medium text-sm text-gray-500">
                Url
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="12" className="p-4">
                  <div className="flex justify-center items-center h-40">
                    <ThreeCircles height={60} width={60} color="#4B0082" />
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 h-16">
                    <td className="p-2 px-4 font-medium text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                        checked={selectedItems.includes(index)}
                        onChange={() => handleSelectItem(index)}
                      />
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.title}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.link}
                    </td>
                    <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center text-gray-600 cursor-pointer">
                      <RiDeleteBin6Line
                        onClick={() => deleteFile(item.id, value)}
                      />
                      <FiEdit2
                        onClick={() => {
                          setVideoData(item);
                          setActiveComponent("Update File");
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No files available.
                  </td>
                </tr>
              )
            )} </tbody>
        </table>
      </div>

      {/* Pagination Controls - Always visible but properly disabled */}
      <div className="flex justify-between items-center mt-4 px-4">
        <button
          className={`py-2 px-4 rounded-md border ${currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-50 shadow-md"
            }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`py-2 px-4 rounded-md border ${currentPage === page
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-black hover:bg-gray-50 shadow-md"
                }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className={`py-2 px-4 rounded-md border ${currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-50 shadow-md"
            }`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Videos;
