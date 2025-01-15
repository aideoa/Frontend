import React from "react";

const Card = (props) => {
  return (
    <>
      <div className=" items-center  flex flex-col justify-center sm:w-[300px]  mx-auto my-4 ">
        <div
          id="image"
          className="flex rounded-full  border  border-black flex-row justify-center items-center  mx-auto sm:w-[200px] sm:h-[200px] sm:my-[10px]"
        >
          <img
            src={props?.name[2]||'/user1.png'}
            className="rounded-full w-[200px] h-[200px]"
            alt="card"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-center font-bold sm:text-[18px] sm:px-[10px] sm:pb-1 sm:pt-[10px]">
            {props.name[0]}
          </h3>
          <p className="text-center sm:px-[10px] sm:pt-1 sm:pb-[10px]">
            {props.name[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
