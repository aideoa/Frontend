import React, { useState, useEffect } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [counts, setCounts] = useState({
    "Student Corner": 0,
    "Employee Corner": 0,
    Education: 0,
    "Online Test": 0,
  });

  // Simulate loading counts (replace with actual API calls)
  useEffect(() => {
    const fetchCounts = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Replace with actual API calls to get counts
        setCounts({
          "Student Corner": 100,
          "Employee Corner": 85,
          Education: 42,
          "Online Test": 63,
        });
      } catch (error) {
        console.error("Error fetching counts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const renderComponent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      );
    }

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
        return (
          <Education
            setFileData={setFileData}
            setVideoData={setVideoData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Add Education":
        return <AddEducation setActiveComponent={setActiveComponent} />;
      case "Update Video":
        return (
          <UpdateVideo
            videoData={videoData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Update File":
        return (
          <UpdateFile
            fileData={fileData}
            setActiveComponent={setActiveComponent}
          />
        );
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

  const navItems = [
    { name: "Student Corner", count: counts["Student Corner"] },
    { name: "Employee Corner", count: counts["Employee Corner"] },
    { name: "Education", count: counts["Education"] },
    { name: "Online Test", count: counts["Online Test"] },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20 px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md text-gray-700 font-medium"
          >
            <span>{activeComponent}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                mobileMenuOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className={`${mobileMenuOpen ? "block" : "hidden"} lg:block mb-8`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:flex lg:space-x-3">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  setActiveComponent(item.name);
                  setMobileMenuOpen(false);
                }}
                className={`${
                  activeComponent === item.name
                    ? "bg-[#4B0082] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } rounded-xl shadow-md p-3 cursor-pointer transition-all duration-200 flex flex-col items-center`}
              >
                <p className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </p>
                {isLoading ? (
                  <div className="animate-pulse h-6 w-6 rounded-full bg-gray-200 mt-1"></div>
                ) : (
                  <p className="font-bold text-xs mt-1 px-2 py-1 bg-white/10 rounded-full">
                    {item.count}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            renderComponent()
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
