import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, CircuitBoard, Bot, MessageCircle, Laptop, Sparkles } from 'lucide-react';

const orbits = [
  {
    radius: 90,
    duration: 14,
    items: [
      { Icon: Code2, color: '#8B5CF6', size: 32 },      // dev
      { Icon: Laptop, color: '#3B7B84', size: 30 },     // website
    ],
  },
  {
    radius: 150,
    duration: 20,
    items: [
      { Icon: Cloud, color: '#3B7B84', size: 36 },      // cloud
      { Icon: Bot, color: '#EB6621', size: 32 },        // robot
    ],
  },
  {
    radius: 210,
    duration: 26,
    items: [
      { Icon: Brain, color: '#F97316', size: 32 },      // ai
      { Icon: MessageCircle, color: '#5E296F', size: 30 }, // chatbot
    ],
  },
  {
    radius: 270,
    duration: 32,
    items: [
      { Icon: CircuitBoard, color: '#8B5CF6', size: 30 }, // circuit
      { Icon: Sparkles, color: '#F97316', size: 28 },     // ollama placeholder
    ],
  },
];

export const OrbitSystem = () => {
  return (
    <div className="relative w-[560px] h-[560px] max-w-full flex items-center justify-center">
      {/* Core / sun */}
      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-strydo-purple to-strydo-orange shadow-[0_0_60px_20px_rgba(139,92,246,0.35)] animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Orbit path rings */}
      {orbits.map((o, i) => (
        <div
          key={`ring-${i}`}
          className="absolute rounded-full border border-white/10"
          style={{ width: o.radius * 2, height: o.radius * 2 }}
        />
      ))}

      {/* Rotating groups — each ring spins as one unit, carrying all its icons */}
      {orbits.map(({ radius, duration, items }, ringIndex) => {
        const angleStep = 360 / items.length;

        return (
          <motion.div
            key={`orbit-${ringIndex}`}
            className="absolute"
            style={{ width: radius * 2, height: radius * 2 }}
            animate={{ rotate: 360 }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
          >
            {items.map(({ Icon, color, size }, itemIndex) => {
              const angle = angleStep * itemIndex;

              return (
                <div
                  key={`item-${ringIndex}-${itemIndex}`}
                  className="absolute top-0 left-1/2 w-0 h-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  {/* icon sits at top of the ring, counter-rotates to stay upright */}
                  <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full backdrop-blur-sm"
                    style={{
                      width: size + 24,
                      height: size + 24,
                      background: `${color}1A`,
                      border: `1px solid ${color}40`,
                      boxShadow: `0 0 20px ${color}30`,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon size={size} color={color} strokeWidth={1.5} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
};