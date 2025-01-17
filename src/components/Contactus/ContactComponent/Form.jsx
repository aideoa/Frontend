import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
const Form = () => {
  const form = useRef();
  const [load,setLoad]=useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  setLoad(true)
      emailjs
        .sendForm('service_ushg9fn', 'template_otdv17i', form.current, {
          publicKey: 'GOelBbZDzzHgNv19g',
        })
        .then(
          () => {
            setLoad(false)
            toast.success('Email Sent');
            form.current.reset();
          },
          (error) => {
            setLoad(false)
            toast.error('An error occured');
          },
        );
    };
  return (

    <form className="flex flex-col gap-6 max-md:gap-4" ref={form} onSubmit={sendEmail}>
      <div >
        <label
          className="block text-gray-700 text-xl font-normal mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline"
          id="name"
          name="user_name" 
          type="text"
          placeholder="eg. John Doe"
        />
      </div>
      <div >
        <label
          className="block text-gray-700 text-xl font-normal mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="user_email"
          placeholder="eg. johndoe@gmail.com"
        />
      </div>
      <div >
        <label
          className="block text-gray-700 text-xl font-normal mb-2"
          htmlFor="number"
        >
          Contact No.
        </label>
        <input
          className="shadow border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline"
          id="phone_no"
          type="number"
          name="number"
          placeholder="eg. 99294427429"
        />
      </div>

      <div >
        <label
          className="block text-gray-700 text-xl font-normal mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow border text-justify rounded-2xl w-full h-36 py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline max-md:h-28"
          id="message"
          style={{ resize: "none" }}
          name="message"
          placeholder="eg. Hi, I have a doubt related to study materials?"
        />
      </div>


      <div className="flex items-center justify-center">
        <button
        value="Send" type="submit"
          className=" membershipBtn text-white text-lg font-normal w-52 min-h-10 rounded-2xl focus:outline-none focus:shadow-outline"
      
        >
         {load ?'Sending..':'Send Message'}
        </button>
      </div>
    </form>
  )
}

export default Form