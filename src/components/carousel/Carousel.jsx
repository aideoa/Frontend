import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import ReactPlayer from 'react-player/youtube';
import { data } from "../../data/videogallary";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (splide) => {
    setActiveSlide(splide.index); 
  };

  return (
    <div className="flex justify-center py-20">
      <div className="max-w-4xl flex flex-col gap-4 justify-center text-center items-center">
        <h1 className="font-semibold text-[35px] leading-15">Video Gallery</h1>
        <p className="text-normal text-gray-400">
          Lorem ipsum soluta quae eos?
        </p>
        <div className="mt-5 rounded-3xl overflow-hidden">
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
              width: "800px",
            }}
            aria-label="Video Gallery"
            onMoved={handleSlideChange} 
          >
            {data.map((url, idx) => (
              <SplideSlide key={idx}>
                <ReactPlayer
                  width="100%"
                  url={url}
                  playing={activeSlide === idx} 
                 
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
