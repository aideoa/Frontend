import { useCallback, useContext, useEffect, useState } from "react";
import "../../../index.css";
import SubData from "../components/subsidiary";
import useMutualTransfer from "../../../hooks/useMutualTransfer";
import { AuthContext } from "../../../context/authContext";
import {debounce} from "lodash";
const Mutual_table = () => {
  const [search, setSearch] = useState("");
  const [fromSubsidiary, setFromSubsidiary] = useState(""); // State for 'From' select
  const [toSubsidiary, setToSubsidiary] = useState(""); // State for 'To' select

  const { dataList, acceptPair, fetchData } = useMutualTransfer();
  const { user } = useContext(AuthContext);

  function handleAccept(data) {
    const obj = {
      user1Id: data?.userId,
      transferRequestId: data?.id,
    };
    acceptPair(obj);
  }

  // Function to handle submit and combine search criteria
  function handleSubmit() {
    const searchCriteria = {

      from: fromSubsidiary.trim(),
      to: toSubsidiary.trim(),
    };
    console.log(searchCriteria)
    fetchData(null,null,searchCriteria); // Pass search criteria to fetchData
  }
  const debouncedFetchData = useCallback(
    debounce((search) => {
      fetchData(null, search);
    }, 500),
    []
  );
  useEffect(() => {
    debouncedFetchData(search);
  }, [search]);

  return (
    <div className="m-5 mx-12 ">
      <div className="lg:w-[90%] my-4 mx-auto flex flex-wrap justify-start gap-4 items-center ">
        <input
          type="text"
          placeholder="Search Here..."
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 max-sm:w-[300px] rounded-xl sm:max-lg:text-[16px] text-xl border w-[20%] shadow-xl text-gray-600 border-gray-200"
        />
        <select
          value={fromSubsidiary}
          onChange={(e) => setFromSubsidiary(e.target.value)}
          className="p-3 overflow-y-scroll max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-white text-gray-400 border-gray-200"
        >
          <option value="">From</option>
          {SubData.map((data, idx) => (
            <option key={idx} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
        <select
          value={toSubsidiary}
          onChange={(e) => setToSubsidiary(e.target.value)}
          className="p-3 overflow-y-scroll max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-white text-gray-400 border-gray-200"
        >
          <option value="">To</option>
          {SubData.map((data, idx) => (
            <option key={idx} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          className="p-3 max-sm:w-[300px] rounded-xl text-xl border w-[20%] shadow-xl bg-purple-600 text-white border-gray-200"
        >
          Submit
        </button>
      </div>

      <div className="lg:w-[90%] mx-auto overflow-x-auto">
        <table className="w-full">
          <thead className="rounded-t-2xl">
            <tr>
              <th className="text-white bg-purple-400 p-5">No.</th>
              <th className="text-white bg-purple-400">Name</th>
              <th className="text-white bg-purple-400">Mobile No.</th>
              <th className="text-white bg-purple-400">Aideoa ID</th>
              <th className="text-white bg-purple-400">Designation</th>
              <th className="text-white bg-purple-400">Current Subsidiary</th>
              <th className="text-white bg-purple-400">Current Posted Area</th>
              <th className="text-white bg-purple-400">Current Mine Name</th>
              <th className="text-white bg-purple-400">Grade</th>
              <th className="text-white bg-purple-400">Transfer Area</th>
              <th className="text-white bg-purple-400">Transfer Subsidiary</th>
              <th className="text-white bg-purple-400">Transfer Mine</th>
              <th className="text-white bg-purple-400">Date</th>
              <th className="text-white bg-purple-400">Status</th>
              <th className="text-white bg-purple-400">Select</th>
            </tr>
          </thead>

          <tbody>
            {dataList?.map((data, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 h-16 cursor-pointer"
              >
                <td className="border p-1 text-center">{index + 1}</td>
                <td className="border p-1 text-center">{data.name}</td>
                <td className="border p-1 text-center">{data.mobileNumber}</td>
                <td className="border p-1 text-center">{data.aideoaIdNo}</td>
                <td className="border p-1 text-center">{data.designationType}</td>
                <td className="border p-1 text-center">{data.currentSubsidiary}</td>
                <td className="border p-1 text-center">{data.currentPostedArea}</td>
                <td className="border p-1 text-center">{data.currentMinesName}</td>
                <td className="border p-1 text-center">{data.grade}</td>
                <td className="border p-1 text-center">{data.preferredTransferArea}</td>
                <td className="border p-1 text-center">{data.preferredTransferSubsidiary}</td>
                <td className="border p-1 text-center">{data.preferredTransferMine}</td>
                <td className="border p-1 text-center text-xs">{data.createdAt.toString().slice(0, 10)}</td>
                <td className="border p-1 text-center text-xs">{data?.status}</td>
                <td className="border px-2 py-1 text-center text-xs">
                  <button
                    type="button"
                    disabled={
                      data?.userId === user?.sub || data?.status === "approved"
                    }
                    onClick={() => handleAccept(data)}
                    className={`bg-purple-400 text-white px-2 py-1 text-xs rounded-md ${
                      (data?.userId === user?.sub || data?.status === "approved") &&
                      "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Accept
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mutual_table;
