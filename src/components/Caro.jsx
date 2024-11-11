import React, { useState } from "react";

const ImageCarousel = () => {
  const images = ["/groupimage.png", "/Rectangle128.png", "groupimage.png"];

  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);

      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg-black flex justify-center">
      <div className=" relative">
        <div 
         className="flex  transition-transform duration-500 ease-in-out  justify-between gap-28 py-24 overflow-hidden ">
          <div className="w-48  overflow-hidden">
            <img
              src={
                currentIndex === 0
                  ? images[images.length - 1]
                  : images[currentIndex - 1]
              }
              className="min-w-96 h-full"
              alt={`Slide `}
            />
          </div>
          <div className="flex items-center">
            <p className="text-white text-5xl" onClick={goToPrevious}>
              ❮
            </p>
          </div>
          <img
            src={images[currentIndex]}
            className="max-w-[700px] transitionn   mx-16 h-96 rounded-lg shadow-lg scale-125 s "
            alt={`Slide `}
          />
          <div className="flex items-center">
            <p className="text-white text-5xl" onClick={goToNext}>
              {" "}
              ❯
            </p>
          </div>
          <div className="w-48  overflow-hidden">
            <img
              src={
                currentIndex === images.length - 1
                  ? images[0]
                  : images[currentIndex + 1]
              }
              className="min-w-96  h-full "
              alt={`Slide `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
