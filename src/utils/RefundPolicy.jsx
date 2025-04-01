import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const RefundPolicy = ({ setRefund }) => {
  return (
    <div className=" bg-white border  border-1 dropshadowbox rounded-2xl w-full my-20 customScrollbar  overflow-y-scroll  scroll-smooth  h-[80vh] ">
      <div className=" overflow-x-hidden  flex flex-col justify-center items-center">
        <AiOutlineCloseCircle onClick={() => setRefund(false)} size={35} className="absolute cursor-pointer top-[40px]" />
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl text-center underline font-bold mb-6 text-green-800">Refund Policy</h1>
          <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
          <p className="mb-4">
            The All India Diploma Engineers and Officials Association (AIDEOA) is committed to transparency and fairness in managing membership fees. This policy outlines the circumstances under which refunds may be issued.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Understanding the Membership Period</h2>
          <p className="mb-4">
            AIDEOA membership (INR 100/-) follows an annual cycle from April 1st to March 31st, as defined in the AIDEOA constitution (Clause 5). Regardless of the date of application, membership is valid from the application processing date until the following March 31st. </p>
          <h2 className="text-2xl font-semibold mt-6">Refundable Fees</h2>
          <p className="my-4">
            If a user mistakenly overpays during the application process or donation, they can request a refund by completing the refund request form available on the Contact Us page within 24 hours from the transaction time. <br /> <br />
            Once the form is received, AIDEOA will verify payment details within 7 working days. After verification, the excess amount will be refunded to the user's provided account number or UPI ID. The refund process may take up to 28 business days to complete, depending on the bank or payment provider processing times.
          </p>
          <h3 className="text-xl font-semibold mt-4">1. Refund Request Submission</h3>
          <p className="mb-4">
            To initiate a refund, customers must send an official request via email to <strong>aideoa2020@gmail.com</strong>.
            Please ensure the subject line includes “Refund Request” along with your complete AIDEOA information and transaction number for ease of processing.
          </p>

          <h3 className="text-xl font-semibold mt-4">2. Payment Proof and Transaction Details</h3>
          <p className="mb-4">
            The refund request must include the payment proof, such as the payment receipt, along with the Transaction ID and AIDEOA ID for verification.
            Failure to provide accurate and complete details may delay or cancel the processing of your refund.
          </p>

          <h3 className="text-xl font-semibold mt-4">3. Refund Method</h3>
          <p className="mb-4">
            Upon verification and approval within 7 working days, the refund will be initiated to the same UPI ID used during the original transaction.
            Please allow 28 working days for the refund to be processed and reflected in your account.
          </p>
          <p className="mb-4">
            If you have any questions or require further assistance, please contact our customer support team at <strong>aideoa2020@gmail.com</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Non-Refundable Fees</h2>
          <p className="mb-4">
            At AIDEOA, we maintain a strict non-refundable policy for membership fees and donations.
            If a user takes membership along with a donation in a single transaction, it is never refundable.
            This policy is essential to ensure the financial stability of the organization and to support ongoing initiatives and services provided to our members.
          </p>

          <h3 className="text-xl font-semibold mt-4">Exceptions to the Non-Refundable Policy</h3>
          <ul className="list-disc list-inside mb-4">
            <li><span className='font-semibold'>Duplicate Payments:</span> If you accidentally make a duplicate payment, you must inform us within 24 hours. AIDEOA will verify within 7 working days and refund the excess amount within 28 working days upon receipt of supporting documentation.</li>
            <li><span className='font-semibold'>Membership Cancellation Before Processing:</span> If a membership application is canceled before processing, a full refund will be issued.</li>
            <li><span className='font-semibold'>Special Circumstances:</span> AIDEOA may consider refunds in unique, extenuating circumstances on a case-by-case basis.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">How to Request a Refund (Transaction Failure)</h2>
          <p className="mb-4">
            If you believe you qualify for a refund based on the exceptions above, please submit a formal request by contacting AIDEOA through the designated support channel.
            Your request should include:
          </p>
          <ul className="list-decimal list-inside mb-4">
            <li>Your Full Name</li>
            <li>Contact Information (Phone Number and Email)</li>
            <li>A Clear Explanation of the Refund Request</li>
            <li>Supporting Documents (e.g., Proof of Duplicate Payments)</li>
          </ul>
          <p className="mb-4">
            Refund requests must be submitted within 24 hours of the payment to be eligible for review.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Refund Method and Bank Charges</h2>
          <p className="mb-4">
            Refunds will typically be issued to the original payment method, such as the account number or UPI ID provided.
            In some cases, if the original payment method is unavailable, AIDEOA may request additional details to process the refund.
            Please note that bank charges or transaction fees associated with the refund, if any, will be deducted from the total refund amount.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Processing Time</h2>
          <p className="mb-4">
            If a transaction issue occurs, you must inform the AIDEOA support team within 24 hours. AIDEOA will take action on your refund request within 7 working days.
            After that, the verification process will be completed, and if approved, refunds will be credited to the original payment method within 28 business days.
            Members will receive an email notification confirming the completion of the refund process.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Additional Considerations</h2>
          <ul className="list-disc list-inside mb-4">
            <li><span className='font-semibold'>Late Applications:</span> Memberships applied for late in the year (e.g., December) will still expire on March 31st, requiring renewal from April 1st.</li>
            <li><span className='font-semibold'>Communication:</span> To avoid misunderstandings, please review this policy and membership cycle details carefully before applying or donating.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p className="mb-4">
            For refund-related queries, reach out to us at:
          </p>
          <p className="mb-4"><strong>Email:</strong> aideoa2020@gmail.com</p>
          <p className="mb-4"><strong>Support Team:</strong> itcellaideoa@gmail.com</p>
          <p className="italic text-sm mb-4">
            Note: This refund policy is subject to All India Diploma Engineers & Officials Association terms and conditions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy