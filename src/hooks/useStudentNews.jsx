import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useStudentNews = (searchTerm) => {
    const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async ( searchTerm) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/studentnews`,
        {
          params: {
            searchTerm: searchTerm || "",
          },
        }
      );
      if (res.status === 200) setDataList(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };
  const deletenews = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/studentnews/${id}`
      );
      if (res.status === 200) {
    fetchData()
      toast.success(res.data.message)
      }
    } catch (error) {
      
        toast.error(error?.response?.data?.message)
      throw new Error("Error deleting mission: " + error.message);
    }
  };
  useEffect(() => {
    fetchData( searchTerm);
  }, [ searchTerm]);
  return {dataList,loading,deletenews}
}

export default useStudentNews