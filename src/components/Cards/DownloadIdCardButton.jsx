
import { FiDownload } from 'react-icons/fi'
const DownloadIdCardButton = () => {
  return (
    <div className="text-white flex items-center gap-2 cursor-pointer border border-2 px-6 py-2 rounded-full border-blue-400">
            <button  className="font-semibold">Download ID</button>
            <FiDownload />
          </div>
  )
}

export default DownloadIdCardButton