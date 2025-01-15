import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import for jwtDecode
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AdminAuthContext = createContext();

const AdminAuthContextProvider = ({ children }) => {
  const db_url = import.meta.env.VITE_API_BACKEND_URL;
  const [adminAuthToken, setAuthToken] = useState(() => {
    const token = localStorage.getItem("adminAuthToken");
    return token ? JSON.parse(token) : null;
  });
  const [adminUser, setAdminUser] = useState(() => {
    const token = localStorage.getItem("adminAuthToken");
    return token ? jwtDecode(token) : null;
  });

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const resp = await axios.post(`${db_url}/api/admin/login`, formData);
      const token = resp.data;

      if (resp.status === 200 && token) {
        setAuthToken(token);
        setAdminUser(jwtDecode(token));
        localStorage.setItem("adminAuthToken", JSON.stringify(token));
        toast.success("LoggedIn");
        navigate("/admin/dashboard");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  function isTokenExpired() {
    const decodedToken = jwtDecode(adminAuthToken);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      handleLogout();
    }
  }

  const getUser = async () => {
    try {
      const user = await axios.get(`${db_url}/api/admin/getuser`, {
        headers: {
          Authorization: `Bearer ${adminAuthToken}`,
        },
      });
      if (user.status !== 200) handleLogout();
    } catch (error) {
      console.error("Failed to fetch user:", error);
      handleLogout();
    }
  };

  const handleLogout = () => {
    setAdminUser(null);
    setAuthToken(null);
    localStorage.removeItem("adminAuthToken");
    toast.success("Logged out successfully!");
    navigate("/admin/login");
  };

  useEffect(() => {
    if (adminAuthToken) {
      isTokenExpired();
    }
  }, [adminAuthToken]);

  return (
    <AdminAuthContext.Provider
      value={{ handleLogin, adminUser, adminAuthToken, handleLogout }} // Include handleLogout here
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthContextProvider;
