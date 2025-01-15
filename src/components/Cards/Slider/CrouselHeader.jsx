const CrouselHeader = ({textColor="black"}) => {
  return (
    <div className="flex flex-col gap-10 mb-14">
      <div className="font-semibold  m-auto text-2xl lg:text-4xl">
        <h3 className={`text-${textColor}  text-center`}>Already team up and moving forward!</h3>
      </div>
      <div className={`text-center text-[12px] lg:text-sm font-normal text-${textColor} px-1`}>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p> */}
        {/* <span>tempor incididunt</span> */}
      </div>
    </div>
  );
};
export default CrouselHeader;
