import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const StudentForm = () => {
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg   shadow-lg w-11/12 sm:w-2/3 xl:w-1/3">
        <h2 className="text-lg font-bold mb-4 text-AIDEOTYPO">
         Student Detail
        </h2>
        <form action="">
        <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              
            >
              Select User Type:
            </label>
            <select
            
              className="p-3 border rounded-xl focus:outline-none w-full "
            >
              <option value="none" className="">
                Select
              </option>
              <option value="student" className="">
                Student
              </option>
              <option value="employee" className="">
                Employee
              </option>
            </select>
          </div>
        </form>

        </div>
     
    </div>
  );
};

export default StudentForm;
