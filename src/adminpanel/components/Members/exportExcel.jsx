import axios from "axios";
import * as XLSX from "xlsx";

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

    // Prepare data for export
    const dataToExport = data.users.map((user) => ({
      ID: user.id,
      "AIDEOA No": user.aideoaIdNo,
      Name: user.fullName,
      Email: user.email,
      "Mobile No": user.mobile,
      Role: user.userType,
      Organization: user.organization,
      "Created At": user.createdAt,
      "ID Card": user.idCard,
    }));

    // Create Excel file and download
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "All Members");
    XLSX.writeFile(workbook, "All_Members.xlsx");
  } catch (error) {
    console.error("Error downloading data:", error);
    alert("Failed to fetch data for download.");
  }
};
