import styles from "./ImageHeader.module.css"

const ImageHeader = () => {
  return (
    <div className="bg-center bg-header-background-image bg-no-repeat bg-cover mb-20 h-custom-height">
      <div className="flex bg-header-background-bluetheme justify-center items-center bg-cover bg-bottom bg-no-repeat h-full">
        <h1 className="text-white font-semibold text-5xl">Aideoa Events</h1>
      </div>
    </div>
  )
}
export default ImageHeader