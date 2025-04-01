import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const PrivacyPolicy = ({ setPrivacy }) => {
  return (
    <div className=" bg-white border  border-1 dropshadowbox rounded-2xl w-full my-20 customScrollbar  overflow-y-scroll  scroll-smooth  h-[80vh] ">
      <div className=" overflow-x-hidden  flex flex-col justify-center items-center">
        <AiOutlineCloseCircle onClick={() => setPrivacy(false)} size={35} className="absolute cursor-pointer top-[40px]" />
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl text-center underline font-bold mb-6 text-green-800">Privacy Policy - AIDEOA</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              AIDEOA is committed to protecting the privacy of its members and website visitors. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you engage with our website and services. We adhere to legal frameworks and best practices to ensure the confidentiality and security of your data. </p>
            <br />
            <p className="text-gray-800 font-semibold">This policy is designed to help you understand:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>What information we collect
              </li>
              <li>How we use and store it
              </li>
              <li>Your rights concerning your data
              </li>
            </ul>
            <br />
            <p className="text-gray-700">By using our services, you consent to the practices described in this Privacy Policy. If you do not agree with the terms, please refrain from using our website or providing personal information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-800 font-semibold">To provide a seamless experience, we collect different types of information from our users. The data we collect includes:</p>
            <h4 className="text-2xl font-semibold my-2">For Users:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Full Name</li>
              <li>Email ID</li>
              <li>Contact Number</li>
              <li>Password (encrypted)</li>
              <li>Address</li>
              <li>Profile Image</li>
            </ul>
            <h4 className="text-2xl font-semibold my-2">For Employees:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Employee Code</li>
              <li>Employee ID Card of CIL</li>
            </ul>
            <h4 className="text-2xl font-semibold my-2">For Students:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>College ID Proof</li>
              <li>Image</li>
            </ul>
            <p className="text-gray-700">We only collect necessary and relevant information to facilitate services and ensure authentication within the AIDEOA website user portal.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-800 font-semibold">
              Your information is used to enhance user experience, manage memberships, and ensure compliance with regulations. We use the data for:
            </p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>Membership and User Verification:</span> Authenticating users, processing applications, and managing accounts. </li>
              <li><span className='font-bold text-gray-600'>Communication:</span> Sending updates, newsletters, event invitations, and important notifications.</li>
              <li><span className='font-bold text-gray-600'>Service Enhancement:</span> Improving website functionality, security, and personalization.</li>
              <li><span className='font-bold text-gray-600'>Legal Compliance:</span> Ensuring adherence to applicable laws, investigating fraud, and preventing misuse.              </li>
            </ul>
            <p className="text-gray-700">We do not use your data for unauthorized marketing purposes or sell it to third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-800 font-semibold">
              We value user privacy and do not engage in selling, renting, or trading personal information. Data sharing occurs only under the following conditions:</p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>Service Providers:</span> Trusted third-party service providers assisting in website hosting, payment processing, and communication. </li>
              <li><span className='font-bold text-gray-600'>Legal Obligations:</span> Compliance with legal requirements, law enforcement requests, and government regulations.</li>
              <li><span className='font-bold text-gray-600'>Business Transactions:</span>In the case of mergers, acquisitions, or business restructuring, user data may be transferred with necessary protections.              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-800 font-semibold">
              Our website uses cookies and similar tracking technologies to improve user experience, analyze website traffic, and personalize content. Cookies help in: </p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>Remembering User Preferences:</span> Enhancing navigation and saving login details.</li>
              <li><span className='font-bold text-gray-600'>Analytics and Performance: </span>e	Understanding how users interact with the website to optimize features.</li>
              <li><span className='font-bold text-gray-600'>Security Measures:</span>Detecting fraud and enhancing protection mechanisms.</li>
            </ul>
            <p className="text-gray-700">Users can manage cookie preferences through browser settings. However, disabling cookies may limit website functionality.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
            <p className="text-gray-800 font-semibold">We implement stringent security measures to protect personal information, including:</p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>Encryption:</span> Data transmission is encrypted using industry-standard protocols.</li>
              <li><span className='font-bold text-gray-600'>Restricted Access:</span> Only authorized personnel have access to sensitive user data.</li>
              <li><span className='font-bold text-gray-600'>Regular Security Audits:</span> Our systems are monitored to prevent breaches and vulnerabilities.</li>
            </ul>
            <p className="text-gray-700">Despite our best efforts, no method of transmission over the Internet is 100% secure. Users should take precautionary measures when sharing personal data online.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-800 font-semibold">AIDEOA respects user rights regarding data access, correction, and deletion. Users can:</p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>Access and Review:</span> Request a copy of personal data held by us.</li>
              <li><span className='font-bold text-gray-600'>Rectify Incorrect Information:</span> Request corrections if any details are inaccurate.</li>
              <li><span className='font-bold text-gray-600'>Data Deletion:</span> Request removal of their data from our system.</li>
              <li><span className='font-bold text-gray-600'>Withdraw Consent:</span> Object to certain data uses and opt out of marketing communications.</li>
            </ul>
            <p className="text-gray-700">To exercise these rights, please contact us via the provided email addresses.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Retention Policy</h2>
            <p className="text-gray-800 font-semibold">We retain user data only for as long as necessary to fulfill the stated purposes. Data is removed when:</p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>The user account is inactive for a prolonged period.</span></li>
              <li><span className='font-bold text-gray-600'>A deletion request is received and verified.</span></li>
              <li><span className='font-bold text-gray-600'>Legal obligations for retention are met.</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Delete Your Data</h2>
            <p className="text-gray-800 font-semibold">If you wish to remove your data from AIDEOA Portal, contact us at:</p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>Email:</span> itcellaideoa@gmail.com</li>
            </ul>
            <p className="text-gray-700">Our team will verify the request and proceed with the deletion process in compliance with legal regulations.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-800 font-semibold">For any privacy-related inquiries or concerns, reach out to us:</p>
            <ul className="list-disc list-inside text-gray-700 my-2">
              <li><span className='font-bold text-gray-600'>Email:</span> aideoa2020@gmail.com</li>
            </ul>
            <p className="text-gray-700">We are committed to maintaining transparency and addressing privacy concerns promptly.</p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy