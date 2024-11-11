import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwtDecode(localStorage.getItem("authToken"))
      : null
  );

  const [loading, setLoading] = useState(true);
  const refreshAccessToken = async () => {
    console.log("Updating token");
    const refreshToken = authToken.refreshToken;
    console.log("pre", refreshToken);
    try {
      const resp = await axios.post(
        "http://localhost:4000/api/auth/refresh-token",
        { refreshToken }
      );
      const { accessToken } = resp.data;
    
      if (resp.status === 200) {
        handleLogin({ accessToken, refreshToken });
      } else {
        handleLogout();
      }
    } catch (error) {
      console.log(error);
      handleLogout();
    }

    if (loading) {
      setLoading(false);
    }
  };
  const handleLogin = (token) => {
    setAuthToken(token);
    setUser(jwtDecode(token.accessToken));
    localStorage.setItem("authToken", JSON.stringify(token));
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const way = urlParams.get("way");

    if (way === "google") {
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");
      handleLogin({ accessToken, refreshToken });
      console.log(accessToken);
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      navigate(
        {
          pathname: location.pathname,
        },
        { replace: true }
      );
    }
  }, []);
  const handleLogout = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem("authToken");
  };

  useEffect(() => {
    if (authToken) {
      refreshAccessToken();
    }
  }, []);

  
  useEffect(() => {
    const time = 1000 * 60 * 1;
    if (authToken) {
      const interval = setInterval(() => {
        refreshAccessToken();
      }, time);
      return () => clearInterval(interval);
    }
  }, [authToken, loading]);


  return (
    <AuthContext.Provider
      value={{
        authToken,
        handleLogin,
        handleLogout,
        refreshAccessToken,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContextProvider;
