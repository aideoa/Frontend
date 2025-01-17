import { useEffect } from "react";
import useMissions from "../../../../hooks/useMissions";

const Section1 = () => {
  const {dataList,fetchData}=useMissions()
 useEffect(()=>{
fetchData()
 },[])
  return (
    <div className="centerdiv mx-4 overflow-x-hidden my-10 flex flex-col justify-center items-center">
      <h1 className="font-semibold text-[35px] leading-15">Our Mission</h1>
      <div className="pdiv flex justify-center items-center my-5">
        <p className="text-sm text-center ">
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, ad?
          Optio, cupiditate. */}
        </p>
      </div>
      <div className="uldiv p-2">
        <ul className="w-[90%] mx-auto list-disc px-2 flex flex-col justify-evenly items-start text-xl flex-wrap text-justify gap-y-[10px] ">
          {
           dataList&& dataList?.missions?.map((item)=>{
              return <li className=" px-2" key={item?.id}>
                {item?.mission}
              </li>
            })
          }
         
        </ul>
      </div>
    </div>
  );
};

export default Section1;
