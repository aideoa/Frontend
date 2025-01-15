
import TopimageCard from "../Cards/TopImageCard"
import JoinNow from './JoinMembershipComponents/JoinNow'
import ApplyNow from './JoinMembershipComponents/ApplyNow'
import Footer from '../Cards/Footer'
 const JoinMembership = () => {
  return (
    <div className='pt-14'>
        <TopimageCard image={'/enhanceimage/JoinMem.png'} title={"Join Membership "} description={"Join Aideoa Membership "}/>
        <JoinNow />
        <ApplyNow />
        <Footer />
    </div>
  )
}

export default JoinMembership