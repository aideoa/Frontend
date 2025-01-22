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


const TrafficSourceChart = ({data}) => {
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
              style={{ width: item.width }}
                className={` bg-purple-600 h-1.5 rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficSourceChart;
