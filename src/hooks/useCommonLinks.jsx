import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useCommonLinks = (searchTerm) => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async ( searchTerm) => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/links`,
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
    const deleteLinks = async (id) => {
  
      try {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/links/delete/${id}`
        );
        if (res.status === 200) {
      fetchData()
        toast.success("Link Deleted")
        }
      } catch (error) {
        
          toast.error(error?.response?.data?.error)
        throw new Error("Error deleting mission: " + error);
      }
    };
    useEffect(() => {
      fetchData( searchTerm);
    }, [ searchTerm]);
    return {dataList,loading,deleteLinks}
}

export default useCommonLinks