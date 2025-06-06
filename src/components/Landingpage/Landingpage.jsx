import { Link } from "react-router-dom";
import DonationButton from "./components/DonationButton";
import DownloadIdButton from "./components/DownloadIdButton";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import LinkButtonv2 from "./components/LinkButtonv2";
import MutualTransfer from "./components/MutualTransfer";
import { useContext,useEffect} from "react";
import { AuthContext } from "../../context/authContext";
import useMembers from "../../hooks/useMembers";

const Landingpage = () => {
  const { user } = useContext(AuthContext);
  const { selectedMember, getMember } = useMembers();

  useEffect(()=>{
      if(user){
        getMember(user.id);
      }
    },[user]);

  return (
    <div className="pt-14 flex items-center justify-center flex-col gap-y-10 bg-landingpageBackgroundImage bg-cover min-h-screen p-10">
      <div className="m-auto">
        <Header />
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-20 h-full items-center max-md:grid-cols-1 max-md:gap-5">
            {/* Membership button is only active if idCardStatus is NOT 'APPROVED' */}
            {user?.userType === "employee" && selectedMember?.idCardStatus !== "APPROVED" && (
              <Link to="/membership">
                <LinkButton />
              </Link>
            )}

            <Link to="/donation">
              <DonationButton />
            </Link>

            <Link to="/idcard">
              <LinkButtonv2 />
            </Link>

            {user?.userType === "employee" && (
              <Link to="/mutualtransfer">
                <MutualTransfer />
              </Link>
            )}

            {/* Uncomment if you want the DownloadIdButton */}
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
