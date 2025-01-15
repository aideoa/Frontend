import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  const [ham, setham] = useState(true);
  const navigate = useNavigate();
  const sethamfunc = () => {
    setham(!ham);
  };
  const signupfunc = () => {
    navigate("/signup");
  };
  
  return (
    <nav className="fixed z-10 w-full bg-white opacity-100 flex  flex-row justify-between items-center">
      <div
        className=" adeiou flex  flex-row justify-center items-center"
        id="brand"
      >
        <img src="./images/logo.png" className=" wo pl-2" alt="" />
        <h2 className=" wo pr-2 font-extrabold">AIDEOA</h2>
      </div>
      <div className="  max-lg:hidden lg:flex  lg:flex-row  gap-2 ">
        <div className=" adeiou flex flex-row justify-between items-center">
          <Link
            className=" wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600"
            to="/"
          >
            Home
          </Link>
          <Link
            className="wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600"
            to="/event"
          >
            Aideoa Events
          </Link>
          <Link
            className=" wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600"
            to="/mutualtransfer"
          >
            Mutual Transfer
          </Link>
          <Link
            className=" wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600"
            to="/education"
          >
            Education cell
          </Link>
          <Link
            className=" wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600"
            to="/about"
          >
            About us
          </Link>
          <Link
            className=" wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600"
            to="/contact"
          >
            Contact us
          </Link>
        </div>
        <div className=" wo py-3 px-4">
          <button
            onClick={signupfunc}
            className="btn   p-3 rounded-[25px] px-6 text-left bg-purple-600 border border-white text-white"
          >
            Sign up
          </button>
        </div>
      </div>
      <div id="hamicon  " onClick={sethamfunc} className="sm:block lg:hidden">
        <RxHamburgerMenu className="w-[44px] mx-3 h-[44px]" />
      </div>
      <div
        className={`fixed bg-white flex flex-col lg:hidden  inset-0 ${
          ham ? "hidden" : "block"
        } `}
      >
        <div className="flex flex-row border-b border-gray-300 justify-between items-center ">
          <div className="flex flex-row justify-center items-center" id="brand">
            <img src="./images/logo.png" className="py-2" alt="" />
            <h2 className="px-0 font-extrabold">AIDEOA</h2>
          </div>
          <div onClick={sethamfunc} id="hamicon lg:block ">
            {ham ? (
              <RxHamburgerMenu className="w-[44px] mx-3 h-[44px]" />
            ) : (
              <IoMdClose className="w-[44px] mx-3 h-[44px]" />
            )}
          </div>
        </div>
        {!ham ? (
          <div className="flex max-lg:flex-col-reverse  gap-2 ">
            <div className="flex flex-col">
              <Link
                className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                to="/"
              >
                Home
              </Link>
              <Link
                className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                to="/event"
              >
                Aideoa Events
              </Link>
              <Link
                className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                to="/mutualtransfer"
              >
                Mutual Transfer
              </Link>
              <Link
                className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                to="/education"
              >
                Education cell
              </Link>
              <Link
                className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                to="/about"
              >
                About us
              </Link>
              <Link
                className=" do block py-3 px-6 hover:text-purple-600 hover:bg-gray-100"
                to="/contact"
              >
                Contact us
              </Link>
            </div>
            <div className=" do py-3 px-6">
              <button
                onClick={signupfunc}
                className="btn block  px-3 w-full text-left bg-purple-600 border border-white text-white"
              >
                Sign up
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
