import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'

const MutualTransfer = () => {
  return (
    <div className="flex cursor-pointer bg-purplebtn rounded-full max-w-80pl-4 pr-4  p-4 items-center justify-between">
        <div className=" flex gap-3 items-center ">
  
    <div>
    <VscAccount className="text-white" size={25}/>
    </div>
    <div className="flex flex-col">
        <div className="text-white text-center pr-1 font-normal text-lg">
            <h3>Mutual Transfer Portal</h3>
        </div>
        {/* <div className="text-gray-300 text-xs">
            <p>
            Join our Aideoa fam!
            </p>
        </div> */}
    </div>
    </div>
    <div className="bg-black rounded-full p-1">
    <FaArrowUp   size={20} className="rotate-45 rounded-full text-white  border-none"/>
    </div>
</div>
  )
}

export default MutualTransfer