import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import TopImageCard from "../Cards/TopImageCard";
import Form from "./Form";
import Instructions from "./Instructions";
import Footer from "../Cards/Footer";
import EmailNotiCard from "../Cards/EmailNotiCard";

const QueryForm = () => {
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
      <TopImageCard title="Query " image={"/enhanceimage/Query.png"} />
      <div className="container mx-auto px-20 max-xl:px-0">
        <h2 className="text-4xl font-bold mb-6 text-center text-black">
          Query Form
        </h2>
        <div className="flex lightdropshadowbox max-lg:flex-col rounded-2xl overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center h-40 w-full">
              <ThreeCircles height="50" width="50" color="#6e00fa" />
            </div>
          ) : (
            <>
              <div className="w-1/2 shadow-md max-lg:w-full">
                <Instructions />
              </div>
              <div className="w-1/2 max-lg:w-full">
                <Form />
              </div>
            </>
          )}
        </div>
      </div>
      <EmailNotiCard />
      <Footer />
    </div>
  );
};

export default QueryForm;
