import styles from "./InfoHeader.module.css";

const InfoHeader = () => {
  return (
    <div className="flex flex-col gap-10 mb-14 mx-5">
      <div className="font-semibold m-auto text-4xl">
        <h3>AIDEOA Latest News</h3>
      </div>
      <div className="text-center text-sm font-normal text-gray-500">
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p> */}
        {/* <span>tempor incididunt</span> */}
      </div>
    </div>
  );
};
export default InfoHeader;
