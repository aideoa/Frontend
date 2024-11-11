import axios from 'axios';
import  { useState } from 'react'
import toast from 'react-hot-toast';
const url=`http://localhost:4000/api`
const Form = () => {
    const [formdata, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        companyName: '',
        workingArea: '',
        query: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async(e) => {
           e.preventDefault();
          try {
            const res= await axios.post(`${url}/query/add`,formdata)
            if(res.status===200)
            {
              toast.success(res.data.message)
              setFormData({  name: '',
                mobile: '',
                email: '',
                companyName: '',
                workingArea: '',
                query: ''})
            }
          } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
          }
      };
    
      return (
        <div className=" h-full  bg-gray-100 p-8  shadow-md ">
        
          <form onSubmit={handleSubmit} className="space-y-4">
           
            <div>
              <label htmlFor="name" className=" text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                required
                className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none  sm:text-sm"
                placeholder="Enter your name"
              />
            </div>  
            <div>
              <label htmlFor="mobile" className=" text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formdata.mobile}
                onChange={handleChange}
                required
                className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none  sm:text-sm"
                placeholder="+9100000000"
              />
            </div>
           
            <div>
              <label htmlFor="email" className=" text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                required
                className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none  sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
           
            <div>
              <label htmlFor="company" className=" text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formdata.companyName}
                onChange={handleChange}
                required
                className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none  sm:text-sm"
                placeholder="Enter company name"
              />
            </div>
          
            <div>
              <label htmlFor="area" className=" text-sm font-medium text-gray-700">Working Area / Office Address</label>
              <input
                type="text"
                name="workingArea"
                value={formdata.workingArea}
                onChange={handleChange}
                required
                className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none  sm:text-sm"
                placeholder="Enter working area or office address"
              />
            </div>
         
            <div>
              <label htmlFor="query" className=" text-sm font-medium text-gray-700">Your Query</label>
              <textarea
                name="query"
                value={formdata.query}
                onChange={handleChange}
                required
                className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none  sm:text-sm"
                placeholder="Enter your query"
                rows="4"
              />
            </div>
          
            <div className="text-center">
              <button
                type="submit"
                
                className="w-full py-2 px-4 bg-AIDEOTYPO text-white font-semibold rounded-full hover:opacity-80 focus:outline-none "
              >
                Submit Query
              </button>
            </div>
          </form>
        </div>
      );
}

export default Form