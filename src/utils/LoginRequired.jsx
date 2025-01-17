
import { LogInIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

 function LoginPrompt({title}) {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <LogInIcon className="w-16 h-16 text-purple-700 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {title}
        </h2>
        <p className="text-gray-600 mb-6">
          Please log in to access this feature.
        </p>
        <Link to="/login" className="inline-block bg-purple-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Go to Login
        </Link>
      </div>
    </div>
  )
}

export default LoginPrompt