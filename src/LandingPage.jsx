import React,{ useState } from 'react';
import '@fontsource/playfair-display';
import '@fontsource/qwigley';
import '@fontsource/schoolbell';
import '@fontsource/short-stack';
import '@fontsource/twinkle-star';
import '@fontsource/uncial-antiqua';
import '@fontsource/vibes';

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  const fontClasses = [
    'playfair',
   
    'schoolbell',
    'shortstack',
    'twinkle star',
    'uncial antiqua',
    // 'vibes',
  ];
  const fontChanger = () => {
    setIndex(index < 5 ? index + 1 : 0);
  }

  setInterval(fontChanger, 1000);

  return (
    
    <div className="bg-white-300 h-screen w-screen flex flex-col items-center justify-center">
      <div>
      <h1 className="text-[4.5rem]" style={{ fontFamily: fontClasses[index] }}>Inkoraa</h1>
      <p className="text-[1.8rem] font-semibold text-center">Swipe | Match | Trade</p>
      </div>
    </div>
  )
}