import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import LogoImg from '../../assets/logo.png';
import LogoScrolledImg from '../../assets/logo_withoutbg.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500">
      
      {/* THE DYNAMIC PILL CONTAINER */}
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "95%",
          maxWidth: isScrolled ? "1200px" : "1400px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(8, 8, 12, 0.4)",
          backdropFilter: "blur(16px)",
          borderRadius: isScrolled ? "100px" : "30px",
          y: 20,
          paddingLeft: isScrolled ? "35px" : "50px",
          paddingRight: isScrolled ? "20px" : "50px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "relative flex items-center justify-between transition-all duration-500",
          isScrolled
            ? "h-[85px] border border-black/[0.08] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)]"
            : "h-[100px] border border-white/10"
        )}
      >

        {/* LOGO AREA */}
        <Link to="/" className="flex items-center gap-4 group shrink-0 relative z-10">
          <div className="relative flex items-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={isScrolled ? 'scrolled' : 'top'}
                src={isScrolled ? LogoScrolledImg : LogoImg}
                alt="Strydo Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                // UPDATED SIZE: LARGER LOGO
                className="h-14 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </AnimatePresence>
            
            {/* Subtle glow behind logo in the dark state */}
            {!isScrolled && (
              <div className="absolute inset-0 bg-strydo-purple/20 blur-3xl rounded-full -z-10 scale-150" />
            )}
          </div>
          
          
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative px-5 py-3 text-[13px] font-black uppercase tracking-[0.15em] transition-colors duration-300 rounded-full group",
                  isScrolled
                    ? isActive ? "text-[#5E296F]" : "text-[#111114]/60 hover:text-[#5E296F]"
                    : isActive ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>

                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className={cn(
                      "absolute inset-0 rounded-full",
                      isScrolled ? "bg-[#5E296F]/10" : "bg-white/15"
                    )}
                  />
                )}

                {!isActive && (
                  <span className={cn(
                    "absolute bottom-2 left-5 right-5 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center",
                    isScrolled ? "bg-[#5E296F]" : "bg-[#EB6621]"
                  )} />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center relative z-10">
          <Link
            to="/contact"
            className={cn(
              "px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 active:scale-95",
              isScrolled
                ? "bg-[#111114] text-white hover:bg-[#5E296F] shadow-lg"
                : "bg-white text-[#111114] hover:bg-[#EB6621] hover:text-white shadow-xl shadow-white/5"
            )}
          >
            Let's Talk
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={cn(
            "lg:hidden relative z-10 p-3 rounded-2xl transition-colors",
            isScrolled ? "text-[#111114] hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#08080C]/80 backdrop-blur-md z-[90] lg:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 15, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-full left-6 right-6 bg-white rounded-[40px] p-10 shadow-2xl flex flex-col items-center gap-4 border border-white/20 lg:hidden z-[95]"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    className="block py-4 text-3xl font-black text-[#111114] hover:text-[#5E296F] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="w-full mt-6 bg-[#111114] text-white py-6 rounded-full font-black text-xl text-center shadow-xl hover:bg-[#5E296F] transition-colors"
              >
                Let's Talk
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;