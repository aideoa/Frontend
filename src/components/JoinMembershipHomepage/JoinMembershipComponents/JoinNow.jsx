
import React, { useState, useContext, useEffect, useRef } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import axios from "axios";

const JoinNow = () => {
  const membershipfee = 100;
  const minDonation = 100;
  const [isBoxVisible, setIsBoxVisible] = useState(false); // State to toggle visibility
  const nav = useNavigate();
  const [donationamount, setDonationamount] = useState("");
  const [paymentForm, setPaymentForm] = useState("");
  const paymentFormRef = useRef(null); // Reference for appending form
  const { user, authToken } = useContext(AuthContext);

  if (!user) nav("/login");

  const toggleBoxVisibility = () => {
    setIsBoxVisible(true); // Toggle visibility
  };


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

  //   useEffect(() => {
  //     const paymentFormId =  document.getElementById("payment_post")
  //     if (paymentFormId)
  //     {
  //       paymentFormId.submit()
  //     }
  // }, [paymentForm]);


  const handlePayment = async () => {
    if (donationamount < minDonation) {
      alert(`Minimum amount to join membership is ₹${minDonation}. Resetting to ₹${minDonation}.`);
      setDonationamount(minDonation); // Reset input field
      return;
    }
    // Calculate the actual donation amount by subtracting the membership fee
    const actualDonationAmount = donationamount - membershipfee;
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BACKEND_URL}/payu/pay`,
        {
          firstname: user.fullName,
          email: user.email,
          phone: user.mobile,
          amount: parseFloat(donationamount),
          productinfo: "join + donation",
          membershipfee: membershipfee,
          donationamount: parseFloat(actualDonationAmount)
        }
      );

      console.log("Payment response:", res.data);
      setPaymentForm(res.data); // Store the HTML response
    } catch (error) {
      console.log("Error in getting payment:", error.message);
    }
  };



  return (
    <>
      {/* This div will safely hold the dynamic payment form */}
      <div ref={paymentFormRef}></div>

      {/*      <div dangerouslySetInnerHTML={{__html: paymentForm}}></div> */}
      <div className="flex items-center justify-center h-full mt-24 max-sm:p-2">
        <div className="w-96 flex flex-col gap-6">
          <p className="text-center font-normal">
            <span className="text-AIDEOTYPO font-medium">Aideoa</span> platform
            is free to use, but if you need to apply for{" "}
            <span className="text-AIDEOTYPO font-medium">ID card</span>, join
            our membership..
          </p>
          {/* Button to toggle the visibility of the box */}
          <div className="relative w-full">
            {/* Membership Box with Blur Effect initially */}
            <div
              className={`relative flex px-5 items-center justify-between w-full h-20 rounded-2xl border-2 border-blue-600
          ${isBoxVisible ? 'bg-white/100 filter-none' : 'bg-white/50 filter blur-lg'}
          transition-all duration-300`}
            >
              <div className="flex gap-3">
                <FaCircleCheck size={20} className="mt-2 text-blue-600" />
                <div className="flex flex-col">
                  <p className="font-bold text-base">One financial year</p>
                  <p className="text-sm font-semibold -mt-1 text-slate-700">
                    Membership Fee
                  </p>
                </div>
              </div>
              <p className="text-4xl font-semibold text-blue-700">{membershipfee}₹</p>
            </div>

            {/* Button Positioned Over Membership Box */}
            {!isBoxVisible && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 py-4 bg-[#8255b8] text-white rounded-md text-lg shadow-lg hover:bg-[#a983d8] transition-all"
                onClick={toggleBoxVisibility}
              >
                Show Membership Fee
              </button>

            )}
          </div>

          <p className="text-AIDEOTYPO text-lg">Enter the amount to join AIDEOA</p>
          <input
            required
            placeholder="eg. 100"
            type="number"
            value={donationamount}
            min={minDonation}
            style={{
              appearance: "textfield",
              MozAppearance: "textfield",
              WebkitAppearance: "none",
              margin: 0,
            }}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value < 0) return;
              setDonationamount(value);
            }}
            className="h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO"
          />

          <p className="text-AIDEOTYPO text-sm">
            Your total Membership and Donation amount is{" "}
            <span className="font-bold">
              {donationamount}₹
            </span>
            .
          </p>

          <button
            className="h-16 membershipBtn rounded-2xl text-white font-semibold"
            onClick={handlePayment}
          >
            Join now
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinNow;
