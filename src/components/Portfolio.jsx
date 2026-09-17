import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Zap, Cpu } from "lucide-react";

import image1 from "../assets/image 2.png";
import image3 from "../assets/image 5.png";

const PROJECTS = [
  {
    title: "Cafe Software",
    category: "SaaS",
    image: image1,
    color: "#006575",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "ERP Management System",
    category: "SaaS",
    image: image3,
    color: "#a93200",
    icon: <Zap className="w-8 h-8" />,
  },
];

const Portfolio = () => {
  const ref = React.useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-10%",
  });

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-32 px-6 bg-[var(--surface)]"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24 space-y-6">

          <div className="label-md tracking-[0.4em] opacity-30">
            Strategic Case Studies
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[var(--on-surface)] tracking-tighter leading-tight">
            Product{" "}
            <span className="text-[var(--secondary)] italic font-medium">
              Solution
            </span>{" "}
            <br />
            Architecture.
          </h2>

          <p className="text-xl text-[var(--on-surface-variant)] max-w-2xl mx-auto leading-relaxed opacity-70">
            From high-velocity SaaS engineering to prestige enterprise
            platforms, our work defines technical excellence for the world's
            most ambitious software products.
          </p>

        </div>

        {/* ================= PORTFOLIO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

          {PROJECTS.map((proj, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                rounded-[2.5rem]
                overflow-hidden
                bg-[var(--surface-container-lowest)]
                shadow-[var(--shadow-ambient)]
                transition-all
                duration-700
                hover:shadow-[0_45px_80px_rgba(26,28,30,0.1)]
              "
            >

              {/* ================= IMAGE ================= */}
              <div className="aspect-video overflow-hidden relative bg-gray-100">

                <img
                  src={proj.image}
                  alt={proj.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                />

                {/* Dark Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--on-surface)]/40
                    via-transparent
                    to-transparent
                    opacity-60
                  "
                />

                {/* ================= IMAGE OVERLAY ================= */}
                <div className="absolute inset-x-5 top-5 flex justify-between items-start">

                  {/* Project Icon */}
                  <div
                    className="
                      glass-panel
                      p-4
                      rounded-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      translate-y-[-10px]
                      group-hover:translate-y-0
                    "
                    style={{
                      color: proj.color,
                    }}
                  >
                    {proj.icon}
                  </div>

                  {/* Case Reference */}
                  <div
                    className="
                      chip
                      !bg-[var(--surface-container-lowest)]
                      ghost-border
                    "
                    style={{
                      color: proj.color,
                    }}
                  >
                    CASE_REF_{i === 0 ? "102" : "104"}
                  </div>

                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-8 md:p-10 space-y-4">

                <p
                  className="
                    label-md
                    font-black
                    uppercase
                    tracking-[0.3em]
                    opacity-40
                    text-[var(--on-surface)]
                  "
                >
                  {proj.category}
                </p>

                <div className="flex justify-between items-center gap-6">

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-black
                      text-[var(--on-surface)]
                      group-hover:text-[var(--primary)]
                      transition-colors
                    "
                  >
                    {proj.title}
                  </h3>

                  {/* Arrow */}
                  <div
                    className="
                      flex-shrink-0
                      w-12
                      h-12
                      rounded-full
                      border
                      border-[var(--outline-variant)]
                      flex
                      items-center
                      justify-center
                      transition-all
                      group-hover:bg-[var(--primary)]
                      group-hover:text-white
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={20} />
                  </div>

                </div>
              </div>

              {/* ================= BOTTOM ACCENT ================= */}
              <div
                className="
                  h-2
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-700
                  gradient-signature
                  absolute
                  bottom-0
                  left-0
                "
              />

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;