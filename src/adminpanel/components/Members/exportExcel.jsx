import axios from "axios";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const handleDownloadAll = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BACKEND_URL}/api/members?page=1&limit=1000`
    );

    if (!data || !data.users || data.users.length === 0) {
      alert("No data available to download.");
      return;
    }

    const filteredUsers = data.users;

    if (filteredUsers.length === 0) {
      alert("No employees or students found.");
      return;
    }

    console.log("Filtered Users:", filteredUsers);

    const dataToExport = filteredUsers.map((user) => ({
      id: user.id || "",
      aideoaIdNo: user.aideoaIdNo || "",
      fullName: user.fullName || "",
      email: user.email || "",
      mobile: user.mobile || "",
      userType: user.userType || "",
      organization: user.organization || "",
      createdAt: user.createdAt
        ? new Date(user.createdAt).toLocaleString()
        : "",
      idCard: user.idCard || "",
      idCardStatus: user.idCardStatus || "PENDING",
    }));

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("All Members");

    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "AIDEOA No", key: "aideoaIdNo", width: 15 },
      { header: "Name", key: "fullName", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Mobile No", key: "mobile", width: 15 },
      { header: "Role", key: "userType", width: 12 },
      { header: "Organization", key: "organization", width: 20 },
      { header: "Created At", key: "createdAt", width: 18 },
      { header: "ID Card", key: "idCard", width: 15 },
      { header: "ID Card Status", key: "idCardStatus", width: 15 },
    ];

    dataToExport.forEach((user) => {
      const row = worksheet.addRow(user);

      const statusCell = row.getCell(10); // "ID Card Status" column

      if (user.idCardStatus === "APPROVED") {
        statusCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "C6E0B4" },
        };
        statusCell.font = { color: { argb: "006100" } };
      } else if (user.idCardStatus === "PENDING") {
        statusCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFF2CC" },
        };
        statusCell.font = { color: { argb: "9C6500" } };
      } else if (user.idCardStatus === "REJECTED") {
        statusCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "F4CCCC" },
        };
        statusCell.font = { color: { argb: "A61C00" } };
      }
    });

    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };

    worksheet.eachRow((row, rowNumber) => {
      row.height = rowNumber === 1 ? 20 : 15;
      row.alignment = {
        vertical: "middle",
        horizontal: "left",
        wrapText: true,
      };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "All_Members.xlsx");
  } catch (error) {
    console.error("Error downloading data:", error);
    alert("Failed to fetch data for download.");
  }
};
