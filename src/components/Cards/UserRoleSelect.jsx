import { validateEmail } from "../../functions/validate";
import { SignUpFunc } from "../../services/axios";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const url = `http://localhost:4000/api/auth`;
const UserRoleSelect = ({ userTypemodal, setUserTypeModal, formData }) => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const [org, setOrg] = useState();
  const [idNo, setIdNo] = useState();
  const [otp, setOtp] = useState();
  const [mobile, setMobile] = useState();
  const [resend, setResend] = useState(false);
  const [seconds, setSeconds] = useState();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userType) {
      setError("Select type of user");
      return;
    }
    if (!org) {
      userType === "student"
        ? setError("Select university name")
        : setError("Select company name");

      return;
    }
    if (!idNo) {
      userType === "student"
        ? setError("Enter university RollNo")
        : setError("Enter employee Id");

      return;
    }
    if (!userTypemodal && (!mobile || mobile.length !== 10)) {
      setError("Enter correct mobile number");
      return;
    }
    if (userTypemodal) {
      const fullFormData = {
        ...formData,
        org,
        idNo,
        otp,
        userType,
      };

      try {
        const data = await SignUpFunc(fullFormData);
        console.log(data);

        if (data.status === 400) {
          throw new Error(data?.data?.error || "Something went wrong");
        }

        if (data.status === 200) {
          toast.success(data?.data?.message);
          navigate("/login");
        }
      } catch (error) {
        toast.error(error?.message || "An unexpected error occurred");
      }
    } else {
      const token = Cookies.get("accessToken");
      try {
        const res = await axios.post(
          `${url}/additional`,
          {
            userType: userType,
            organization: org,
            organizationId: idNo,
            mobile: mobile,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        if (res.statusText !== "OK") throw new Error("Some thing went wrong");
        navigate("/?way=google");
      } catch (error) {
        throw new Error(error);
      }
    }
  };
  const handleOtp = async () => {
    const validatedEmail = validateEmail(formData.email);
    if (!validatedEmail) {
      setError("Please check email format");
      return;
    } else {
      setError(null);
    }

    try {
      const res = await axios.post(`${url}/send-otp`, { mail: formData.email });
      console.log(res);
      if (res.status === 200) {
        setSeconds(120);
        setResend(true);
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        setSeconds(null);
        setResend(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg   shadow-lg w-11/12 sm:w-2/3 xl:w-1/3">
        <h2 className="text-lg font-bold mb-4 text-AIDEOTYPO">
          Are you a Student or an Employee?
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="userType"
            >
              Select User Type:
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
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
          {userType && (
            <div className="mb-4">
              <label className="block mb-2">
                {userType === "employee" ? "Company Name" : "University Name"}
              </label>
              <input
                type="text"
                placeholder={
                  userType === "employee"
                    ? "Enter your company"
                    : "Enter University name"
                }
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
              />
            </div>
          )}
          {userType && (
            <div className="mb-4">
              <label className="block mb-2">
                {userType === "employee" ? "Employee Id" : "Student Id"}
              </label>
              <input
                type="text"
                placeholder={
                  userType === "employee"
                    ? "Enter employee Id"
                    : "Enter Student Id"
                }
                value={idNo}
                onChange={(e) => setIdNo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
              />
            </div>
          )}

          {userTypemodal ? (
            <div className="mb-4">
              <div className="relative over">
                <input
                  className="w-full px-28  py-2 border  border-gray-300 rounded-xl focus:outline-none "
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  className="absolute bg-AIDEOTYPO cursor-pointer  text-xs font-semibold w-24 py-2 px-1 h-full rounded-xl text-white  left-0"
                  size={14}
                  onClick={handleOtp}
                  type="button"
                  disabled={resend}
                  style={resend ? { backgroundColor: "gray" } : {}}
                >
                  {" "}
                  {resend ? `Resend in ${seconds}s` : "Send OTP"}
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block mb-2">Mobile No</label>
              <input
                type="text"
                placeholder={"Enter Mobile No"}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
              />
            </div>
          )}
          {error && <p className="text-red-600">{error}</p>}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purplebtn  duration-500 text-white w-24 py-2 font-semibold rounded-xl hover:opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRoleSelect;
