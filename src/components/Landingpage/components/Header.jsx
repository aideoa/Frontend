import Logo from "../../Eventpage/EventPageComponents/Logo/Logo";

const Header = () => {
  return (
    <div className="flex flex-col gap-y-10 items-center pb-10">
      <div>
        <Logo />
      </div>
      <div className="text-white font-semibold text-4xl flex items-center text-center flex-col gap-3">
        <h1>All India Diploma Engineers And Officials Association </h1>
        <span> (AIDEOA)</span>
      </div>
      <div className="text-white text-xl font-medium">
        <p>Join us or Download your ID’s</p>
      </div>
    </div>
  );
};
export default Header;
