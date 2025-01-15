import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const url = import.meta.env.VITE_API_BACKEND_URL;
const AddTeams = ({ setActiveComponent }) => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    category: "",
    mobileNumber: "",
    email: "",
    selfAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/ourteam`, formData);
      if(res.status===200)
      {
        toast.success("Member added")
        setActiveComponent("Our Teams")
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-[#4B0082]">
        Add New Team Member
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Upload Image</label>
            <input
              type="text"
              name="image"
              accept="image/"
              onChange={handleChange}
              className="w-full px-4 py-1  bg-white rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter url"
             
            />
          </div>
        </div>
     

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Category</label>
            <select
              className="w-full px-4 py-2 my-2 bg-white rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Event Title"
              required
              onChange={handleChange}
              name="category"
              id="category"
            >
              <option value="Executive/Founder Member">
                Executive/Founder Member
              </option>
              <option value="Education Cell Member">
                Education Cell Member
              </option>
              <option value="IT Cell Member">IT Cell Member</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Email Address"
          />
        </div>

        <div>
          <label className="block text-gray-600">Self Address</label>
          <textarea
            name="selfAddress"
            value={formData.selfAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Event Address"
            rows="3"
            required
          ></textarea>
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
            onClick={() => setActiveComponent("Our Teams")}
            className="text-[#4B0082] bg-white  px-4 py-2 border border-[#4B0082] rounded-md hover:opacity-75 focus:outline-none "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTeams;
