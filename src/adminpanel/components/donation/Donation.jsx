import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaFileExcel } from "react-icons/fa"; // Import Excel icon
import * as XLSX from "xlsx"; // Import xlsx library
import { saveAs } from "file-saver"; // Import file-saver
import useDonation from "../../../hooks/useDonation";

const Donation = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchterm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const { dataList, fetchData } = useDonation();

  console.log(dataList);

  const limit = 10;

  useEffect(() => {
    fetchData(searchTerm, currentPage, limit);
  }, [currentPage, searchTerm]);

  const totalPages = dataList?.pagination?.totalPages || 1;
  const donations = dataList?.donations || [];

  const handleSelectAll = () => {
    const currentPageIds = donations.map((item) => item.id);
    setSelectedItems(selectAll ? [] : currentPageIds);
    setSelectAll(!selectAll);
  };

  const toggleMenu = (event, index) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({ x: rect.left, y: rect.bottom });
    setShowMenu(showMenu === index ? null : index);
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

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

  const handleDownloadExcel = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one donation to download.");
      return;
    }

    const selectedData = donations.filter((item) => selectedItems.includes(item.id));

    const excelData = selectedData.map((item) => ({
      Name: item.name,
      "AIDEOA ID": item.user ? item.user.aideoaIdNo : "N/A",
      "Mobile Number": item.mobileNumber,
      Email: item.email,
      "Date & Time": item.createdAt.slice(0, 10),
      "UTR No": item.utrNo,
      Amount: item.donationAmount,
      Status: item.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Donations");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(data, `donations_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const handleOneDownload = (transaction) => {
    console.log("Downloading transaction:", transaction);
  
    if (!transaction) {
      alert("Invalid transaction data");
      return;
    }
  
    // Format the transaction data for Excel
    const excelData = [{
      Name: transaction.name,
      'AIDEOA ID': transaction.user ? transaction.user.aideoaIdNo : "N/A",
      'Mobile Number': transaction.mobileNumber,
      Email: transaction.email,
      'Date & Time': transaction.createdAt.slice(0, 10),
      'UTR No': transaction.utrNo,
      Amount: transaction.donationAmount,
      Status: transaction.status
    }];
  
    // Create a worksheet
    const worksheet = XLSX.utils.json_to_sheet(excelData);
  
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transaction");
  
    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
    // Save the file
    saveAs(data, `transaction_${transaction.utrNo || new Date().toISOString().slice(0, 10)}.xlsx`);
  };
  

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="py-4 bg-white rounded-xl lightdropshadowbox">
        <div className="flex px-4 space-x-4 mb-4 items-center">
          <div className="flex space-x-3 items-center ">
            <h2 className="font-bold text-lg">Donations</h2>
          </div>
          <div className="flex justify-end flex-1  items-center space-x-4 ">
            <div className="relative w-[55%]">
              <CiSearch className="absolute  top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchterm(e.target.value)}
              />
            </div>
            {selectedItems.length > 1 && (
  <button
    className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md"
    onClick={handleDownloadExcel}
  >
    <FaFileExcel className="mr-2" />
    Download Excel
  </button>
)}
          </div>
        </div>

        <div className="overflow-x-scroll rounded-b-2xl">
          <table className="min-w-full bg-white border border-gray-300 ">
            <thead>
              <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
                <th className="p-2 px-4 font-medium text-sm text-gray-200">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className=" checked:bg-purple-500 checked:border-purple-500 size-4  bg-col"
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
                  // "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="py-3 px-4 text-left text-gray-500"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataList &&
                dataList?.donations?.slice(0, limit)?.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 h-16">
                    <td className="p-2 px-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                      />
                    </td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2 text-gray-400">
                      {item.user ? item.user.aideoaIdNo : "N/A"}
                    </td>
                    <td className="p-2 text-gray-400">{item.mobileNumber}</td>
                    <td className="p-2 text-gray-400">{item.email}</td>
                    <td className="p-2 text-gray-400">
                      {item.createdAt.slice(0, 10)}
                    </td>
                    <td className="p-2 text-gray-400">{item.utrNo}</td>
                    <td className="p-2 text-gray-400">{item.donationAmount}</td>
                    <td className="p-2 text-gray-400">
                      <span
                        className={`rounded-full px-1 ${
                          item.status === "success"
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
                      {/* <BsThreeDotsVertical /> */}
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
    </div>
  );
};

export default Donation;
