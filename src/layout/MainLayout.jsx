import { Outlet } from "react-router-dom";
import Navbar from "../components/Cards/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
