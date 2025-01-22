import React from "react";

const applications = [
  {
    name: "Jenny Wilson",
    email: "w.lawson@example.com",
    time: "6:00 PM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Devon Lane",
    email: "jgraham@example.com",
    time: "7:30 PM",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Devon Lane",
    email: "jgraham@example.com",
    time: "6:00 PM",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Devon Lane",
    email: "jgraham@example.com",
    time: "6:00 PM",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString("en-US", options);
};

const ID_CARD = ({setActiveComponent , totalMember}) => {
  return (
    <>
      {/* Header */}
      <div className="flex w-[94.4%] h-[16.67%] flex-col  justify-between items-center mb-1">
        <div className="h-[53.57%] w-full flex justify-between items-center  my-1">
          <h1 className="text-lg font-semibold">ID Card Application</h1>
          <a onClick={()=>{setActiveComponent('Members')}} className="text-purple-600 cursor-pointer text-sm">
            See All
          </a>
        </div>

        <div className="w-full h-[39.28%]">
          <p className="text-sm text-[400] text-gray-500">
            Recently Id Applied for ID cards.
          </p>
        </div>
      </div>

      {/* Application List */}
      <div className="w-[94.4%] h-[80%]">
        {totalMember && totalMember.users.map((application, index) => (
          <div
            key={index}
            className="flex h-[25%] justify-between items-center"
          >
            <div className="flex w-[63.63%] h-full items-center">
              {/* Profile Picture */}
              <div className="w-[24.13%] h-full">
                <img
                  src={application.image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                  alt={application.fullName}
                  className=" h-[60%] w-[80%] max-lg:h-[40px] max-lg:w-[40px] rounded-full"
                />
              </div>
              <div className="w-[75.86%] h-full">
                <div className="font-[700] text-[13px] text-gray-900 w-full h-[46.80%]">
                  {application.fullName}
                </div>
                <div className="text-sm text-[13px] font-[400] h-[46.8%] w-full">
                  {application.email}
                </div>
              </div>
            </div>

            {/* Time */}
            <div className="text-gray-500 h-[44.68%] w-[32.6%] text-[13px] text-right font-normal self-start">
              <p>{formatDate(application.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ID_CARD;
