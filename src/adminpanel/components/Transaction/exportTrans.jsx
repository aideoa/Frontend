import * as XLSX from "xlsx";
import { getData } from "./dataSource"; // Import the function to fetch data

// Update function to accept filter or transactionId
export const handleDownloadTrans = (transactionId) => {
  try {
    // Get data
    const data = getData();

    // If transactionId is provided, filter the data for the specific transaction
    const filteredData = transactionId
      ? data.filter((item) => item.transaction === transactionId) // Filter based on the selected transactionId
      : data; // If no transactionId is provided, download all data

    if (!filteredData || filteredData.length === 0) {
      alert("No data available to download.");
      return;
    }

    // Prepare data for export
    const dataToExport = filteredData.map((item) => ({
      Name: item.name,
      "Employee ID": item.employeeId,
      "AIDEOA No": item.aideoaId,
      "Mobile Number": item.mobileNumber,
      Email: item.email,
      "Date & Time": item.dateTime,
      Transaction: item.transaction,
      Amount: item.amount,
      Status: item.status,
      "Self Address": item.selfAddress,
    }));

    // Create Excel file and download
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, "Transactions.xlsx");
  } catch (error) {
    console.error("Error exporting data:", error);
    alert("Failed to export data.");
  }
};
