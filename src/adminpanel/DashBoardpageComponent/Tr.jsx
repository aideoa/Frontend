import React, { useRef } from "react";
import MyAreaChart from "./LineChart";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Tr = ({ totalMember }) => {
  const chartRef = useRef();

  const exportPDF = () => {
    html2canvas(chartRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape");
      pdf.addImage(imgData, "PNG", 10, 10, 270, 140);
      pdf.save("report.pdf");
    });
  };

  return (
    <div className="w-[65%] max-lg:w-full bg-white p-5 rounded-lg mb-5 shadow-md">
      <div className="flex max-xl:flex-col gap-y-2 max-xl:justify-center items-center justify-between mb-4">
        <h2 className="text-lg mb-1 max-xsm:text-sm font-semibold my-1 border-b-black border-b-2">
          Report
        </h2>
        <button
          onClick={exportPDF}
          className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none mt-1 text-lg"
        >
          Export PDF
        </button>
      </div>
      <div ref={chartRef} className="h-[200px]">
        <MyAreaChart totalMember={totalMember} />
      </div>
    </div>
  );
};

export default Tr;
