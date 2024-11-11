import React from 'react'

const TopImageCard = ({image='/Rectangle128.png',pos,title="Contact us",description,downloadBtn,position="center"}) => {
  return (
    <div className='relative mb-10 lg:mb-20 ' >
        {/* <img src={image} className={`h-80 imagefilter w-full object-cover bg-bottom`} alt={title}/> */}
        <div style={{backgroundImage:`url(${image})`,backgroundPosition:{pos},backgroundSize:"cover"}} className={`h-[550px] imagefilter w-full bg-${position} `} alt={title}/>
        <div className=" absolute bottom-0 left-0 w-full h-4/5 bottomshadowgradient "></div>
        <div className='absolute w-full top-1/2 flex flex-col gap-3 left-1/2 text-white items-center text-center transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className=' font-extrabold text-xl lg:text-4xl '> {title}</h1>
        <p className='text-center text-base lg:text-lg text-slate-200 font-normal'>{description}</p>
        <div className='pt-5'>
        { downloadBtn && downloadBtn}
        </div>
      
      
        </div>
       
    </div>
  )
}

export default TopImageCard