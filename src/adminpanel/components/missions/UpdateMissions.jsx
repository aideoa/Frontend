import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const url = import.meta.env.VITE_API_BACKEND_URL;
const UpdateMissions = ({ setActiveComponent,missionData }) => {
  const [formData, setFormData] = useState({

    title: missionData.mission,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${url}/api/mission/${missionData.id}`, formData);
      if (res.status === 200) {
        toast.success(res.data.message);
        setActiveComponent("Our Missions");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen mt-16">
      <h2 className="text-2xl font-semibold mb-4 text-[#4B0082]">
        Add New Link
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block text-gray-600">Mission title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Event Title"
            required
          />
        </div>

        

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-[#4B0082] text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-none "
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setActiveComponent("Our Missions")}
            className="text-[#4B0082] bg-white  px-4 py-2 border border-[#4B0082] rounded-md hover:opacity-75 focus:outline-none "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMissions;
