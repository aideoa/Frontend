import { AuthContext } from "../../../context/authContext";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const ShowTable = () => {
  const [dataList, setDataList] = useState([]);
 
  const { authToken } = useContext(AuthContext);
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetchData = async (value) => {
    try {
      let res 
      if(value==="1")
      {
       res= await axios.get(
          `${
            import.meta.env.VITE_API_BACKEND_URL
          }/api/transferrequest/getrequestbyme`,
          {
            headers: {
              Authorization: `Bearer ${authToken.accessToken}`,
            },
          }
        );
       
      }else{
       res= await axios.get(
          `${
            import.meta.env.VITE_API_BACKEND_URL
          }/api/transferpair/getCompletedRequests`,
          {
            headers: {
              Authorization: `Bearer ${authToken.accessToken}`,
            },
          }
        );
      }
      if (res.status === 200) setDataList(res.data);
      else setDataList(null)
    } catch (error) {
      console.log(error);
    }
  };
console.log(dataList)
  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <>
        <Box sx={{ width: '100%', typography: 'body1',marginTop:2 }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My transfer requests" value="1" />
            <Tab label="My Approved requests" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
      <div className="overflow-x-auto">
        <table className="">
          <thead className="rounded-t-2xl">
            <tr className="  ">
              <th className="  items-center min-w-1  text-white bg-purple-400 p-5 ">
                <p>No.</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Name</p>
              </th>

              <th className=" p-1 text-white bg-purple-400  ">
                <p>Mobile No.</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Aideoa ID</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Designation</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Current Subsidiary</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Current Posted Area</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Current Mine Name</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Grade</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Transfer Area</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Transfer Subsidiary</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Transfer Mine</p>
              </th>

              <th className=" p-1 text-white bg-purple-400  ">
                <p>Date</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Status</p>
              </th>
          
            </tr>
          </thead>

          <tbody>
            {dataList &&
              dataList?.map((data, index) => (
                <tr
                key={index}
                className="border-b border-gray-200 h-16 cursor-pointer"
              >
                  <td className="border p-1 text-center rounded-tl-2xl rounded-bl-2xl min-w-1 border-gray-300">
                    <p>{index + 1} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.name}</p>
                  </td>

                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.mobileNumber}</p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.aideoaIdNo}</p>
                  </td>

                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.designation} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.currentSubsidiary} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.currentPostedArea} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.currentMinesName} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.grade} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.preferredTransferArea} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.preferredTransferSubsidiary} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.preferredTransferMine} </p>
                  </td>
                  <td className="border p-1 text-center text-xs text-nowrap  border-gray-300">
                    <p>{data?.createdAt.toString().slice(0, 10)} </p>
                  </td>
                  <td className="border p-1 text-center text-xs text-nowrap  border-gray-300">
                    <p>{data?.status} </p>
                  </td>
              
                </tr>
              ))}
          </tbody>
        </table>
      </div>
   </TabPanel>
        <TabPanel value="2">
        <div className="overflow-x-auto">
        <table className="">
          <thead className="rounded-t-2xl">
            <tr className="  ">
              <th className="  items-center min-w-1  text-white bg-purple-400 p-5 ">
                <p>No.</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Name</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Mobile No.</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Email</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Aideoa ID</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Designation</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Current Subsidiary</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Current Posted Area</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Current Mine Name</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Grade</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Transfer Area</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Transfer Subsidiary</p>
              </th>
              <th className=" p-1 text-white bg-purple-400  ">
                <p>Transfer Mine</p>
              </th>

              <th className=" p-1 text-white bg-purple-400  ">
                <p>Date</p>
              </th>
             
            </tr>
          </thead>

          <tbody>
            {dataList &&
              dataList?.map((data, index) => (
                <tr
                key={index}
                className="border-b border-gray-200 h-16 cursor-pointer"
              >
                  <td className="border p-1 text-center rounded-tl-2xl rounded-bl-2xl min-w-1 border-gray-300">
                    <p>{index + 1} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest.name}</p>
                  </td>

                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.mobileNumber}</p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.user1?.email}</p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.aideoaIdNo}</p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.designation} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.currentSubsidiary} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.currentPostedArea} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.currentMinesName} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.grade} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.preferredTransferArea} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.preferredTransferSubsidiary} </p>
                  </td>
                  <td className="border p-1 text-center   border-gray-300">
                    <p>{data?.transferRequest?.preferredTransferMine} </p>
                  </td>
                  <td className="border p-1 text-center text-xs text-nowrap  border-gray-300">
                    <p>{data?.createdAt.toString().slice(0, 10)} </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
        </TabPanel>
      </TabContext>
    </Box>
    </>
   
  );
};

export default ShowTable;
