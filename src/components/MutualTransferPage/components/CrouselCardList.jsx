import CrouselCard from "./CrouselCard";

const CrouselCardList = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap max-w-fit mb-20 m-auto">
          <div className="animate-customscroll items-center flex gap-8 pb-10 ">
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
          </div>
    
          <div className="animate-customscrollreverse flex items-center   gap-8 pb-10 ">
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            <CrouselCard />
            
          </div>
        </div>
      );
}
export default CrouselCardList