import React, { useContext, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegEye,
  FaRegEyeSlash,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignInButton from "./Cards/SignInwithGoogle";
import { loginfunc } from "../services/axios";
import { AuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import useCommonLinks from "../hooks/useCommonLinks";
import { TbBrandX } from "react-icons/tb";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate=useNavigate()
  const [error, setError] = useState("");
  const [pass, setPass] = useState(false);
  const {handleLogin}=useContext(AuthContext);
  const {dataList}=useCommonLinks()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email } = formData;
 
    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      setError("Email format error");
      return;
    }
    try {
      const data = await loginfunc(formData);

      if(data?.error)
      {
        setError(data.error)
        throw new Error(data?.error)
      }
      handleLogin(data?.data);
      if(data.status===200)
      { 
        toast.success("logIn Successfull")
        navigate("/")}
    } catch (error) {
      console.log(`error in Login.jsx :- ${error}`);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mainBackgroundImg pt-14 flex justify-center items-center">
       {loading ? (
        <BallTriangle height={80} width={80} color="#ffffff" />
      ) : (
      <div className=" p-8 w-[50%] max-w-[353px] min-w-[300px]">
        <div className="flex justify-center  ">
          <img src={"/logoback.png"} className=" w-24 " alt="logo" />
        </div>
        <h1 className="font-poppins text-white text-[22px] font-semibold leading-[33px] text-center mb-3">
          {" "}
          All India Diploma Engineers And Officials Association
        </h1>
        <p className="text-center mb-3 text-white font-semibold ">Sign In</p>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className=" glass-effect  bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <FaUser
              className="absolute top-3 text-gray-300 right-3"
              size={13}
            />
          </div>
          <div className="relative">
            <input
              className="w-full glass-effect px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
              name="password"
              type={pass ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {pass ? (
              <FaRegEye
                onClick={() => setPass(!pass)}
                className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                size={15}
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setPass(!pass)}
                className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                size={15}
              />
            )}
          </div>
          <div className="">
            <p
              className="text-red-400 text-sm font-semibold"
           
            >
            {error}
            </p>
          </div>
          <div className="text-center">
            <Link
              className="text-white hover:text-purple-600 text-sm font-semibold"
              to="/forgotpassword"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-4">
            <button
              className="bg-purplebtn hover:bg-purple-700 text-white  py-2 px-4 rounded-full w-full "
              type="submit"
            >
              Sign in
            </button>
           
          </div>

          
      
        </form>
        <div className="mt-4 text-center text-white">
          {/* <Link to={`${import.meta.env.VITE_API_BACKEND_URL}/api/social/google`}>
              <GoogleSignInButton title={"SignIn"} />
            </Link> */}
            <span>
              Not have account yet?{" "}
              <Link
                to={"/signup"}
                className="text-white underline hover:text-purple-600 "
              >
                sign up
              </Link>
            </span>
          </div>
        <div className="flex gap-4 absolute text-white bottom-3 left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <a
            href="https://www.facebook.com/groups/234765374272589/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="cursor-pointer text-xl  hover:text-[#0866ff]" />
          </a>
          <a
            href="https://www.linkedin.com/company/aideoa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer text-xl  hover:text-[#0077B5]" />
          </a>
          <a
            href="https://x.com/Aideoa2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandX className="cursor-pointer text-xl hover:text-[#000000]" />
          </a>
          <a
            href="https://www.youtube.com/@aideoa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="cursor-pointer text-xl hover:text-[#FF0000]" />
          </a>
        </div>
      </div>
      )}</div>
  
  );
};

export default Login;
