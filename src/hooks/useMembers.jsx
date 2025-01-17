import axios from "axios";
import { useEffect, useState } from "react";

const useMembers = (userType) => {
  const [dataList, setDataList] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (userType, currentPage) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/members?userType=${userType}&page=${currentPage}&limit=4`
      );
      console.log("res.data", res.data);
      
      if (res.status === 200) setDataList(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  // useEffect(() => {
  //   fetchData(userType);
  // }, [userType]);
  return { dataList, loading, fetchData };
};

export default useMembers;
