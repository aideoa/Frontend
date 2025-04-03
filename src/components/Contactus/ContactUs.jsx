import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import ContactForm from "./ContactComponent/ContactForm.jsx";
import TopImageCard from "../Cards/TopImageCard.jsx";
import EmailNotiCard from "../Cards/EmailNotiCard.jsx";
import Footer from "../Cards/Footer.jsx";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-14">
      <TopImageCard title={"Contact Us"} image={"/enhanceimage/Contact.png"} />

      {/* Loader for ContactForm */}
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <ThreeCircles height="50" width="50" color="#6e00fa" />
        </div>
      ) : (
        <ContactForm />
      )}

{isLoading ? (
        <div className="flex justify-center items-center h-40">
          <ThreeCircles height="50" width="50" color="#6e00fa" />
        </div>
      ) : (
        <EmailNotiCard />
      )}

      
      <Footer />
    </div>
  );
};

export default ContactUs;
