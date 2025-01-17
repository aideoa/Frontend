const CrouselCard = ({shadowColor="gray-400",item}) => {
    return (
        <div className={`bg-white items-center shadow-xl shadow-${shadowColor} p-3  h-30 min-w-56 rounded-full flex justify-evenly`}>
            <div>
              <img className="min-w-16 h-16" src="base.png" alt="company_logo" />
            </div>
            <div className="text-black text-xs font-medium overflow-hidden">
              <p className="">{item.name}</p>
            </div>
        </div>
      )
}
export default CrouselCard