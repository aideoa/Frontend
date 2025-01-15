import { FaArrowLeft } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { LuPen } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
const data = {
  event_id: 65243,
  title: "Event #65243",
  date: "24 Sep, 2024",
  time: "12:40:26 pm",
  days_duration: 2,
  start_time: "9:30 am",
  end_time: "5:30 pm",
  location_venue: "Grand Ballon Hotel",
  url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto",

  host_organization: "AIDEOA Hosts",
  details_description:
    "The roads in our area have developed numerous potholes, making it unsafe for vehicles and pedestrians. Despite several complaints, no action has been taken. We request immediate repair work to avoid accidents and improve road safety. The roads in our area have developed numerous potholes, making it unsafe for vehicles and pedestrians. Despite several complaints, no action has been taken. We request immediate repair work to avoid accidents and improve road safety.",
};

const EventDetails = ({ setActiveComponent, eventsData }) => {
  
  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen">
      <div className="flex  md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex gap-2">
          <FaArrowLeft
            className="mt-2 cursor-pointer"
            onClick={() => setActiveComponent("Events")}
          />
          <div>
            <h2 className="text-xl font-semibold">{eventsData.title}</h2>
            <p className="text-gray-500 text-xs">{eventsData.eventDateTime}</p>
          </div>
        </div>
        <div className="text-gray-400 flex text-sm max-md:flex-col gap-1">
          <span className="text-nowrap">1245 of 1953</span>
          <div className="flex ">
          <button className="ml-2 bg-white shadow-lg px-3">❮</button>
          <button className="bg-white shadow-lg px-3">❯</button>
          </div>
         
        </div>
      </div>

      <div className=" flex flex-col gap-3">
        <p className="text-gray-600 font-semibold">{eventsData.days}</p>
        <p className="text-gray-600">
          Start time: <span className="font-medium">{data.start_time}</span>{" "}
        </p>
        <p className="text-gray-600">
          End time: <span className="font-medium">{data.end_time}</span>{" "}
        </p>
        <p className="text-gray-600">
          Location: <span className="font-medium">{eventsData.location}</span>{" "}
        </p>
        <p className="text-gray-600">
          Url:{" "}
          <a className="font-medium text-blue-600" href={data.url}>
            {data.url}
          </a>{" "}
        </p>

        <p className="text-gray-600">
          <span className="font-medium">
            {data.host_name} {data.host_organization}
          </span>
        </p>
        <p className="text-gray-600">
          Description:{" "}
          <span className="font-medium">{eventsData.description}</span>{" "}
        </p>

        {/* <div className="flex flex-col gap-3">
          <div className="flex items-center w-96 justify-between p-4 rounded-lg bg-white shadow-md">
            <div className="text-gray-600 flex items-center gap-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <CiFileOn className="" />
              </div>

              <div>
                <p className="font-semibold text-sm">Student Id Card</p>
                <p className="text-xs">200 KB</p>
              </div>
            </div>
            <FaDownload />
          </div>
          <div className="flex items-center w-96 justify-between bg-white shadow-md p-4 rounded-lg">
            <div className="text-gray-600 flex items-center gap-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <CiFileOn className="" />
              </div>

              <div>
                <p className="font-semibold text-sm">
                  Tech design requirements
                </p>
                <p className="text-xs">200 KB</p>
              </div>
            </div>
            <FaDownload />
          </div>
        </div> */}

        <div className="flex justify-end mt-6">
          <button className="text-[#4B0082] flex justify-center duration-300 gap-1 border font-medium border-[#4B0082] hover:bg-red-50  w-24 py-1 rounded-lg mr-4">
            <RiDeleteBin6Line className="mt-1" />
            Delete
          </button>

          <button onClick={()=>setActiveComponent("Update Events")} className="bg-[#4B0082] flex font-medium duration-300 items-center gap-1 text-white justify-center w-24 rounded-lg py-1 hover:bg-purple-700">
            <LuPen className="mt-1" />
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
