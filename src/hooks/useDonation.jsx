import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useDonation = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchData = async (searchTerm, currentPage=1, limit=8) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/donations`,
        {
          params: {
            searchTerm: searchTerm || "",
            page: currentPage,
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
  
  const fetchAllDonations = async (searchTerm = "") => {
    setLoading(true);
    try {
      // First, get the total count and pages
      const initialResponse = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/donations`,
        {
          params: {
            searchTerm: searchTerm || "",
            page: 1,
          },
        }
      );
      
      if (initialResponse.status !== 200) {
        throw new Error('Failed to fetch donations');
      }
      
      const initialData = initialResponse.data;
      const totalPages = initialData.pagination.totalPages;
      
      // If there's only one page, return the donations from the initial response
      if (totalPages <= 1) {
        setLoading(false);
        return initialData.donations || [];
      }
      
      // Otherwise, fetch all pages and combine the results
      const allDonations = [...initialData.donations];
      
      // Create an array of promises for fetching all remaining pages
      const pagePromises = [];
      for (let page = 2; page <= totalPages; page++) {
        pagePromises.push(
          axios.get(`${import.meta.env.VITE_API_BACKEND_URL}/api/donations`, {
            params: {
              searchTerm: searchTerm || "",
              page: page,
            },
          })
          .then(response => {
            if (response.status !== 200) throw new Error(`Failed to fetch page ${page}`);
            return response.data.donations || [];
          })
        );
      }
      
      // Wait for all page requests to complete
      const pagesResults = await Promise.all(pagePromises);
      
      // Combine all donations from all pages
      pagesResults.forEach(pageDonations => {
        allDonations.push(...pageDonations);
      });
      
      setLoading(false);
      return allDonations;
    } catch (error) {
      setLoading(false);
      console.error("Error fetching all donations:", error);
      return [];
    }
  };

  console.log(dataList);
  
  return {
    dataList,
    loading,
    fetchData,
    fetchAllDonations
  }
}

export default useDonation
