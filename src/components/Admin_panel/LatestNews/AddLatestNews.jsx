import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const url = import.meta.env.VITE_API_BACKEND_URL;
const AddLatestNews = ({ setActiveComponent }) => {
  const [formData, setFormData] = useState({
    title: "",
    images: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert the comma-separated image URLs into an array
      const imageArray = formData.images
        .split(",")
        .map((imageUrl) => imageUrl.trim());
  
      const postData = {
        title: formData.title,
        description: formData.description,
        images: imageArray, // Send as array
      };
  
      // Send the data to the backend
      const res = await axios.post(`${url}/api/latestnews/posts`, postData);
      
      if (res.status === 201) {
        toast.success("News added successfully");
        setActiveComponent("Latest News");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add news");
    }
  };
  

  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-[#4B0082]">
        Add New Latest News
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Title"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-600">Images</label>
            <input
              type="url"
              name="images"
              value={formData.images}
              onChange={handleChange}
              placeholder="Enter Images Url in , Seprated format"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Event Description..."
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
            onClick={() => setActiveComponent("Latest News")}
            className="text-[#4B0082] bg-white  px-4 py-2 border border-[#4B0082] rounded-md hover:opacity-75 focus:outline-none "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLatestNews;
