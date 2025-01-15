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
    <div className="max-w-screen-2xl mx-auto  md:px-6 ">
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
    </div>
  );
};

export default Profile;
