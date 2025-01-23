import * as XLSX from "xlsx";
import { getData } from "./dataSource"; // Import the function to fetch data

export const handleDownloadTrans = (filterStatus) => {
  try {
    // Get data
    const data = getData();

    // Filter data if filterStatus is provided
    const filteredData = filterStatus
      ? data.filter((item) => item.status === filterStatus)
      : data;

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
