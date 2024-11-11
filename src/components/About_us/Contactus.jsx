
import Jumbotoron from "./Jumbotoron";
import Mission from "./Mission";
import Offering from "./Offering";

import TopImageCard from "../Cards/TopImageCard.jsx";
import EmailNotiCard from "../Cards/EmailNotiCard.jsx";
import Footer from "../Cards/Footer";

const Contactus = () => {
  return (
    <div className="overflow-x-hidden relative pt-14">
    
      <TopImageCard image={'/enhanceimage/About.png'} title={"About us"}/>
      <Jumbotoron />
      <Mission />
      <Offering />
     <EmailNotiCard />
      <Footer />
 
    </div>
  );
};

export default Contactus;
