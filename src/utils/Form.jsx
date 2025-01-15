import { useState } from "react";
import ReviewForm from "./ReviewForm";

const Form = () => {

  const [formData, setFormData] = useState({
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
  });

  const [formType, setFormType] = useState(false);
  const [open, setOpen] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };
  const handleReview=(e)=>{
e.preventDefault();
setOpen(true)
  }

  return (
    <div className="text-center relative m-auto w-[95%] lg:w-2/3">
      <div className="flex justify-center w-full mb-10">
        <div className="p-1 border-2 flex border-gray-200 max-w-full rounded-full">
          <button
            className={`w-72 h-10 rounded-full text-sm text-black font-medium ${
              formType && "membershipBtn text-white"
            }`}
            onClick={() => setFormType(true)}
          >
            Non-Executive
          </button>
          <button
            className={`w-72 h-10 rounded-full text-sm text-black font-medium ${
              !formType && "membershipBtn text-white"
            }`}
            onClick={() => setFormType(false)}
          >
            Executive
          </button>
        </div>
      </div>
      <form onSubmit={handleReview}>
        <div className="flex flex-col text-left mb-5 gap-y-5">
          <label className="font-poppins font-medium text-xl" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Write your name"
            className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
            value={formData.name}
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col xl:flex-row justify-between w-full gap-x-20 m-auto">
          <div className="w-full">
            <div className="flex flex-col mb-5 gap-y-5 text-left">
              <label className="font-poppins font-medium text-xl" htmlFor="aideoaid">
                AIDEOA ID No.*
              </label>
              <input
                id="aideoaid"
                name="aideoaid"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 w-full"
                placeholder="Sample@gmail.com"
                type="text"
                value={formData.aideoaid}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mb-5 text-left gap-y-5">
              <label className="font-poppins font-medium text-xl" htmlFor="currentsubsidiary">
                Current posted Subsidiary in C.I.L
              </label>
              <input
                id="currentsubsidiary"
                name="currentsubsidiary"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
                placeholder="Write here..."
                type="text"
                value={formData.currentsubsidiary}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-y-6 text-left mb-5">
              <label className="font-poppins font-medium text-xl" htmlFor="currentmine">
                Current Mines Name
              </label>
              <input
                id="currentmine"
                name="currentmine"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
                placeholder="Write here..."
                type="text"
                value={formData.currentmine}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-y-6 text-left mb-5">
              <label className="font-poppins font-medium text-xl" htmlFor="grade">
                GRADE
              </label>
              <input
                id="grade"
                name="grade"
                placeholder="Write here..."
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
                type="text"
                value={formData.grade}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label className="font-poppins font-medium text-xl" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                placeholder="Sample@gmail.com"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 w-full"
                type="text"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label className="font-poppins font-medium text-xl" htmlFor="currentarea">
                Current posted AREA
              </label>
              <input
                id="currentarea"
                name="currentarea"
                placeholder="Write here..."
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
                type="text"
                value={formData.currentarea}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label className="font-poppins font-medium text-xl" htmlFor="designation">
                Designation
              </label>
              <input
                id="designation"
                name="designation"
                placeholder="Write here..."
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
                type="text"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label className="font-poppins font-medium text-xl" htmlFor="transferarea">
                Preferred Transfer Area
              </label>
              <input
                id="transferarea"
                name="transferarea"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
                placeholder="Write here..."
                type="text"
                value={formData.transferarea}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left gap-y-5 mb-5">
          <label className="font-poppins font-medium text-xl" htmlFor="transfersubsidiary">
            Preferred Transfer Subsidiary
          </label>
          <input
            placeholder="Write here..."
            className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
            type="text"
            name="transfersubsidiary"
            id="transfersubsidiary"
            value={formData.transfersubsidiary}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col text-left gap-y-5 mb-16">
          <label className="font-poppins font-medium text-xl" htmlFor="transfermine">
            Preferred Transfer Mine
          </label>
          <input
            placeholder="Enter mine name"
            className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
            type="text"
            name="transfermine"
            id="transfermine"
            value={formData.transfermine}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            className="bg-gradient-to-r text-xl font-normal from-purple-800 via-purple-500 to-purple-400 p-2 rounded-full w-60 text-white"
            type="submit"
          >
            Review
          </button>
        </div>
      </form>

      {open && (
        <div className="fixed container top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ReviewForm formData={formData} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default Form;
