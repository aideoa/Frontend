import axios from "axios";
import { useEffect, useState } from "react";

const useMembers = (userType) => {
  const [dataList, setDataList] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allMembers , setAllMembers] = useState([]);

  const [selectedMember, setSelectedMember] = useState(null);

  const fetchData = async (userType, currentPage, order , search) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/members?userType=${userType || "All"}&page=${currentPage || 1}&limit=8&order=${order}&search=${search}`
      );
      console.log("res.data", res.data);

      const res2 = await axios.get(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/members?userType=${"All"}&page=${1}&limit=10000`
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

  const updateMemberStatus = async (memberId, status) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/members/${memberId}/status`,
        { idCardStatus: status }
      );
      
      if (res.status === 200) {
        fetchData(userType);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error updating member status:", error);
    }
  };

  const getMember = async (memberId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/members/${memberId}`
      );

      if (res.status === 200) {
        setSelectedMember(res.data);
      }
    } catch (error) {
      console.error("Error fetching member:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(userType);
  }, [userType]);
  return { dataList, loading, fetchData , allMembers , updateMemberStatus, selectedMember, getMember, };
};

export default useMembers;
