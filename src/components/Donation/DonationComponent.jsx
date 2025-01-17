import React, { useState } from 'react'
import TopImageCard from '../Cards/TopImageCard'
import DonationForm from './DonationForm'
import Footer from '../Cards/Footer'
import Payment from './QrCode'

const DonationComponent = () => {
  const [step,setStep]=useState(1)
  const [amount,setAmount]=useState()
  return (
    <div className='pt-14'>
        <TopImageCard image={'/enhanceimage/donation.png'} title={"Donation"} description={"Join Aidoea Membership "}/>
        {
          step===1?<DonationForm setAmount={setAmount} amount={amount}  setStep={setStep}/>:
          <Payment setStep={setStep} amount={amount} setAmount={setAmount}/>
        }
            <Footer />
        
    </div>
  )
}

export default DonationComponent