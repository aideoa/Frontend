import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

import {
  FaDribbble,
  FaInstagram,
  FaRegEye,
  FaRegEyeSlash,
  FaTwitter,
  FaUniversity,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { MdAlternateEmail } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";

const url = `http://localhost:4000/api/auth`;
const Forgotpassword = () => {
  const nav=useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        otp:"",
      });
      const [resend, setResend] = useState(false);
  const [seconds, setSeconds] = useState();
      const [error, setError] = useState("");
      const [pass, setPass] = useState(false);
      const [ConPass, setConPass] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      useEffect(() => {
        const interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          } else if (seconds === 0) {
            setSeconds(null);
            setResend(false);
            clearInterval(interval);
          }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [seconds]);
      const handleSubmit = async(e) => {
        e.preventDefault();
        const {  email, password, confirmPassword } = formData;
    
     
    
        if (!email.includes("@") || !email.includes(".") || email.length < 5) {
          setError("Email format error");
          return;
        }
    
        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          return;
        }
    
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }
        try {
          const res = await axios.post(`${url}/forgetpassword`, formData);
         
          if (res.status === 200) {
            setFormData({
              email: "",
              password: "",
              confirmPassword: "",
              otp:"",
            })
            setResend(false);
            toast.success(res.data.message);
            nav("/login")
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
    
     
      };
      const handleOtp=async()=>{
        try {
          const res = await axios.post(`${url}/send-otp`, { mail: formData.email });
          console.log(res);
          if (res.status === 200) {
            setSeconds(120);
            setResend(true);
            toast.success(res.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
  return (
    <div className="min-h-dvh mainBackgroundImg pt-14 flex justify-center items-center">
    <div className="p-8 w-[50%] max-w-[353px] min-w-[300px]">
      <div className="flex justify-center">
        <img
          src={"/logoback.png"}
          className=" w-24 "
          alt="logo"
        />
      </div>
      <h1 className="font-poppins text-white text-[22px] font-semibold leading-[33px] text-center mb-3">
        All India Diploma Engineers And Officials Association
      </h1>
      <p className="text-center mb-3 text-white font-semibold">Forgot Password</p>
      <form onSubmit={handleSubmit}>
       
        <div className="relative">
          <input
            className="glass-effect bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <MdAlternateEmail
            className="absolute top-3 text-gray-300 right-3"
            size={14}
          />
        </div>
       
       
        <div className="relative">
          <input
            className="w-full glass-effect px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
            name="password"
            type={pass ? "text" : "password"}
            placeholder="New password"
            value={formData.password}
            onChange={handleChange}
          />
          {
            pass?<FaRegEye   onClick={() => setPass(!pass)}
            className="absolute top-3 text-gray-300 right-3 cursor-pointer"
            size={15}/>: <FaRegEyeSlash
            onClick={() => setPass(!pass)}
            className="absolute top-3 text-gray-300 right-3 cursor-pointer"
            size={15}
          />
          }
         
        </div>
        <div className="relative">
          <input
            className="w-full glass-effect px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
            name="confirmPassword"
            type={ConPass ? "text" : "password"}
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
           {
            ConPass?<FaRegEye   onClick={() => setConPass(!ConPass)}
            className="absolute top-3 text-gray-300 right-3 cursor-pointer"
            size={15}/>: <FaRegEyeSlash
            onClick={() => setConPass(!ConPass)}
            className="absolute top-3 text-gray-300 right-3 cursor-pointer"
            size={15}
          />
          }
        </div>
        
        <div className="relative over">
                <input
                     className="w-full text-sm glass-effect px-24 mb-3 py-2 text-white rounded-3xl focus:outline-none"
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                />
                <button
                  className="absolute bg-AIDEOTYPO  cursor-pointer  text-xs font-semibold w-24 h-10 px-1  rounded-xl text-white  left-0"
                 
                  onClick={handleOtp}
                  type="button"
                  disabled={resend}
                  style={resend ? { backgroundColor: "gray" } : {}}
                >
                  {" "}
                  {resend ? `Resend in ${seconds}s` : "Send OTP"}
                </button>
              </div>
        <span className="text-center text-sm text-red-500">{error}</span>

        <div className="mt-4">
          <button
            className="bg-purplebtn hover:bg-purple-700 text-white py-2 px-4 rounded-full w-full"
            type="submit"
          >
            Change Password
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          <span>
           
            <Link to="/login" className="underline hover:text-purple-600 ">
              sign in
            </Link>
          </span>
        </div>
      </form>

      <div className="flex gap-4 absolute text-white bottom-3 left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <FaInstagram className="cursor-pointer" />
        <FaDribbble className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaYoutube className="cursor-pointer" />
      </div>
    </div>
  </div>
  )
}

export default Forgotpassword