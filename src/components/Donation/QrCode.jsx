import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";


const Payment = ({ setStep, amount, setAmount }) => {
  const [formData, setFormData] = useState({
    Name: "",
    mobileNumber: "",
    email: ""

  });
  const paymentFormRef = useRef(null); // Reference for appending form
  const [paymentForm, setPaymentForm] = useState("");
  const [donationamount, setDonationamount] = useState(amount);
  const [membershipfee, setMembershipfee] = useState(0);

  useEffect(() => {
    if (paymentForm && paymentFormRef.current) {
      // Clear the current content and append new HTML as DOM nodes
      paymentFormRef.current.innerHTML = ""; // Clear existing nodes
      const parser = new DOMParser();
      const doc = parser.parseFromString(paymentForm, "text/html");
      const formElement = doc.body.firstChild;

      if (formElement) {
        paymentFormRef.current.appendChild(formElement);
        // Submit the form programmatically
        formElement.submit();
      }
    }
  }, [paymentForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post(

        `${import.meta.env.VITE_API_BACKEND_URL}/payu/pay`,
        {
          firstname: formData.Name,
          email: formData.email,
          phone: formData.mobileNumber,
          amount: parseFloat(membershipfee) + parseFloat(donationamount),
          productinfo: "donation",
          membershipfee: membershipfee.toString(),
          donationamount: donationamount.toString(),
        }
      );

      console.log("Payment response:", res.data);
      setPaymentForm(res.data);
    } catch (error) {
      console.log(error)
    }
  };

  return (

    <>
      <div ref={paymentFormRef}></div>
      <div className=" bg-gray-50 flex justify-center ">
        <div className="flex  md:flex-row justify-center items-center w-full max-w-6xl px-4">
          <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8  md:mt-0">
            <h5 className="text-4xl font-semibold mb-4 text-center">
              Fill Your Detail
            </h5>
            {/*  <p className="text-center mb-6">Scan the QR code to pay ₹{amount}</p>
          <div className="flex justify-center mb-6">
            <QRCode value={qrCodeData} size={256} />
          </div> */}
            <div className="text-center mb-6">
              <h6 className="text-xl font-medium">Amount: ₹{amount}</h6>
            </div>
            <div className="flex flex-col gap-2">
              <input
                name="Name"
                value={formData.Name}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
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

    </>





  );
};

export default Payment;
