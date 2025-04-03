import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md"; // Uncomment this since we'll need it
import { handleDownloadTrans } from "./exportTrans";
import { BsThreeDotsVertical } from "react-icons/bs";
import useTransaction from "../../../hooks/useTransaction";
import { FaFileExport } from "react-icons/fa"; // Import export icon
import { ThreeCircles } from "react-loader-spinner";
import axios from "axios";

const TransactionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { dataList: data = [], fetchData, pagination } = useTransaction(currentPage);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(null); // Store index of active menu
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const totalPages = pagination?.totalPages || 0;




  useEffect(() => {
    setLoading(true);
    fetchData(searchTerm, 8)
      .finally(() => setLoading(false)); // Hide loader after fetching data
  }, [currentPage, searchTerm]);

  // Pagination Data
  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const currentPageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Select All Logic
  const handleSelectAll = () => {
    const currentPageIds = data.map((item) => item.id);
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
    const currentPageIds = data.map((item) => item.employeeId);
    setSelectAll(selected.length + 1 === currentPageIds.length);
  };

  // Toggle Menu for Specific Item
  const toggleMenu = (event, index) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({ x: rect.left, y: rect.bottom });
    setShowMenu(showMenu === index ? null : index);
  };

  const handleExportClick = async () => {
     try {
          const res = await axios.get(
            `${import.meta.env.VITE_API_BACKEND_URL}/api/transactions`,
            {
              params: {
                page: 1,
                limit: pagination?.totalMembershipFees,
                searchTerm,
              },
            }
          );
          if (res.status === 200) {
            handleDownloadTrans(null,res.data.membershipFees)
            // console.log("tarush",res.data.membershipFees)
          }
        } catch (error) {
          console.error("Error fetching transactions:", error);
          
        } 
   
  };

  // New function to export selected transactions
  const handleExportSelected = () => {
    const selectedData = data.filter(item => selected.includes(item.id));
    handleDownloadTrans(null, selectedData);
  };

  const handleOneDownload = (transactionId, data) => {
    handleDownloadTrans(transactionId, data);
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
              <h3 className="h-full text-[18px] font-[500]">Membership</h3>
              <p className="text-[14px] px-3 text-purple-800 rounded-lg bg-purple-200">
                {pagination?.totalMembershipFees || 0} trans
              </p>
            </div>
            <div className="flex justify-end flex-1 items-center space-x-4">
              <div className="relative w-[55%]">
                <CiSearch className="absolute top-3 left-3" />
                <input
                  type="text"
                  className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {selected.length > 1 && (
                <button
                  className="bg-green-600 text-white py-2 px-2 rounded-md flex items-center"
                  onClick={handleExportSelected}
                >
                  <FaFileExport />
                  Export Selected
                </button>
              )}
              <button
                className="bg-white font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2"
                onClick={() => handleExportClick()}
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
                  "UTR No",
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
              {loading ? (
                <tr>
                  <td colSpan="12" className="p-4">
                    <div className="flex justify-center items-center h-40">
                      <ThreeCircles height={60} width={60} color="#4B0082" />
                    </div>
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 h-16">
                    <td className="p-2 px-4">
                      <input
                        type="checkbox"
                        checked={selected.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                      />
                    </td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2 text-gray-400">{item.user ? item.user.aideoaIdNo : "N/A"}</td>
                    <td className="p-2 text-gray-400">{item.mobileNumber}</td>
                    <td className="p-2 text-gray-400">{item.email}</td>
                    <td className="p-2 text-gray-400">{item.createdAt.slice(0, 10)}</td>
                    <td className="p-2 text-gray-400">{item.utrNo}</td>
                    <td className="p-2 text-gray-400">{item.membershipAmount}</td>
                    <td className="p-2 text-gray-400">
                      <span
                        className={`rounded-full px-1 ${item.status === "success"
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
                            onClick={() => handleOneDownload(item.transaction, data)}
                          >
                            Download
                          </li>
                        </ul>
                      </div>
                    )}
                  </tr>
                ))
              )} </tbody>
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
  );
};

export default TransactionPage;
