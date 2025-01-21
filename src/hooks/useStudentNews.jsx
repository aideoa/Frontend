import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { usePage } from '../context/PageContext';

const useStudentNews = (searchTerm, limit) => {
  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentPage } = usePage(); 
  const [allNews , setAllNews] = useState([]);

  const fetchData = async (searchTerm, page) => {
    setLoading(true);
    console.log(page);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/studentnews`,
        {
          params: {
            searchTerm: searchTerm || "",
            page: page || 1,
            limit:limit || 8,
          },
        }
      );
      if (res.status === 200) {
        setNews(res.data.news);
        setPagination(res.data.pagination);
        setAllNews(res.data.allNews);
      }
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchTerm, currentPage);
  }, [searchTerm, currentPage]);

 

  const deletenews = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/studentnews/${id}`
      );
      if (res.status === 200) {
        fetchData(searchTerm, currentPage);
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw new Error("Error deleting mission: " + error.message);
    }
  };

  return { news, pagination, loading, deletenews,allNews };
};


export default useStudentNews