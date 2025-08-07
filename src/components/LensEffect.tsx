'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function LensEffect() {
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailIdRef = useRef(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Add trail point
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++
      };
      
      setTrail(prev => [...prev.slice(-8), newPoint]); // Keep last 8 points
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      cursorX.set(-100);
      cursorY.set(-100);
      setTrail([]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Trail effect */}
      <div className="pointer-events-none fixed inset-0 z-28">
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              left: point.x,
              top: point.y,
              background: `radial-gradient(circle, rgba(147, 197, 253, ${0.3 - index * 0.03}), transparent)`,
              boxShadow: `0 0 ${4 - index * 0.4}px rgba(147, 197, 253, ${0.5 - index * 0.05})`,
            }}
          />
        ))}
      </div>

      {/* Main cursor - Stellar effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
          }}
        >
          {/* Soft glow */}
          <div 
            className="absolute w-24 h-24 -top-12 -left-12 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(147, 197, 253, 0.08) 0%, transparent 60%)',
              filter: 'blur(20px)',
            }}
          />
          
          {/* Star core */}
          <div className="absolute">
            {/* Horizontal beam */}
            <div 
              className="absolute w-8 h-[1px] -left-4 top-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(147, 197, 253, 0.8), rgba(255, 255, 255, 1), rgba(147, 197, 253, 0.8), transparent)',
                boxShadow: '0 0 4px rgba(147, 197, 253, 0.8)',
              }}
            />
            
            {/* Vertical beam */}
            <div 
              className="absolute h-8 w-[1px] left-0 -top-4"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(147, 197, 253, 0.8), rgba(255, 255, 255, 1), rgba(147, 197, 253, 0.8), transparent)',
                boxShadow: '0 0 4px rgba(147, 197, 253, 0.8)',
              }}
            />
            
            {/* Center bright point */}
            <div 
              className="absolute w-2 h-2 -top-1 -left-1 rounded-full"
              style={{
                background: 'radial-gradient(circle, #ffffff 0%, rgba(147, 197, 253, 0.9) 50%, transparent 100%)',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.9), 0 0 20px rgba(147, 197, 253, 0.6)',
              }}
            />
          </div>
          
          {/* Rotating particles */}
          <motion.div
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div 
              className="absolute w-1 h-1 rounded-full"
              style={{
                top: -15,
                left: -0.5,
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 4px rgba(147, 197, 253, 0.8)',
              }}
            />
            <div 
              className="absolute w-1 h-1 rounded-full"
              style={{
                top: 15,
                left: -0.5,
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 4px rgba(147, 197, 253, 0.8)',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}