
import ContactForm from "./ContactComponent/ContactForm.jsx";
import TopImageCard from "../Cards/TopImageCard.jsx";
import EmailNotiCard from "../Cards/EmailNotiCard.jsx";
import Footer from '../Cards/Footer.jsx'

const ContactUs = () => {
  return (
    <div className="pt-14">
    
      <TopImageCard title={"Contact Us"} image={'/enhanceimage/Contact.png'}/>
      <ContactForm />
      <EmailNotiCard />
      <Footer />
    </div>
  );
};

export default ContactUs;
