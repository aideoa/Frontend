import { Outlet } from "react-router-dom";
import Navbar from "../components/Cards/Navbar";


// import Footer from "../components/Cards/Footer";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />


      {/* <Footer /> */}
      

    </>
  );
};

export default MainLayout;
