import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  Cpu,
  BarChart3,
  Smartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Import Robo Assets (adjust paths as needed)
import R1 from "../ROBO IMAGES/R1-Photoroom.png";
import R2 from "../ROBO IMAGES/R2-Photoroom.png";
import R3 from "../ROBO IMAGES/R3-Photoroom.png";
import R4 from "../ROBO IMAGES/R4-Photoroom.png";
import h12 from "../ROBO IMAGES/h12-Photoroom.png";
import h13 from "../ROBO IMAGES/h13-Photoroom.png";
import h14 from "../ROBO IMAGES/h14-Photoroom.png";
import blink from "../ROBO IMAGES/blink.png";
import contactUs from "../ROBO IMAGES/contact us.png";
import hi from "../ROBO IMAGES/hi.png";
import walking from "../ROBO IMAGES/walking.png";

const SERVICES = [
  {
    title: "SaaS Product Development",
    description: "We build scalable SaaS platforms that are secure, reliable, and ready to grow with your business.",
    icon: <Layers className="w-8 h-8" />,
    color: "#2997AC",
    side: "left",
    route: "/saas-product-development",
  },
  {
    title: "Integrations & Automation",
    description: "We connect your product with the tools you use and automate workflows to save time and reduce manual work.",
    icon: <Cpu className="w-8 h-8" />,
    color: "#F15A24",
    side: "right",
    route: "/integrations-automation",
  },
  {
    title: "Digital Marketing",
    description: "Accelerate your business growth with strategic digital marketing solutions—SEO, PPC, content marketing, and social media management tailored to your audience.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "#6C3483",
    side: "left",
    route: "/digital-marketing",
  },
  {
    title: "Mobile App Experience",
    description: "We extend your platform into smooth, high-performance mobile apps that keep users engaged on the go.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "#5E0006",
    side: "right",
    route: "/mobile-experience",
  },
];

// Helper: Get connection point relative to the cards container
const getConnectionPoint = (element, side, containerRect) => {
  if (!element || !containerRect) return null;
  const rect = element.getBoundingClientRect();
  let x, y;
  if (side === "left") {
    // Right edge of left card
    x = rect.right - containerRect.left;
  } else {
    // Left edge of right card
    x = rect.left - containerRect.left;
  }
  y = rect.top + rect.height / 2 - containerRect.top;
  return { x, y };
};

// Build a smooth multi-segment bezier path from an array of points
const buildSmoothPath = (points) => {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cp1x = prev.x + (curr.x - prev.x) * 0.33;
    const cp1y = prev.y;
    const cp2x = curr.x - (curr.x - prev.x) * 0.33;
    const cp2y = curr.y;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }
  return d;
};

// Get point on a cubic bezier curve at t (0..1)
const cubicBezierPoint = (p0, cp1, cp2, p3, t) => {
  const mt = 1 - t;
  const x = mt * mt * mt * p0.x + 3 * mt * mt * t * cp1.x + 3 * mt * t * t * cp2.x + t * t * t * p3.x;
  const y = mt * mt * mt * p0.y + 3 * mt * mt * t * cp1.y + 3 * mt * t * t * cp2.y + t * t * t * p3.y;
  return { x, y };
};

// Get point along the entire multi-segment path at overall progress (0..1)
const getPointOnPath = (segments, progress) => {
  if (segments.length === 0) return null;
  const totalProgress = Math.min(Math.max(progress, 0), 0.999);
  const segmentIndex = Math.min(Math.floor(totalProgress * segments.length), segments.length - 1);
  const t = (totalProgress * segments.length) - segmentIndex;
  const seg = segments[segmentIndex];
  return cubicBezierPoint(seg.p0, seg.cp1, seg.cp2, seg.p3, t);
};

