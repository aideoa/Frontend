
import React, { useEffect, useRef, useState } from "react";
import useMembers from '../../hooks/useMembers'
import useDonation from "../../hooks/useDonation";
import { eventgetdata } from "../../Connection/Api";
import useQuery from "../../hooks/useQuery";
import useTransaction from "../../hooks/useTransaction";

import Tr from "./Tr";
import TrafficSourceChart from "./TransactionBar";
import ID_CARD from "./ID_CARD";
import TransactionTable from "./Transaction";

const Main = ({ mainRef, handleScroll , setActiveComponent}) => {
  const { dataList, pagination} = useTransaction(1 );
  const { dataList: totalMember ,allMembers } = useMembers();
  const { dataList: donation } = useDonation();
  const [events, setEvents] = useState();
  const totalUsers = totalMember?.pagination?.totalUsers || 0;
  const {dataList:query ,fetchData} = useQuery();
  const [totalIdCard , setTotalIdCard] = useState(0);

  console.log("all mem",pagination?.totalMembershipFees)

  const getdata = async () => {
    try {
      const data = await eventgetdata();
      setEvents(data.data.pagination.totalEvents);
      console.log(data.data);
    } catch (error) {
      console.log(`error in getdata in Events.jsx ${error}`);
    }
  };
  useEffect(() => {
    getdata();
    fetchData();
  }, []);

  useEffect(() => {
    if (allMembers?.users) {
      const approvedUsers = allMembers.users.filter(
        (user) => user.idCardStatus === "APPROVED"
      ).length;
      setTotalIdCard(approvedUsers);
    }
  }, [allMembers]); 

  const arr = [
    { head: "Total Team Members", no: totalUsers },
    { head: "Transaction", no: pagination?.totalMembershipFees || 0 },  // here we only show totalDonation after adding membership funtionality it must be updating again.
    { head: "Id Card", no: totalIdCard }, // it is also updated after adding the idcard funtionality
    { head: "Events", no: events || 0 },
  ];

  // Sample data from your image
  const data = [
    { name: "Transaction", value: pagination?.totalMembershipFees || 0, width: totalUsers > 0 ? `${((pagination?.totalMembershipFees) / totalUsers) * 100}%` : "0%" },
    { name: "ID Card", value: totalIdCard, width: totalUsers > 0 ? `${(totalIdCard / totalUsers) * 100}%` : "0%" },
    { name: "Events", value: events || 0, width: totalUsers > 0 ? `${(events / 100) * 100}%` : "0%", },
    { name: "Query", value: query?.pagination?.totalQueries || 0, width: totalUsers > 0 ? `${((query?.pagination?.totalQueries || 0)  / totalUsers) * 100}%` : "0%", },
  ];

  return (
    <div
      ref={mainRef}
      onScroll={handleScroll}
    >


      <div className="w-full relative h-screen mt-16">
        <div className="lg:h-[11.94%] max-lg:h-[240px]   flex max-lg:flex-col justify-between mb-5 flex-wrap items-center">
          {arr.map((data, index) => (
            <div key={index} className="bg-white shadow-md flex flex-col justify-between items-start p-4 lg:w-[22%] max-lg:w-[40%] max-lg:h-[45%] rounded-lg">

              <h3 className=" text-gray-500">{data.head}</h3>
              <p className="font-semibold text-2xl">{data.no}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-row max-lg:flex-col w-full max-lg:items-center lg:justify-between mb-6 pt-10">

          <Tr totalMember={allMembers} />
          <TrafficSourceChart data={data} />
        </div>
        <div className="   max-lg:flex-col flex justify-between max-lg:items-center  ">
          <div className="w-[65%] max-lg:w-full  bg-white p-5 rounded-lg mb-5 shadow-md">
            <div className="overflow-x-auto">

              <TransactionTable setActiveComponent={setActiveComponent}/>
            </div>
          </div>
          <div className="bg-white shadow-lg w-[32%] max-lg:w-full p-4 rounded-lg mb-6">
            <ID_CARD setActiveComponent={setActiveComponent} totalMember={totalMember} />
          </div>
        </div>
      </div>

    </div>

  );
};

export default Main;

