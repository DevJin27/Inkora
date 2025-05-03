import React from 'react';
import TypewriterTitle from './Typewriter';

export default function LandingPage() {
  const [startY, setStartY] = React.useState(null);
  const [changeInY, setChangeInY] = React.useState(0);
  const [swiped,setSwiped] = React.useState(false);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setStartY(touch.clientY);
    console.log('Touch started at Y (React):', touch.clientY);
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const currentY = touch.clientY;
    const difference = currentY - startY;
    setChangeInY(difference);

    if (difference < 0) {
      console.log('Vertical difference:', difference);
    }
  };

  const handleTouchEnd = () => {
    setStartY(null);
    setChangeInY(0);
    if (changeInY < -100) {
      console.log('Swipe up detected');
      setSwiped(true);

      
    }
  };
  

  return (
    <div>
      <div
        className="bg-white-300 h-screen w-screen flex flex-col items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <TypewriterTitle text={"Inkoraa"} typingSpeed={275} className="text-[10vw] color-[#000]" />
        <p className="text-[3vw] text-center">Swipe | Match | Trade</p>
      </div>
    </div>
  );
}