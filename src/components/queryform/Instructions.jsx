import React from 'react'
const queryData = [
    {
      title: "Company Issues",
      description: "If you are facing any kind of issue within the company, you can fill out this query form to let us know."
    },
    {
      title: "Suggestions",
      description: "You can provide us with suggestions regarding any problems or concerns you have."
    },
    {
      title: "Corruption Reporting",
      description: "If there is any form of bribery or corruption happening in the office, you can file a complaint here."
    },
    {
      title: "Workplace Challenge",
      description: "If you are encountering obstacles in your tasks or facing difficulties during working hours, feel free to inform us."
    },
    {
      title: "Management Harassment",
      description: "If you are being troubled or harassed by management in any way, you can report the issue here."
    }
  ];
const Instructions = () => {
  return (
    <div className="max-w-4xl mx-auto  p-6   bg-white  h-full">
      <div className='w-full flex justify-center'>
      <img src="/query.png" className='w-64'></img>
        </div>
      
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Queries and Suggestions</h1>
    <div className="space-y-2">
      {queryData.map((query, index) => (
        <div key={index} className="  ">
          <h2 className="text-lg font-semibold text-purple-600">{query.title}</h2>
          <p className=" text-gray-500 font-semibold mt-1">{query.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Instructions