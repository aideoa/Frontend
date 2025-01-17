import { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const donationAmount = [500, 1000, 5000];

const DonationForm = ({ setStep, amount, setAmount }) => {
  

  const handleAmountChange = (value) => {

    const sanitizedValue = value.replace(/^0+/, '') || '0';
    setAmount(sanitizedValue);
  };

  return (
    <div className='flex items-center justify-center my-24'>
      <div className='w-96 flex flex-col gap-6'>
        <p className='text-center font-normal'>
          <span className='text-AIDEOTYPO font-medium'>Aideoa</span> platform is free to use, but if you want to support us, you can donate to us.
        </p>
        <div className='flex flex-col gap-5 justify-between px-3'>
          <p className='text-AIDEOTYPO text-lg'>Choose a donation amount</p>
          <div className='flex justify-between'>
            {donationAmount.map((item, idx) => {
              return (
                <div
                  onClick={() => setAmount(item)}
                  key={idx}
                  className='border-2 flex px-3 gap-2 border-AIDEOTYPO w-28 h-14 rounded-2xl items-center'
                >
                  <FaCircleCheck size={20} className={`${amount === item ? 'text-AIDEOTYPO' : 'text-gray-500'}`} />
                  <h5 className='font-semibold text-xl'>{item}₹</h5>
                </div>
              );
            })}
          </div>
          <p className='text-AIDEOTYPO text-lg'>Enter a custom donation amount</p>
          <input
            placeholder='eg. 2500'
            value={amount}
            className='h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO'
            onChange={(e) => handleAmountChange(e.target.value)}
          />
          <button
            className='h-16 membershipBtn mt-3 rounded-2xl text-white font-semibold'
            onClick={() => {
              if(amount<1 || !amount)
                return;
              setStep(2)}}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
