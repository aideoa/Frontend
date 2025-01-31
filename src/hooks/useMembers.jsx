import axios from "axios";
import { useEffect, useState } from "react";

const useMembers = (userType) => {
  const [dataList, setDataList] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allMembers , setAllMembers] = useState([]);

  const fetchData = async (userType, currentPage, order , search) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/members?userType=${userType || "All"}&page=${currentPage || 1}&limit=4&order=${order}&search=${search}`
      );
      console.log("res.data", res.data);

      const res2 = await axios.get(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/members?userType=${"All"}&page=${1}&limit=1000`
      );
      console.log("res2.data", res2.data);
      setAllMembers(res2.data);

      if (res.status === 200) setDataList(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData(userType);
  }, [userType]);
  return { dataList, loading, fetchData , allMembers };
};

export default useMembers;
