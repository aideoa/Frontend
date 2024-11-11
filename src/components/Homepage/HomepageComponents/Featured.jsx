import React from "react";
import { BsJournalArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
const featuredArr=[{head:"Our Team",tag:"Access a wide range of free study materials and resources to enhance your knowledge.",icon:"/Group.png",link:"/education"},
  {head:"Join Membership",tag:"Join our interactive online classes & get more exposure to real-world problem & solve it.",icon:"/laptop.png",link:"/membership"},
  {head:"Mutual Transfer Portal",tag:"The Mutual Transfer Portal helps mining professionals find and manage transfer opportunities efficiently.",icon:"/startup 1.png",link:"/mutualtransfer"}
  // ,{head:"Donation",tag:"Aideoa platform is free to use, but if you want to support us, you can donate us.",btn:<BsJournalArrowDown size={40} className="text-AIDEOTYPO"/>,link:"/donation"}
]

const Featured = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container  mx-auto ">
        <div className="flex flex-col  py-28 items-center gap-10 ">
          <h3 className="font-semibold text-[35px] leading-15">Featured Resources</h3>
          <p className="font-normal text-[15px] mb-10 text-[#797979]">
            Explore Our variety of Resources
          </p>
          <div className="flex gap-10 text-center flex-wrap justify-center">
            {featuredArr.map((content, idx) => {
              return <Link to={content?.link} key={idx}> <div className="w-[304px] h-[263px] rounded-3xl flex justify-center items-center flex-col gap-6">
                <div className="bg-[#6E00FA0D] w-[91px] h-[90px] rounded-2xl flex items-center justify-center">
                  {content?.icon ? <img
                    src={content.icon}
                    alt={content.head}
                    className="w-[47px] h-[41px] "
                  /> :
                    content?.btn
                  }
                </div>

                <div className="w-[332px] h-[129px] flex mt-2 flex-col gap-7 ">
                  <h5 className="font-semibold text-[19px]">{content.head}</h5>

                  <p className="font-normal px-2 text-[#797979] text-[16px] leading-7 tracking-wider">
                    {content.tag}
                  </p>
                </div>

              </div>
              </Link>
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
