import { validateEmail } from "../../functions/validate";
import { SignUpFunc } from "../../services/axios";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const url = `${import.meta.env.VITE_API_BACKEND_URL}/api/auth`;

const imageKitUrl = "https://upload.imagekit.io/api/v1/files/upload";
const authEndpoint = `${import.meta.env.VITE_API_BACKEND_URL}/image`;
const publicKey = "public_H+DpeRbktD9PNybblai4CYtHvGg=";

const UserRoleSelect = ({ userTypemodal, setUserTypeModal, formData }) => {
   const [userType, setUserType] = useState("");
   const navigate = useNavigate();
   const [org, setOrg] = useState("");
   const [address, setAddress] = useState("");
   // const [empid, setEmpid] = useState("");
   const [otp, setOtp] = useState("");
   const [userImage, setUserImage] = useState(null);
   const [idCard, setIdCard] = useState(null);
   const [mobile, setMobile] = useState("");
   const [resend, setResend] = useState(false);
   const [seconds, setSeconds] = useState(0);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [subsidiary, setSubsidiary] = useState("");
   const [idOption, setIdOption] = useState("");


   const uploadToImageKit = async (file) => {
      try {
         const { data } = await axios.get(authEndpoint);
         if (!data?.token || !data?.signature || !data?.expire) {
            throw new Error("Invalid authentication data from server.");
         }

         const formData = new FormData();
         formData.append("file", file);
         formData.append("fileName", file.name);
         formData.append("token", data.token);
         formData.append("expire", data.expire);
         formData.append("signature", data.signature);
         formData.append("publicKey", publicKey);

         const response = await axios.post(imageKitUrl, formData);
         return response.data.url;
      } catch (error) {
         console.error("Image upload failed:", error);
         throw new Error("Failed to upload image. Please try again.");
      }
   };

   const subsidiaries = [
      {  name: "Bharat Coking Coal Limited (BCCL)" },
      {  name: "Central Coalfields Limited (CCL)" },
      {  name: "Central Mine Planning and Design Institute (CMPDI)" },
      { name: "Eastern Coalfields Limited (ECL)" },
      {  name: "Mahanadi Coalfields Limited (MCL)" },
      {  name: "Northern Coalfields Limited (NCL)" },
      {  name: "South Eastern Coalfields Limited (SECL)" },
      {  name: "Western Coalfields Limited (WCL)" },
      {  name: "Others" },
    ];

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setIsLoading(true);

      try {
         if (!userType) throw new Error("Select type of user");
         if (!org) throw new Error(userType === "student" ? "Select university name" : "Select company name");
         if (!address) throw new Error(userType === "student" ? "Enter University Address" : "Enter Company address");
         // if(!empid) throw new Error("Enter Employee ID");
         if (!userImage) throw new Error("Upload user image");
         if (!idCard) throw new Error("Upload ID card");

         // Upload images to ImageKit
         const uploadedUserImage = await uploadToImageKit(userImage);
         const uploadedIdCard = await uploadToImageKit(idCard);

         if (userTypemodal) {
            const fullFormData = {
               ...formData,
               org,
               address,
               // empid,
               otp,
               userType,
               userImage: uploadedUserImage,
               idCard: uploadedIdCard,
            };
            console.log(fullFormData);
            const data = await SignUpFunc(fullFormData);
            if (data.status === 200) {
               toast.success(data?.data?.message);
               // navigate(userType === "student" ? "/student-form" : "/employee-form");
               navigate("/login");

            }
         } else {
            const token = Cookies.get("accessToken");
            if (!token) throw new Error("Authentication token missing");

            const res = await axios.post(
               `${url}/additional`,
               {
                  userType,
                  organization: org,
                  address,
                  // empid,
                  userImage: uploadedUserImage,
                  idCard: uploadedIdCard,
                  mobile,
               },
               {
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               }
            );

            if (res.status === 200) {
               // navigate(userType === "student" ? "/student-form" : "/employee-form");
               navigate("/login");
            }
         }
      } catch (error) {
         setError(error.message || "An unexpected error occurred");
         toast.error(error.message || "An unexpected error occurred");
      } finally {
         setIsLoading(false);
      }
   };

   const handleFileChange = (setter) => (e) => {
      const file = e.target.files[0];
      if (file) {
         if (file.size > 5 * 1024 * 1024) { // 5 MB limit (example)
            toast.error("File size exceeds 5MB.");
            return;
         }
         if (!["image/jpeg", "image/png"].includes(file.type)) {
            toast.error("Only JPEG or PNG files are allowed.");
            return;
         }
         setter(file);
      }
   };

   const handleOtp = async () => {
      if (!validateEmail(formData?.email)) {
         setError("Please check email format");
         return;
      }

      try {
         setIsLoading(true);
         const res = await axios.post(`${url}/send-otp`, { mail: formData.email });

         if (res.status === 200) {
            setSeconds(120);
            setResend(true);
            toast.success(res.data.message);
         }
      } catch (error) {
         toast.error(error?.response?.data?.message || "Failed to send OTP");
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      let interval;
      if (seconds > 0) {
         interval = setInterval(() => {
            setSeconds((prev) => {
               if (prev <= 1) {
                  setResend(false);
                  return 0;
               }
               return prev - 1;
            });
         }, 1000);
      }

      return () => clearInterval(interval);
   }, [seconds]);

   useEffect(()=>{
      if(subsidiary === 'Others' || userType === 'student'){
         setOrg('');
      }else{
         setOrg(subsidiary);
      }
      
    },[subsidiary , userType]);

    const handleClose = () => {
      setUserTypeModal(false);
    };

   return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
         <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 xl:w-1/3 max-h-[90vh] overflow-y-auto scrollbar-hide">
         {/* Add close button */}
         <div className="relative flex justify-end sticky top-0 z-10">
  <button
    onClick={handleClose}
    className="relative text-AIDEOTYPO hover:text-purple-800"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>

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

               {userType === "student" && (
                  <div className="mb-4">
                     <label className="block mb-2">University Name</label>
                     <input
                        type="text"
                        placeholder="Enter your University name"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none"
                     />
                  </div>
               )}

               {userType === "employee" && (
                  <div className="mb-4">
                     <label className="block mb-2">Select your Company</label>
                     <select
                        value={subsidiary}
                        onChange={(e) => setSubsidiary(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl mb-4"
                     >
                        <option value="">-- Select Subsidiary --</option>
                        {subsidiaries.map((sub , index) => (
                           <option key={index} value={sub.name}>
                              {sub.name}
                           </option>
                        ))}
                     </select>

                     {subsidiary === "Others" && (
                        <div className="mt-4">
                           <label className="block mb-2">Enter your Company</label>
                           <input
                              type="text"
                              placeholder="Enter your company"
                              value={org}
                              onChange={(e) => setOrg(e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none"
                           />
                        </div>
                     )}
                  </div>
               )}

               {userType && (
                  <div className="mb-4">
                     <label className="block mb-2">
                        Enter your address
                     </label>
                     <input
                        type="text"
                        placeholder="Enter your Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "

                     />
                  </div>
               )}

{userType && (
  <div 
    className={`mb-2 p-4 rounded-xl 
        
        bg-purple-500 text-white
    }`}
  >
    <div className="mb-4">
      <label className="block mb-2">
        {userType === "employee" ? "Employee ID Verification" : "Upload Student ID Card"}
      </label>

      {userType === "employee" ? (
        <div>
          <label className="block mb-2">Choose an option:</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none text-black bg-white mb-2"
            onChange={(e) => setIdOption(e.target.value)}
          >
            <option value="">Select</option>
            <option value="upload">Upload ID Card</option>
            <option value="text">Enter Employee ID Number</option>
          </select>

          {idOption === "upload" && (
            <input
              type="file"
              onChange={handleFileChange(setIdCard)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none text-black bg-white"
            />
          )}

          {idOption === "text" && (
            <input
              type="text"
              onChange={(e) => setIdCard(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none text-black bg-white"
              placeholder="Enter Employee ID Number"
            />
          )}
        </div>
      ) : (
        <input
          type="file"
          onChange={handleFileChange(setIdCard)}
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none text-black bg-white"
        />
      )}
    </div>
  </div>
)}





               {userType && (
                  <div className="mb-4">
                     <label className="block mb-2">{userType === "employee" ? "Upload Employee Photo" : "Upload Student Photo"}</label>
                     <input type="file" onChange={handleFileChange(setUserImage)} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none" />
                  </div>
               )}

               {userTypemodal ? (
                  <div className="mb-4">
                     <div className="relative over">
                        <input
                           className="w-full px-28 py-2 border border-gray-300 rounded-xl focus:outline-none "
                           name="otp"
                           type="text"
                           placeholder="Enter OTP"
                           value={otp}
                           onChange={(e) => setOtp(e.target.value)}
                        />
                        <button
                           className="absolute bg-AIDEOTYPO cursor-pointer text-xs font-semibold w-24 py-2 px-1 h-full rounded-xl text-white left-0"
                           size={14}
                           onClick={handleOtp}
                           type="button"
                           disabled={resend}
                           style={resend ? { backgroundColor: "gray" } : {}}
                        >
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
                     disabled={isLoading}
                     className="bg-purplebtn duration-500 text-white w-24 py-2 font-semibold rounded-xl hover:opacity-75"
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
