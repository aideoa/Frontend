import React from "react";
import Card from "./Card";

import TopImageCard from "../Cards/TopImageCard";
import EmailNotiCard from "../Cards/EmailNotiCard";
import Footer from "../Cards/Footer";
import Slider from "../Cards/Slider/Slider";


const EducationCell = () => {
  const data3 = [
    ["Shri Rajeev Kumar Tiwari", "National General Secretary","./aideoapics/rktiwary.jpg"],
    ["Shri Bikash Das", "National President","./aideoapics/BIKASHFDAS.jpg"],
    // ["Shri Sunil Kumar", "Founder Board Member","./aideoapics/Sunil kumar.jpg"],
    // ["Shri Sovan Chatterjee ", "Founder Board Member","./aideoapics/sovan chatterjee.jpeg"],
    // ["Shri Niranjan Kumar Verma", "Founder Board Member","./aideoapics/NIRANJAN KUMAR VERMA.jpeg"],
    // ["Shri Sanjay Sahu", "Founder Board Member"],
    // ["Shri Ashok Kumar Sahu", "Central Board Member","./aideoapics/ashok sahu.jpg"],
    // ["Shri Anand Kumar Prajapati ", "Central Board Member","./aideoapics/Anand Kumar.jpg"],
    // ["Shri Jitendra Kumar Yadav ", "Central Board Member","./aideoapics/Jitendar.jpg"],
    // ["Shri Nishant Kumar Singh ", "Central Board Member","./aideoapics/Nishant Singh.jpg"],
    // ["Shri Rahul Kumar Pal", "Central Board Member","./aideoapics/ER.RAHUL PAL.jpg"],
    // ["Shri Rajkumar Paswan", "Central Board Member","./aideoapics/rajkumar paswan.jpg"],
    // ["Shri Ramesh Suryavanshi", "Central Board Member","./aideoapics/RAMESH SURYAVANSHI.jpg"],
    // ["Shri Rakccha Biun Das", "Central Board Member","./aideoapics/rakccha.jpg"],
    // ["Shri Subrat Kumar Dash", "Central Board Member","./aideoapics/S K Dash.jpeg"],
    // ["Shri Prem Jyoti Mohanty", "Central Board Member","./aideoapics/prem mohanty.jpg"],
    // ["Shri Satyendra Prajapati", "Central Board Member","./aideoapics/satyendra prajapati.jpg"],
    // ["Shri Kameshwar Prasad Keshari", "Central Board Member","./aideoapics/Kameshwar Keshari.jpg"],
    // ["ShriPradeep Kumar Singh", "Founder Board Member"],

    // ["Shri Nilkanth Akela", "Founder Board Member"],
    // ["Shri S.R. Chourasia", "Founder Board Member"],
    // ["Shri Rewati Ram Das", "Founder Board Member"],
 

  ];
  const data1 = [
    ["Shri Sanjay Sahu", "Aideoa Ed. Cell","./aideoapics/sanjaysahu.jpg"],
    ["Shri Nilkanth Akela", "Aideoa Ed. Cell","./aideoapics/neelkanth.jpeg"],
    // ["Shri Sunil Kumar", "Aideoa Ed. Cell"],
    ["Shri S.R. Chourasia", "Aideoa Ed. Cell","./aideoapics/rktidwary.jpg"],
    ["Shri Manish Kumar Yadav", "Aideoa Ed. Cell","./aideoapics/rkdtiwary.jpg"],
    // ["Shri Sovan Chatterjee", "Aideoa Ed. Cell","./aideoapics/sovan chatterjee.jpeg"],

  ];
  const data2 = [
    ["Shri Manish Kumar", "Aideoa IT Cell"],
    ["Vinay Nath Tiwary", "Aideoa IT Cell ","./aideoapics/vinay.jpeg"],
    ["Adrash Kulshrestha", "Aideoa IT Cell ","./aideoapics/adarsh.jpeg"],
  ];

  return (
    <div className="pt-14">
      <TopImageCard image={'./enhanceimage/Education.png'} title={"Our Team"} />
      <div className=" eduheading font-bold text-[25px] text-purple-500 text-center my-[20px]">
        Executive / Founder Members
      </div>

      <div className=" mx-auto w-[90%] flex flex-row flex-wrap justify-evenly items-center ">
        {data3.map((data, index) =>
          index >= 4 ? (
            <Card name={data} className={`  xl:col-start-2 xl:col-end-3`} />
          ) : (
            <Card name={data} />
          )
        )}
      </div>
      <div className=" eduheading font-bold text-[25px] text-purple-500 text-center my-[20px]">
        Education Cell Members
      </div>

      <div className=" mx-auto w-[90%]  flex flex-row flex-wrap justify-evenly items-center ">
        {data1.map((data, index) =>
          index >= 4 ? (
            <Card name={data} className={`  xl:col-start-2 xl:col-end-3`} />
          ) : (
            <Card name={data} />
          )
        )}
      </div>
      <div className="border border-gray-100"></div>
      <div className=" secheading font-bold text-purple-500 text-[25px] text-center my-[20px]">
        IT Cell Members
      </div>
      <div className="flex justify-evenly items-center max-md:flex-col">
        {data2.map((data, index) =>
          index >= 4 ? <Card name={data} className="" /> : <Card name={data} />
        )}
      </div>
      <Slider />
      <EmailNotiCard />
      <Footer />

    </div>
  );
};

export default EducationCell;
