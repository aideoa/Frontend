
import { FaArrowUp } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";


const DonationButton = () => {
  return (
    <div>
        <div className="flex cursor-pointer bg-white rounded-full max-w-80 pl-4 pr-4  p-4 items-center justify-between">
        <div className=" flex gap-3 items-center">
        <div>
        <VscAccount  className="" size={25}/>
        </div>
        <div className="flex flex-col ">
            <div className="text-black font-normal text-lg">
                <h3>Donation</h3>
            </div>
            
        </div>
        </div>
        <div className="bg-black rounded-full p-1">
        <FaArrowUp   size={20} className="rotate-45 rounded-full text-white  border-none"/>
        </div>
    </div>
    </div>
  )
}
export default DonationButton