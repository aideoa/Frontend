import { coalIndiaSubsidiaries } from "../../../data/subsidiary";
import CrouselCard from "./CrouselCard";

const CrouselCardList = ({shadowColor}) => {
    return (
        <div className="overflow-hidden whitespace-nowrap max-w-fit mb-20 m-auto">
          <div className="animate-customscroll items-center flex gap-8 pb-10 ">
          {
            coalIndiaSubsidiaries.map((item,idx)=>{
              return    <CrouselCard key={idx} item={item} shadowColor={shadowColor}/>
            })
          }
         
          
          </div>
    
          <div className="animate-customscrollreverse flex items-center   gap-8 pb-10 ">
          {
            coalIndiaSubsidiaries.map((item,idx)=>{
              return    <CrouselCard key={idx} item={item} shadowColor={shadowColor}/>
            })
          }
         
            
          </div>
        </div>
      );
}
export default CrouselCardList