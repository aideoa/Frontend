import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const url = import.meta.env.VITE_API_BACKEND_URL;

const AddEducation = ({ setActiveComponent }) => {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    type: "pdf", // Added file type
  });

  const [formDataVideo, setFormDataVideo] = useState({
    title: "",

    duration: "", // Added video duration
  });

  const [activeTab, setActiveTab] = useState("files"); // Tab state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeVideo = (e) => {
    const { name, value } = e.target;
    setFormDataVideo({ ...formDataVideo, [name]: value });
  };

  const validateLink = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateLink(formData.link)) {
      toast.error("Please enter a valid URL");
      return;
    }

    try {
      const res = await axios.post(`${url}/api/education/files`, formData);
      if (res.status === 200) {
        toast.success(res.data.message);
        setActiveComponent("Education");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add resource");
    }
  };

  const handleSubmitVideo = async (e) => {
    e.preventDefault();

    if (
      !formDataVideo.link.includes("youtube.com") &&
      !formDataVideo.link.includes("youtu.be")
    ) {
      toast.error("Please enter a valid YouTube URL");
      return;
    }

    try {
      const res = await axios.post(
        `${url}
import useEducation from "../hooks/useEducation";`,
        formDataVideo
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        setActiveComponent("Education");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add video");
    }
  };

  return (
    <div className="rounded-xl p-6 bg-white shadow-lg min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#4B0082]">
          Add Educational Content
        </h1>
        <button
          onClick={() => setActiveComponent("Education")}
          className="flex items-center gap-2 text-[#4B0082] hover:text-[#3a0066] transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          Back to Education
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "files"
              ? "text-[#4B0082] border-b-2 border-[#4B0082]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("files")}
        >
          <i className="fas fa-file-alt mr-2"></i>
          Add Files
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "videos"
              ? "text-[#4B0082] border-b-2 border-[#4B0082]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          <i className="fas fa-video mr-2"></i>
          Add Videos
        </button>
      </div>

      {/* Files Form */}
      {activeTab === "files" && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#4B0082]">
            <i className="fas fa-file-upload mr-2"></i>
            Upload Educational Resource
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Resource Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Advanced React Patterns"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B0082] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  File Type *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B0082] focus:border-transparent"
                  required
                >
                  <option value="pdf">PDF Document</option>
                  <option value="doc">Word Document</option>
                  <option value="ppt">PowerPoint</option>
                  <option value="zip">Zip Archive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                File URL *
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://example.com/document.pdf"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B0082] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-lg transition-colors"
                  onClick={() =>
                    toast("Ensure the file is accessible to all users")
                  }
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Supported: PDF, DOC, PPT, ZIP (Max 50MB)
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveComponent("Education")}
                className="px-6 py-3 border border-[#4B0082] text-[#4B0082] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#4B0082] text-white rounded-lg hover:bg-[#3a0066] transition-colors flex items-center gap-2"
              >
                <i className="fas fa-save"></i>
                Save Resource
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Videos Form */}
      {activeTab === "videos" && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#4B0082]">
            <i className="fas fa-video mr-2"></i>
            Add YouTube Video
          </h2>
          <form onSubmit={handleSubmitVideo} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Video Title *
              </label>
              <input
                type="text"
                name="title"
                value={formDataVideo.title}
                onChange={handleChangeVideo}
                placeholder="e.g., React Hooks Tutorial"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B0082] focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  YouTube URL *
                </label>
                <input
                  type="url"
                  name="link"
                  value={formDataVideo.link}
                  onChange={handleChangeVideo}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B0082] focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  Must be a valid YouTube link
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formDataVideo.duration}
                  onChange={handleChangeVideo}
                  placeholder="e.g., 45"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B0082] focus:border-transparent"
                  min="1"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveComponent("Education")}
                className="px-6 py-3 border border-[#4B0082] text-[#4B0082] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#4B0082] text-white rounded-lg hover:bg-[#3a0066] transition-colors flex items-center gap-2"
              >
                <i className="fas fa-save"></i>
                Add Video
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddEducation;
