import React from "react";
import { BsChatSquareText } from "react-icons/bs";
import Map from "./Map";
import Form from "./Form";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const ContactForm = () => {
  return (
    <div className="px-20 max-md:px-10 max-sm:px-5">
      <div className="container mx-auto my-12 ">
        <h2 className="text-3xl font-medium leading-10">
          Get in touch with us
        </h2>
        <div className="flex mt-6  h-full overflow-hidden  max-lg:flex-col max-lg:max-h-full">
          <div className="flex flex-col w-1/2  p-7 pb-16  bg-gray-100 lg:rounded-l-2xl max-lg:rounded-t-2xl max-lg:w-full">
            <div className="bg-purple-100 border border-purple-200 flex gap-5  items-center mb-7 p-3 justify-center  rounded-2xl ">
              <BsChatSquareText className="min-w-5 text-purple-500" />
              <p className="text-gray-500 text-lg font-normal max-lg:text-base max-md:text-sm ">
                Hi, wanna talk? Use the below form or email us -
                aideoa2020@gmail.com
              </p>
            </div>
            <Form />
          </div>
          <div className=" w-1/2 relative bg-blue-200 lg:rounded-r-2xl max-h-full max-lg:h-64 max-lg:rounded-b-2xl overflow-hidden max-lg:w-full opacity-70 hover:opacity-95  cursor-pointer">
        <Map />
           <Link to="https://maps.app.goo.gl/kiStTc8tcc2L2dUN8" target="_blank"><button className='absolute top-1/2 left-1/2  transform  -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-500 px-6 py-3 text-lg text-white bg-black cursor-pointer opacity-85 rounded-2xl ' size={70} >View on map</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
