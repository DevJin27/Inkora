import React,{ useState } from 'react';
import TypewriterTitle from './Typewriter';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const [startY, setStartY] = useState(null);
  const [changeInY, setChangeInY] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // To track if the mouse button is pressed


  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setStartY(touch.clientY);
    setIsDragging(true); 
  };

  const handleTouchMove = (event) => {
    if (!isDragging || startY === null || event.touches.length !== 1) return;
    const touch = event.touches[0];
    const currentY = touch.clientY;
    const difference = currentY - startY;
    setChangeInY(difference);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (changeInY < -100) {
      console.log('Swipe up detected (touch)');
      navigate('/auth');
    }
    setStartY(null);
    setChangeInY(0);
  };

  // Mouse Event Handlers
  const handleMouseDown = (event) => {
    setStartY(event.clientY);
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (!isDragging || startY === null) return;
    const currentY = event.clientY;
    const difference = currentY - startY;
    setChangeInY(difference);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (changeInY < -100) {
      console.log('Swipe up detected (mouse ya trackpad)');
      navigate('/auth');
    }
    setStartY(null);
    setChangeInY(0);
  };


  return (
    <div>
      <div
        className="bg-white-300 h-screen w-screen flex flex-col items-center justify-center select-none"
        style={{ fontFamily: "Special Elite", touchAction: 'pan-y' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown} 
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseUp}  
      >
        <TypewriterTitle text={"Inkoraa"} typingSpeed={275} className="text-[10vw] color-[#000]" />
        <p className="text-[3vw] text-center">Swipe | Match | Trade</p>
      </div>
    </div>
  );
}

