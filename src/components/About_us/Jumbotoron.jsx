import React from "react";
const Jumbotoron = () => {

  return (
    <>
      <div className=" mx-auto rounded-lg  text-3xl justify-start items-center text-AIDEOTYPO  flex flex-row max-sm:m-2 max-sm:mx-auto max-sm:w-[80%] max-sm:text-center sm:w-[450px]
      sm:mx-auto  md:w-[600px] lg:w-[800px] lg:flex-row xl:w-[1050px] xl:h-[100px] 2xl:w-[1300px]">
        -Who are we
      </div>
      <div
        id="sq"
        className="container my-3 lightdropshadowbox  rounded-2xl bg-[#0000000D] max-2xl:pr-0 justify-between  items-center border max-sm:mx-auto max-sm:w-[80%]  flex max-md:flex-col-reverse sm:mx-auto sm:w-[450px]  md:w-[600px] lg:w-[800px] lg:flex-row xl:w-[1050px] xl:h-[350px] 2xl:w-[1300px]"
      >
        <div className="flex flex-col h-full  gap-10 max-xl:gap-2 pt-10 max-lg:pt-0 md:w-[40%] lg:w-[50%] xl:mx-[10px] 2xl:w-[50%] 2xl:mx-[20px]  ">
          <h1 className="py-4 pl-4 items-start text-start w-full font-semibold text-3xl max-lg:text-2xl">
          AIDEOA  is dedicated!{" "}
          </h1>
          <p
            className="px-4 pb-2 text-[#00000099]   lg:text-[15px] xl:text-[18px] 2xl:text-[20px]
"
          >
            Welcome to our dynamic platform, a dedicated hub for Mining Diploma
            and Degree holders. Our vision is to create a unified community of
            Mining Sirdars, Overmen, Surveyors, Assistant Managers, and other
            mining professionals, driving collaborative decision-making and
            industry excellence.
          </p>
        </div>
        <div className="max-w-[408px] rounded-2xl p-5">
          <img
            src="./images/home.jpeg"
            className="rounded-2xl w-full h-full"
            alt="home"
          />
        </div>
      </div>
    </>
  );
};

export default Jumbotoron;
