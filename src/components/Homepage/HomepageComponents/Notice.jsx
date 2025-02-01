export default function Notice() {
   return (
     <div className="bg-purple-600 text-white text-[10px] sm:text-xs md:text-sm opacity-90 p-1.5 sm:p-3 w-full flex flex-col items-center justify-center h-auto mt-1 sm:mt-2 shadow-md text-center leading-tight">
       {/* Notice Header */}
       <p className="font-bold text-[11px] sm:text-base">Notice from IT Cell, AIDEOA</p>
 
       {/* Notice Content */}
       <p className="text-center mt-0.5 max-w-2xl leading-[1.2] sm:leading-snug">
         The AIDEOA website is under development but accessible. Membership
         payments and donations are active. We request all members to start
         using it actively after February 3rd for the best experience.
       </p>
 
       {/* Notice Footer */}
       <p className="italic text-[9px] sm:text-xs mt-0.5">IT Cell, AIDEOA - @Vinay Tiwary</p>
     </div>
   );
 }
 