import React from "react";
const Image = () => {
  return (
    <div
      id="image"
      style={{
        width: "100vw",
        backgroundImage: "url(../../../public/images/2.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[400px] mt-[60px] flex justify-center items-center text-white text-[50px]"
    >
      {" "}
      <p className="px-4 py-1 rounded-[20px] backdrop-blur-[10px]">About us</p>
    </div>
  );
};

export default Image;
