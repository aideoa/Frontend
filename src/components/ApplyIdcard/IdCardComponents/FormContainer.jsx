import { useContext, useEffect, useState } from "react";
import IDform from "./IDform";

import EmployeeForm from "./EmployeeForm";
import IdCardPurple from "./IdCardPurple";
import EmployeeIdCard from "./EmployeeIdCard";
import useStudentIdCard from "../../../hooks/useIdCard";
import { AuthContext } from "../../../context/authContext";
import toast from "react-hot-toast";
import AlreadyApplied from "../AlreadyApplied";
import LoginPrompt from "../../../utils/LoginRequired";
// import DownloadIdButton from "../../Landingpage/components/DownloadIdButton"
// import { Link } from 'react-router-dom'
const FormContainer = () => {
  const [formType, SetFormType] = useState(true);
  const [submit, setsubmit] = useState(false);
  const { user } = useContext(AuthContext);
  const { getIdCardById, data } = useStudentIdCard();

  useEffect(() => {
    getIdCardById(user?.sub, user?.userType);
  }, []);
  if (!user) return <LoginPrompt title="Login to Apply for IdCard" />;
  if (data?.status === "pending") return <AlreadyApplied />;
  if (data?.status === "rejected")
    toast(
      "Your Last Application has been rejected due to some reasons please apply again"
    );
  return (
    <div>
      <div className="my-20 relative mx-32 flex flex-col gap-6 max-xl:mx-8 max-lg:mx-8 max-md:mx-4 max-sm:mx-2 ">
        {data?.status !== "approved" ? (
          <p className="text-xl font-medium">ID Card form</p>
        ) : (
          <p className="text-xl font-medium">ID Card</p>
        )}
        {/* <div className="flex justify-center w-full  ">
            <div className="p-1 border-2 flex border-gray-200 max-w-full  rounded-full">
              <button
                className={`w-72 h-10 rounded-full  text-sm text-black  font-medium ${formType && "membershipBtn text-white"
                  }`}
                onClick={() => SetFormType(true)}
              >
                Student ID
              </button>
              <button
                className={`w-72 h-10 rounded-full  text-sm text-black font-medium ${!formType && "membershipBtn text-white"
                  }`}
                onClick={() => SetFormType(false)}
              >
                Employee ID
              </button>
            </div>
          </div> */}
        <div className="flex  w-full justify-between gap-16 max-md:flex-col-reverse  max-lg:gap-10 max-lg:">
          {user?.userType === "student" && data?.status !== "approved" && (
            <IDform />
          )}
          {user?.userType === "employee" && data?.status !== "approved" && (
            <EmployeeForm />
          )}
          {user?.userType === "student" ? (
            <IdCardPurple data={data} />
          ) : (
            <EmployeeIdCard data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
