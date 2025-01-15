import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useEducation = (searchTerm) => {
    const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

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
            },
          }
        );
      }
      else{
        res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/education/videos`,
          {
            params: {
              searchTerm: searchTerm || "",
            },
          }
        );
      }
      
      if (res.status === 200) setDataList(res.data);
      setLoading(false);
      return res.data
    } catch (error) {
      setLoading(false);
      throw new Error(error);
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

  return {dataList,loading,deleteFile,fetchData}
}

export default useEducation