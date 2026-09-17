import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Zap, Globe, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    title: "Discover & Plan",
    desc: "We understand your idea, define key features, and create a clear roadmap for your SaaS product.",
    icon: <Zap className="w-6 h-6" />,
    color: "var(--primary)"
  },
  {
    title: "Design & Prototype",
    desc: "We design user-friendly interfaces and build prototypes so you can see and validate the product early.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "var(--secondary)"
  },
  {
    title: "Build & Iterate",
    desc: "We develop your product in agile sprints, continuously improving based on feedback.",
    icon: <Cpu className="w-6 h-6" />,
    color: "var(--tertiary)"
  },
  {
    title: "Launch & Scale",
    desc: "We deploy your product, monitor performance, and help you scale as your users grow.",
    icon: <Globe className="w-6 h-6" />,
    color: "#5E0006"   // 🔥 new color (pink)
  }
];

const Process = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="process" className="py-32 px-6 bg-[var(--surface-container-low)] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <style>{`
              .process-card {
                display: block;
                position: relative;
                background-color: var(--surface-container-lowest);
                border-radius: 1rem;
                padding: 2.5vw 2vw;
                text-decoration: none;
                z-index: 10;
                overflow: hidden;
                border: 2px solid var(--card-flavor);
                box-shadow: 0 0 8px var(--card-flavor);
              }
              
              .process-card:before {
                content: '';
                position: absolute;
                z-index: 0;
                /* Dynamic color from inline variable */
                background: var(--card-flavor);
                height: 48px;
                width: 48px;
                border-radius: 50%;
                transform: scale(1);
                transform-origin: 50% 50%;
                transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              }
              
              .process-card.expand-tr:before {
                top: -24px;
                right: -24px;
              }
              
              .process-card.expand-tl:before {
                top: -24px;
                left: -24px;
              }
              
              .process-card:hover:before {
                /* Scale it huge to fill the whole card */
                transform: scale(30);
              }

              .process-card .phase-label,
              .process-card .card-title,
              .process-card .card-desc {
                transition: all 0.4s ease-out;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0));
              }

              .process-card:hover .phase-label,
              .process-card:hover .card-title,
              .process-card:hover .card-desc {
                color: #ffffff !important;
                opacity: 1 !important;
              }

              .go-corner {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 3.5rem;
                height: 3.5rem;
                overflow: hidden;
                top: 0;
                /* Dynamic color from inline variable */
                background: var(--card-flavor);
                z-index: 1;
              }
              
              .go-corner.tr {
                right: 0;
                border-radius: 0 1rem 0 2rem;
              }
              
              .go-corner.tl {
                left: 0;
                border-radius: 1rem 0 2rem 0;
              }
              
              .go-arrow {
                color: white;
                font-family: inherit;
                font-weight: bold;
                font-size: 1.4rem;
                line-height: 1;
              }
              
              .go-corner.tr .go-arrow {
                margin-top: -10px;
                margin-right: -10px;
              }
              
              .go-corner.tl .go-arrow {
                margin-top: -10px;
                margin-left: -10px;
              }
            `}</style>
        <div className="text-center mb-24 space-y-6">
          <div className="label-md tracking-[0.4em] opacity-30">
            Product Development Lifecycle
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--on-surface)] tracking-tighter leading-tight">
            The Product <span className="text-[var(--secondary)] italic font-medium">Velocity</span> <br /> Lifecycle.
          </h2>
          <p className="text-xl text-[var(--on-surface-variant)] max-w-2xl mx-auto leading-relaxed opacity-70">
            Our architectural pipeline is engineered for high-velocity deployment, ensuring your SaaS product evolves from vision to market dominance through iterative precision.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-[var(--outline-variant)] -translate-x-1/2 hidden md:block">
            <div ref={lineRef} className="w-full gradient-signature shadow-[0_0_20px_var(--primary)]" />
          </div>

          <div className="space-y-20 relative z-20">
            {STEPS.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 flex w-full justify-center ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div
                    className={`process-card ${i % 2 === 0 ? 'expand-tr md:text-right' : 'expand-tl md:text-left'} w-full max-w-[400px] text-center`}
                    style={{ '--card-flavor': step.color }}
                  >
                    <div className="space-y-4 relative z-10">
                      <div className="phase-label label-md tracking-[0.4em] text-[10px] text-[var(--on-surface)] opacity-40">Phase_0{i + 1}</div>
                      <h3 className="card-title text-3xl md:text-4xl font-black text-[var(--on-surface)] tracking-tighter leading-none">{step.title}</h3>
                      <p className="card-desc body-lg text-[var(--on-surface-variant)] leading-relaxed opacity-70">
                        {step.desc}
                      </p>
                    </div>
                    <div className={`go-corner ${i % 2 === 0 ? 'tr' : 'tl'}`}>
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>

                {/* Circuit Node - Space Grotesk Numbers */}
                <div className="relative z-10 w-20 h-20 transition-all duration-300 hover:scale-110 group cursor-pointer">
                  {/* Glow is now on an absolute background element that scales, not covering the front */}
                  <div className="absolute -inset-1.5 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />

                  {/* The actual card body that sits securely on top */}
                  <div className="absolute inset-0 rounded-3xl bg-[var(--surface-container-lowest)] ghost-border shadow-[var(--shadow-ambient)] flex items-center justify-center z-10">
                    <div style={{ color: step.color }}>{React.cloneElement(step.icon, { size: 24 })}</div>
                  </div>

                  {/* Badge slightly bigger and z-20 */}
                  <div className="technical-display absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[var(--on-surface)] text-[var(--surface)] font-bold text-[10px] flex items-center justify-center drop-shadow-md z-20 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-300">
                    0{i + 1}
                  </div>
                </div>

                <div className="flex-1 opacity-20 hidden md:block group">
                  <div className="w-full h-[1px] bg-[var(--outline-variant)]" />
                  <div className="p-4 flex gap-4">
                    <div className="h-8 w-1 gradient-signature rounded-full group-hover:h-12 transition-all duration-700" />
                    <div className="h-8 w-1 bg-[var(--surface-container-highest)] rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="relative flex justify-center">
            <style>{`
                      .cssbuttons-io-button {
                        background: var(--primary);
                        color: white;
                        font-family: 'Space Grotesk', sans-serif;
                        padding: 0.35em;
                        padding-left: 1.5em;
                        font-size: 1.25rem;
                        font-weight: 900;
                        border-radius: 0.75rem;
                        border: none;
                        letter-spacing: 0.05em;
                        display: flex;
                        align-items: center;
                        box-shadow: inset 0 0 1.6em -0.6em rgba(0,0,0,0.3);
                        overflow: hidden;
                        position: relative;
                        height: 3.8rem;
                        padding-right: 4.5rem;
                        cursor: pointer;
                        transition: all 0.3s;
                      }

                      .cssbuttons-io-button .icon {
                        background: white;
                        margin-left: 1em;
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 3.1rem;
                        width: 3.1rem;
                        border-radius: 0.6rem;
                        box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(0,0,0,0.1);
                        right: 0.35rem;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                      }

                      .cssbuttons-io-button:hover .icon {
                        width: calc(100% - 0.7rem);
                      }

                      .cssbuttons-io-button .icon svg {
                        width: 1.4rem;
                        height: 1.4rem;
                        transition: transform 0.3s;
                        color: var(--primary);
                      }

                      .cssbuttons-io-button:hover .icon svg {
                        transform: translateX(0.1em);
                      }

                      .cssbuttons-io-button:active .icon {
                        transform: scale(0.95);
                      }
                    `}</style>
            <button className="cssbuttons-io-button">
              Deploy Your Platform Matrix
              <div className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;