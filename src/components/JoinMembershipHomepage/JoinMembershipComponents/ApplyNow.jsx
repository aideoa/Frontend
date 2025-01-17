
const ApplyNow = () => {
  return (
    <div className='my-20 mx-20 max-sm:mx-3 max-md:mx-6 max-lg:mx-12'>
      <div className=''>
        <h3 className='text-AIDEOTYPO text-xl mb-8 font-semibold'>Why you should join membership?</h3>
        <div className='flex flex-col gap-8'>
        {
          new Array(3).fill("").map((item,idx)=>{
            return   <div key={idx} className={` h-40 rounded-2xl bg-gray-100 gap-2 flex justify-between items-center ${idx%2!==0&& 'flex-row-reverse'}`}>
            <div className='px-10 py-8 flex flex-col gap-3  w-full justify-center  max-md:px-5'>

              <h5 className='text-xl font-bold max-md:text-lg max-sm:text-base'> Apply for AIDEOA ID</h5>
              <p className='text-slate-700 text-base max-md:text-sm  max-sm:text-xs'> Get the access for applying for Aideoa’s Premium ID Card only for members</p>
            </div>
            <div className={`w-full h-full flex  ${idx%2===0&& 'justify-end'}`}>
            <img src='/Rectangle 176.png' className={` ${idx%2!==0&& 'scale-x-[-1]'} w-auto h-full`} alt="Apply ID card"/>
         
              </div>
               </div>
          })
        }
          </div>
      </div>
    </div>
  )
}

export default ApplyNow