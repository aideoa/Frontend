import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

import FormDescription from "./components/FormDescription";
import Info from "./components/Info";
import Form from "./components/Form";
import EmailNotiCard from "../Cards/EmailNotiCard";
import Footer from "../Cards/Footer";
import TopImageCard from "../Cards/TopImageCard";
import Slider from "../Cards/Slider/Slider";

const MutualTransferPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-14 min-h-screen">
      <TopImageCard
        image={"enhanceimage/Mutual.png"}
        pos={"30% 30%"}
        title="AIDEOA Mutual Transfer Portal"
        description="Welcome to the Aideoa Mutual Transfer Portal"
        position={"custom-pos"}
      />

      {isLoading ? (
        <div className="flex justify-center items-center h-60">
          <ThreeCircles height="50" width="50" color="#6e00fa" />
        </div>
      ) : (
        <>
          <Info />
          <FormDescription />
          <Form />
        </>
      )}
      <Slider />
      <EmailNotiCard />
      <Footer />
    </div>
  );
};

export default MutualTransferPage;
