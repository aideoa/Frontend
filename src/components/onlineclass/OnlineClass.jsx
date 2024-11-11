import React, { useState } from 'react'
import Form from './Form'
import TopImageCard from '../Cards/TopImageCard'

const OnlineClass = () => {
   
  return (
   <div>
    <TopImageCard title={"Online Class"} image={'./enhanceimage/Educationcomp.png'}/>
    <Form />
   </div>

  )
}

export default OnlineClass