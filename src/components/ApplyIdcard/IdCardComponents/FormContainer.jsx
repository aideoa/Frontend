import { useContext, useEffect } from "react";
import IdCardPurple from "./IdCardPurple";
import EmployeeIdCard from "./EmployeeIdCard";
import useStudentIdCard from "../../../hooks/useIdCard";
import { AuthContext } from "../../../context/authContext";
import toast from "react-hot-toast";
import AlreadyApplied from "../AlreadyApplied";
import LoginPrompt from "../../../utils/LoginRequired";
import { Link } from 'react-router-dom';
import useMembers from "../../../hooks/useMembers";

const data = ""//testing

const FormContainer = () => {
  const { user } = useContext(AuthContext);
  const {selectedMember,getMember} = useMembers();

  useEffect(()=>{
    if(user){
      getMember(user.id);
    }
  },[user]);
  // const { getIdCardById, data } = useStudentIdCard();

  // useEffect(() => {
  //   if (user) {
  //     // getIdCardById(user.userType);
  //   }
  // }, [user, getIdCardById]);
  if (!user) return <LoginPrompt title="Login to Apply for ID Card" />;

  // if (user?.idCardStatus === "PENDING") {
  //   return <AlreadyApplied />;
  // }

  if (selectedMember?.idCardStatus === "REJECTED") {
    toast("Your last application was rejected. Please apply again.");
    return null;
  }

  console.log(selectedMember)

  const renderContent = () => {
    if (selectedMember?.userType === "employee") {
      if (selectedMember?.idCardStatus === 'APPROVED') {
        return (
          <div>
            <p className="text-xl font-medium">Employee ID Card</p>
            <EmployeeIdCard data={selectedMember} />
          </div>
        );
        
      }
      
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

    if (selectedMember?.userType === "student") {
      if (selectedMember?.idCardStatus === "APPROVED") {
        return (
          <div>
            <p className="text-xl font-medium">Student ID Card</p>
            <IdCardPurple data={selectedMember} />
          </div>
        );
      }
      if (selectedMember?.idCardStatus === "REJECTED") {
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