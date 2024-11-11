const CompanyCard = () => {
  return (
    <div className="bg-white items-center p-3 h-30 min-w-56 rounded-full flex justify-evenly ">
        <div>
          <img className="w-16" src="base.png" alt="company_logo" />
        </div>
        <div className="text-black text-xs font-medium ">
          <p className="">East Coalfields Limited</p>
        </div>
    </div>
  )
}
export default CompanyCard