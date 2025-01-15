
import CrouselHeader from './CrouselHeader'
import CrouselCardList from './CrouselCardList'
import Logo from './Logo'

const Slider = ({textColor,shadowColor}) => {
  return (
    <div className='my-20'>
      <Logo />
        <CrouselHeader textColor={textColor} />
        <CrouselCardList shadowColor={shadowColor}/>
    </div>
  )
}

export default Slider