import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useDonation = () => {
    const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchTerm, currentPage=1,limit=8) => {

    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/donations`,
        {
          params: {
            searchTerm:searchTerm||"",
            page:currentPage,
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
  console.log(dataList)

  return {dataList,loading,fetchData}
}

export default useDonation