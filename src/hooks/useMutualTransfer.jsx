import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/authContext";

const useMutualTransfer = (designationType, searchTerm) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const {authToken} =useContext(AuthContext)
  const fetchData = async (designationType, searchTerm,searchCriteria) => {
    console.log(searchCriteria)
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/transferrequest`,
        {
          params: {
            designationType: designationType || "",
            searchTerm: searchTerm || "",
            searchCriteria:searchCriteria || ""
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
  const acceptPair=async(formData)=>{

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/transferpair`,
       formData,
       {
        headers:{
          Authorization:`Bearer ${authToken.accessToken}`
        }
       }
      );
      if (res.status === 200) toast.success(res.data.message)
        fetchData(designationType, searchTerm);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
      toast.error(error.response.data.error)
    }
  }
  useEffect(() => {
    fetchData(designationType, searchTerm);
  }, [designationType, searchTerm]);

  return { dataList, loading,acceptPair,fetchData };
};

export default useMutualTransfer;
