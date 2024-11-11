import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
const JoinNow = () => {
  const [fee, setFee] = useState(100);
  const [amount, setAmount] = useState();

  return (
    <div className="flex items-center justify-center h-full mt-24 max-sm:p-2">
      <div className="w-96 flex flex-col gap-6">
        <p className="text-center font-normal">
          <span className="text-AIDEOTYPO font-medium">Aideoa</span> platform is
          free to use, but if you need to apply for{" "}
          <span className="text-AIDEOTYPO font-medium">ID card</span>, join our
          membership..
        </p>
        <div className="flex px-5 cursor-pointer items-center justify-between w-full h-20 rounded-2xl border-2 border-AIDEOTYPO">
          <div className="flex gap-3">
            <FaCircleCheck size={20} className=" mt-2 text-AIDEOTYPO " />
            <div className="flex flex-col">
              <p className="font-bold  text-base">One year membership</p>
              <p className="text-sm font-semibold -mt-1 text-slate-600">
                Pay 100 for 1 year
              </p>
            </div>
          </div>

          <p className="text-4xl font-semibold">{fee}₹</p>
        </div>
        <p className="text-AIDEOTYPO  text-lg">
          Enter a custom donation amount
        </p>
        <input
          required
          placeholder="eg. 0"
          type="number"
          value={amount}
          style={{
            appearance: "textfield",
            MozAppearance: "textfield",
            WebkitAppearance: "none",
            margin: 0,
          }}
          onChange={(e) => {
            if (+e.target.value < 0) {
              setAmount(0);
              return;
            }
            setAmount(e.target.value);
          }}
          className="h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO"
        />

        <p className="text-AIDEOTYPO text-sm ">
          Your total Membership and Donation amount is{" "}
          <span className="font-bold">{!amount ? fee : fee + +amount}₹</span>.
        </p>

        <button className="h-16 membershipBtn rounded-2xl text-white font-semibold">
          Join now
        </button>
      </div>
    </div>
  );
};

export default JoinNow;
