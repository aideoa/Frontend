import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const TermsCondition = ({setTnc}) => {
  return (
    <div className=" bg-white border  border-1 dropshadowbox rounded-2xl w-full my-20 customScrollbar  overflow-y-scroll  scroll-smooth  h-[80vh] ">
    <div className=" overflow-x-hidden  flex flex-col justify-center items-center">
    <AiOutlineCloseCircle onClick={()=>setTnc(false)} size={35} className="absolute cursor-pointer top-[40px]"/>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-3xl text-center underline font-bold mb-6 text-green-800">AIDEOA Terms and Conditions</h1>
      <h2 className="text-lg font-semibold mb-2">Introduction</h2>
      <p className="mb-4">
        These Terms and Conditions ("Terms") govern your membership with the All India Diploma Engineers and Officials Association (AIDEOA) and your use of the AIDEOA website ("Website"). By becoming a member or using the Website, you agree to comply with these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Membership</h2>
      <ul className="list-disc list-inside mt-2">
        <li><strong>Eligibility:</strong> Membership is open to diploma holders employed in any role, pending approval by the Executive Committee as per Clause 5 of the AIDEOA Constitution.</li>
        <li><strong>Application Process:</strong> Submit a membership application along with the prescribed fee. The application is subject to review and approval by the Executive Committee.</li>
        <li><strong>Membership Period:</strong> Membership runs annually from March 1st to December 31st as per Clause 5, regardless of when the application is submitted during the year.</li>
        <li><strong>Membership Fees:</strong> Fees are generally non-refundable. Exceptions are outlined in the AIDEOA Refund Policy.</li>
        <li><strong>Member Obligations:</strong> Members must adhere to the AIDEOA Constitution, pay fees, conduct themselves professionally, and respect other members’ rights and opinions.</li>
        <li><strong>Disciplinary Action:</strong> Violations of these Terms or the AIDEOA Constitution can lead to suspension or termination of membership, per Clause 8.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. Website Use</h2>
      <ul className="list-disc list-inside mt-2">
        <li><strong>Acceptable Use:</strong> The Website must be used for lawful purposes. Prohibited activities include:
          <ul className="list-disc list-inside mt-1">
            <li>Uploading illegal content.</li>
            <li>Disrupting Website functionality.</li>
            <li>Infringing on intellectual property rights.</li>
            <li>Engaging in harassment or discriminatory behavior.</li>
          </ul>
        </li>
        <li><strong>User-Generated Content:</strong> Members may post content, but AIDEOA retains the right to use, modify, and distribute such content. Members are solely responsible for ensuring that their content complies with these Terms.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Intellectual Property</h2>
      <p>All Website content, including text, graphics, logos, and trademarks, is the intellectual property of AIDEOA or its licensors. Unauthorized copying, distribution, or modification is prohibited without AIDEOA's explicit permission.</p>

      <h2 className="text-xl font-semibold mt-6">4. Disclaimers</h2>
      <p>The Website and its content are provided "as is." AIDEOA does not guarantee the accuracy, functionality, or availability of the Website and disclaims liability for any damages resulting from its use.</p>

      <h2 className="text-xl font-semibold mt-6">5. Limitation of Liability</h2>
      <p>AIDEOA will not be held liable for any indirect, incidental, or consequential damages arising from your use of the Website or membership in the organization, to the extent permitted by law.</p>

      <h2 className="text-xl font-semibold mt-6">6. Indemnification</h2>
      <p>You agree to indemnify AIDEOA, its officers, directors, employees, and agents from any claims, losses, or liabilities arising from your use of the Website or breach of these Terms.</p>

      <h2 className="text-xl font-semibold mt-6">7. Termination</h2>
      <ul className="list-disc list-inside mt-2">
        <li><strong>AIDEOA Rights:</strong> AIDEOA reserves the right to terminate membership or access to the Website at any time, with or without cause or notice.</li>
        <li><strong>Member Rights:</strong> Members may also terminate their membership at any time by notifying AIDEOA.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">8. Governing Law and Dispute Resolution</h2>
      <p>These Terms are governed by the laws of India. Any disputes will be resolved exclusively in the courts of Dhanbad, Jharkhand, India.</p>

      <h2 className="text-xl font-semibold mt-6">9. Amendments</h2>
      <p>AIDEOA may modify these Terms at any time by posting updates on the Website. It is your responsibility to review the Terms periodically. Continued use of the Website implies acceptance of the updated Terms.</p>

      <h2 className="text-xl font-semibold mt-6">10. Entire Agreement</h2>
      <p>These Terms, along with the AIDEOA Constitution and any other applicable policies, constitute the entire agreement between you and AIDEOA regarding membership and Website use.</p>

      <h2 className="text-xl font-semibold mt-6">11. Severability</h2>
      <p>If any provision of these Terms is found to be invalid or unenforceable, the remainder of the Terms will continue in full effect.</p>
    </div>
</div>
</div>
  )
}

export default TermsCondition