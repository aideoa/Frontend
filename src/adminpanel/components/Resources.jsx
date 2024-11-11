import React, { useState } from "react";
// Import MdDelete for deletion
import OnlineTest from "./onlinetest/OnlineTest";
import StudentCorner from "../components/studentnews/StudentNews";
import AddTest from "./onlinetest/AddTest";
import AddStudentNews from "./studentnews/AddStudentNews";
import Employeecorner from "./employeenews/EmployeeNews";
import AddEmployeeNews from "./employeenews/AddEmployeeNews";
import AddEducation from "./education/AddEducation";
import Education from "./education/Education";
import UpdateTest from "./onlinetest/Updatetest";
import UpdateStudentNews from "./studentnews/UpdateStudent";
import UpdateEmployeeNews from "./employeenews/UpdateNews";

import UpdateVideo from "./education/UpdateVideo";
import UpdateFile from "./education/UpdateFile";

const Resources = () => {
  const [activeComponent, setActiveComponent] = useState("Student Corner");
  const [data, setData] = useState();
  const [studentData, setStudentData] = useState();
  const [employeeData, setEmployeeData] = useState();
  const [fileData, setFileData] = useState();
  const [videoData, setVideoData] = useState();

  const renderComponent = () => {
    switch (activeComponent) {
      case "Online Test":
        return (
          <OnlineTest
            setData={setData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Add Test":
        return <AddTest setActiveComponent={setActiveComponent} />;
      case "Update Test":
        return (
          <UpdateTest data={data} setActiveComponent={setActiveComponent} />
        );
      case "Education":
        return <Education setFileData={setFileData} setVideoData={setVideoData} setActiveComponent={setActiveComponent} />;
      case "Add Education":
        return <AddEducation setActiveComponent={setActiveComponent} />;
      case "Update Video":
        return <UpdateVideo  videoData={videoData} setActiveComponent={setActiveComponent} />;
      case "Update File":
        return <UpdateFile  fileData={fileData} setActiveComponent={setActiveComponent} />;
      case "Employee Corner":
        return (
          <Employeecorner
            setEmployeeData={setEmployeeData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Add Employeenews":
        return <AddEmployeeNews setActiveComponent={setActiveComponent} />;
      case "Update Employeenews":
        return (
          <UpdateEmployeeNews
            employeeData={employeeData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Student Corner":
        return (
          <StudentCorner
            setStudentData={setStudentData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Add Studentnews":
        return <AddStudentNews setActiveComponent={setActiveComponent} />;
      case "Update Studentnews":
        return (
          <UpdateStudentNews
            studentData={studentData}
            setActiveComponent={setActiveComponent}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <div className="rounded-xl pt-4 bg-gray-50">
      <div className="flex space-x-4 mb-4 px-4 max-lg:flex-col-reverse max-lg:gap-2">
        <div className="flex space-x-4">
          <div
            onClick={() => setActiveComponent("Student Corner")}
            className={`${
              activeComponent === "Student Corner"
                ? "bg-[#4B0082] text-white" // Active state
                : "bg-white text-gray-700" // Inactive state
            } text-center shadow-md rounded-xl flex flex-col justify-center items-center p-2 h-16 cursor-pointer`}
          >
            <p className="text-nowrap">Student Corner</p>
            <p className="font-bold">100</p>
          </div>
          <div
            onClick={() => setActiveComponent("Employee Corner")}
            className={`${
              activeComponent === "Employee Corner"
                ? "bg-[#4B0082] text-white" // Active state
                : "bg-white text-gray-700" // Inactive state
            } text-center shadow-md rounded-xl flex flex-col justify-center items-center p-2 h-16 cursor-pointer`}
          >
            <p className="text-nowrap">Employee Corner</p>
            <p className="font-bold">100</p>
          </div>
          <div
            onClick={() => setActiveComponent("Education")}
            className={`${
              activeComponent === "Education"
                ? "bg-[#4B0082] text-white" // Active state
                : "bg-white text-gray-700" // Inactive state
            } text-center shadow-md rounded-xl flex flex-col justify-center items-center p-2 h-16 cursor-pointer`}
          >
            <p className="text-nowrap">Education</p>
            <p className="font-bold">100</p>
          </div>
          <div
            onClick={() => setActiveComponent("Online Test")}
            className={`${
              activeComponent === "Online Test"
                ? "bg-[#4B0082] text-white" // Active state
                : "bg-white text-gray-700" // Inactive state
            } text-center shadow-md rounded-xl flex flex-col justify-center items-center p-2 h-16 cursor-pointer`}
          >
            <p className="text-nowrap">Online Test</p>
            <p className="font-bold">100</p>
          </div>
        </div>
      </div>

      {/* <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500  w-52">
                Title
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500 text-nowrap">
                Event Date & Time
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Days</th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Location
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Description
              </th>
              <th className="p-2 font-medium text-sm text-gray-600 max-w-32">
                Url
              </th>
             <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 7).map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 max-w-52 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.eventDateTime}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.days}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.location}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  {item.description.substring(0, 20)}...
                </td>
                <td className="p-2 font-medium text-sm text-gray-400">
                  <Link
                    to={item.url}
                    className="text-blue-500 max-w-32 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {item.url}
                  </Link>
                </td>
                <td className="p-2 font-medium text-sm text-gray-600 cursor-pointer">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      {renderComponent()}
      {/* <div className="flex justify-between items-center mt-4 px-4">
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <div className="space-x-2">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              className={`py-2 px-4 rounded-md shadow-md border ${
                currentPage === page + 1
                  ? "bg-purple-700 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          className="py-2 px-4 bg-white shadow-md border text-black rounded-md"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Resources;
