import React from "react";
const data = [
  {
    title: "Empower and Advocate",
    description: "We tackle the unique challenges faced by mining students, from examination hurdles and promotion pathways to certificate issuance by D.G.M.S and job vacancies. We stand with you every step of the way.",
    icon: "./images/send/setting.png"
  },
  {
    title: "Community Leadership",
    description: "Our involvement in key events related to promotions, examinations, and grievance resolutions, ensures that voices from every corner of the mining sector are heard and respected.",
    icon: "./images/send/profile-2user.png"
  },
  {
    title: "Educational Excellence",
    description: "We offer a wealth of study materials, including free books, MCQ questions, and detailed notes for a variety of mining exams like Mining Sirdar, Overman, Gas Testing, Surveyor, 2nd Class Manager, and 1st Class Manager.",
    icon: "./images/send/Icon.svg"
  }
];
const Mission = () => {

  return (
    <>
      <div className="text-center text-[35px] font-semibold my-10 ">Our Mission</div>
      <div className="flex items-center justify-center flex-wrap gap-10">

        {
          data.map((item, idx) => {
            return (
              <div
                id="line1"
                className="  my-4 lightdropshadowbox rounded-2xl bg-[#0000000D] flex flex-col px-7  items-center w-80 h-[470px] justify-center gap-10"
                key={idx}
              >
                <div className="flex max-md:flex-col  lg:mx-3  ">
                  <img src={item.icon} className="w-[50px] " alt="icon" />
                </div>
                <div className="flex flex-col   ">
                  <h3 className=" text-xl font-semibold text-center">
                    {item.title}
                  </h3>
                  <p className="p-4 text-[#00000099] text-lg  text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })
        }




      </div>
    </>
  );
};

export default Mission;
