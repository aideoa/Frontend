import axios from 'axios';
import  {  useState } from 'react'
import toast from 'react-hot-toast';

const useQuery = () => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async (searchTerm,currentPage,limit) => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/query`,
          {
            params:{
              searchTerm:searchTerm,
              page:currentPage,
              limit
            }
          }
        );
        if (res.status === 200) setDataList(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    };
    const deleteQuery = async (id) => {
      try {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/query/${id}`
        );
        if (res.status === 200) {
      fetchData("")
        toast.success(res.data.message)
        }
      } catch (error) {
        
          toast.error(error?.response?.data?.message)
        throw new Error("Error deleting Query: " + error.message);
      }
    };
  
    return {dataList,loading,deleteQuery,fetchData}
  }

export default useQuery