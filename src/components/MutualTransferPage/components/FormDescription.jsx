import { GoQuestion } from "react-icons/go";

const FormDescription = () => {
  return (
    <div className="flex flex-col m-auto gap-y-7 lg:gap-16 mb-10  lg:p-20">
    <div className="flex flex-col gap-y-20 w-11/12 m-auto bg-gray-200 p-3 lg:p-6 rounded-lg ">
        <div className="flex gap-x-4 items-center">
            <div>
            <GoQuestion className="text-gray-500 " size={18}/>
            </div>
            <div className="text-gray-500">
                <p>Anyone who wants mutual transfer in Coal India Limited kindly fill the below provided form.</p>
            </div>
        </div>

    </div>
    <div className="flex flex-col gap-y-20 w-11/12 m-auto bg-gray-200 p-3 lg:p-6 rounded-lg">
        <div className="flex gap-x-4 items-center">
            <div>
            <GoQuestion className="text-gray-500 " size={18}/>
            </div>
            <div className="text-gray-500">
                <p>Current available candidates for transfer can contact the person directly using their mobile number from C.I.L mutual transfer database page..</p>
            </div>
        </div>

    </div>
    <div className="flex flex-col gap-y-20 w-11/12 m-auto bg-gray-200 p-3 lg:p-6 rounded-lg">
        <div className="flex gap-x-4 items-center">
            <div>
            <GoQuestion className="text-gray-500 " size={18}/>
            </div>
            <div className="text-gray-500">
                <p>Once you have completed the form submission step., your data will be recorded on C.I.L mutual transfer database. So keep patience.</p>
            </div>
        </div>

    </div>
    </div>
  )
}
export default FormDescription