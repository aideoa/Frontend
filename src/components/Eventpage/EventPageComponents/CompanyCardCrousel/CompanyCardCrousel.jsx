import CompanyCard from "./CompanyCard/CompanyCard";

const CompanyCardCrousel = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap max-w-fit m-auto">
      <div className="animate-customscroll items-center flex gap-8 pb-10 ">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>

      <div className="animate-customscrollreverse flex items-center   gap-8 pb-10 ">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        
      </div>
    </div>
  );
};
export default CompanyCardCrousel;
