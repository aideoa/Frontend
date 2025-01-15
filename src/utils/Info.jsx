import { FaChevronDown } from "react-icons/fa6";
const Info = () => {
  return (
    <div className="w-11/12 my-20 m-auto">
      <div className="flex  text-center xl:text-left flex-col xl:flex-row justify-between gap-20">
        <div>
          <div className="font-medium text-xl text-gray-800">
            <p>आल इंडिया डिप्लोमा इंजिनियर्स एंड ऑफिसियलस एसोसिएशन </p>
          </div>
          <div className="font-medium text-xl text-gray-800">
            <p>
              MUTUAL TRANSFER  FOR C.I.L Non-Executive & Executive (नि: शुल्क
              सेवा)
            </p>
          </div>
        </div>
        <div className="flex gap-4 flex-col max-md:m-auto  md:flex-row md:gap-x-4">
          <div>
            <button className="font-medium text-gray-600 text-lg p-4 w-64 border border-purple-500 rounded-full">
              Start Applying
            </button>
          </div>
          <div className="relative">
            <button className="font-medium text-gray-600 text-lg p-4 w-64 border border-purple-500 rounded-full">
              Submitted Data List
            </button>
            <FaChevronDown className="text-purple-600 absolute top-6 right-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
