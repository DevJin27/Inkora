import React, { useState, useEffect } from 'react';

function TypewriterTitle({ text, typingSpeed = 150, className = "" }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, typingSpeed]);

  useEffect(() => {
    if (!isTypingComplete) {
      const blinkInterval = setInterval(() => {
        setCursorVisible((prevVisible) => !prevVisible);
      }, typingSpeed );
      return () => clearInterval(blinkInterval);
    } else {
      setCursorVisible(true); 
    }
  }, [isTypingComplete]);

  const cursorStyle = {
    display: !isTypingComplete ? (cursorVisible ? 'inline-block' : 'none') : 'inline-block',
    marginLeft: '0.1em', 
  };

  return (
    <h1 className={className} style={{ fontSize: '7.5rem', fontFamily: "Special Elite", color: '#000' }}>
      {displayText}
      <span style={cursorStyle}>|</span>
    </h1>
  );
}

export default TypewriterTitle;