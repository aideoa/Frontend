import { useContext, useEffect } from "react";
import IdCardPurple from "./IdCardPurple";
import EmployeeIdCard from "./EmployeeIdCard";
import useStudentIdCard from "../../../hooks/useIdCard";
import { AuthContext } from "../../../context/authContext";
import toast from "react-hot-toast";
import AlreadyApplied from "../AlreadyApplied";
import LoginPrompt from "../../../utils/LoginRequired";
import { Link } from 'react-router-dom';

const FormContainer = () => {
  const { user } = useContext(AuthContext);
  const { getIdCardById, data } = useStudentIdCard();

  useEffect(() => {
    if (user) {
      getIdCardById(user.userType);
    }
  }, [user, getIdCardById]);

  if (!user) return <LoginPrompt title="Login to Apply for ID Card" />;

  if (data?.status === "pending") {
    return <AlreadyApplied />;
  }

  if (data?.status === "rejected") {
    toast("Your last application was rejected. Please apply again.");
    return null;
  }

  const renderContent = () => {
    if (user.userType === "employee") {
      if (!data?.isMember) {
        return (
          <div>
            <p className="text-xl font-medium text-red-600">Membership Required</p>
            <p className="text-lg text-gray-700 mb-4">Please pay the membership fee to access your ID card.</p>
            <Link
              to="/membership"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Pay Membership Fee
            </Link>
          </div>
        );
      }
      return (
        <div>
          <p className="text-xl font-medium">Employee ID Card</p>
          <EmployeeIdCard data={data} />
          <button className="btn-download">Download ID Card</button>
        </div>
      );
    }

    if (user.userType === "student") {
      if (data?.status === "verified") {
        return (
          <div>
            <p className="text-xl font-medium">Student ID Card</p>
            <IdCardPurple data={data} />
            <button className="btn-download">Download ID Card</button>
          </div>
        );
      }
      if (data?.status === "denied") {
        return (
          <div>
            <p className="text-xl font-medium text-red-600">Student Verification Denied</p>
            <p className="text-lg text-gray-700 mb-4">Your application for student verification has been denied by the admin.</p>
          </div>
        );
      }
      return (
        <div>
          <p className="text-xl font-medium">Application Status</p>
          <p className="text-lg text-gray-700 mb-4">Verification Pending</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="my-20 relative mx-32 flex flex-col gap-6 max-xl:mx-8 max-lg:mx-8 max-md:mx-4 max-sm:mx-2">
      {renderContent()}
    </div>
  );
};

export default FormContainer;