import { useEffect, useState } from "react";
import { TbBrandX } from "react-icons/tb";
import {
  FaRegEyeSlash,
  FaUser,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaRegEye,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import GoogleSignInButton from "./Cards/SignInwithGoogle";
import UserRoleSelect from "./Cards/UserRoleSelect";
import axios from "axios";
import toast from "react-hot-toast";
import { validateEmail } from "../functions/validate";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const [pass, setPass] = useState(false);
  const [ConPass, setConPass] = useState(false);

  const [userTypemodal, setUserTypeModal] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupButton = async (E) => {
    E.preventDefault();
    if (!formData.fullName) {
      setError("Please enter your full name");
      return;
    }
    if (!formData.email) {
      setError("Please enter email address");
      return;
    }
    if (!userTypemodal && (!formData.mobile || formData.mobile.length !== 10)) {
      setError("Enter correct mobile number");
      return;
    }
    if (!formData.mobile) {
      setError("Please enter mobile number");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password should be greater than 8");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Mismatch passwords");
      return;
    }
    setUserTypeModal(true);
  };

  return (
    <>
      <div className="min-h-dvh mainBackgroundImg relative pt-14 flex justify-center items-center">
        <div className="p-8 w-[50%] max-w-[353px] min-w-[300px]">
          <div className="flex justify-center">
            <img src={"/logoback.png"} className=" w-24 " alt="logo" />
          </div>
          <h1 className="font-poppins text-white text-[22px] font-semibold leading-[33px] text-center mb-3">
            All India Diploma Engineers And Officials Association
          </h1>
          <p className="text-center mb-3 text-white font-semibold">Sign Up</p>
          <form onSubmit={handleSignupButton}>
            <div className="relative">
              <input
                className="glass-effect bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
                name="fullName"
                type="text"
                placeholder="Name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <FaUser
                className="absolute top-3 text-gray-300 right-3"
                size={13}
              />
            </div>
            <div className="relative">
              <input
                className="glass-effect bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
                name="email"
                type="email"
                placeholder="Email"
                required
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
                type="text"
                required
                name="mobile"
                placeholder={"Mobile number"}
                value={formData.mobile}
                onChange={handleChange}
                className="glass-effect bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
              />
            </div>

            <div className="relative">
              <input
                className="w-full glass-effect px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
                name="password"
                type={pass ? "text" : "password"}
                placeholder="Password"
                required
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
            <div className="relative">
              <input
                className="w-full glass-effect px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
                name="confirmPassword"
                required
                type={ConPass ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {ConPass ? (
                <FaRegEye
                  onClick={() => setConPass(!ConPass)}
                  className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                  size={15}
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setConPass(!ConPass)}
                  className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                  size={15}
                />
              )}
            </div>

            <span className="text-center text-sm text-red-500">{error}</span>

            <div className="mt-4">
              <button
                className="bg-purplebtn hover:bg-purple-700 text-white py-2 px-4 rounded-full w-full"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          {userTypemodal && (
            <div>
              <UserRoleSelect
                formData={formData}
                userTypemodal={userTypemodal}
                setUserTypeModal={setUserTypeModal}
              />
            </div>
          )}
          {/* <Link to={`${import.meta.env.VITE_API_BACKEND_URL}/api/social/google`}>
            <GoogleSignInButton />
          </Link> */}

          <div className="mt-4 text-center text-white pb-10">
            <span>
              Already have account{" "}
              <Link to="/login" className="underline hover:text-purple-600 ">
                sign in
              </Link>
            </span>
          </div>
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
    </>
  );
};

export default Signup;