// Dynamic Connecting Line + Robot Mover (with proper finish)
const DynamicConnector = ({ cardRefs, sides, headerRef, ctaSparkleRef, containerRef, scrollYProgress }) => {
  const [pathData, setPathData] = useState("");
  const [segments, setSegments] = useState([]);
  const animationFrameRef = useRef(null);

  const updatePath = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width === 0) return;

    const points = [];

    // 1. Start point: bottom-center of header
    if (headerRef.current) {
      const headerRect = headerRef.current.getBoundingClientRect();
      points.push({
        x: headerRect.left + headerRect.width / 2 - containerRect.left,
        y: headerRect.bottom - containerRect.top,
      });
    }

    // 2. Card connection points
    for (let i = 0; i < cardRefs.current.length; i++) {
      const cardEl = cardRefs.current[i]?.current;
      if (cardEl) {
        const point = getConnectionPoint(cardEl, sides[i], containerRect);
        if (point) points.push(point);
      }
    }

    // 3. End point: center of the CTA sparkles icon
    if (ctaSparkleRef.current) {
      const sparkleRect = ctaSparkleRef.current.getBoundingClientRect();
      points.push({
        x: sparkleRect.left + sparkleRect.width / 2 - containerRect.left,
        y: sparkleRect.top + sparkleRect.height / 2 - containerRect.top,
      });
    }

    if (points.length < 2) {
      setPathData("");
      setSegments([]);
      return;
    }

    // Build smooth bezier segments
    const newSegments = [];
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cp1x = prev.x + (curr.x - prev.x) * 0.33;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * 0.33;
      const cp2y = curr.y;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
      newSegments.push({ p0: prev, cp1: { x: cp1x, y: cp1y }, cp2: { x: cp2x, y: cp2y }, p3: curr });
    }
    setPathData(d);
    setSegments(newSegments);
  }, [cardRefs, sides, headerRef, ctaSparkleRef, containerRef]);

  const throttledUpdate = useCallback(() => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(updatePath);
  }, [updatePath]);

  useEffect(() => {
    updatePath();
    window.addEventListener("scroll", throttledUpdate, true);
    window.addEventListener("resize", throttledUpdate);
    const resizeObservers = cardRefs.current.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(throttledUpdate);
      observer.observe(ref.current);
      return observer;
    });
    if (headerRef.current) {
      const observer = new ResizeObserver(throttledUpdate);
      observer.observe(headerRef.current);
      resizeObservers.push(observer);
    }
    if (ctaSparkleRef.current) {
      const observer = new ResizeObserver(throttledUpdate);
      observer.observe(ctaSparkleRef.current);
      resizeObservers.push(observer);
    }
    return () => {
      window.removeEventListener("scroll", throttledUpdate, true);
      window.removeEventListener("resize", throttledUpdate);
      resizeObservers.forEach((obs) => obs?.disconnect());
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [throttledUpdate, updatePath, cardRefs, headerRef, ctaSparkleRef]);

  // Line draw progress (scroll driven)
  const lineProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Robot position along the dynamic path
  const robotPoint = useTransform(scrollYProgress, (progress) => {
    if (segments.length === 0) return { x: 0, y: 0 };
    const point = getPointOnPath(segments, progress);
    return point || { x: 0, y: 0 };
  });

  const robotX = useTransform(robotPoint, (p) => `${p.x}px`);
  const robotY = useTransform(robotPoint, (p) => `${p.y}px`);

  // Finish marker animations
  const markerOpacity = useTransform(lineProgress, [0.95, 1], [0, 1]);
  const markerScale = useTransform(lineProgress, [0.95, 1], [0.5, 1]);

  if (!pathData) return null;

  return (
    <>
      {/* SVG Line */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-[5]" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="dynamicLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2997AC" />
            <stop offset="50%" stopColor="#6C3483" />
            <stop offset="100%" stopColor="#F15A24" />
          </linearGradient>
        </defs>

        {/* Dashed background (make it slightly more visible) */}
        <path d={pathData} stroke="var(--outline-variant, #94a3b8)" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />

        {/* Deep Glow (behind main line) */}
        <motion.path
          d={pathData}
          stroke="url(#dynamicLineGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          opacity="0.15"
          style={{ pathLength: lineProgress }}
        />

        {/* Animated solid line */}
        <motion.path
          d={pathData}
          stroke="url(#dynamicLineGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength: lineProgress }}
        />

        {/* Finish marker (at the end of the line) */}
        <motion.circle
          r="8"
          fill="#F15A24"
          cx={segments.length > 0 ? segments[segments.length - 1].p3.x : 0}
          cy={segments.length > 0 ? segments[segments.length - 1].p3.y : 0}
          style={{
            opacity: markerOpacity,
            scale: markerScale,
          }}
        />
      </svg>

      {/* Robot that follows the dynamic line */}
      <RoboHero positionX={robotX} positionY={robotY} scrollYProgress={scrollYProgress} />
    </>
  );
};

