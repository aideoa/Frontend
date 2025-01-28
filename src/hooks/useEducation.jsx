import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { usePage } from '../context/PageContext';

const useEducation = (searchTerm) => {
  const [dataList, setDataList] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentPage } = usePage(); 

  const fetchData = async ( value) => {

    setLoading(true);
    try {
      let res;
      if(value==="1")
      {
        res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/education/files`,
          {
            params: {
              searchTerm: searchTerm || "",
              page: currentPage ||1 ,
            },
          }
        );
        if (res.status === 200) setDataList(res.data.files);
      }
      else{
        res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/education/videos`,
          {
            params: {
              searchTerm: searchTerm || "",
              page: currentPage ||1 ,
            },
          }
        );
        if (res.status === 200) setDataList(res.data.videos);
      }
      
      
      setPagination(res.data.pagination);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }finally {
      setLoading(false);
    }
  };
  const deleteFile = async (id,value) => {
    alert(value)
    try {
      let res;
      if(value==="1"){
        res = await axios.delete(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/education/files/${id}`
        );
      }
      else
      {
        res = await axios.delete(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/education/videos/${id}`
        );
      }
    
      if (res.status === 200) {
    fetchData(value)
      toast.success(res.data.message)
      }
    } catch (error) {
      
        toast.error(error?.response?.data?.message)
      throw new Error("Error deleting mission: " + error.message);
    }
  };

  return {dataList,loading,deleteFile,fetchData,pagination}
}

export default useEducation