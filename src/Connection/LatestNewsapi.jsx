import axios from "axios";
import { useEffect, useState } from "react";

const useLatestNews = () => {
  const [dataList, setDataList] = useState({ posts: [], pagination: {} });
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchTerm = "", currentPage = 1, limit = 7) => {
    setLoading(true);
    try {
      console.log(
        `Fetching data from: ${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/latestnews/posts`
      );
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/latestnews/posts`,
        {
          params: { searchTerm, page: currentPage, limit },
        }
      );

      if (res.status === 200) {
        setDataList(res.data);
      }
    } catch (error) {
      console.error("Error fetching latest news:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteNewsItem = async (newsId) => {
    if (!newsId) return;
    setLoading(true);
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/latestnews/posts/${newsId}`
      );
      if (res.status === 200) {
        alert("News item deleted successfully!");
        fetchData(); // Refresh list after deletion
      }
    } catch (error) {
      console.error("Error deleting news item:", error);
      alert("Failed to delete news item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { dataList, loading, fetchData, deleteNewsItem };
};

export default useLatestNews;
