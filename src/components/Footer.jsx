import React from 'react';
import logo from "../images/LOGO.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff' }}>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Outfit:wght@400;600;700;800&display=swap');

.sf-root {
  background: #7881cc;
  font-family: 'DM Sans', sans-serif;
}

/* ───────── MAIN GRID ───────── */
.sf-main {
  background: #ffffff;
  padding: 64px 60px 52px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.3fr;
  gap: 56px;
  border-top: 1px solid #ECEAE4;
}

/* ───────── HEADINGS (UPDATED) ───────── */
.sf-col-head {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0D0D0D;
  margin-bottom: 18px;
  position: relative;
  display: inline-block;
}

.sf-col-head::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 40%;
  height: 2px;
  background: linear-gradient(90deg, #3B6BF5, #C026D3);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.sf-col-head:hover::after {
  width: 100%;
}

/* ───────── BRAND ───────── */
.sf-brand {
  margin-bottom: 18px;
}

.sf-about-text {
  font-size: 13.5px;
  color: #6E6A62;
  line-height: 1.78;
  margin-bottom: 14px;
}

.sf-ceo {
  font-size: 12.5px;
  color: #AEAB9E;
  font-style: italic;
  margin-top: 16px;
}

/* ───────── STATUS BADGE ───────── */
.sf-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #F4F8FF;
  border: 1px solid #D6E4FF;
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 11.5px;
  color: #3B6BF5;
  margin-top: 22px;
  font-weight: 500;
}

.sf-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22C55E;
  animation: blink 1.6s infinite;
}

@keyframes blink {
  0%,100% { opacity:1 }
  50% { opacity:0.3 }
}

/* ───────── SOCIAL LIST ───────── */
.sf-social-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sf-social-item {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 11px 15px;
  border-radius: 12px;
  background: #F9F8F5;
  border: 1px solid #ECEAE4;
  transition: all 0.25s ease;
  cursor: pointer;
  text-decoration: none;
}

.sf-social-item:hover {
  background: #F0F4FF;
  border-color: #3B6BF5;
  transform: translateX(4px) scale(1.02);
  box-shadow: 0 8px 20px rgba(59,107,245,0.15);
}

.sf-social-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sf-social-label {
  font-size: 13px;
  color: #3D3A34;
  font-weight: 500;
}

/* ───────── CONTACT LIST ───────── */
.sf-contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sf-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.sf-contact-icon-wrap {
  width: 38px;
  height: 38px;
  background: #F0F4FF;
  border: 1px solid #D6E4FF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sf-contact-text-head {
  font-size: 11px;
  color: #AEAB9E;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
  font-weight: 600;
}

.sf-contact-text-val {
  font-size: 13.5px;
  color: #3D3A34;
  line-height: 1.6;
}

.sf-contact-text-val a {
  color: #3B6BF5;
  text-decoration: none;
}

.sf-contact-text-val a:hover {
  text-decoration: underline;
}

/* ───────── BOTTOM BAR ───────── */
.sf-bottom {
  background: #F9F8F5;
  border-top: 1px solid #ECEAE4;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
}

.sf-copy {
  font-size: 12.5px;
  color: #AEAB9E;
}

.sf-copy a {
  color: #3B6BF5;
  text-decoration: none;
}

.sf-bottom-links {
  display: flex;
  gap: 0;
}

.sf-bottom-links a {
  font-size: 12.5px;
  color: #AEAB9E;
  text-decoration: none;
  padding: 0 18px;
  border-right: 1px solid #ECEAE4;
  transition: color 0.2s;
}

.sf-bottom-links a:last-child {
  border-right: none;
}

.sf-bottom-links a:hover {
  color: #3B6BF5;
}

/* ───────── RESPONSIVE ───────── */
@media (max-width: 900px) {
  .sf-main {
    grid-template-columns: 1fr 1fr;
    padding: 48px 32px 40px;
    gap: 36px;
  }
  .sf-bottom {
    padding: 18px 32px;
  }
}

@media (max-width: 580px) {
  .sf-main {
    grid-template-columns: 1fr;
    padding: 40px 24px 32px;
  }
  .sf-bottom {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px;
  }
  .sf-bottom-links {
    flex-wrap: wrap;
    gap: 8px;
  }
  .sf-bottom-links a {
    border-right: none;
    padding: 0;
  }
}
  /* ───────── SOCIAL ICON FIX ───────── */

