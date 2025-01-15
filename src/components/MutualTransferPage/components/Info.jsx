import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import SubmissionTable from '../Mutual_transfer/ShowTable'
const Info = () => {
  const navigate=useNavigate();
  const [show,setshow]=useState(false);
  const showtable=()=>{
    setshow(!show);
    console.log(!show);
  }
  const handleScroll = () => {
    const section = document.getElementById("form-section");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-11/12 my-20 m-auto">
      <div className="flex  text-center xl:text-left flex-col xl:flex-col justify-between gap-20">
        <div className="mx-auto">
          <div className="font-medium text-xl text-gray-800">
            <p>आल इंडिया डिप्लोमा इंजिनियर्स एंड ऑफिसियलस एसोसिएशन </p>
          </div>
          <div className="font-medium text-xl text-gray-800">
            <p>
              MUTUAL TRANSFER  FOR C.I.L Non-Executive & Executive (नि: शुल्क
              सेवा)
            </p>
          </div>
        </div>

  <div className="flex mx-auto flex-wrap gap-4 w-full xl:w-[90%] justify-center flex-col max-md:m-auto  md:flex-row md:gap-x-4">
          <div className="sm:w-80 w-full m-auto">
            <button
              onClick={handleScroll}
              className="font-medium text-gray-600 text-lg p-4 w-[95%] sm:w-80 border border-purple-500 rounded-full"
            >
              Start Applying
            </button>
          </div>
          <div onClick={()=>navigate("/mutualtransferviewportal")} className="relative w-full sm:w-80 m-auto ">
            <button  className="font-medium text-gray-600 text-lg p-4 w-[95%] sm:w-80 border border-purple-500 rounded-full">
              Submitted Data List
            </button>
            <FaChevronDown className="text-purple-600 absolute top-6 right-5" />
          </div>
          <div className="sm:w-80 w-full m-auto">
            <button
              onClick={showtable}
              className="font-medium text-gray-600 text-lg p-4 w-[95%] sm:w-80 border border-purple-500 rounded-full"
            >
              My Requests
            </button>
          </div>
        </div>
      </div>
      {
        show ? <SubmissionTable/>:""
      }
    </div>
  );
};
export default Info;
