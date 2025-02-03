import axios from "axios";
import ExcelJS from "exceljs"; // Use ExcelJS
import { saveAs } from "file-saver"; // For saving the file in the browser

// Function to handle the download
export const handleDownloadAll = async (userType) => {
  try {
    // Fetch data based on userType
    const { data } = await axios.get(
      `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/members?userType=${userType}&page=1&limit=1000`
    );

    if (!data || !data.users || data.users.length === 0) {
      alert("No data available to download.");
      return;
    }

    console.log(data);

    const dataToExport = data.users.map((user) => ({
      ID: user.id || '', // Ensure there's a fallback in case the data is missing
      "AIDEOA No": user.aideoaIdNo || '',
      Name: user.fullName || '',
      Email: user.email || '',
      "Mobile No": user.mobile || '',
      Role: user.userType || '',
      Organization: user.organization || '',
      "Created At": user.createdAt ? new Date(user.createdAt).toLocaleString() : '',
      "ID Card": user.idCard || '',
    }));


    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("All Members");

    // Define columns with headers and keys
    worksheet.columns = [
      { header: "ID", key: "id", width: 15 },
      { header: "AIDEOA No", key: "aideoaIdNo", width: 20 },
      { header: "Name", key: "fullName", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Mobile No", key: "mobile", width: 20 },
      { header: "Role", key: "userType", width: 15 },
      { header: "Organization", key: "organization", width: 25 },
      { header: "Created At", key: "createdAt", width: 20 },
      { header: "ID Card", key: "idCard", width: 20 },
    ];

    // Add rows to the worksheet
    dataToExport.forEach((user) => {
      worksheet.addRow(user);
    });

    // Apply some styling (optional)
    worksheet.getRow(1).font = { bold: true }; // Make headers bold
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "center" };

    // Generate the Excel file and save it using file-saver
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "All_Members.xlsx");
  } catch (error) {
    console.error("Error downloading data:", error);
    alert("Failed to fetch data for download.");
  }
};
