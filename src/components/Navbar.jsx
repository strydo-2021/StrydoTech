import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MainLogo from '../images/logo1.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLink = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home — just scroll to section
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On a subpage — navigate to home, then scroll after mount
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] px-6 lg:px-12 py-4 pointer-events-none"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-20 px-6 glass-panel rounded-[2.5rem] shadow-[var(--shadow-ambient)] pointer-events-auto">

        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <motion.div whileHover={{ scale: 1.08 }}>
            <img
              src={MainLogo}
              alt="Strydo Technologies"
              className="h-20 w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* LINKS */}
        <div className="hidden lg:flex items-center gap-12">
          {['Services', 'Portfolio', 'Process', 'About'].map(link => (
            <motion.button
              whileHover={{ y: -2 }}
              key={link}
              onClick={() => handleNavLink(link.toLowerCase())}
              className="label-md font-black uppercase tracking-[0.4em] text-[var(--on-surface)] opacity-50 hover:opacity-100 transition-all hover:text-[var(--primary)] bg-transparent border-none cursor-pointer"
            >
              {link}
            </motion.button>
          ))}

          {/* 🔥 PREMIUM BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-17 flex items-center"
          >
            <span className="text-container flex items-center gap-3">
              <span className="text">Start Strategy</span>
              <ArrowRight size={18} />
            </span>
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <div className="flex lg:hidden p-3 glass-panel rounded-xl">
          <div className="w-6 h-0.5 bg-[var(--on-surface)] mb-1" />
          <div className="w-6 h-0.5 bg-[var(--on-surface)]" />
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;