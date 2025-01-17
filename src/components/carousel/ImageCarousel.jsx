import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';


const ImageCarousel = ({images}) => {
  return (
<div className='flex justify-center pb-20 '>
    <div className='max-w-4xl flex flex-col gap-4 justify-center text-center items-center' >
           
            <div className='mt-5 rounded-3xl overflow-hidden'>


         <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
       
      } }
      aria-label="My Favorite Images"
     className='max-h-[500px]'
    >
        {
            images.map((item,idx)=>{
                return  <SplideSlide  key={idx}>
              
            <img src={item} className='  rounded-3xl h-full w-full' alt='Images' />
           
   
                </SplideSlide>
             
            })
        }
     
    </Splide>
    </div>
    </div>
    </div>
  )
}

export default ImageCarousel