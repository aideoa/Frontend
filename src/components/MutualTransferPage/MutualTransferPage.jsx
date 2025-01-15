import FormDescription from "./components/FormDescription";

import Info from "./components/Info";
import SelectSwitch from "./components/SelectSwitch";
import Form from "./components/Form";

import EmailNotiCard from "../Cards/EmailNotiCard";
import Footer from "../Cards/Footer";
import TopImageCard from "../Cards/TopImageCard";
import Slider from "../Cards/Slider/Slider";
import ReviewForm from "./components/ReviewForm";
const MutualTransferPage = () => {
  return (
    <div className="pt-14">
      <TopImageCard
        image={"enhanceimage/Mutual.png"}
        pos={'30% 30%'}
        title="AIDEOA Mutual Transfer Portal"
        description="Welcome to the Aidoea Mutual Transfer Portal"
        position={"custom-pos"}
      />
      <Info />
      <FormDescription />
      {/* <SelectSwitch /> */}
      <Form />
      <Slider />
      <EmailNotiCard />
      <Footer />
    </div>
  );
};
export default MutualTransferPage;
