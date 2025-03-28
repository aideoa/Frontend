import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUploadCloud } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useLatestNews from "../../../Connection/LatestNewsapi";

const Resources = ({ setActiveComponent }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchterm] = useState("");
  const { dataList, fetchData, deleteNewsItem } = useLatestNews();

  const totalPages = dataList?.pagination?.totalPages;
  const limit = 10;

  useEffect(() => {
    fetchData(searchTerm, currentPage, limit);
  }, [currentPage, searchTerm]);

  const handleSelectAll = () => {
    const currentPageIds = dataList?.posts?.map((item) => item.id) || [];
    if (selectAll) {
      setSelectedItems((prev) =>
        prev.filter((id) => !currentPageIds.includes(id))
      );
    } else {
      setSelectedItems((prev) => [
        ...prev,
        ...currentPageIds.filter((id) => !prev.includes(id)),
      ]);
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDelete = async (newsId) => {
    if (!window.confirm("Are you sure you want to delete this news item?"))
      return;
    try {
      await deleteNewsItem(newsId);
      await fetchData(searchTerm, currentPage, limit);
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news item. Please try again.");
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // Handle Page Click for Pagination
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="py-4 bg-white rounded-xl">
        <div className="flex space-x-4 mb-4 px-4">
          <div className="flex space-x-4">
            <div className="bg-[#4B0082] w-48 text-center text-white shadow-md rounded-xl flex flex-col justify-center items-center p-2 h-16">
              <p className="text-nowrap">AIDEOA Latest News</p>
              <p className="font-bold">
                {dataList?.pagination?.totalPosts || 0}
              </p>
            </div>
          </div>

          <div className="flex justify-end flex-1 items-center space-x-4">
            <div className="relative w-[55%]">
              <CiSearch className="absolute top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
                onChange={(e) => setSearchterm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <button className="bg-white font-semibold border shadow-md text-black py-2 px-4 rounded-md">
                Download all
              </button>
              <button
                className="bg-[#4B0082] shadow-md font-semibold flex items-center gap-1 text-white py-2 px-4 rounded-md"
                onClick={() => setActiveComponent("Add Latest News")}
              >
                <LuUploadCloud size={18} />
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
                <th className="p-2 px-4">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                {["Title", "Description", "Url", "Created At", "Actions"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="py-3 px-4 text-left text-gray-500"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {dataList?.posts?.slice(0, limit)?.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 h-16">
                  <td className="p-2 px-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                    />
                  </td>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2 text-gray-400">{item.description}</td>
                  <td className="p-2 text-gray-400">
                    {item.images?.length > 0 ? (
                      <a
                        href={item.images[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {item.images[0].url}
                      </a>
                    ) : (
                      "No URL"
                    )}
                  </td>
                  <td className="p-2 text-gray-400">
                    {item.createdAt.slice(0, 10)}
                  </td>
                  <td>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(item.id)}
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 px-4">
          <button
            className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
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
                onClick={() => handlePageClick(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
