import { useState } from "react";

const IdCard = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="flex flex-col  w-full justify-around ">
      <div className="flex flex-col  justify-center items-center">
        {show ? <div
          id="frontcover"
          onMouseEnter={() => { setShow(false) }}
          className=" 
            bg-red-200 border   border-gray-500 rounded-[30px] overflow-hidden max-xsm:w-[90%] "
        >
          <div className="relative min-h-449px]">
            <img src="/card/lower.svg" className="max-xsm:w-full" alt="lower" />
            <div className="absolute flex top-[10px] ">
              <img
                src="/images/logo.png"
                className="h-[50px] w-[50px] "
                alt="logo"
              />
            </div>
            <p className=" absolute top-4 left-6 mx-2 px-3 text-sm text-white text-center font-semibold">
              All india diploma engineers & Officials Association (AIDEOA)
            </p>

            <div className="h-[266px] w-[391px] ">
              <img
                src="/user.png"
                className=" absolute  border-[2px] border-purple-400 h-[144px] w-[144px] top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full "
                alt="i"
              />
              <p className="my-10px absolute  text-[20px] top-[220px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-bold">
                VICTOR ANIH
              </p>

              <div className="my-[10px] w-[292px] h-[91px] mx-auto bg-white rounded-lg left-1/2 top-[300px] absolute transform -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center">
                <div className="flex flex-col text-[11px] justify-start items-start">
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1">AIDEOA ID : </h4>
                    <p>100</p>
                  </div>
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1">Contact : </h4>
                    <p>1201248510</p>
                  </div>
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1"> E-mail :</h4>
                    <p>demo@email.com</p>
                  </div>
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1">Address : </h4>
                    <p>eque porro quisquam est adipisci velit.</p>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col justify-start items-start left-[130px] top-[420px] absolute transform -translate-x-1/2 -translate-y-1/2 max-xsm:left-[105px] max-xsm:top-[390px]">
                <img src="/images/send/sign.png" className=" bg-white w-[70px] h-[45px] mx-auto" alt="signature" />
                <p className="text-[10px] text-purple-700 font-medium">National General Secretary AIDEOA</p>
              </div>
            </div>
            <div className=" text-white text-center left-1/2 bottom-[-16px] absolute transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-[11px] ">Sijua more, katrasgarh, Dhanbad, jharkhand, 828113</p>
            </div>
            <img src="/card/upper.svg" className="max-xsm:w-full" alt="upper" />
          </div>
        </div> : <div
          id="backcover"
          onMouseLeave={() => { setShow(true) }}
          className="  bg-red-200 border   border-gray-500 rounded-[30px] overflow-hidden max-xsm:w-[90%] max-xsm:h-fit "
        >
          <div className="relative">
            <img src="/card/lower.svg" className=" max-xsm:w-full w-[391px] h-[190px] max-sm:h-fit" alt="lower svg" />
            <div className="absolute flex top-[10px] max-sm:w-full ">
              <img
                src="/images/logo.png"
                className="h-[50px] w-[50px] "
                alt="logo"
              />

            </div>
            <p className=" absolute top-4 left-6 mx-2 px-3 text-sm text-white text-center font-semibold">
              All india diploma engineers & Officials Association (AIDEOA)
            </p>

            <div className="max-xsm:w-full max-xsm:p-[10px] relative top-[-40px]  px-6 py-4 h-[266px] w-[391px]">
              <p className="text-purple-800 max-xsm:text-center font-bold mx-4">Terms and Conditions</p>
              <p className="max-xsm:m-[5px] mx-5 my-2  text-[12px]">
                Lorem ipsum dolor sit amet, consectetul adipicing elit, sad diam
                nonummy nibh eulsmod. Lorem ipsum dolor sit amet, consectetul
                adipicing elit, sad diam nonummy nibh eulsmod.
              </p>
              <p className="max-xsm:m-[5px] mx-5 my-2  text-[12px]">
                Lorem ipsum dolor sit amet, consectetul adipicing elit, sad diam
                nonummy nibh eulsmod. Lorem ipsum dolor sit amet, consectetul
                adipicing elit, sad diam nonummy nibh eulsmod.
              </p>
              <p className="max-xsm:m-[5px] mx-5 my-2  text-[12px]">
                Lorem ipsum dolor sit amet, consectetul adipicing elit, sad diam
                nonummy nibh eulsmod. Lorem ipsum dolor sit amet, consectetul
                adipicing elit, sad diam nonummy nibh eulsmod.
              </p>

              <div className="max-xsm:m-[5px] mx-5 flex  items-center gap-2">
                <p className="text-purple-800 font-bold">Valid Upto

                </p>
                <p className=" bg-white  text-centerrouded-full px-2 py-1 rounded-full text-xs">
                  31 March 2025
                </p>
              </div>
            </div>
            <div className="absolute text-white text-center left-1/2 bottom-[-16px] absolute transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-[11px] ">Sijua more, katrasgarh, Dhanbad, jharkhand, 828113</p>
            </div>
            <img src="/card/upper.svg" className=" max-xsm:w-full w-[391px] h-[91px] max-xsm:h-fit" alt="upper" />
          </div>
        </div>}

      </div>
    </div>
  );
};

export default IdCard;
