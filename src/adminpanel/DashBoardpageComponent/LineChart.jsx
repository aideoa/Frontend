import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} Financial Year`}</p>
        <p className="intro">
          {`Students: ${payload[0].value} / Employees: ${payload[1].value}`}
        </p>
      </div>
    );
  }
  return null;
};

const MyAreaChart = ({ totalMember }) => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear()); // Default to current year

  useEffect(() => {
    const processData = () => {
      const months = [
        "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"
      ];

      const monthlyData = months.map((month) => ({
        name: month,
        students: 0,
        employees: 0,
      }));

      totalMember?.users?.forEach((user) => {
        const createdDate = new Date(user.createdAt);
        const userMonth = createdDate.getMonth(); // 0-11 (Jan-Dec)
        const userYear = createdDate.getFullYear();

        if (userYear === year) {
          const adjustedIndex = userMonth < 3 ? userMonth + 9 : userMonth - 3;
          if (user.userType === "student") {
            monthlyData[adjustedIndex].students += 1;
          } else if (user.userType === "employee") {
            monthlyData[adjustedIndex].employees += 1;
          }
        }
      });

      setData(monthlyData);
    };

    processData();
  }, [year, totalMember]);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="flex flex-row justify-between">
        <button
          className="bg-blue-600 rounded text-white p-1"
          onClick={() => handleYearChange(year - 1)}
        >
          Previous Year
        </button>
        <h3 className="text-center font-medium text-gray-600">
          Showing Data for {year} Financial Year
        </h3>
        <button
          className="bg-blue-600 rounded text-white p-1"
          onClick={() => handleYearChange(year + 1)}
        >
          Next Year
        </button>
      </div>
      <ResponsiveContainer width="100%" height={"100%"}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
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
            dataKey="students"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorStudents)"
          />
          <Area
            type="monotone"
            dataKey="employees"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorEmployees)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyAreaChart;
