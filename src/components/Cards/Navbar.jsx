import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import "../../../src/index.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { AuthContext } from "../../context/authContext";
const Navbar = () => {
  const [ham, setham] = useState(true);
  const { pathname } = useLocation();
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sethamfunc = () => {
    setham(!ham);
  };
  const signupfunc = () => {
    navigate("/signup");
  };

  return (
    <>
      <nav className="fixed z-10 w-full bg-white opacity-100 flex  flex-row justify-between items-center">
        <Link to="/">
          <div
            className=" adeiou flex  flex-row justify-center items-center"
            id="brand"
          >
            <img
              src="./images/logo.png"
              className="max-sm:h-[50px]   pl-2"
              alt="logo"
            />
          </div>
        </Link>

        <div className="  max-lg:hidden lg:flex  lg:flex-row  gap-2 ">
          <div className=" adeiou flex flex-row justify-between items-center">
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600  ${
                pathname === "/" && "text-purple-600 border-purple-600 border-b"
              } `}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${
                pathname === "/event" &&
                "text-purple-600 border-purple-600 border-b"
              } `}
              to="/event"
            >
              AIDEOA Events
            </NavLink>
          {
            user?.userType==='employee' &&   <NavLink
            className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${
              pathname === "/mutualtransfer" &&
              "text-purple-600 border-purple-600 border-b"
            } `}
            to="/mutualtransfer"
          >
            Mutual Transfer
          </NavLink>
          }
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${
                pathname === "/education" &&
                "text-purple-600 border-purple-600 border-b"
              } `}
              to="/education"
            >
              Our Team
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 
              ${
                pathname === "/about" &&
                "text-purple-600 border-purple-600 border-b"
              } `}
              to="/about"
            >
              About us
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${
                pathname === "/query" &&
                "text-purple-600 border-purple-600 border-b"
              } `}
              to="/query"
            >
              Query
            </NavLink>
            <NavLink
              className={` wo py-3 px-4 hover:text-purple-600 hover:border-b  hover:border-purple-600 ${
                pathname === "/contact" &&
                "text-purple-600 border-purple-600 border-b"
              } `}
              to="/contact"
            >
              Contact us
            </NavLink>
          </div>{" "}
          {user ? (
            <div className=" wo flex items-center pr-4">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <FaRegUser size={20} title={user?.fullName} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/profile">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={()=>{handleLogout()
                   setAnchorEl(null);
                }}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div className=" wo py-3 px-4">
              <button
                onClick={signupfunc}
                className="btn hover:text-white hover:bg-purple-600 text-center rounded-2xl font-medium duration-200  p-3 rounded-[25px] px-6 text-purple-600 border border-purple-600"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
        <div id="hamicon  " onClick={sethamfunc} className="sm:block lg:hidden">
          <RxHamburgerMenu className="w-[44px] cursor-pointer mx-3 h-[44px]" />
        </div>
        <div
          className={`fixed bg-white flex flex-col lg:hidden  inset-0 ${
            ham ? "hidden" : "block"
          } `}
        >
          <div className="flex flex-row border-b border-gray-300 justify-between items-center ">
            <div
              className="flex flex-row justify-center items-center"
              id="brand"
            >
              <img
                src="./images/logo.png"
                className="pl-2 h-[50px] "
                alt="logo"
              />
            </div>
            <div onClick={sethamfunc} id="hamicon lg:block ">
              {ham ? (
                <RxHamburgerMenu className="w-[44px] mx-3 h-[44px]" />
              ) : (
                <IoMdClose className="w-[44px] cursor-pointer mx-3 h-[44px]" />
              )}
            </div>
          </div>
          {!ham ? (
            <div className="flex flex-col-reverse max-lg:flex-col  ">
              <div className="flex flex-col">
                <NavLink
                  className={`block py-3 px-6 hover:text-purple-600 hover:bg-gray-100 ${
                    pathname === "/" && "text-purple-600 "
                  }`}
                  to="/"
                  onClick={sethamfunc}
                >
                  Home
                </NavLink>
                <NavLink
                  className={`block py-3 px-6 hover:text-purple-600 hover:bg-gray-100 ${
                    pathname === "/event" && "text-purple-600 "
                  }`}
                  to="/event"
                  onClick={sethamfunc}
                >
                  AIDEOA Events
                </NavLink>
              {
                user?.userType==='employee' &&   <NavLink
                className={`block py-3 px-6 hover:text-purple-600 hover:bg-gray-100 ${
                  pathname === "/mutualtransfer" && "text-purple-600 "
                }`}
                to="/mutualtransfer"
                onClick={sethamfunc}
              >
                Mutual Transfer
              </NavLink>
              }
                <NavLink
                  className={`block py-3 px-6 hover:text-purple-600 hover:bg-gray-100 ${
                    pathname === "/education" && "text-purple-600 "
                  }`}
                  to="/education"
                  onClick={sethamfunc}
                >
                  Our Team
                </NavLink>
                <NavLink
                  className={`block py-3 px-6 hover:text-purple-600 hover:bg-gray-100 ${
                    pathname === "/about" && "text-purple-600 "
                  }`}
                  to="/about"
                  onClick={sethamfunc}
                >
                  About us
                </NavLink>
                <NavLink
                  className={`block py-3 px-6 hover:text-purple-600 hover:bg-gray-100 ${
                    pathname === "/query" && "text-purple-600 "
                  }`}
                  to="/query"
                  onClick={sethamfunc}
                >
                  Query
                </NavLink>
                <NavLink
                  className={`block py-3 px-6 hover:text-purple-600 hover:bg-gray-100 ${
                    pathname === "/contact" && "text-purple-600 "
                  }`}
                  to="/contact"
                  onClick={sethamfunc}
                >
                  Contact us
                </NavLink>
              </div>

              {user ? (
                <div>
                  <NavLink
                    className={` py-3 px-6 flex items-center gap-1 hover:text-purple-600 hover:bg-gray-100 ${
                      pathname === "/profile" && "text-purple-600 "
                    }`}
                    to="/profile"
                    onClick={sethamfunc}
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="btn mt-3 mx-6 hover:text-white hover:bg-purple-600 text-center rounded-2xl font-medium duration-200  p-3 rounded-[25px] px-6 text-purple-600 border border-purple-600"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="  px-4">
                  <button
                    onClick={() => {
                      signupfunc();
                      sethamfunc();
                    }}
                    className="btn hover:text-white hover:bg-purple-600 text-center rounded-2xl font-medium duration-200  p-3 rounded-[25px] px-6 text-purple-600 border border-purple-600"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
