import { motion } from 'framer-motion';
import React from 'react';

const BackgroundParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-minecraft-diamond rounded-full opacity-30"
          animate={{
            x: [0, Math.random() * window.innerWidth],
            y: [0, Math.random() * window.innerHeight],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
          }}
        />
      ))}
      
      {/* Minecraft-style blocks */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`block-${i}`}
          className="absolute w-8 h-8 minecraft-block opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          style={{
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
          }}
        />
      ))}
      
      {/* Pokemon-style orbs */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-6 h-6 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#FF0000' : '#0000FF'}, transparent)`,
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles; 