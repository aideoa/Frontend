import ImageCarousel from "../../../carousel/ImageCarousel";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const NewsCard = ({ imageSrc, headline, content }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);





  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageSrc.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSrc.length - 1 : prevIndex - 1
    );
  };

  const toggleText = () => {
    setOpen(!open);
  };
  console.log(imageSrc)
  return (
    <div className="flex-col xl:flex-row w-[90%] lg:w-[70%] gap-x-5 gap-y-5 flex max-w-screen-xl bg-gray-200 rounded-xl lg:w-11/12 m-auto p-5 lg:p-10 justify-between">
      <div className="rounded-xl mb-6 flex justify-center  max-xl:m-auto   max-w-[600px] h-96 overflow-hidden">
        {/* <img src={imageSrc} alt="slider-image" className="w-full"/> */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex  transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageSrc.map((item, index) => {
              return (
                <div key={index} className="w-full flex-shrink-0 ">
                  <img
                    src={item.url}
                    alt={`Slide ${index}`}
                    className={`w-full aspect-[3/2] object-contain`}
                  />
                </div>
              );
            })}
          </div>

      
          <button
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            ‹
          </button>
          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            ›
          </button>

          <div className="flex justify-center mt-4">
            {imageSrc.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        {/* <Splide aria-label="My Favorite imageSrc" className="w-full max-h-[600px]">
      {
        imageSrcrc.map((image,idx)=>{
          return <SplideSlide key={idx} >
          <img src={image} className="w-full"  alt="Image 1"/>
        </SplideSlide>
        })
      }
  

</Splide> */}
      </div>
      <div className="flex flex-col gap-y-6  xl:w-2/4">
        <div
          className={`font-medium max-sm:overflow-hidden ${
            open ? "max-h-full" : "max-sm:max-h-[3em]"
          } text-gray-700`}
        >
          <h3>{headline}</h3>
        </div>
        <div
          className={`font-medium max-sm:overflow-hidden ${
            open ? "max-h-full" : "max-sm:max-h-[3em]"
          } text-gray-700`}
        >
          <h3>{content}</h3>
        </div>
        <div className="relative">
          <button
            onClick={toggleText}
            className="mt-2 max-sm:block hidden text-blue-500 hover:underline focus:outline-none"
          >
            {open ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
