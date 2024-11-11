import React from "react";

const data = [
  {
    title: "Rich Study Resources",
    description: "Dive into our extensive collection of study materials tailored to help you conquer your mining examinations and advance your career.",
    icon: "./images/send/Icon.svg"
  },
  {
    title: "Interactive Online Classes",
    description: "Participate in our lively online classes where students from across the country come together to discuss mining topics, share insights, etc.",
    icon: "./images/send/Icon (1).svg"
  }
];

const Offering = () => {

  return (
    <div className="flex flex-col container mx-auto items-center  justify-center my-10">
      <h3 className="text-3xl font-semibold mb-20">Our Offerings</h3>
      <div className="flex gap-8 flex-wrap justify-evenly w-full max-sm:p-4 max-xl:gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center gap-5 items-center bg-[#0000000D] p-6 rounded-2xl lightdropshadowbox max-w-[450px] max-h-[340px] max-xl:max-w-[400px]"
          >
            <img className="text-purple-600 text-3xl mb-4" src={item.icon} alt="icon" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-[#00000099] px-8 text-lg text-center ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Offering;
