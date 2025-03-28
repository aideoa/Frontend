import axios from "axios";
import { useEffect, useState } from "react";

const useMembers = (userType) => {
  const [dataList, setDataList] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allMembers, setAllMembers] = useState([]);

  const [selectedMember, setSelectedMember] = useState(null);

  const fetchData = async (
    userType,
    currentPage,
    order,
    search,
    statusOrder
  ) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/members?userType=${
          userType || "All"
        }&page=${currentPage || 1}&limit=7&order=${order}&search=${search}`
      );

      let sortedUsers = res.data.users;

      // Apply status sorting if provided
      if (statusOrder) {
        sortedUsers = sortedUsers.sort((a, b) => {
          const statusPriority = { PENDING: 1, APPROVED: 2, REJECTED: 3 };
          return statusOrder === "asc"
            ? statusPriority[a.idCardStatus] - statusPriority[b.idCardStatus]
            : statusPriority[b.idCardStatus] - statusPriority[a.idCardStatus];
        });
      }

      setDataList({ ...res.data, users: sortedUsers });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const updateMemberStatus = async (memberId, status) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${
          import.meta.env.VITE_API_BACKEND_URL
        }/api/members/${memberId}/status`,
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

  const deleteMember = async (memberId) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/members/${memberId}`
      );

      if (res.status === 200) {
        alert("Member deleted successfully!");
        fetchData(userType, 1, "desc", "", "asc"); // Ensure it refreshes correctly
      }
    } catch (error) {
      console.error("Error deleting member:", error);
      alert("Failed to delete member. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(userType);
  }, [userType]);

  return {
    dataList,
    loading,
    fetchData,
    allMembers,
    updateMemberStatus,
    selectedMember,
    getMember,
    deleteMember,
  };
};

export default useMembers;
