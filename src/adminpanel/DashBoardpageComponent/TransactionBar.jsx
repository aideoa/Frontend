import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data from your image
const data = [
  { name: "Transaction", value: "1,43,382", width: "w-full" },
  { name: "ID Card", value: "87,974", width: "w-3/4" },
  { name: "Events", value: "45,211", width: "w-2/4" },
  { name: "Query", value: "21,893", width: "w-1/4" },
];

const TrafficSourceChart = () => {
  return (
    <div className="w-[32%] max-lg:w-full ">
      <div className="bg-white p-4 rounded-lg h-full shadow-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Traffic Sources</h2>
          <span className="text-gray-500 text-sm">Last 7 Days</span>
        </div>
        {data.map((item) => (
          <div key={item.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-700">{item.name}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className={`${item.width} bg-purple-600 h-1.5 rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficSourceChart;