.sf-social-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* BRAND COLORS (IMPORTANT) */
.si-li { background: #0A66C2; }
.si-tw { background: #000000; }
.si-ig { background: #E1306C; }
.si-gh { background: #24292F; }
.si-yt { background: #FF0000; }

/* SVG FIX (VERY IMPORTANT) */
.sf-social-icon svg {
  width: 16px;
  height: 16px;
  display: block;
}

/* Force visibility */
.sf-social-icon svg path,
.sf-social-icon svg rect,
.sf-social-icon svg circle,
.sf-social-icon svg line,
.sf-social-icon svg polygon {
  fill: #ffffff;
  stroke: #ffffff;
}

/* Hover animation */
.sf-social-item:hover .sf-social-icon {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
  .sf-social-icon {
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
  /* ───────── MODERN SOCIAL SECTION ───────── */
.sf-social-list-modern {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
}

.sf-social-item-modern {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #F8F7F4;
  border: 1px solid transparent;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  color: #3D3A34;
}

.sf-social-item-modern:hover {
  background: #ffffff;
  border-color: #E5E3DB;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08),
              0 4px 8px -2px rgba(0, 0, 0, 0.06);
}

.sf-social-icon-modern {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.25s ease;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* Brand Colors */
.si-li { color: #0A66C2; }
.si-x  { color: #000000; }
.si-ig { color: #E1306C; }
.si-gh { color: #24292F; }
.si-yt { color: #FF0000; }

.sf-social-item-modern:hover .sf-social-icon-modern {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.sf-social-label-modern {
  font-family: 'Outfit', system-ui, sans-serif;
  font-size: 14.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.sf-social-item-modern:hover .sf-social-label-modern {
  color: #1F1E1B;
}

/* Responsive */
@media (max-width: 580px) {
  .sf-social-list-modern {
    gap: 6px;
  }
  .sf-social-item-modern {
    padding: 11px 14px;
  }
}
  .sf-social-label-modern {
  opacity: 0.85;
  font-size: 13.5px;
}

.sf-social-item-modern:hover .sf-social-label-modern {
  opacity: 1;
}
      `}</style>

      <div className="sf-root">
        <div className="sf-main">

          {/* Column 1 — About */}
          <div>
            {/* Fixed height container for logo to establish baseline */}
            <div className="flex items-center h-[80px] mb-[30px]">
              <img
                src={logo}
                alt="Strydo Logo"
                className="max-h-full w-auto object-contain"
              />
            </div>
            <div className="sf-col-head">More About Us</div>
            <p className="sf-about-text">
              Strydo is a premium SaaS platform built for India's high-growth startups and global enterprises. We engineer digital infrastructure that scales without limits — from your first user to your millionth.
            </p>
            <p className="sf-about-text">
              Our mission is simple: give every founder the tools to build and operate at world-class speed, with zero compromise on quality or reliability.
            </p>
            <p className="sf-ceo">— Venkata Krishnan, CEO & founder</p>
            <div className="sf-status">
              <div className="sf-dot" />
              STRYDO TECHNOLOGIES
            </div>
          </div>

          {/* Column 2 — Keep Connected */}
          <div>
            {/* Invisible spacer matching the logo's height and margin to perfectly align headings */}
            <div className="h-[80px] mb-[30px] hidden lg:block" />
            <div className="sf-col-head">Keep Connected</div>

            <div className="social-tooltips-container">
              <style>{`
                .social-tooltips-container {
                  display: flex;
                  gap: 35px;
                  margin-top: 30px;
                  flex-wrap: wrap;
                }

                .tooltip-container {
                  position: relative;
                  cursor: pointer;
                  transition: all 0.2s;
                  font-size: 17px;
                  border-radius: 10px;
                }

                .tooltip {
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  padding: 10px;
                  opacity: 0;
                  pointer-events: none;
                  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  border-radius: 15px;
                  z-index: 100;
                  width: 200px;
                }

                .tooltip-container:hover .tooltip {
                  top: -110px;
                  opacity: 1;
                  visibility: visible;
                  pointer-events: auto;
                }

                .social-profile-card {
                  background: #1a1c1e;
                  border-radius: 12px;
                  padding: 12px;
                  border: 1px solid rgba(255,255,255,0.1);
                  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }

                .social-user {
                  display: flex;
                  gap: 12px;
                  align-items: center;
                }

                .social-img {
                  width: 40px;
                  height: 40px;
                  font-size: 18px;
                  font-weight: 800;
                  border-radius: 8px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: #fff;
                  flex-shrink: 0;
                }

                .social-details {
                  display: flex;
                  flex-direction: column;
                  overflow: hidden;
                }

                .social-name {
                  font-size: 14px;
                  font-weight: 700;
                  color: #fff;
                }

                .social-username {
                  font-size: 11px;
                  color: rgba(255,255,255,0.5);
                }

                .social-about {
                  color: rgba(255,255,255,0.7);
                  font-size: 11px;
                  margin-top: 8px;
                  padding-top: 8px;
                  border-top: 1px solid rgba(255,255,255,0.05);
                }

                /* 3D Stacked Icon Logic */
                .social-icon-link {
                  text-decoration: none;
                  display: block;
                  position: relative;
                }

                .social-layer {
                  width: 55px;
                  height: 55px;
                  position: relative;
                  transition: transform 0.3s;
                }

                .social-icon-link:hover .social-layer {
                  transform: rotate(-35deg) skew(20deg);
                }

                .social-layer span {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  border: 1px solid #fff;
                  border-radius: 12px;
                  transition: all 0.3s;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                .social-label-text {
                  position: absolute;
                  left: 50%;
                  bottom: -5px;
                  opacity: 0;
                  font-weight: 700;
                  font-size: 12px;
                  transform: translateX(-50%);
                  transition: bottom 0.3s ease, opacity 0.3s ease;
                  white-space: nowrap;
                }

                .social-icon-link:hover .social-label-text {
                  bottom: -25px;
                  opacity: 1;
                }

                /* Stack opacity and transformation */
                .social-icon-link:hover .social-layer span:nth-child(1) { opacity: 0.2; }
                .social-icon-link:hover .social-layer span:nth-child(2) { opacity: 0.4; transform: translate(5px, -5px); }
                .social-icon-link:hover .social-layer span:nth-child(3) { opacity: 0.6; transform: translate(10px, -10px); }
                .social-icon-link:hover .social-layer span:nth-child(4) { opacity: 0.8; transform: translate(15px, -15px); }
                .social-icon-link:hover .social-layer span:nth-child(5) { 
                  opacity: 1; 
                  transform: translate(20px, -20px); 
                  box-shadow: -1px 1px 3px rgba(0,0,0,0.2);
                }

                /* Platform Specific Styles */
                /* LinkedIn */
                .st-li span, .st-li .social-label-text, .st-li .social-name { color: #0077b5; border-color: #0077b5; }
                .st-li .social-img { color: #0077b5; border-color: #0077b5; }
                .st-li:hover .social-layer span { box-shadow: -1px 1px 3px #0077b5; }
                .st-li .social-layer span:nth-child(5) { background: #0077b5; color: #fff; }

                /* Instagram */
                .st-ig span, .st-ig .social-label-text, .st-ig .social-name { color: #e1306c; border-color: #e1306c; }
                .st-ig .social-img { color: #e1306c; border-color: #e1306c; }
                .st-ig:hover .social-layer span { box-shadow: -1px 1px 3px #e1306c; }
                .st-ig .social-layer span:nth-child(5) { 
                  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                  color: #fff; 
                }

                /* YouTube */
                .st-yt span, .st-yt .social-label-text, .st-yt .social-name { color: #ff0000; border-color: #ff0000; }
                .st-yt .social-img { color: #ff0000; border-color: #ff0000; }
                .st-yt:hover .social-layer span { box-shadow: -1px 1px 3px #ff0000; }
                .st-yt .social-layer span:nth-child(5) { background: #ff0000; color: #fff; }
              `}</style>

              {/* LinkedIn */}
              <div className="tooltip-container">
                <div className="tooltip">
                  <div className="social-profile-card">
                    <div className="social-user">
                      <div className="social-img" style={{ color: '#0077b5' }}>In</div>
                      <div className="social-details">
                        <div className="social-name">Strydo Tech</div>
                        <div className="social-username">@strydotech</div>
                      </div>
                    </div>
                    <div className="social-about">500+ Connections</div>
                  </div>
                </div>
                <a className="social-icon-link st-li" href="https://www.linkedin.com/company/strydotech/" target="_blank" rel="noopener noreferrer">
                  <div className="social-layer">
                    <span /><span /><span /><span />
                    <span>
                      <svg viewBox="0 0 448 512" height="24" width="24" fill="currentColor">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </span>
                  </div>
                  <div className="social-label-text">LinkedIn</div>
                </a>
              </div>

              {/* Instagram */}
              <div className="tooltip-container">
                <div className="tooltip">
                  <div className="social-profile-card">
                    <div className="social-user">
                      <div className="social-img" style={{ color: '#e1306c' }}>Ig</div>
                      <div className="social-details">
                        <div className="social-name">Strydo Tech</div>
                        <div className="social-username">@strydo_tech</div>
                      </div>
                    </div>
                    <div className="social-about">1000+ Followers</div>
                  </div>
                </div>
                <a className="social-icon-link st-ig" href="https://www.instagram.com/strydo_tech" target="_blank" rel="noopener noreferrer">
                  <div className="social-layer">
                    <span /><span /><span /><span />
                    <span>
                      <svg fill="currentColor" viewBox="0 0 448 512" height="24" width="24">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </div>
                  <div className="social-label-text">Instagram</div>
                </a>
              </div>

              {/* YouTube */}
              <div className="tooltip-container">
                <div className="tooltip">
                  <div className="social-profile-card">
                    <div className="social-user">
                      <div className="social-img" style={{ color: '#ff0000' }}>Yt</div>
                      <div className="social-details">
                        <div className="social-name">Strydo Tech</div>
                        <div className="social-username">@strydo_official</div>
                      </div>
                    </div>
                    <div className="social-about">1500+ Subscribers</div>
                  </div>
                </div>
                <a className="social-icon-link st-yt" href="https://www.youtube.com/results?search_query=strydo+technologies" target="_blank" rel="noopener noreferrer">
                  <div className="social-layer">
                    <span /><span /><span /><span />
                    <span>
                      <svg viewBox="0 0 24 24" height="28" width="28" fill="currentColor">
                        <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.068 4 12 4 12 4s-6.068 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.932 2 11.6 2 11.6s0 3.668.418 5.414c.23.86.908 1.538 1.768 1.768 1.746.418 7.814.418 7.814.418s6.068 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768.418-1.746.418-5.414.418-5.414s0-3.668-.418-5.414zM9.75 15.02V8.18l6.25 3.42-6.25 3.42z" />
                      </svg>
                    </span>
                  </div>
                  <div className="social-label-text">YouTube</div>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 — Contact Information */}
          <div>
            {/* Invisible spacer matching the logo's height and margin to perfectly align headings */}
            <div className="h-[80px] mb-[30px] hidden lg:block" />
            <div className="sf-col-head">Contact Information</div>
            <ul className="sf-contact-list">
              <li className="sf-contact-item">
                <div className="sf-contact-icon-wrap">
                  <svg width="16" height="16" fill="none" stroke="#3B6BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <div className="sf-contact-text-head">Office</div>
                  <div className="sf-contact-text-val">
                    Strydo Technologies Pvt. Ltd.<br />
                    257, 2nd Floor, Sapthagiri Complex Katpadi Main Road, <br />
                    Katpadi, Vellore - 632007, Tamil Nadu, India
                  </div>
                </div>
              </li>
              <li className="sf-contact-item">
                <div className="sf-contact-icon-wrap">
                  <svg width="16" height="16" fill="none" stroke="#3B6BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="sf-contact-text-head">Phone</div>
                  <div className="sf-contact-text-val">+91 9362620620</div>
                  <div className="sf-contact-text-val">+91 9176620620</div>
                </div>
              </li>
              <li className="sf-contact-item">
                <div className="sf-contact-icon-wrap">
                  <svg width="16" height="16" fill="none" stroke="#3B6BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="sf-contact-text-head">Email</div>
                  <div className="sf-contact-text-val">
                    <a href="mailto:support@strydotech.com">support@strydotech.com</a>
                  </div>
                </div>
              </li>
              <li className="sf-contact-item">
                <div className="sf-contact-icon-wrap">
                  <svg width="16" height="16" fill="none" stroke="#3B6BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="sf-contact-text-head">Support Hours</div>
                  <div className="sf-contact-text-val">Mon – Fri, 10 AM – 7 PM IST</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="sf-bottom">
          <p className="sf-copy">
            © 2026 <a href="#">Strydo Technologies Pvt. Ltd.</a> All rights reserved. Engineered in India.
          </p>
          <div className="sf-bottom-links">
            <a href="#">Company Info</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
