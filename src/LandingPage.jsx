import React from 'react';
import TypewriterTitle from './Typewriter';


export default function LandingPage() {


  return (
    
    <div className="bg-white-300 h-screen w-screen flex flex-col items-center justify-center">
      <div>
      <TypewriterTitle text={"Inkoraa"} typingSpeed={275} className="text-[4.5rem] font-bold text-black-500" />
      <p className="text-[1.8rem] font-semibold text-center">Swipe | Match | Trade</p>
      </div>
    </div>
  )
}