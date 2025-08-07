'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      brightness: number;
      twinkleSpeed: number;
    }> = [];

    // Create stars
    const createStars = () => {
      const starCount = 150;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          brightness: Math.random(),
          twinkleSpeed: Math.random() * 0.015 + 0.005,
        });
      }
    };
    createStars();

    // Animation
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        star.brightness += star.twinkleSpeed;
        if (star.brightness > 1 || star.brightness < 0) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Animated gradient nebula effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 300,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-600/20 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            rotate: {
              duration: 350,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 45,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />

        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-pink-500/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Shooting stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: '100px',
              top: `${Math.random() * 50}%`,
              left: '-100px',
            }}
            animate={{
              x: [0, typeof window !== 'undefined' ? window.innerWidth + 200 : 2000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 5,
              repeat: Infinity,
              repeatDelay: 10,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </>
  );
}