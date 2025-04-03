import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../context/adminAuthContext";
import { useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ThreeCircles } from "react-loader-spinner";

const AdminLogin = () => {
  const { handleLogin, adminUser } = useContext(AdminAuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (adminUser) nav("/admin/dashboard");
  }, [adminUser]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoading(true);
    try {
      await handleLogin(formData);
    } finally {
      setIsLoading(false);
      setLoading(false);
    }

  };
  

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 opacity-95"></div>
      {loading ? (
        <ThreeCircles height={100} width={100} color="#ffffff"/>
      ) : (
      <div className="relative z-10 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src="/AIDEOA LOGO 3.png"
              alt="AIDEOA Logo"
              className="h-14 sm:h-16 w-14 sm:w-16 object-contain"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            <span className="text-[#4B0082]">AIDEOA</span> ADMIN PORTAL
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            Secure access to your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 sm:space-y-5">
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-[#4B0082]"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1 sm:space-y-2 relative">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-[#4B0082]"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 text-sm"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-lg text-white transition-all ${
                isLoading
                  ? "bg-[#4B0082]/80 cursor-not-allowed"
                  : "bg-[#4B0082] hover:bg-[#3a0066] shadow-lg"
              }`}
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin mr-2"></i>
              ) : (
                <i className="fas fa-sign-in-alt mr-2"></i>
              )}{" "}
              Log In
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Restricted access. Unauthorized entry prohibited.</p>
          <p className="text-[0.7rem] opacity-80">
            © {new Date().getFullYear()} AIDEOA Admin Portal
          </p>
        </div>
      </div>

            )}</div>
  );
};

export default AdminLogin;
