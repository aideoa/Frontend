import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { handleDownloadTrans } from "./exportTrans";
import { BsThreeDotsVertical } from "react-icons/bs";
import useTransaction from "../../../hooks/useTransaction";

const ITEMS_PER_PAGE = 5;

const TransactionPage = () => {
  const { dataList: data = [], fetchData } = useTransaction();
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(null); // Store index of active menu

  const totalPages = Math.ceil((data?.length || 0) / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  // Pagination Data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Select All Logic
  const handleSelectAll = () => {
    const currentPageIds = currentPageData.map((item) => item.employeeId);
    if (selectAll) {
      setSelected((prevSelected) =>
        prevSelected.filter((id) => !currentPageIds.includes(id))
      );
    } else {
      setSelected((prevSelected) => [
        ...prevSelected,
        ...currentPageIds.filter((id) => !prevSelected.includes(id)),
      ]);
    }
    setSelectAll(!selectAll);
  };

  // Select Individual Item
  const handleSelectItem = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );

    // Update selectAll state based on current selections
    const currentPageIds = currentPageData.map((item) => item.employeeId);
    setSelectAll(selected.length + 1 === currentPageIds.length);
  };

  // Toggle Menu for Specific Item
  const toggleMenu = (event, index) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({ x: rect.left, y: rect.bottom });
    setShowMenu(showMenu === index ? null : index);
  };

  const handleExportClick = () => {
    handleDownloadTrans();
  };

  const handleOneDownload = (transactionId) => {
    handleDownloadTrans(transactionId);
  };

  // Pagination Handlers
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
      <div className="bg-white py-4 rounded-xl lightdropshadowbox">
        <div className="flex px-4 flex-col">
          <div className="flex space-x-4 mb-4 items-center">
            <div className="flex w-[34%] h-[40%] items-center gap-2">
              <h3 className="h-full text-[18px] font-[500]">Transactions</h3>
              <p className="text-[14px] px-3 text-purple-800 rounded-lg bg-purple-200">
                {data?.length || 0} trans
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
              <button
                className="bg-white font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2"
                onClick={handleExportClick}
              >
                Download All
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
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
                {[
                  "Name",               
                  "AIDEOA ID",
                  "Mobile Number",
                  "Email",
                  "Date & Time",
                  "Transaction ID",
                  "Amount",
                  "Status",
                  "Action",
                ].map((heading) => (
                  <th key={heading} className="py-3 px-4 text-left text-gray-500">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 h-16">
                  <td className="p-2 px-4">
                    <input
                      type="checkbox"
                      checked={selected.includes(item.employeeId)}
                      onChange={() => handleSelectItem(item.employeeId)}
                    />
                  </td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 text-gray-400">{item.aideoaId}</td>
                  <td className="p-2 text-gray-400">{item.mobileNumber}</td>
                  <td className="p-2 text-gray-400">{item.email}</td>
                  <td className="p-2 text-gray-400">{item.dateTime}</td>
                  <td className="p-2 text-gray-400">{item.transaction}</td>
                  <td className="p-2 text-gray-400">{item.amount}</td>
                  <td className="p-2 text-gray-400">
                    <span
                      className={`rounded-full px-1 ${
                        item.status === "Confirm"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td
                    className="p-2 cursor-pointer"
                    onClick={(e) => toggleMenu(e, index)}
                  >
                    <BsThreeDotsVertical />
                  </td>
                  {showMenu === index && (
                    <div
                      className="absolute bg-white border rounded shadow-md"
                      style={{ left: menuPosition.x, top: menuPosition.y }}
                    >
                      <ul>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleOneDownload(item.transaction)}
                        >
                          Download
                        </li>
                      </ul>
                    </div>
                  )}
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

export default TransactionPage;
