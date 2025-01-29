import React, { useState, useContext, useEffect, useRef } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import axios from "axios";

const JoinNow = () => {
  const [membershipfee, setMembershipfee] = useState(100);
  const nav = useNavigate();
  const [donationamount, setDonationamount] = useState(0);
  const [paymeantForm, setPaymentForm] = useState("");
  const paymentFormRef = useRef(null); // Reference for appending form
  const { user, authToken } = useContext(AuthContext);

  if (!user) nav("/login");


/* useEffect(() => {
    if (paymentForm && paymentFormRef.current) {
      // Clear the current content and append new HTML as DOM nodes
      pymentFormRef.current.innerHTML = ""; // Clear existing nodes
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
 */
  useEffect(() => {
    const paymentFormId =  document.getElementById("payment_post")
    if (paymentFormId)
    {
      paymentFormId.submit()
    }
}, [paymentForm]);


  const handlePayment = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BACKEND_URL}/payu/pay`,
        {
          firstname: user.fullName,
          email: user.email,
          phone: user.mobile,
          amount: parseFloat(membershipfee) + parseFloat(donationamount),
          productinfo: "join + donation",
          membershipfee : membershipfee,
          donationamount : donationamount
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
     {/* <div ref={paymentFormRef}></div>   */}

     <div dangerouslySetInnerHTML={{__html: paymentForm}}></div>


      

      <div className="flex items-center justify-center h-full mt-24 max-sm:p-2">
        <div className="w-96 flex flex-col gap-6">
          <p className="text-center font-normal">
            <span className="text-AIDEOTYPO font-medium">Aideoa</span> platform
            is free to use, but if you need to apply for{" "}
            <span className="text-AIDEOTYPO font-medium">ID card</span>, join
            our membership..
          </p>
          <div className="flex px-5 cursor-pointer items-center justify-between w-full h-20 rounded-2xl border-2 border-AIDEOTYPO">
            <div className="flex gap-3">
              <FaCircleCheck size={20} className=" mt-2 text-AIDEOTYPO " />
              <div className="flex flex-col">
                <p className="font-bold text-base">One year membership</p>
                <p className="text-sm font-semibold -mt-1 text-slate-600">
                  Pay 100 for 1 Session
                </p>
              </div>
            </div>

            <p className="text-4xl font-semibold">{membershipfee}₹</p>
          </div>
          <p className="text-AIDEOTYPO text-lg">Enter a custom donation amount</p>
          <input
            required
            placeholder="eg. 0"
            type="number"
            value={donationamount}
            style={{
              appearance: "textfield",
              MozAppearance: "textfield",
              WebkitAppearance: "none",
              margin: 0,
            }}
            onChange={(e) => {
              if (+e.target.value < 0) {
                setDonationamount(0);
                return;
              }
              setDonationamount(e.target.value);
            }}
            className="h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO"
          />

          <p className="text-AIDEOTYPO text-sm">
            Your total Membership and Donation amount is{" "}
            <span className="font-bold">
              {!donationamount? membershipfee : membershipfee + +donationamount}₹
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
