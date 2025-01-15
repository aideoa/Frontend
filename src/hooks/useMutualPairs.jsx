import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useMutualPairs = () => {
    const [data, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getPairs=async(searchTerm,limit,currentPage)=>{
        setLoading(true);
           try {
             const res = await axios.get(
               `${import.meta.env.VITE_API_BACKEND_URL}/api/transferpair`,{
              params:{
                searchTerm:searchTerm||"",
                limit:limit||null,
                page:currentPage
              }
               }
             );
             if (res.status === 200) setDataList(res.data)
             setLoading(false);
           } catch (error) {
             setLoading(false);
             console.log(error)
             toast.error(error.response.data.error)
           }
         }

    const approvePair=async(id)=>{
        setLoading(true);
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_API_BACKEND_URL}/api/transferpair/approve`,{id:id}
          );
          if (res.status === 200) toast.success(res.data.message)
            getPairs('pending')
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error)
          toast.error(error.response.data.error)
        }
    }
       useEffect(()=>{
           getPairs('pending')
       },[])
  return {data,loading,approvePair,getPairs}
}

export default useMutualPairs