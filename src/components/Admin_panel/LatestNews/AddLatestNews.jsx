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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateImageUrls = (urls) => {
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urls.every((url) => urlPattern.test(url));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate description length
    if (formData.description.length < 30) {
      toast.error("Description must be at least 30 characters long");
      return;
    }

    // Process image URLs
    const imageArray = formData.images
      .split(",")
      .map((imageUrl) => imageUrl.trim())
      .filter((url) => url.length > 0);

    // Validate image URLs
    if (imageArray.length === 0) {
      toast.error("Please enter at least one valid image URL");
      return;
    }

    if (!validateImageUrls(imageArray)) {
      toast.error("Please enter valid image URLs (http:// or https://)");
      return;
    }

    setIsSubmitting(true);
    try {
      const postData = {
        title: formData.title,
        description: formData.description,
        images: imageArray,
      };

      const res = await axios.post(`${url}/api/latestnews/posts`, postData);

      if (res.status === 201) {
        toast.success("News article added successfully!");
        setActiveComponent("Latest News");
      }
    } catch (error) {
      console.error("Error adding news:", error);
      toast.error("Failed to add news. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">
          Create New News Article
        </h2>
        <p className="text-gray-600 mb-6">
          Share the latest updates with your audience. Fill in the details below
          to create an engaging news article.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                News Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a compelling headline"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Image URLs *
              </label>
              <input
                type="text"
                name="images"
                value={formData.images}
                onChange={handleChange}
                placeholder="Enter image URLs, separated by commas (e.g., https://example.com/image1.jpg, https://example.com/image2.jpg)"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Provide high-quality images in JPG, PNG, or WebP format
              </p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                News Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Write a detailed description of the news (minimum 30 characters)..."
                rows="4"
                minLength="30"
                required
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">
                {formData.description.length}/30 characters minimum
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-lg font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Publishing..." : "Publish News"}
            </button>
            <button
              type="button"
              onClick={() => setActiveComponent("Latest News")}
              className="px-6 py-3 rounded-lg font-medium text-purple-700 bg-white border-2 border-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLatestNews;
