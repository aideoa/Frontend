import axios from 'axios';
import { useEffect, useState } from 'react';

const useTransaction = (currentPage ) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination , setPagination] = useState({});

  const fetchData = async (searchTerm = "",  limit = 8) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/transactions`,
        {
          params: {
            searchTerm,
            page: currentPage,
            limit,
          },
        }
      );
      if (res.status === 200) {
        setDataList(res.data.membershipFees);
      setPagination(res.data.pagination)
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchData()
  },[currentPage])

  return { dataList, loading, fetchData,pagination };
};

export default useTransaction;
