import Card from "./EventPageComponents/Card/Card";
import ImageHeader from "./EventPageComponents/ImageHeader/ImageHeader";
import InfoHeader from "./EventPageComponents/InfoHeader/InfoHeader";
import NewsCard from "./EventPageComponents/NewsCard/NewsCard";
import CompanyCardCrousel from "./EventPageComponents/CompanyCardCrousel/CompanyCardCrousel";
import Logo from "./EventPageComponents/Logo/Logo";
import CompanyHeader from "./EventPageComponents/CompanyCardCrousel/CompanyHeader/CompanyHeader";
import EmailNotiCard from "../Cards/EmailNotiCard";
import Footer from "../Cards/Footer";
import TopImageCard from "../Cards/TopImageCard";
import Slider from "../Cards/Slider/Slider";
import { data } from "../../data/data";
import { useEffect, useState } from "react";
import { eventgetdata } from "../../Connection/Api";
import latestNewgetdata from "../../Connection/LatestNewsapi";

const arr = [
  {
    head: "Day 1",
    title:
      "Restricted Certificate को लेकर AIDEOA टीम की माननीय सांसद से मुलाकात",
    date: "Dec 12th, 2024",
    time: "10:00AM - 5:00PM",
    location: "Grand Ballon Hotel",
    description:
      "Restricted certificate को कोल इंडिया में डिपार्मेंटल प्रमोशन सिनियर आफिसर माइनिंग ग्रेड E2 मै  रिस्ट्रिक्टेड सर्टिफिकेट का मान्यता  लेकर आज दिनांक 27 अगस्त को AIDEOA कि टीम माननीय सांसद महोदय श्री चंद्र प्रकाश चौधरी,गिरिडीह लोकसभा, से मिला, Restricted Certificate को लेकर श्री सांसद महोदय ने की AIDEOA टीम को हर संभव सहयोग करने की बात कही, एवं कोल इंडिया लिमिटेड के साथ 29 तारीख को मीटिंग में इस मुद्दा को उठाने की बात कहा गयापूरी AIDEOA टीम के तरफ से श्री सांसद महोदय को बहुत-बहुत धन्यवाद🙏",
  },
  {
    head: "Day 2",
    title:
      "धारकों की नियुक्ति/पदोन्नति पर AIDEOA प्रतिनिधिमंडल की कोल इंडिया के चेयरमैन से सौहार्दपूर्ण वार्ताe",
    date: "Dec 14th, 2024",
    time: "10:00AM - 5:00PM",
    location: "Grand Ballon Hotel",
    description:
      "आज दिनांक 23.08.2024 को Restricted Certificate को मान्यता दिलाने हेतु AIDEOA के राष्ट्रीय अध्यक्ष श्री विकास दास, राष्ट्रीय महासचिव श्री राजीव कुमार तिवारी, एवं कार्यकारी अध्यक्ष श्री प्रदीप सिंह ने कोल इंडिया के अध्यक्ष आदरणीय श्री पी.एम. प्रसाद से मुलाकात की। इस मुलाकात का मुख्य उद्देश्य कोल इंडिया में Restricted Certificate धारकों की नियुक्ति और पदोन्नति को लेकर चर्चा करना था।",
  },
  {
    head: "Day 3",
    title: "कोल इंडिया द्वारा आयोजित सुरक्षित कोयला खनन कार्यशाला",
    date: "Dec 16th, 2024",
    time: "10:00AM - 5:00PM",
    location: "Grand Ballon Hotel",
    description:
      "कोयला खनन क्षेत्र में सुरक्षा एक प्रमुख चिंता का विषय है, और सुरक्षा मानकों में सुधार के लिए कोल इंडिया लिमिटेड ने इस एक दिवसीय सुरक्षित कोयला खनन कार्यशाला का आयोजन किया है। इस कार्यशाला का उद्देश्य खनन उद्योग में नवीनतम सुरक्षा उपायों को अपनाना, श्रमिकों को सुरक्षा प्रथाओं से अवगत कराना, और खनन के दौरान होने वाली दुर्घटनाओं की रोकथाम पर ध्यान केंद्रित करना है।इस कार्यक्रम में खनन क्षेत्र के विशेषज्ञ, सुरक्षा अधिकारी, इंजीनियर, और कोल इंडिया के वरिष्ठ अधिकारियों की भागीदारी रहेगी, जो सुरक्षा मानकों को और अधिक सुदृढ़ करने के लिए अपने अनुभव और ज्ञान साझा करेंगे।",
  },
  {
    head: "Day 4",
    title: "SECL माइनिंग सरदार से ओवरमैन ग्रेड-B पदोन्नति फॉलो-अप",
    date: "Dec 18th, 2024",
    time: "10:00AM - 5:00PM",
    location: "Grand Ballon Hotel",
    description:
      "हमें यह बताते हुए खुशी हो रही है कि SECL हसदेव प्रबंधन ने आखिरकार माइनिंग सरदारों की ओवरमैन ग्रेड-B में पदोन्नति का आदेश 12/02/2024 को जारी कर दिया है। यह आदेश AIDEOA द्वारा 25/01/2024 को किए गए धरना-प्रदर्शन के बाद मिला, जहाँ प्रबंधन ने 31/01/2024 तक पदोन्नति आदेश जारी करने का आश्वासन दिया था। हालाँकि, प्रबंधन द्वारा समय पर आदेश जारी नहीं किया जा सका, लेकिन पदोन्नति की तिथि को 25/01/2024 से प्रभावी माना गया है।लेकिन, मैनपावर बजट 2023-24 के तहत ओवरमैन ग्रेड-B में 28 माइनिंग सरदारों की पदोन्नति होनी थी, जिसमें से केवल 16 का ही प्रमोशन पत्र जारी किया गया है। इस स्थिति को ध्यान में रखते हुए AIDEOA ने शेष पदोन्नति जारी कराने के लिए उचित कार्रवाई करने का निर्णय लिया है।",
  },
];
const EventPage = () => {
  const [limit, setLimit] = useState(3);
  const [eventsData, setEventsData] = useState([]);
  const [newsCardsData, setNewsCardsData] = useState([]);
  const getdata = async () => {
    try {
      const data = await eventgetdata();
      const newsCards = await latestNewgetdata();
      setEventsData(data.data);
      setNewsCardsData(newsCards.data);
    } catch (error) {
      console.log(`error in Eventpage.jsx ${error}`);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log("ds", eventsData);
  console.log("newsCard", newsCardsData);
  return (
    <div className="pt-14">
      <TopImageCard
        image={"/enhanceimage/Events.png"}
        title={"AIDEOA  Events"}
      />
      <div className=" flex px-5 flex-wrap gap-2 mt-12  content-center max-w-7xl  m-auto">
        {eventsData &&
          eventsData?.events?.map((item, idx) => {
            return <Card key={idx} idx={idx} item={item} />;
          })}
      </div>
      <div className=" bg-blue-950 ">
        <Slider textColor={"white"} shadowColor={"blue-900"} />
      </div>
      <InfoHeader />

      <div className="flex gap-10 flex-col">
        {newsCardsData?.posts?.slice(0, limit).map((newsItem, index) => (
          <NewsCard
            key={index}
            imageSrc={newsItem.images}
            headline={newsItem.title}
            content={newsItem.description}
          />
        ))}
        <button
          className="text-center font-semibold duration-300  text-lg text-gray-100 mx-auto bg-[#9333EA] hover:bg-midpurple p-4 rounded-full"
          href="#"
          onClick={() => setLimit(limit + 3)}
        >
          Read More...
        </button>
      </div>
      <EmailNotiCard />
      <Footer />
    </div>
  );
};
export default EventPage;
