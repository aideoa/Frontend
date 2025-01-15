import { VscAccount } from "react-icons/vsc";
import { FaArrowUp   } from "react-icons/fa";

const LinkButton = () => {
  return (
    <div className="flex bg-purplebtn rounded-full max-w-80 pl-4 pr-4 p-2 items-center cursor-pointer justify-between">
        <div className=" flex gap-3 items-center ">
        <div>
        <VscAccount className="text-white" size={25}/>
        </div>
        <div className="flex flex-col ">
            <div className="text-white font-normal text-lg">
                <h3>Join Membership</h3>
            </div>
            <div className="text-gray-300 text-xs">
                <p>
                Join our Aideoa fam!
                </p>
            </div>
        </div>
        </div>
        <div className="bg-black rounded-full p-1">
        <FaArrowUp   size={20} className="rotate-45 rounded-full text-white  border-none"/>
        </div>
    </div>
  )
}
export default LinkButton