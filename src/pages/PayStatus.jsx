import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PayStatus = () => {
  const { amt , txnid , firstname , status  } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
        <div className="w-3/4 sm:w-1/2 bg-white shadow-md rounded-lg p-8 flex items-center justify-center flex-col space-y-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Status: <span className="text-blue-500">{status}</span>
          </h1>
          <h1 className="text-4xl font-bold text-center text-gray-800">
            ID: <span className="text-green-500">{txnid}</span>
          </h1>
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Amount: <span className="text-green-500">{amt}</span>
          </h1>
          <h1 className="text-4xl font-bold text-center text-gray-800">
            name: <span className="text-green-500">{firstname}</span>
          </h1>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition duration-200"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PayStatus;
