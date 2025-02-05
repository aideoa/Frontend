import ExcelJS from "exceljs";
import { saveAs } from "file-saver"; // For saving the file in the browser
import { getData } from "./dataSource"; // Import the function to fetch data

export const handleDownloadTrans = async (transactionId , data) => {
  try {
    // Get data (ensure it's asynchronous if fetching from an API)
    // const data = await getData();

    // Filter the data for the specific transaction, if applicable
    const filteredData = transactionId
      ? data.filter((item) => item.transaction === transactionId)
      : data;

    // Handle case where no data is available
    if (!filteredData || filteredData.length === 0) {
      alert("No data available to download.");
      return;
    }

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Transactions");

    // Define columns with headers and keys
   worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      // { header: "Employee ID", key: "employeeId", width: 15 },
      { header: "AIDEOA No", key: "aideoaId", width: 15 },
      { header: "Mobile Number", key: "mobileNumber", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Date & Time", key: "dateTime", width: 20 },
      { header: "Transaction", key: "transaction", width: 15 },
      { header: "Amount", key: "amount", width: 10 },
      { header: "Status", key: "status", width: 10 },
      // { header: "Self Address", key: "selfAddress", width: 30 },
    ];

    // Map data and add rows to the worksheet
 filteredData?.forEach((item) => {
      worksheet.addRow({
        name: item.name,
        // employeeId: item.employeeId,
        aideoaId: item.user.aideoaIdNo,
        mobileNumber: item.mobileNumber,
        email: item.email,
        dateTime: new Date(item.createdAt).toLocaleString(), // Format the date & time
        transaction: item.utrNo,
        amount: item.membershipAmount,
        status: item.status,
        // selfAddress: item.user.address || "N/A",
      });
    });


    // Add basic styling (optional)
    worksheet.getRow(1).font = { bold: true }; // Make headers bold
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "center" };

    // Create and download the Excel file
    const buffer = await workbook.xlsx.writeBuffer(); // Get the workbook buffer
    const fileName = transactionId
      ? `Transaction_${transactionId}.xlsx`
      : `Transactions_${new Date().toISOString().split("T")[0]}.xlsx`;

    // Use FileSaver to save the file
    saveAs(new Blob([buffer]), fileName);
  } catch (error) {
    console.error("Error exporting data:", error);
    alert("Failed to export data. Please try again later or contact support.");
  }
};
