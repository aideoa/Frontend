export default function Notice() {
   return (
     <div className="bg-purple-600 text-white text-[10px] sm:text-xs md:text-sm opacity-90 p-1.5 sm:p-3 w-full flex flex-col items-center justify-center h-auto mt-1 sm:mt-2 shadow-md text-center leading-tight">
       {/* Notice Header */}
       <p className="font-bold text-[11px] sm:text-base">Notice from IT Cell, AIDEOA</p>
 
       <p className="text-center mt-0.5 max-w-5xl leading-[1.2] sm:leading-snug">
       📢 महत्वपूर्ण घोषणा! 🎉<br />

हम बेहद उत्साहित हैं यह बताते हुए कि AIDEOA अपनी आधिकारिक वेबसाइट www.aideoa.org.in को 6 फरवरी को लॉन्च करने जा रहा है! 🚀
        </p>
       {/* Notice Content */}
       <p className="text-center mt-0.5 max-w-5xl leading-[1.2] sm:leading-snug">
       हमारे R. K. Tiwary Sir और Bikash Das Sir की सोच के साथ AIDEOA समुदाय से जुड़े सभी लोग अब एक नए विश्वास और उत्साह के साथ माइनिंग समुदाय की समस्याओं का समाधान करेंगे। यह हम सबकी साझा समस्या है, और हम मिलकर इसे दूर करने के लिए निरंतर कार्य कर रहे हैं। यह हमारी प्रतिबद्धता है, और हम इसे जीवनभर करते रहेंगे।
       </p>
 
       {/* Notice Footer */}
       <p className="italic text-[9px] sm:text-xs mt-0.5">IT Cell, AIDEOA - @Vinay Tiwary</p>
     </div>
   );
 }
 