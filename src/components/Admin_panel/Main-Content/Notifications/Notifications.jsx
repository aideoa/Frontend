import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import Pagination from "../../Pagination/Pagination";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import * as XLSX from "xlsx";
import { ThreeCircles } from "react-loader-spinner";

const Notifications = () => {
  const [mailsData, setMailsData] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const totalPages = mailsData?.pagination?.totalPages;


  const handleSelectAll = () => {
    const currentPageIds = mailsData?.emails?.slice(0, limit).map((email) => email.id) || [];
    if (selectAll) {
      setSelectedItems((prevSelected) => prevSelected.filter((id) => !currentPageIds.includes(id)));
    } else {
      setSelectedItems((prevSelected) => [...new Set([...prevSelected, ...currentPageIds])]);
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((contact) => contact !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const fetchMails = async (currentPage, limit) => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BACKEND_URL}/api/notification`, {
        params: { page: currentPage, limit },
      });
      if (res.status === 200) {
        setMailsData(res.data);
      }
    } catch (error) {
      console.error("Error fetching mails:", error);
    }
    finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchMails(currentPage, limit);
  }, [currentPage, limit]);

  const handleNextPage = () => {
    console.log(currentPage);
    setCurrentPage((prev) => {
      if (prev < mailsData?.pagination?.totalPages) {
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

  const handleDownloadEmails = async () => {
    try {
      let allEmails = [];
      let currentPage = 1;
      let totalPages = 1;

      // Fetch all emails from the API (iterate through all pages)
      while (currentPage <= totalPages) {
        const res = await axios.get(`${import.meta.env.VITE_API_BACKEND_URL}/api/notification`, {
          params: {
            page: currentPage,
            limit: 100, // Fetching a large batch of emails per request
          },
        });

        if (res.status === 200) {
          allEmails = [...allEmails, ...res.data.emails];
          totalPages = res.data.pagination.totalPages; // Update total pages count
        } else {
          console.error(`Unexpected response status: ${res.status}`);
          return;
        }

        currentPage++;
      }

      if (allEmails.length === 0) return;

      // Convert data to an Excel format
      const worksheet = XLSX.utils.json_to_sheet(allEmails.map((email) => ({ "Email Address": email.address })));
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Emails");

      // Trigger file download
      XLSX.writeFile(workbook, "emails.xlsx");
    } catch (error) {
      console.error("Error fetching all emails:", error);
    }
  };

  return (

    <div style={{ marginTop: "50px" }}>
      <div>
        <div className="py-4 bg-white rounded-xl lightdropshadowbox">
          <div className="flex px-4 space-x-4 mb-4 items-center">
            <div className="flex space-x-3 items-center ">
              <h2 className="font-bold text-lg">Newsletter</h2>
              <span className="bg-purple-200 px-2  text-xs rounded-full">
                {mailsData?.pagination?.totalEmails} Mails
              </span>
            </div>

            <div className="flex justify-end flex-1  items-center space-x-4 ">
              {/* <div className="relative w-[55%]">
              <CiSearch className="absolute  top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div> */}
              {mailsData?.emails?.length >= 2 && <MdDelete size={26} />}
              <button
                onClick={handleDownloadEmails}
                className="bg-white font-semibold border shadow-md text-black  hover:bg-purple-800 hover:text-white py-2 px-4 rounded-md"
              >
                Download All Emails
              </button>
              <div className="flex max-lg:flex-col gap-2">
                {/* <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
                  Download all
                </button> */}
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <table className="    w-full ">
                <thead className="border-b bg-gray-200 border-gray-200 h-16  ">
                  <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
                    <th className="p-2 px-4 font-medium text-sm text-gray-200">
                      <input
                        type="checkbox"
                        className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 w-full">
                      Emails
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
                    mailsData &&
                    mailsData?.emails?.slice(0, limit).map((contact, index) => (
                      <tr
                        key={index}
                        className="border-b h-16 hover:bg-gray-50"
                      >
                        <td className="p-2 px-4 font-medium text-sm text-gray-600">
                          <input
                            type="checkbox"
                            className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                            checked={selectedItems.includes(contact.id)}
                            onChange={() => handleSelectItem(contact.id)}
                          />
                        </td>
                        <td className="py-3 px-4 font-medium text-gray-500">
                          {contact?.address}
                        </td>
                      </tr>
                    ))
                  )} </tbody>
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
                    onClick={() => setCurrentPage(page + 1)}
                    className={`py-2 px-4 rounded-md shadow-md border ${currentPage === page + 1
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
        </div>
      </div>
    </div>
  );
};

export default Notifications;
