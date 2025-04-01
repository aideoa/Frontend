import { useState, useContext, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

import Resources from "./components/Resources";

import Events from "./components/Events/Events";
import Query from "./components/Query";
import IdCard from "./components/IdCard";
import Notifications from "../components/Admin_panel/Main-Content/Notifications/Notifications";
import ContactUs from "../components/Admin_panel/Main-Content/Contact_Us/Contact-us";
import Main from "./DashBoardpageComponent/Main";
import Transaction_page from "./components/Transaction/Transaction_page";
import Member from "./components/Members/Member";
import AddEvent from "./components/Events/AddEvents";

import EventDetails from "./components/Events/EventsDetails";
import UpdateEvents from "./components/Events/UpdateEvents";
import AddTeams from "./components/Our_Team/AddTeams";
import MutualTransfer from "./components/mutualtransfer/MutualTransfer";
import Missions from "./components/missions/Misisions";
import AddMissions from "./components/missions/AddMission";
import UpdateMissions from "./components/missions/UpdateMissions";
import MutualRequest from "./components/mutualrequest/MutualRequest";
import { AdminAuthContext } from "../context/adminAuthContext";
import LatestNews from "../components/Admin_panel/LatestNews/LatestNews.jsx";
import AddLatestNews from "../components/Admin_panel/LatestNews/AddLatestNews.jsx";
import Donation from "./components/donation/Donation";
import SubAdmin from "./components/SubAdmin/SubAdmin";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [eventsData, setEventsData] = useState();
  const [missionData, setMissionData] = useState();
  const { admin ,  getUser } = useContext(AdminAuthContext);

  useEffect(()=>{
    getUser();
  },[]);

  console.log(admin)
  const renderComponent = () => {
    switch (activeComponent) {
      case "SubAdmin":
        if (admin?.role === 'admin')
          return <SubAdmin />;
      case "Dashboard":
        return <Main setActiveComponent={setActiveComponent} />;
      case "Events":
        return (
          <Events
            setActiveComponent={setActiveComponent}
            setEventsData={setEventsData}
          />
        );
      case "Latest News":
        return (
          <LatestNews
            setActiveComponent={setActiveComponent}
            setEventsData={setEventsData}
          />
        );
      case "Add Latest News":
        return (
          <AddLatestNews
            setActiveComponent={setActiveComponent}
            setEventsData={setEventsData}
          />
        );
      case "Membership":
        return <Transaction_page />;
      case "Resource":
        return <Resources setActiveComponent={setActiveComponent} />;

      case "Members":
        return <Member />;
      case "Query":
        return <Query />;
      case "Donation":
        return <Donation />;
      case "ID Card":
        return <IdCard />;
      case "Mutual Transfer":
        return <MutualTransfer />;

      case "Mutual Request":
        return <MutualRequest />;
      case "Contact us":
        return <ContactUs />;
      case "Newsletter":
        return <Notifications />;

      case "Add Teams":
        return <AddTeams setActiveComponent={setActiveComponent} />;
      case "Add Events":
        return <AddEvent setActiveComponent={setActiveComponent} />;

      case "Events Details":
        return (
          <EventDetails
            setActiveComponent={setActiveComponent}
            eventsData={eventsData}
          />
        );
      case "Update Events":
        return (
          <UpdateEvents
            setActiveComponent={setActiveComponent}
            eventsData={eventsData}
          />
        );
      case "Our Missions":
        return (
          <Missions
            setMissionData={setMissionData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Add Missions":
        return <AddMissions setActiveComponent={setActiveComponent} />;
      case "Update Missions":
        return (
          <UpdateMissions
            missionData={missionData}
            setActiveComponent={setActiveComponent}
          />
        );

      default:
        return <></>;
    }
  };
  return (
    <div className="flex overflow-hidden">
      <div className="lg:w-[20%] max-lg:w-[10%]">
        <AdminSidebar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          admin={admin}
        />
      </div>
      <div className="lg:w-[80%] max-lg:w-[90%] h-screen bg-gray-200 overflow-y-auto">
        <AdminNavbar />
        <div className="p-8 max-lg:px-4 bg-gray-200 h-screen">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
