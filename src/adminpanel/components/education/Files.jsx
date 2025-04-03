import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import useEducation from "../../../hooks/useEducation";
import { ThreeCircles } from "react-loader-spinner";

const Files = ({ value, setFileData, setActiveComponent }) => {
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
  }, [totalPages]);

  // Get items for current page
  const paginatedData = dataList?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  return (
    <div>
      <div className="overflow-x-auto">
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
              <th className="py-3 px-4 text-left font-medium max-w-52 text-sm text-gray-500">
                Title
              </th>
              <th className="py-3 px-4 w-full text-left font-medium text-sm text-gray-500">
                URL
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
                      {item.name}
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
                          setFileData(item);
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 px-4">
          <button
            className={`py-2 px-4 bg-white shadow-md border text-black rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
          <div className="space-x-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                className={`py-2 px-4 rounded-md shadow-md border ${currentPage === page + 1
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
            className={`py-2 px-4 bg-white shadow-md border text-black rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Files;
