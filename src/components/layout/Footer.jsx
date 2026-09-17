import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Send } from 'lucide-react';
import { Button } from '../common/Button';

// Inline brand icons (lucide-react no longer ships these)
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8h2.75l.41-3h-3.16V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.63-.14-2.6 0-4.38 1.59-4.38 4.51V10H7v3h2.79v8h3.71z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.55 15.6V8.4L15.8 12l-6.25 3.6Z" />
  </svg>
);

export const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const linkClass =
    "group relative inline-flex items-center gap-1 hover:text-white transition-colors duration-300 w-fit";

  const underline = (
    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-strydo-orange transition-all duration-300 group-hover:w-full" />
  );

  const socials = [
    { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/strydotech', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/strydo_tech', label: 'Instagram' },
    { icon: FacebookIcon, href: 'https://www.facebook.com/Strydotech/', label: 'Facebook' },
    { icon: YoutubeIcon, href: 'https://www.youtube.com/channel/UCmAi8VVPAjDmMXGC7mrvbRQ', label: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#040406] text-gray-400 py-20 border-t border-white/5 z-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-strydo-orange/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">

        {/* Brand Col */}
        <div className="lg:col-span-2 space-y-6">
          <Link to="/" className="inline-block text-3xl font-bold tracking-tighter text-white">
            STRYDO<span className="text-strydo-orange">.</span>
          </Link>
          <p className="text-lg max-w-sm text-gray-300">
            Technology That Thinks. Solutions That Deliver.
          </p>

          {/* Newsletter */}
          <form onSubmit={handleSubscribe} className="pt-2 max-w-sm">
            <p className="text-sm text-gray-500 mb-3">Get updates on what we're building.</p>
            <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] pl-5 pr-1.5 py-1.5 focus-within:border-strydo-orange/50 transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-600 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-strydo-orange text-black hover:brightness-110 transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold tracking-wide text-sm uppercase">Company</h4>
          <ul className="space-y-4 text-sm">
            {['About', 'Careers', 'Portfolio', 'Contact'].map((label) => (
              <li key={label}>
                <Link to={`/${label.toLowerCase()}`} className={linkClass}>
                  {label}
                  {underline}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold tracking-wide text-sm uppercase">Services</h4>
          <ul className="space-y-4 text-sm">
            {['Software Dev', 'Web Dev', 'AI Solutions', 'SaaS & ERP'].map((label) => (
              <li key={label}>
                <Link to="/services" className={linkClass}>
                  {label}
                  {underline}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations Col */}
        <div className="space-y-6 lg:col-span-2">
          <h4 className="text-white font-semibold tracking-wide text-sm uppercase">Locations</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <a
              href="https://maps.app.goo.gl/sg2us7djiS4ZAgQj8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 hover:text-white transition-colors duration-300"
            >
              <MapPin className="w-4 h-4 text-strydo-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-gray-200 group-hover:text-white transition-colors">Vellore</p>
                <p className="text-gray-500">Katpadi, Tamil Nadu</p>
              </div>
            </a>
            <a
              href="https://maps.app.goo.gl/SKBgGZrYLXRsEHnN7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 hover:text-white transition-colors duration-300"
            >
              <MapPin className="w-4 h-4 text-strydo-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-gray-200 group-hover:text-white transition-colors">Tirupati</p>
                <p className="text-gray-500">Andhra Pradesh</p>
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm">
        <p className="text-gray-500">&copy; 2012 Strydo Technologies Pvt. Ltd. All rights reserved.</p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-strydo-orange/50 hover:bg-strydo-orange/10 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;