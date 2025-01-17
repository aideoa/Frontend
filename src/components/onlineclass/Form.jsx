import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
   
    };
  return (
    <div className="flex flex-col items-center justify-center  mb-20">
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
      <h1 className="text-2xl font-semibold mb-2 text-AIDEOTYPO">Dear Member,</h1>
      <p className="text-gray-700 mb-6">
        If you are interested in attending online classes through the AIDEOA platform, kindly enter your email address below and submit your feedback. Based on the majority of recommendations, we will consider developing an online learning platform to offer these classes.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="p-3 border rounded-md mb-4 focus:outline-none  "
          required
        />
        <button
          type="submit"
          className="bg-purplebtn text-white py-2 px-4 rounded-md hover:opacity-75 transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  </div>
  )
}

export default Form