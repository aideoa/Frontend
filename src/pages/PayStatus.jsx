import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'; 

const PayStatus = () => {
  const { amt, txnid, firstname, status } = useParams();
  const navigate = useNavigate();

  const isSuccess = status?.toLowerCase() === 'success';

  return (
    <div className="bg-gradient-to-r from-[#8754c5] to-[#aa86d6] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6">
        {isSuccess ? (
          <CheckCircleIcon className="w-16 h-16 text-green-500" />
        ) : (
          <XCircleIcon className="w-16 h-16 text-red-500" />
        )}

        <h2 className="text-2xl font-semibold text-gray-800">Payment {status}</h2>

        <div className="w-full space-y-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Name:</span>
            <span className="text-gray-900 font-semibold">{firstname}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Transaction ID:</span>
            <span className="text-gray-900 font-semibold">{txnid}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Amount:</span>
            <span className="text-gray-900 font-semibold">₹{amt}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-[#3f1473] hover:bg-[#8a63bb] text-white rounded-lg shadow-md transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PayStatus;
