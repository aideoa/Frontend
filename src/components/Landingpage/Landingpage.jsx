import { Link } from "react-router-dom";
import DonationButton from "./components/DonationButton";
import DownloadIdButton from "./components/DownloadIdButton";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import LinkButtonv2 from "./components/LinkButtonv2";
import MutualTransfer from "./components/MutualTransfer";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Landingpage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" pt-14 flex items-center justify-center flex-col gap-y-10 bg-landingpageBackgroundImage bg-cover min-h-screen p-10">
      <div className="m-auto">
        <div>
          <Header />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-20 h-full items-center max-md:grid-cols-1 max-md:gap-5">
            <Link to="/membership">
              <LinkButton />
            </Link>
            <Link to="/donation">
              <DonationButton />
            </Link>
            <Link to="/idcard">
              <LinkButtonv2 />
            </Link>
          {
            user.userType==='employee' &&   <Link to="/mutualtransfer">
            <MutualTransfer />
          </Link>
          }
            {/* <Link to="#">
          <DownloadIdButton />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landingpage;
