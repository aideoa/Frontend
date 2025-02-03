import axios from 'axios';
import { useEffect, useState } from 'react';

const useTransaction = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchTerm = "", currentPage = 1, limit = 8) => {
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
      if (res.status === 200) setDataList(res.data.membershipFees);
      console.log(res.data.membershipFees)
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  return { dataList, loading, fetchData };
};

export default useTransaction;
