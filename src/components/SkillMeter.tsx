
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useInView } from 'react-intersection-observer';

interface SkillMeterProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillMeter: React.FC<SkillMeterProps> = ({ name, percentage, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const { isTerminal } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const skillBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setWidth(percentage);
      }, 200 + delay);
    }
  }, [inView, percentage, delay]);

  // Terminal mode typing effect
  const [displayName, setDisplayName] = useState('');
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    if (inView && isTerminal && currentNameIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayName(prevText => prevText + name[currentNameIndex]);
        setCurrentNameIndex(prevIndex => prevIndex + 1);
      }, 50 + delay);
      
      return () => clearTimeout(timeout);
    }
  }, [inView, isTerminal, currentNameIndex, name, delay]);
  
  // Reset typing animation when switching modes
  useEffect(() => {
    setDisplayName('');
    setCurrentNameIndex(0);
  }, [isTerminal]);
  
  // Glowing effect for the skill bar
  useEffect(() => {
    if (!isTerminal || !skillBarRef.current) return;
    
    const glowAnimation = () => {
      const glow = document.createElement('div');
      glow.className = 'absolute h-full w-2 bg-terminal-green/80 blur-sm';
      glow.style.left = `${Math.min(width, 100) - 1}%`;
      glow.style.opacity = '1';
      glow.style.transition = 'opacity 1s';
      
      skillBarRef.current?.appendChild(glow);
      
      setTimeout(() => {
        glow.style.opacity = '0';
        setTimeout(() => {
          glow.remove();
        }, 1000);
      }, 1000);
    };
    
    if (width > 0) {
      const interval = setInterval(glowAnimation, 3000);
      return () => clearInterval(interval);
    }
  }, [width, isTerminal]);

  return (
    <div ref={ref} className="mb-6 transform transition-all duration-500" style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transitionDelay: `${delay}ms`
    }}>
      <div className="flex justify-between mb-1">
        <span className={`font-medium ${isTerminal ? 'font-mono' : ''}`}>
          {isTerminal ? (
            <>
              {displayName}
              {currentNameIndex < name.length && (
                <span className="inline-block w-2 h-4 bg-terminal-green ml-1 animate-blink"></span>
              )}
            </>
          ) : (
            name
          )}
        </span>
        <span className={`${isTerminal ? 'text-terminal-green' : ''} transition-all duration-700`} style={{
          opacity: width > 0 ? 1 : 0
        }}>
          {width}%
        </span>
      </div>
      <div 
        ref={skillBarRef}
        className={`skill-bar relative ${isTerminal ? 'bg-terminal-dark border border-terminal-green/30' : ''}`}
      >
        <div 
          className={`skill-progress ${isTerminal ? 'after:content-[""] after:absolute after:right-0 after:h-full after:w-0.5 after:bg-terminal-green after:animate-pulse-slow' : ''}`}
          style={{ width: `${width}%` }}
        />
        
        {isTerminal && width > 0 && (
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <div className="absolute h-full w-full bg-terminal-green/10 animate-pulse-slow" style={{
              width: `${width}%`
            }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillMeter;
