import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const PrivacyPolicy = ({setPrivacy}) => {
  return (
    <div className=" bg-white border  border-1 dropshadowbox rounded-2xl w-full my-20 customScrollbar  overflow-y-scroll  scroll-smooth  h-[80vh] ">
    <div className=" overflow-x-hidden  flex flex-col justify-center items-center">
    <AiOutlineCloseCircle onClick={()=>setPrivacy(false)} size={35} className="absolute cursor-pointer top-[40px]"/>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl text-center underline font-bold mb-6 text-green-800">Privacy Policy - AIDEOA</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700">
          AIDEOA is committed to protecting the privacy of its members and website visitors. This policy outlines how we collect, use, disclose, and protect your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Membership details like name, contact, and occupation.</li>
          <li>Website usage data including IP address and browsing history.</li>
          <li>Communication preferences for personalized updates.</li>
          <li>Cookies and tracking technologies for improving user experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Processing membership applications.</li>
          <li>Communicating updates and event invitations.</li>
          <li>Improving website functionality and services.</li>
          <li>Personalizing user experiences and content.</li>
          <li>Complying with legal obligations and protecting AIDEOA’s interests.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
        <p className="text-gray-700">
          AIDEOA does not sell your information. We only share data with service providers, comply with legal requirements, or during business transactions like mergers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
        <p className="text-gray-700">
          We use cookies to enhance your experience and for website analytics. You can manage cookie preferences in your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
        <p className="text-gray-700">
          We implement security measures to protect your data, including encryption and restricted access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Access and review your personal information.</li>
          <li>Request corrections or deletions of data.</li>
          <li>Withdraw consent or object to specific data usage.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          For questions regarding this policy, contact us at <a href="mailto:aideoa2020@gmail.com" className="text-blue-500">aideoa2020@gmail.com</a>.
        </p>
      </section>
    </div>
</div>
</div>
  )
}

export default PrivacyPolicy