// Updated RoboHero - receives position from parent
const RoboHero = ({ positionX, positionY, scrollYProgress }) => {
  const [currentImg, setCurrentImg] = useState(R1);

  // Image changes based on scroll progress (same as before)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      let nextImg = walking;
      if (v < 0.15) nextImg = R1;
      else if (v >= 0.15 && v < 0.35) nextImg = hi;
      else if (v >= 0.35 && v < 0.55) nextImg = blink;
      else if (v >= 0.55 && v < 0.75) nextImg = walking;
      else if (v >= 0.75) nextImg = contactUs;
      const isTransitioning = (v > 0.3 && v < 0.35) || (v > 0.55 && v < 0.6) || (v > 0.8 && v < 0.85);
      if (isTransitioning) {
        const frames = [h12, h13, h14];
        const frameIndex = Math.floor(v * 150) % frames.length;
        nextImg = frames[frameIndex];
      }
      setCurrentImg(nextImg);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="absolute z-[100] pointer-events-none hidden md:block"
      style={{ left: positionX, top: positionY, x: "-50%", y: "-50%" }}
    >
      <div className="relative group">
        <motion.img
          src={currentImg}
          alt="Robo Guide"
          style={{ width: "160px", height: "auto", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {currentImg === contactUs && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 whitespace-nowrap"
          >
            <span className="text-sm font-bold text-slate-800">Let's talk! 👋</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
          </motion.div>
        )}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/5 blur-xl rounded-full" />
      </div>
    </motion.div>
  );
};

