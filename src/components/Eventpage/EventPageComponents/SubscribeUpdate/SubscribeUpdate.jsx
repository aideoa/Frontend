const SubscribeUpdate = () => {
  return (
    <div className="flex gap-20 m-auto justify-between p-20" >
        <div className="font-semibold text-3xl">
            <p>GET READY TO KNOW <br /> THE LATEST UPDATE!</p>
        </div>
        <div className="text-gray-500 text-xl">
            <p>Join us for our latest upcoming <br /> events by subscribing us & get <br /> notified..</p>
        </div>
        <div className="relative">
            <form >
                <input className="border-2 w-96 border-gray-600 p-6 rounded-full" type="email" placeholder="Enter email address" />
                <button className="absolute top-0.5 left-56 w-40  bg-purple-800 p-6  rounded-full" type="submit">Continue</button>
            </form>
        </div>
    </div>
  )
}
export default SubscribeUpdate