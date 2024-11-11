import React from 'react'
import TopImageCard from '../Cards/TopImageCard'
import Form from './Form'
import Instructions from './Instructions'
import Footer from '../Cards/Footer'
import EmailNotiCard from '../Cards/EmailNotiCard'

const QueryForm = () => {
  return (
    <div className='pt-14'>
        <TopImageCard title='Query '  image={'/enhanceimage/Query.png'}/>
        <div className='container mx-auto px-20 max-xl:px-0'>
          <h2 className="text-4xl font-bold mb-6 text-center text-black">Query Form</h2>
        <div className='flex  lightdropshadowbox   max-lg:flex-col rounded-2xl overflow-hidden'>
          <div className='w-1/2 shadow-md max-lg:w-full'>
          <Instructions />
            </div>
            <div className='w-1/2 max-lg:w-full'>
            <Form />
            </div>
         </div>
        </div>
        <EmailNotiCard />
  <Footer />
    </div>
  )
}

export default QueryForm