// Service Card (unchanged except ref forwarding)
const ServiceCard = ({ service, index, forwardedRef }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (forwardedRef) forwardedRef.current = ref.current;
  }, [forwardedRef]);

  return (
    <div ref={ref} className={`relative flex w-full mb-20 md:mb-32 ${service.side === "left" ? "justify-start" : "justify-end"}`}>
      <style>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          max-width: 380px;
          height: 320px;
          perspective: 1000px;
          font-family: inherit;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.61, 0.98, 0.48, 1.01);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotate(180deg) rotateX(180deg);
        }
        .flip-card-front, .flip-card-back {
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.08);
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1.0rem;
          padding: 2.5rem;
          border: 4px solid var(--card-accent);
        }
        .flip-card-front {
          background: #ffffff;
          color: #000;
        }
        .flip-card-back {
          background: #ffffff;
          color: #1A1C1E;
          transform: rotateY(180deg);
          position: relative;
          overflow: hidden;
        }
        .flip-card-back::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--card-accent);
        }
        .title {
          font-size: 1.75rem;
          font-weight: 900;
          text-align: center;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .desc {
          font-size: 1.05rem;
          line-height: 1.6;
          text-align: center;
          opacity: 0.9;
        }
        .icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: var(--card-accent-soft);
          color: var(--card-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          transition: transform 0.3s ease;
        }
        .flip-card:hover .icon-wrap {
          transform: scale(1.1);
        }
        .hover-hint {
          margin-top: 1.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.3;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, x: service.side === "left" ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[48%] z-20 flex justify-center"
        style={{ "--card-accent": service.color, "--card-accent-soft": `${service.color}15` }}
      >
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon-wrap">{service.icon}</div>
              <p className="title">{service.title}</p>
              <p className="hover-hint">Hover to explore</p>
            </div>
            <div className="flip-card-back">
              <p className="desc">{service.description}</p>
              <div className="mt-8">
                <button
                  className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-sm hover:brightness-110 transition-all hover:gap-3 active:scale-95"
                  style={{ backgroundColor: service.color }}
                  onClick={() => navigate(service.route)}
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// DesignFabricLogo (unchanged)
const DesignFabricLogo = ({ side, color, delay = 0 }) => (
  <div className={`absolute top-1/2 -translate-y-1/2 ${side === "left" ? "right-[10%]" : "left-[10%]"} w-64 h-64 pointer-events-none z-0 hidden lg:block opacity-40`}>
    <svg viewBox="0 0 200 200" className="w-full h-full filter blur-[1px]">
      <defs>
        <linearGradient id={`grad-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2997AC" />
          <stop offset="50%" stopColor="#6C3483" />
          <stop offset="100%" stopColor="#F15A24" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 60 40 L 60 160 M 60 40 C 120 40 120 100 60 100 M 60 130 L 100 130"
        fill="none"
        stroke={`url(#grad-${side})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ pathLength: { duration: 3, delay, ease: "easeInOut" }, opacity: { duration: 1, delay }, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
      />
      <motion.path
        d="M 40 100 Q 100 20 160 100 T 40 100"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        strokeDasharray="4 4"
        opacity="0.3"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke={color}
        strokeWidth="0.2"
        opacity="0.2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2, opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </svg>
  </div>
);

// Main ServicesFlow Component
export default function ServicesFlow() {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const headerRef = useRef(null);
  const ctaSparkleRef = useRef(null); // Ref to the sparkles circle
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const cardRefs = useRef([]);
  const sides = SERVICES.map((s) => s.side);

  const registerCardRef = (index) => (el) => {
    cardRefs.current[index] = { current: el };
  };

  return (
    <section ref={containerRef} className="relative bg-[var(--surface-container-low)] pt-40 pb-60 px-6">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header - with ref */}
        <div ref={headerRef} className="text-center mb-28 space-y-6">
          <div className="label-md tracking-[0.4em] opacity-30">Platform Architecture Matrix</div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-[var(--on-surface)] tracking-tight leading-tight md:leading-snug"
          >
            SaaS{" "}
            <span className="inline-block mx-2 pr-2 text-gradient-signature font-medium italic">
              Infrastructure
            </span>{" "}
            Suite
          </motion.h2>
          <p className="text-xl text-[var(--on-surface-variant)] max-w-2xl mx-auto leading-relaxed opacity-70">
            From multi-tenant architecture to high-velocity growth systems, our solutions are built
            to power the next generation of SaaS digital powerhouses.
          </p>
        </div>

        {/* Cards + Dynamic Connector */}
        <div ref={cardsContainerRef} className="relative">
          <DynamicConnector
            cardRefs={cardRefs}
            sides={sides}
            headerRef={headerRef}
            ctaSparkleRef={ctaSparkleRef}
            containerRef={cardsContainerRef}
            scrollYProgress={scrollYProgress}
          />
          <div className="relative z-10">
            {SERVICES.map((service, index) => (
              <div key={index} className="relative">
                <DesignFabricLogo side={service.side} color={service.color} delay={index * 0.5} />
                <ServiceCard service={service} index={index} forwardedRef={registerCardRef(index)} />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Node - sparkles icon now has a ref */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="relative z-20 flex flex-col items-center justify-center mt-32"
        >
          <div
            ref={ctaSparkleRef}
            className="w-24 h-24 rounded-full bg-[var(--surface-container-lowest)] ghost-border flex items-center justify-center shadow-[var(--shadow-ambient)] mb-12 animate-float"
          >
            <Sparkles className="text-[var(--tertiary)] w-10 h-10" />
          </div>
          <h3 className="text-4xl font-extrabold text-[var(--on-surface)] mb-8 tracking-tight">
            Ready to Engineer?
          </h3>
          <div className="relative">
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
              Initialize Your Platform
              <div className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}