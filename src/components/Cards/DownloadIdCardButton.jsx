import { Link } from 'react-router-dom';
import { FaBox } from 'react-icons/fa'; 

const DownloadIdCardButton = () => {
  return (
    <Link to="/donation" className="text-white flex items-center gap-2 cursor-pointer border border-2 px-6 py-2 rounded-full border-blue-400">
      <button className="font-semibold">Donation</button>
      <FaBox className="text-lg text-white-500 hover:text-purple-500 hover:text-xl transition-all duration-200" />
    </Link>
  );
};

export default DownloadIdCardButton;
