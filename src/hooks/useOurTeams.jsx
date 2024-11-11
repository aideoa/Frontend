import axios from 'axios';
import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useOurTeams = (searchTerm) => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async (category) => {
      setLoading(true);
     
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/ourteam`,
          {
            params: {
              category: category || "",
            },
          }
        );
        if (res.status === 200) setDataList(res.data);
        setLoading(false);
        return res.data
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    };
    const deleteMember = async (id) => {
      try {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/mission/${id}`
        );
        if (res.status === 200) {
      fetchData()
        toast.success("Mission Deleted")
        }
      } catch (error) {
        
          toast.error(error?.response?.data?.message)
        throw new Error("Error deleting mission: " + error.message);
      }
    };
    useEffect(() => {
      fetchData( searchTerm);
    }, [ searchTerm]);
    return {dataList,loading,deleteMember,fetchData}
}

export default useOurTeams