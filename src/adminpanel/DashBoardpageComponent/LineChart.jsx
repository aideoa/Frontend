import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Feb", value1: 20, value2: 15 },
  { name: "Mar", value1: 25, value2: 18 },
  { name: "Apr", value1: 30, value2: 20 },
  { name: "May", value1: 35, value2: 22 },
  { name: "Jun", value1: 45, value2: 25 }, // June 2021
  { name: "Jul", value1: 50, value2: 30 },
  { name: "Aug", value1: 55, value2: 32 },
  { name: "Sep", value1: 60, value2: 35 },
  { name: "Oct", value1: 65, value2: 40 },
  { name: "Nov", value1: 70, value2: 42 },
  { name: "Dec", value1: 75, value2: 45 },
  { name: "Jan", value1: 80, value2: 50 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} 2021`}</p>
        <p className="intro">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const MyAreaChart = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height={"100%"}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value1"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorValue1)"
          />
          <Area
            type="monotone"
            dataKey="value2"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorValue2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyAreaChart;
