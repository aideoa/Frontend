import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { usePage } from '../context/PageContext';

const useEmployeeNews = (searchTerm , page) => {
   const [news, setNews] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(false);
    const { currentPage } = usePage(); 

  const fetchData = async ( searchTerm) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/employeenews`,
        {
          params: {
            searchTerm: searchTerm || "",
            page: currentPage ||1 ,
          },
        }
      );
      if (res.status === 200) {
        setNews(res.data.newsList);
        setPagination(res.data.pagination);
      }
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }finally {
      setLoading(false);
    }
  };
  const deletenews = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/employeenews/${id}`
      );
      if (res.status === 200) {
        fetchData(searchTerm, currentPage);
      toast.success(res.data.message)
      }
    } catch (error) {
      
        toast.error(error?.response?.data?.message)
      throw new Error("Error deleting mission: " + error.message);
    }
  };
  useEffect(() => {
    fetchData(searchTerm, currentPage);
  }, [searchTerm, currentPage]);
  return { news, pagination, loading, deletenews };
}

export default useEmployeeNews