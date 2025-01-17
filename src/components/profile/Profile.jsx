import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import React, { useContext } from "react";
const userProfile = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  phone: "+01 234 567 89",
  bio: "Software Developer",
  location: "New York, USA",
  profileImage: "https://via.placeholder.com/150",
};
const Profile = () => {
  const nav = useNavigate();
  const { user } = useContext(AuthContext);
  if (!user) nav("/login");

  return (
    <div className="bg-gradient-to-r from-[#3f1473] to-[#8a63bb] min-h-screen flex items-center justify-center p-4">
   <div className="font-std mb-10 w-[95%] rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <img src="/aideoapics/BIKASHFDAS.jpg" alt="Profile Picture" class="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-[#3f1473] transition-transform duration-300 hover:scale-105 ring ring-gray-300" />
             <button className="mt-4 bg-[#3f1473] text-white px-4 py-2 rounded-lg hover:bg-[#8a63bb] transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300">ID Card Download</button> 
            </div>
            <div className="md:w-2/3 md:pl-8">
                <h1 className="text-2xl font-bold text-indigo-800 mb-2">Shri Bikash Das</h1>
                <p className="text-gray-600 mb-6">National President</p>

                <h2 className="text-xl font-semibold text-indigo-800 mb-4">Organization Information</h2>
                <p className="text-gray-700 mb-6">
                All India Diploma Engineers & Officials
                </p>
              
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">Contact Information</h2>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-800 " viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        bikash@gmail.com
                    </li>
                    <li class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-800" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +91 24232535
                    </li>
                    <li class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-800 0" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        Dhanbad, jharkhand, 828113
                    </li>
                </ul>
            </div>
        </div>

    </div>

    {/* <div className="max-w-screen-2xl mx-auto  md:px-6 ">
      <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 h-80 rounded-t-lg"></div>
      <div className=" bg-white shadow-md  overflow-hidden">
        <div className="flex items-center p-6">
          <div className="flex-shrink-0">
            <img
              className="w-24 rounded-full"
              src={userProfile.profileImage}
              alt="Profile"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{`${user.fullName}`}</h2>
            <p className="text-gray-600">Student</p>
            <p className="text-gray-500">{userProfile.location}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 ">
          <h3 className="text-2xl font-medium">Personal Information</h3>
          <ul className="mt-4 flex flex-col gap-5 text-xl">
            <li className="flex gap-2">
              <span className="font-medium">First Name : </span>
              <span> {userProfile.firstName}</span>
            </li>
            <li className="flex  mt-1 gap-2">
              <span className="font-medium">Last Name:</span>
              <span>{userProfile.lastName}</span>
            </li>
            <li className="flex  mt-1 gap-2">
              <span className="font-medium">Email Address:</span>
              <span>{userProfile.email}</span>
            </li>
            <li className="flex  mt-1 gap-2">
              <span className="font-medium">Phone:</span>
              <span>{userProfile.phone}</span>
            </li>
            <li className="flex  mt-1 gap-2">
              <span className="font-medium">Bio:</span>
              <span>{userProfile.bio}</span>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Profile;
