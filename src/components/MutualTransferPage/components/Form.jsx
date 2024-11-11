import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import { coalIndiaSubsidiaries } from '../../../data/subsidiary';

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
    designationType: "executive",
  });
  const [open, setOpen] = useState(false);
  const bodyStyle = document.body.style;

  useEffect(() => {
    bodyStyle.overflowY = open ? "hidden" : "auto";
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleReview = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div id="form-section" className="text-center m-auto w-[95%] lg:w-2/3">
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
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col text-left mb-5 gap-y-5">
          <label className="font-poppins font-medium text-xl" htmlFor="your-designation">
            Are you executive or non-executive?
          </label>
          <div className="flex items-center gap-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="designationType"
                value="executive"
                className="form-radio h-5 w-5 text-purple-600"
                checked={formData.designationType === "executive"}
                onChange={handleChange}
              />
              <span className="ml-2 text-md font-medium">Executive</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="designationType"
                value="non-executive"
                className="form-radio h-5 w-5 text-purple-600"
                checked={formData.designationType === "non-executive"}
                onChange={handleChange}
              />
              <span className="ml-2 text-md font-medium">Non-Executive</span>
            </label>
          </div>
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
                placeholder="Enter AIDEOA ID"
                type="text"
                required
                value={formData.aideoaid}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mb-5 text-left gap-y-5">
              <label className="font-poppins font-medium text-xl" htmlFor="currentsubsidiary">
                Current posted Subsidiary in C.I.L
              </label>
              <select
                id="currentsubsidiary"
                name="currentsubsidiary"
                className="p-4 overflow-y-scroll max-sm:w-[300px] rounded-3xl bg-gray-100 border border-gray-300 w-full"
                value={formData.currentsubsidiary}
                onChange={handleChange}
              >
                <option value="">Select Current Subsidiary</option>
                {coalIndiaSubsidiaries.map((data, idx) => (
                  <option key={idx} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
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
                required
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
                required
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
                placeholder="Enter mobile number"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 w-full"
                type="text"
                required
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
                required
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
                required
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
                required
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
          <select
            id="transfersubsidiary"
            name="transfersubsidiary"
            className="p-4 overflow-y-scroll max-sm:w-[300px] rounded-3xl bg-gray-100 border border-gray-300 w-full"
            value={formData.transfersubsidiary}
            onChange={handleChange}
          >
            <option value="">Select Transfer Subsidiary</option>
            {coalIndiaSubsidiaries.map((data, idx) => (
              <option key={idx} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col text-left gap-y-5 mb-16">
          <label className="font-poppins font-medium text-xl" htmlFor="transfermine">
            Preferred Transfer Mine
          </label>
          <input
            placeholder="Enter mine name"
            className="rounded-3xl bg-gray-100 border border-gray-300 p-4"
            type="text"
            id="transfermine"
            name="transfermine"
            required
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
        <div className="fixed container w-[90%] top-[50%] z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ReviewForm formData={formData} setFormData={setFormData} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default Form;
