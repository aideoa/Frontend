import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Qrcode from "react-qr-code"
import { useNavigate } from "react-router-dom";
import useStudentIdCard from "../../../hooks/useIdCard";
const IdCardPurple = ({data}) => {
    const [show, setShow] = useState(true);
 
    const [userImageBase64, setUserImageBase64] = useState("");

    useEffect(() => {
      const convertImageToBase64 = async (imageUrl) => {
        try {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            setUserImageBase64(reader.result);
          };
          reader.readAsDataURL(blob);
        } catch (error) {
          console.error("Error converting image to Base64:", error);
        }
      };
  
      const imageUrl = data?.studentPhoto;
      convertImageToBase64(imageUrl); 
    }, []);
  
     // const name = "james";
  // const id = "45678";
  const value = `Employee name is ${data.fullName} and AIDEOA ID is ${data.aideoaIdNo}`;
    console.log(data)
    function getExpiryDate(currentDate) {
      const year = currentDate.getFullYear();
      const expiryMonth = 2;
      const expiryDay = 31;
    
     
      let expiryDate = new Date(year, expiryMonth, expiryDay);
    
     
      if (currentDate > expiryDate) {
       
        expiryDate = new Date(year + 1, expiryMonth, expiryDay);
      }
    
      return expiryDate;
    }
    const currentDate = new Date()

    const updatedExpiryDate = getExpiryDate(currentDate)

  const generatePdf = async () => {
    try {
      const frontCoverElement = document.getElementById("frontcover");
      const backCoverElement = document.getElementById("backcover");
        console.log(frontCoverElement)
       
      // Ensure both elements exist before proceeding
      if (!frontCoverElement || !backCoverElement) {
        throw new Error("ID card elements not found on the page.");
      }

      // Capture the front cover first
      const frontCanvas = await html2canvas(frontCoverElement);
      const frontImage = frontCanvas.toDataURL("image/png");

      // Capture the back cover after front cover is done
      const backCanvas = await html2canvas(backCoverElement);
      const backImage = backCanvas.toDataURL("image/png");

      // Create a PDF document
      const pdf = new jsPDF("landscape", "px", "a4");

      // Add front and back side images to the PDF
      pdf.addImage(frontImage, "PNG", 20, 20, 280, 400); // Adjust size as per your design
      pdf.addImage(backImage, "PNG", 320, 20, 280, 400); // Place next to the front cover

      // Save the PDF
      pdf.save("id-card.pdf");
    } catch (error) {
      console.error("Error generating PDF: ", error);
      alert(`Error generating PDF: ${error.message}`);
    }
  };

  return (
    <div className="flex  flex-col w-full justify-start z-0">
      <div className="flex  flex-col justify-start items-center">
        <button
          onClick={generatePdf}
          className="bg-purple-600 text-white py-2 px-4 mb-4 rounded-lg"
        >
          Download ID Card PDF
        </button>
        <div className="relative w-full flex justify-center items-center h-[600px]">
        <div
            id="frontcover"
            onMouseEnter={() => {
              setShow(false);
            }}
            className={`bg-purple-200 absolute   ${show?" z-10":" z-0"} border border-gray-500 rounded-[30px] overflow-hidden max-xsm:w-[90%]`}
          >
            <div className="relative min-height-[549px]">
              <img src="/card/lower.svg" className="max-xsm:w-full" alt="lower" />
              <div className="absolute flex top-[10px]">
                <img src="/images/logo.png" className="h-[50px] w-[50px]" alt="logo" />
              </div>
              <p className="absolute top-4 left-6 mx-2 px-3 text-sm text-white text-center font-semibold">
                All india diploma engineers & Officials Association (AIDEOA)
              </p>

              <div className="h-[266px] w-[391px] ">
                <img
                  // src={userImageBase64}
                  src="https://www.aideoa.org.in/aideoapics/BIKASHFDAS.jpg"
                  className="absolute border-[2px] border-purple-400 h-[144px] w-[144px] top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                  alt="i"
                />
                <p className="my-10px absolute text-[20px] top-[220px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold">
                  {/* {data?.name} */}
                  Bikash Das
                </p>

                <div className="my-[10px] w-[292px] h-[91px] mx-auto bg-white rounded-lg left-1/2 top-[300px] absolute transform -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center">
                <div className="flex flex-col text-[11px] justify-start items-start">
                    <div className="flex justify-start items-start">
                      <h4 className="font-bold mx-1">AIDEOA ID :</h4>
                      <p>{data?.aideoaIdNo}</p>
                    </div>
                    <div className="flex justify-start items-start">
                      <h4 className="font-bold mx-1">Contact :</h4>
                      <p>{data?.mobile}</p>
                    </div>
                    <div className="flex justify-start items-start">
                      <h4 className="font-bold mx-1">E-mail :</h4>
                      <p>{data?.email}</p>
                    </div>
                    <div className="flex justify-start items-start">
                      <h4 className="font-bold mx-1">Address :</h4>
                      <p>{data?.address ? data.address : 'N/A'}</p>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col justify-start items-start left-[130px] top-[420px] absolute transform -translate-x-1/2 -translate-y-1/2 max-xsm:left-[105px] max-xsm:top-[390px]">
                  <img
                    src="/images/send/sign.png"
                    className=" w-[70px] h-[45px] mx-auto"
                    alt="signature"
                  />
                  <p className="text-[10px] text-purple-700 font-medium">
                    National General Secretary AIDEOA
                  </p>
                </div>
                <div id="qrcode " className="absolute top-[72%] left-[75%] max-xsm:left-[78%]">
                    <Qrcode value={`${value}`} size={50} />
                </div>
              </div>
              <div className=" text-white text-center left-1/2 bottom-[-16px] absolute transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-[11px]">
                  Sijua more, katrasgarh, Dhanbad, jharkhand, 828113
                </p>
              </div>
              <img src="/card/upper.svg" className="max-xsm:w-full" alt="upper" />
            </div>
          </div>
          <div
            id="backcover"
            onMouseLeave={() => {
              setShow(true);
            }}
            className={`  bg-purple-200 absolute ${show ? " z-0":" z-10"} border border-gray-500 rounded-[30px] overflow-hidden max-xsm:w-[90%] max-xsm:h-fit`}
          >
            <div className="relative min-height-[549px]">
              <img
                src="/card/lower.svg"
                className="max-xsm:w-full w-[391px] h-[190px] max-sm:h-fit"
                alt="lower svg"
              />
              <div className="absolute flex top-[10px] max-sm:w-full ">
                <img src="/images/logo.png" className="h-[50px] w-[50px]" alt="logo" />
              </div>
              <p className="absolute top-4 left-6 mx-2 px-3 text-sm text-white text-center font-semibold">
                All india diploma engineers & Officials Association (AIDEOA)
              </p>

              <div className="max-xsm:w-full max-xsm:p-[10px] relative top-[-40px] px-6 py-4 h-[266px] w-[391px]">
              <p className="text-purple-800 max-xsm:text-center font-bold mx-4">
                  Terms and Conditions
                </p>
                <p className="max-xsm:m-[5px] mx-5 my-2 text-[12px]">

                  <span className="-ml-3">1.</span><span> Students do not hold AIDEOA membership.</span>

                </p>
                <p className="max-xsm:m-[5px] mx-5 my-2 text-[12px]">

                <span className="-ml-3">2.</span><span> If placed as an employee, you may request AIDEOA membership.</span>
                </p>
                <p className="max-xsm:m-[5px] mx-5 my-2 text-[12px]">


                <span className="-ml-3">3.</span><span> 3. The QR code on the ID card is dynamically linked to our server for verification.
                </span>
                </p>

                <div className="max-xsm:m-[5px] mx-5 flex items-center gap-2">
                  <p className="text-purple-800 font-bold">Valid Upto</p>
                  <p className="bg-white text-centerrouded-full px-2 py-1 rounded-full text-xs">
                    {updatedExpiryDate.toLocaleString().slice(0,9)}
                  </p>
                </div>
                {/* <div id="qrcode " className="absolute top-[100%] left-[72%] max-xsm:left-[78%]">
                    <Qrcode value={`${value}`} size={50} />
                </div> */}
              </div>
              <div className=" text-white text-center left-1/2 bottom-[-16px] absolute transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-[11px]">
                  Sijua more, katrasgarh, Dhanbad, jharkhand, 828113
                </p>
              </div>
              <img src="/card/upper.svg" className="max-xsm:w-full" alt="upper svg" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default IdCardPurple;
