import { FaArrowLeft } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { LuPen } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const EventDetails = ({ setActiveComponent, eventsData }) => {
  const [startTime, endTime] = eventsData.time.split("-");

  return (
    <div className="rounded-xl p-4 bg-gray-50 min-h-screen mt-16">
      <div className="flex md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex gap-2">
          <FaArrowLeft
            className="mt-2 cursor-pointer"
            onClick={() => setActiveComponent("Events")}
          />
          <div>
            <h2 className="text-xl font-semibold">{eventsData.title}</h2>
          </div>
        </div>
        <div className="text-gray-400 flex text-sm max-md:flex-col gap-1">
          <div className="flex">
            <button className="ml-2 bg-white shadow-lg px-3">❮</button>
            <button className="bg-white shadow-lg px-3">❯</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
      <p className="text-gray-600 font-semibold">Date: {eventsData.date}</p>
        <p className="text-gray-600 font-semibold">Duration: {eventsData.days} days</p>
        <p className="text-gray-600">
          Start Time: <span className="font-medium">{startTime}</span>
        </p>
        <p className="text-gray-600">
          End Time: <span className="font-medium">{endTime}</span>
        </p>
        <p className="text-gray-600">
          Location: <span className="font-medium">{eventsData.location}</span>
        </p>
        {eventsData.url && (
          <p className="text-gray-600">
            URL:{" "}
            <a className="font-medium text-blue-600" href={eventsData.url}>
              {eventsData.url}
            </a>
          </p>
        )}
        <p className="text-gray-600">
          Description: <span className="font-medium">{eventsData.description}</span>
        </p>

        <div className="flex justify-end mt-6">
          <button className="text-[#4B0082] flex justify-center duration-300 gap-1 border font-medium border-[#4B0082] hover:bg-red-50 w-24 py-1 rounded-lg mr-4">
            <RiDeleteBin6Line className="mt-1" />
            Delete
          </button>

          <button
            onClick={() => setActiveComponent("Update Events")}
            className="bg-[#4B0082] flex font-medium duration-300 items-center gap-1 text-white justify-center w-24 rounded-lg py-1 hover:bg-purple-700"
          >
            <LuPen className="mt-1" />
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
