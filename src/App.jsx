import { Navigate, Route, Routes } from "react-router-dom";

import Event from "./components/Eventpage/EventPage";
import ContactUs from "./components/Contactus/ContactUs";
import Home from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JoinMembership from "./components/JoinMembershipHomepage/JoinMembership";
import DonationComponent from "./components/Donation/DonationComponent";
import MutualTransferPage from "./components/MutualTransferPage/MutualTransferPage";
import About from "./components/About_us/Contactus.jsx";
import EducationCell from "./components/Education_cell/EducationCell.jsx";
import ApplyIdCard from "./components/ApplyIdcard/ApplyIdCard.jsx";
import Landingpage from "./components/Landingpage/Landingpage.jsx";
import Dashboard from "./components/Admin_panel/Dashboard.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import DataList from "./components/MutualTransferPage/DataList";
import Onlinetest from "./components/Onlinetest/Onlinetest";
import StudentCorner from "./components/studentcorner/StudentCorner";
import Employeecorner from "./components/Employeecorner/Employeecorner";
import Education from "./components/Education/Education";
import QueryForm from "./components/queryform/QueryForm";
import NotFound from "./components/notfound/Notfound";
import Forgotpassword from "./components/forgotpassword/Forgotpassword";
import OnlineClass from "./components/onlineclass/OnlineClass";
import UserRoleSelect from "./components/Cards/UserRoleSelect";

import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./context/authContext";
import { AdminAuthContext } from "./context/adminAuthContext";
import AdminPanel from "./adminpanel/AdminPanel";
import Payment from "./data/Payment";
import Profile from "./components/profile/Profile"
import AdminLogin from "./adminpanel/components/AdminLogin";
import PayStatus from "./pages/PayStatus"

export default function App() {
  useEffect(() => {}, []);
  const { user } = useContext(AuthContext);
  const {adminUser}=useContext(AdminAuthContext)
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />  {/*index route= When the user navigates to the parent route (e.g., /), this route will automatically render */}
          <Route index element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="/mutualtransferviewportal"
            element={
              user?.userType === "employee" ? <DataList /> : <Navigate to="/" />
            }
          />
          <Route path="membership" element={<JoinMembership />} />

          <Route path="donation" element={<DonationComponent />} />
            
          <Route
            path="mutualtransfer"
            element={
              user?.userType === "employee" ? (
                <MutualTransferPage />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="about" element={<About />} />
          <Route path="education" element={<EducationCell />} />
          <Route path="idcard" element={<ApplyIdCard />} />
          <Route path="home" element={user ?<Landingpage />:<Navigate to="/signup" />} />
          <Route path="onlinetest" element={<Onlinetest />} />
          <Route path="studentcorner" element={<StudentCorner />} />
          <Route path="employeecorner" element={<Employeecorner />} />
          <Route path="educationpage" element={<Education />} />
          <Route path="query" element={<QueryForm />} />
          <Route path="forgotpassword" element={<Forgotpassword />} />
          <Route path="onlineclass" element={<OnlineClass />} />
          <Route path="additional" element={<UserRoleSelect />} />
          <Route path="profile" element={<Profile />} />
          <Route path="paystatus/:txnid/:firstname/:status/:amt" element={<PayStatus />} />
         {/*  <Route path="student-form" element={<StudentForm />} />
          <Route path="student-form" element={<EmployeeForm />} />
           */}
        </Route>
        <Route
          path="/admin/dashboard"
          element={adminUser ? <AdminPanel /> : <Navigate to="/admin/login" />}
        />
         <Route
          path="/admin/login"
          element={
          
              <AdminLogin />
         
          }
        />
        <Route path="/pay" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </ScrollToTop>
  );
}
