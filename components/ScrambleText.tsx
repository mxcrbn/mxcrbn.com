"use client";

import { useState, useEffect } from 'react';

interface ScrambleTextProps {
  from: string;
  to: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrambleText({ from, to, className = '', style = {} }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(from);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const targetText = isHovered ? to : from;
    const duration = 500; // 0.5s animation
    const frameRate = 30; // frames per second
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;

      if (frame >= totalFrames) {
        setDisplayText(targetText);
        clearInterval(interval);
        return;
      }

      // Calculate how many characters should be final vs scrambled
      const progress = frame / totalFrames;
      const finalChars = Math.floor(targetText.length * progress);

      // Build the display text
      let result = '';
      for (let i = 0; i < targetText.length; i++) {
        if (i < finalChars) {
          result += targetText[i];
        } else {
          // Random character from a set
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [isHovered, from, to]);

  return (
    <span
      className={className}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
}
