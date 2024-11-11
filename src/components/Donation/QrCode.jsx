import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import QRCode from "react-qr-code";

const Payment = ({ setStep, amount,setAmount }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    transactionId: ""
  });

  const upiId = "vinaynathtiwary-1@okicici";
  const qrCodeData = `upi://pay?pa=${upiId}&pn=${formData.name}&am=${amount}&cu=INR`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async() => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/donations`,{donationAmount:amount,...formData});
      if (res.status === 200) {
        toast.success(res.data.message);
        setStep(1);
        setFormData({
          name: "",
          mobileNumber: "",
          transactionId: ""
        })
        setAmount()
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className=" bg-gray-50 flex justify-center ">
      <div className="flex  md:flex-row justify-center items-center w-full max-w-6xl px-4">
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8  md:mt-0">
          <h5 className="text-2xl font-semibold mb-4 text-center">
            Payment QR Code
          </h5>
          <p className="text-center mb-6">Scan the QR code to pay ₹{amount}</p>
          <div className="flex justify-center mb-6">
            <QRCode value={qrCodeData} size={256} />
          </div>
          <div className="text-center mb-6">
            <h6 className="text-xl font-medium">Amount: ₹{amount}</h6>
          </div>
          <div className="flex flex-col gap-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO"
            />
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO"
            />
            <input
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              placeholder="Your Transaction Id"
              className="h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
