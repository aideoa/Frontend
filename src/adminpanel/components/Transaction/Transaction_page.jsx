import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { getData } from "./dataSource";
import { handleDownloadTrans } from "./exportTrans";
import { BsThreeDotsVertical } from "react-icons/bs";

const ITEMS_PER_PAGE = 5;

const Transaction_page = () => {
  const [data, setData] = useState(getData());
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE); // Total number of pages

  const handleSelectAll = () => {
    const currentPageIds = currentPageData.map((item) => item.employeeId);

    if (selectAll) {
      setSelected((prevSelected) =>
        prevSelected.filter((id) => !currentPageIds.includes(id))
      );
    } else {
      setSelected((prevSelected) => [
        ...prevSelected,
        ...currentPageIds.filter((id) => !prevSelected.includes(id)), // Avoid duplicates
      ]);
    }

    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id) => {
    const newSelected = selected.includes(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id];

    setSelected(newSelected);

    const currentPageIds = currentPageData.map((item) => item.employeeId);
    setSelectAll(newSelected.length === currentPageIds.length);
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    const rect = event.target.getBoundingClientRect();
    setMenuPosition({ x: rect.right + window.scrollY, y: rect.bottom + window.scrollY });
    setShowMenu((prev) => !prev);
  };

  const handleExportClick = () => {
    handleDownloadTrans();
  };

  const handleOneDownload = (transactionId) => {
    handleDownloadTrans(transactionId);
  };

  // Pagination-related handlers
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Get data for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (

    <>
      <div style={{ marginTop: "50px" }}>
        <div className="bg-white py-4 rounded-xl lightdropshadowbox">
          <div className="flex px-4 flex-col">
            <div className="flex space-x-4 mb-4 items-center">
              <div className="flex w-[34%] h-[40%] items-center gap-2">
                <h3 className="h-full text-[18px] font-[500]">Transactions</h3>
                <p className="text-[14px] px-3 text-purple-800 rounded-lg bg-purple-200 my-auto">
                  {data.length} trans
                </p>
              </div>
              <div className="flex justify-end flex-1 items-center space-x-4">
                <div className="relative w-[55%]">
                  <CiSearch className="absolute top-3 left-3" />
                  <input
                    type="text"
                    className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                    placeholder="Search"
                  />
                </div>
                {selected.length > 1 && <MdDelete size={26} />}
                <div className="flex max-lg:flex-col gap-2">
                  <button
                    className="bg-white font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2"
                    onClick={handleExportClick}
                  >
                    Download All
                  </button>
                </div>
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
                  <th className="py-3 px-4 text-left font-medium text-sm w-52 text-gray-500">
                    Name
                  </th>
                  <th className="py-3 px-4 w-52 text-left font-medium text-sm text-gray-500">
                    Employee ID
                  </th>
                  <th className="py-3 px-4 w-64 text-left font-medium text-sm text-gray-500">
                    AIDEOA ID
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                    Mobile Number
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                    Email Address
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                    Date & Time
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                    Transaction ID
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                    Amount
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 h-16">
                    <td className="p-2 px-4 font-medium text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                        checked={selected.includes(item.employeeId)}
                        onChange={() => handleSelectItem(item.employeeId)}
                      />
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-600">
                      {item.name}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.employeeId}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.aideoaId}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.mobileNumber}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.email}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.dateTime}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.transaction}
                    </td>
                    <td className="p-2 font-medium text-sm text-gray-400">
                      {item.amount}
                    </td>
                    <td className="p-2 font-medium text-xs ">
                      <td
                        className={` rounded-full px-1 mb-1 ${item.status === "Confirm"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : item.status === "Cancel"
                              ? "bg-red-100 text-red-700"
                              : "text-gray-400"
                          }`}
                      >
                        {item.status}
                      </td>
                    </td>
                    <td
                      className="p-2 font-medium text-sm text-gray-600 cursor-pointer"
                      onClick={toggleMenu}
                    >
                      <BsThreeDotsVertical />
                    </td>
                    {showMenu && (
                      <div
                        className="absolute bg-white border border-gray-200 rounded shadow-md"
                        style={{
                          left: `${menuPosition.x}px`,
                          top: `${menuPosition.y}px`,
                          zIndex: 10,
                        }}
                      >
                        <ul className="text-sm text-gray-700">

                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOneDownload(item.transaction)}
                          >
                            Download
                          </li>

                        </ul>
                      </div>
                    )}

                    {/* <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                      <span>
                        <button
                          className="text-blue-500 hover:underline"
                          onClick={() => handleOneDownload(item.transaction)} // Pass item.transaction to handleExportClick
                        >
                          Download
                        </button>
                      </span>
                    </td> */}
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
                  className={`py-2 px-4 rounded-md shadow-md border ${currentPage === page + 1
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
    </>
  );
};

export default Transaction_page;
