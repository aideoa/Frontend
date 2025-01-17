


import { useContext, useEffect, useState } from "react";

import { AdminAuthContext } from "../../context/adminAuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { handleLogin,adminUser } = useContext(AdminAuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const nav=useNavigate()
 useEffect(()=>{
  if(adminUser)
    nav("/admin/dashboard")
 },[adminUser])
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <div className="text-center">
          <img

            src="/AIDEOA LOGO 3.png"

           
            alt="AIDEOA Logo"
            className="mx-auto mb-2 w-12"
          />
          <h1 className="text-lg font-bold  mb-4">
            <span className="text-[#4B0082]">AIDEOA</span> DASHBOARD
          </h1>
          <h2 className="text-4xl font-bold mb-6">Welcome back!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Step 4: Bind form submission */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              required
              id="username"
              name="username" // Name attribute for handling input changes
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
              placeholder="username"
              value={formData.username} // Bind value to state
              onChange={handleChange} // Handle input changes
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              name="password" // Name attribute for handling input changes
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
              placeholder="Password"
              value={formData.password} // Bind value to state
              onChange={handleChange} // Handle input changes
            />
          </div>
        
          <button
            type="submit" // Submit button triggers the form submission
            className="w-full bg-[#4B0082] text-white font-medium py-2 px-4 rounded-lg hover:opacity-80 duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
