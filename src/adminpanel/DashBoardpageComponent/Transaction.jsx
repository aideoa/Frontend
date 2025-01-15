import React from "react";

const transactions = [
  {
    status: "Completed",
    name: "Demi Wilkinson",
    phone: "9876541230",
    amount: "₹1550",
    date: "Jan 17, 2022",
    email: "lana@untitledui.com",
    color: "bg-green-100 text-green-700",
    dotColor: "bg-green-500",
  },
  {
    status: "Pending",
    name: "Candice Wu",
    phone: "9876541230",
    amount: "₹2000",
    date: "Jan 17, 2022",
    email: "lana@untitledui.com",
    color: "bg-yellow-100 text-yellow-700",
    dotColor: "bg-yellow-500",
  },
  {
    status: "Canceled",
    name: "AIDEOA Hosts",
    phone: "9876541230",
    amount: "₹1250",
    date: "Jan 17, 2022",
    email: "lana@untitledui.com",
    color: "bg-red-100 text-red-700",
    dotColor: "bg-red-500",
  },
];

const TransactionTable = () => {
  return (
    <div className=" lg:min-w-full  min-w-[700px]">
      {/* Header with See All Transactions */}
      <div className="flex justify-between max-lg:w-full  items-center  p-4">
        <div className="w-full  flex justify-between items-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-lg font-semibold">Transactions</h1>
            <p className="text-sm text-gray-500">
              Recently transaction overall fees of users
            </p>
          </div>
          <a href="#" className="text-purple-600 text-sm">
            See All Transactions
          </a>
        </div>
      </div>

      {/* Transaction List */}
      <div className=" ">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex  items-center justify-between p-1 bg-white rounded-lg shadow-sm"
          >
            {/* Left: Status Icon and Name */}
            <div className="flex w-[45%] items-center justify-between space-x-4">
              <div className="flex w-[41.02%]  items-center">
                {/* Status Indicator with color */}
                <span
                  className={`w-4 h-4 rounded-full ${transaction.dotColor}`}
                ></span>
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-sm ${transaction.color}`}
                >
                  {transaction.status}
                </span>
              </div>
              <div className="flex w-[50%] flex-col justify-center items-center">
                <div className="font-medium">{transaction.name}</div>
                <div className="text-sm text-gray-500">{transaction.phone}</div>
              </div>
            </div>

            {/* Middle: Amount and Date */}
            <div className="text-right w-[15%] flex flex-col justify-center items-center">
              <div className="font-semibold">{transaction.amount}</div>
              <div className="text-sm text-gray-400">{transaction.date}</div>
            </div>

            {/* Right: Email */}
            <div className="text-sm w-[35%] text-center text-gray-400">
              {transaction.email}
            </div>

            {/* Menu Dots */}
            <div className="w-[5%]">
              <svg
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75v.008M12 12v.008m0 5.242v.008"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
