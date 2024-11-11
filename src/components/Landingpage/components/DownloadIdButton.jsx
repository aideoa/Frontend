import { RiFolderDownloadLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const DownloadIdButton = () => {
  return (
    <div className="flex cursor-pointer bg-purplebtn rounded-full w-80 pl-4 pr-4 p-4 items-center justify-between">
        <div className=" flex gap-3 items-center">
        <div>
        <RiFolderDownloadLine  className="text-white" size={25}/>
        </div>
        <div className="flex flex-col ">
            <div className="text-white font-normal text-lg">
                <p>Download ID Card</p>
            </div>
           
        </div>
        </div>
        <div className="bg-black rounded-full p-1">
        <FaArrowUp   size={20} className="rotate-45 rounded-full text-white  border-none"/>
        </div>
    </div>
  )
}
export default DownloadIdButton