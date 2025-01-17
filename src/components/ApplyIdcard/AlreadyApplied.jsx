import { ClockIcon } from 'lucide-react'

 function AlreadyApplied() {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <ClockIcon className="w-12 h-12 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          ID Card Application Status
        </h2>
        <p className="text-center text-gray-600 mb-6">
          You have already applied for an ID card. Your ID card will appear here when it gets approved.
        </p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
          <div className="aspect-w-16 aspect-h-9">
            <div className="flex items-center justify-center bg-gray-200 text-gray-400 text-sm">
              Your ID card will appear here
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Please check back later for updates on your application status.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AlreadyApplied