const HeaderImg = () => {
  return (
    <div className="bg-center bg-header-background-image bg-no-repeat bg-cover mb-20 h-custom-height">
      <div className="flex flex-col gap-10 bg-header-background-bluetheme justify-center items-center bg-cover bg-bottom bg-no-repeat h-full">
        <div>
          <h1 className="text-white text-center  font-semibold text-3xl lg:text-5xl">
            AIDEOA Mutual Transfer Portal
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="font-normal  text-center  text-xl text-white">
            Welcome to the Aidoea Mutual Transfer Portal
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeaderImg;
