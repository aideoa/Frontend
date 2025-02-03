import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import React, { useContext } from "react";


const Profile = () => {
  const nav = useNavigate();
  const { user, authToken } = useContext(AuthContext);
  if (!user) nav("/login");

  console.log(user);

  return (
    <div className="bg-gradient-to-r from-[#3f1473] to-[#8a63bb] min-h-screen flex items-center justify-center p-4">
      <div className="font-std mb-10 w-[95%] rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <img src={user.image} alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-[#3f1473] transition-transform duration-300 hover:scale-105 ring ring-gray-300" />
            <div>
              <p>AIDEOA ID No: {user.aideoaIdNo}</p>
            </div>
            <button className="mt-4 bg-[#3f1473] text-white px-4 py-2 rounded-lg hover:bg-[#8a63bb] transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300"
             onClick={()=>nav("/idcard")} >
              ID Card Download
              </button>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-2xl font-bold text-indigo-800 mb-2">{user.fullName}</h1>
            <p className="text-gray-600 mb-6">{user.userType}</p>


            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Organization Information</h2>
            <p className="text-gray-700 mb-6">
              {user.organization}
            </p>

            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Contact Information</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 " viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>


                { user.email }

              </li>

              <li className="flex items-center">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>


                {user.mobile }

              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>

                {user.address} 

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;