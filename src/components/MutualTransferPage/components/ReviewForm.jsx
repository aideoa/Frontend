import { AuthContext } from "../../../context/authContext"
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ReviewForm = ({ formData, setOpen, setFormData }) => {
  const {authToken}=React.useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/transferrequest`,
        formData,{
          headers:{
            Authorization:`Bearer ${authToken.accessToken}`
          }
        }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        setFormData({
          name: "",
          mobile: "",
          aideoaid: "",
          currentsubsidiary: "",
          currentarea: "",
          currentmine: "",
          designation: "",
          grade: "",
          transferarea: "",
          transfersubsidiary: "",
          transfermine: "",
          designationType: "executive",
        });
        setOpen(false);
      }
    } catch (error) {

    }
  };
  return (
    <div className=" bg-white border  border-1 dropshadowbox rounded-2xl w-full my-20 customScrollbar  overflow-y-scroll  scroll-smooth  h-[80vh] ">
      <form
        onSubmit={handleSubmit}
        className=" overflow-x-hidden gap-5 flex flex-col py-5 justify-center items-center"
      >
        <AiOutlineCloseCircle
          onClick={() => setOpen(false)}
          size={35}
          className="absolute cursor-pointer top-[40px]"
        />
        <h1 className="font-semibold text-3xl">Review your data</h1>
        <div className="flex flex-col px-5 gap-5 w-full">
          <div className="flex text-xl">
            <label className="mb-2 font-semibold">Your Name :</label>
            <p className="ml-2">{formData?.name}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">Mobile Number :</label>
            <p className="ml-2">{formData?.mobile}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">AIDEOA ID No :</label>
            <p className="ml-2">{formData?.aideoaid}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">
              Current posted Subsidiary in C.I.L :
            </label>
            <p className="ml-2">{formData?.currentsubsidiary}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">Current posted AREA :</label>
            <p className="ml-2">{formData?.currentarea}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">Current Mines Name :</label>
            <p className="ml-2">{formData?.currentmine}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">Designation :</label>
            <p className="ml-2">{formData?.designation}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">GRADE :</label>
            <p className="ml-2">{formData?.grade}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">
              Preferred Transfer Area :
            </label>
            <p className="ml-2">{formData?.transferarea}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">
              Preferred Transfer Subsidiary :
            </label>
            <p className="ml-2">{formData?.transfersubsidiary}</p>
          </div>

          <div className="flex text-xl">
            <label className="mb-2 font-semibold">
              Preferred Transfer Mine :
            </label>
            <p className="ml-2">{formData?.transfermine}</p>
          </div>
        </div>
        <div>
          <button
            className="bg-gradient-to-r text-xl font-normal from-purple-800 via-purple-500 to-purple-400 p-2 rounded-full w-60 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
