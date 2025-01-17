import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4 text-bold">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
