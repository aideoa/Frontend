import { eventupdatedata } from "../../../Connection/Api";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const url = `http://localhost:4000/api`;
const UpdateEvents = ({ setActiveComponent, eventsData }) => {
  const [formData, setFormData] = useState(eventsData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await eventupdatedata(formData);
      if (res.status === 200) {
        toast.success(res.data.message);
        setActiveComponent("Events");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-[#4B0082]">
        Update Event
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block text-gray-600">Title</label>
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Event Location"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Start Time</label>
            <input
              type="time"
              name="starttime"
              value={formData.starttime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">End Time</label>
            <input
              type="time"
              name="endtime"
              value={formData.endtime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600">Event days</label>
          <input
            type="number"
            name="days"
            value={Number(formData.days)}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter days"
          />
        </div>

        <div>
          <label className="block text-gray-600">Event Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Event Description"
            rows="4"
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
            onClick={() => setActiveComponent("Events")}
            className="text-[#4B0082] bg-white  px-4 py-2 border border-[#4B0082] rounded-md hover:opacity-75 focus:outline-none "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEvents;
