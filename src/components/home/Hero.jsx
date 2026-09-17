import React from 'react';
import { Button } from '../common/Button';
import { HeroCanvas } from './HeroCanvas';
import { OrbitSystem } from './OrbitSystem';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-strydo-dark">
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-strydo-purple to-strydo-orange">That Thinks.</span><br />
              Solutions That Deliver.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            We design, develop and deliver intelligent digital solutions that help businesses transform ideas into scalable technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" withArrow onClick={() => navigate('/contact')}>
              Start a Project
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/services')}>
              Explore Our Services
            </Button>
          </motion.div>
        </div>

        {/* Orbit system — hidden below lg to avoid crowding on smaller screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex flex-shrink-0"
        >
          <OrbitSystem />
        </motion.div>
      </div>
    </section>
  );
};