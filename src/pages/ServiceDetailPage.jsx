import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { pillarData } from '../data/pillarData';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

/*
 * ============================================================
 * STRYDO TECHNOLOGIES — BRAND PALETTE
 * ============================================================
 *
 * Teal    #3B7B84
 * Purple  #5E296F
 * Magenta #742A5F
 * Red     #BC2D3F
 * Orange  #EB6621
 *
 * These colors are taken from the Strydo logo.
 */

const BRAND = {
  teal: '#3B7B84',
  purple: '#5E296F',
  magenta: '#742A5F',
  red: '#BC2D3F',
  orange: '#EB6621',
  ink: '#111114',
  cream: '#F7F5F0',
};

const accentPalette = [
  BRAND.teal,
  BRAND.purple,
  BRAND.orange,
  BRAND.red,
  BRAND.magenta,
];

const ServiceDetailPage = () => {
  const { pillarId } = useParams();

  const selectedPillar =
    pillarData.find(({ id }) => id === pillarId) || pillarData[0];

  /*
   * Normalize pillar data so the page continues to work
   * with the existing pillarData structure.
   */
  const pillar = {
    ...selectedPillar,

    title: selectedPillar.title || selectedPillar.category,

    features:
      selectedPillar.features ||
      selectedPillar.items.map((title) => ({
        t: title,
        d: `${title} designed around your business goals and built for dependable scale.`,
      })),

    longDesc:
      selectedPillar.longDesc || selectedPillar.description,

    tech:
      selectedPillar.tech || selectedPillar.items,

    caseStudy:
      selectedPillar.caseStudy || {
        name: selectedPillar.category,
        link: '/portfolio',
      },

    subServices:
      selectedPillar.subServices || null,
  };

  const Icon = pillar.icon || Globe;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pillarId]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F7F8] text-[#111114] selection:bg-[#5E296F] selection:text-white">

      <Navbar />

      {/* ============================================================
    LIGHT BRAND HERO
============================================================ */}
      <section className="relative overflow-hidden bg-[#F6F4F0]">

        {/* Soft technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
        linear-gradient(to right, #111114 1px, transparent 1px),
        linear-gradient(to bottom, #111114 1px, transparent 1px)
      `,
            backgroundSize: '48px 48px',
            maskImage:
              'linear-gradient(to bottom, black 0%, transparent 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, transparent 80%)',
          }}
        />

        {/* Premium ambient light */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 72% 18%, rgba(94,41,111,.10), transparent 30%), radial-gradient(circle at 18% 70%, rgba(59,123,132,.08), transparent 28%)',
          }}
        />

        {/* Brand glow — very subtle */}
        <div
          className="
      pointer-events-none
      absolute
      -right-40
      -top-40
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#EB6621]/[0.07]
      blur-3xl
    "
        />

        <div
          className="
      pointer-events-none
      absolute
      -left-40
      top-[35%]
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#3B7B84]/[0.06]
      blur-3xl
    "
        />

        <div
          className="
      relative
      z-10
      mx-auto
      max-w-7xl
      px-6
      pb-28
      pt-36
      md:px-12
      md:pb-36
      md:pt-44
    "
        >

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* --------------------------------------------------------
          TOP META
      -------------------------------------------------------- */}

            <div className="mb-10 flex items-center gap-4">

              <div className="flex items-center gap-1.5">

                <span
                  className="
              h-2
              w-2
              rounded-full
              bg-[#3B7B84]
            "
                />

                <span
                  className="
              h-2
              w-2
              rounded-full
              bg-[#5E296F]
            "
                />

                <span
                  className="
              h-2
              w-2
              rounded-full
              bg-[#EB6621]
            "
                />

              </div>

              <span
                className="
            text-[10px]
            font-black
            uppercase
            tracking-[0.38em]
            text-black/40
          "
              >
                Specialized Capability
              </span>

              <span className="h-px w-16 bg-black/10" />

              <span
                className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-black/25
          "
              >
                01 / 04
              </span>

            </div>


            {/* --------------------------------------------------------
          HERO TITLE
      -------------------------------------------------------- */}

            <h1
              className="
    max-w-[1180px]
    text-[4.25rem]
    font-black
    leading-[0.86]
    tracking-[-0.065em]
    sm:text-[6rem]
    md:text-[8rem]
    lg:text-[9.5rem]
  "
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #3B7B84 0%, #5E296F 28%, #742A5F 48%, #BC2D3F 70%, #EB6621 100%)',
                }}
              >
                {pillar.title}
              </span>

              <span
                className="ml-1"
                style={{
                  color: '#EB6621',
                }}
              >
                .
              </span>
            </h1>


            {/* --------------------------------------------------------
          HERO LOWER CONTENT
      -------------------------------------------------------- */}

            <div
              className="
          mt-14
          grid
          gap-8
          border-t
          border-black/10
          pt-8
          md:grid-cols-[1fr_auto]
          md:items-end
        "
            >

              <p
                className="
            max-w-3xl
            text-xl
            font-medium
            leading-relaxed
            text-black/50
            md:text-2xl
          "
              >
                {pillar.description}
              </p>


              {/* CTA */}

              <Link
                to="/contact"
                className="
            group
            inline-flex
            w-fit
            items-center
            gap-4
            rounded-2xl
            bg-[#111114]
            px-7
            py-4
            text-sm
            font-black
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#5E296F]
            hover:shadow-[0_24px_60px_rgba(94,41,111,.24)]
          "
              >

                Start a project

                <span
                  className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-transform
              group-hover:translate-x-1
            "
                >
                  <ArrowRight size={14} />
                </span>

              </Link>

            </div>


            {/* --------------------------------------------------------
          BRAND SPECTRUM
      -------------------------------------------------------- */}

            <div
              className="
          mt-16
          grid
          grid-cols-5
          overflow-hidden
          rounded-full
        "
            >

              <div className="h-1.5 bg-[#3B7B84]" />
              <div className="h-1.5 bg-[#5E296F]" />
              <div className="h-1.5 bg-[#742A5F]" />
              <div className="h-1.5 bg-[#BC2D3F]" />
              <div className="h-1.5 bg-[#EB6621]" />

            </div>

          </motion.div>

        </div>


        {/* Bottom technical label */}

        <div
          className="
      absolute
      bottom-8
      right-6
      hidden
      items-center
      gap-3
      md:flex
      md:right-12
    "
        >

          <span
            className="
        text-[9px]
        font-black
        uppercase
        tracking-[0.3em]
        text-black/25
      "
          >
            STRYDO TECHNOLOGIES
          </span>

          <span className="h-px w-10 bg-black/10" />

          <span
            className="
        text-[9px]
        font-black
        tracking-[0.2em]
        text-[#3B7B84]
      "
          >
            2026
          </span>

        </div>

      </section>

      {/* ============================================================
          CAPABILITIES
      ============================================================ */}

      <section
        id="capabilities"
        className="
          relative
          bg-[#F6F4F0]
          py-28
          md:py-48
        "
      >

        {/* Ambient background */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-96
            w-96
            rounded-full
            bg-[#EB6621]/[0.04]
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            md:px-12
          "
        >

          {/* Section heading */}

          <div
            className="
              mb-16
              flex
              flex-col
              justify-between
              gap-8
              md:mb-24
              md:flex-row
              md:items-end
            "
          >

            <div className="max-w-2xl">

              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#3B7B84]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.35em]
                    text-[#5E296F]
                  "
                >
                  What we do
                </span>

              </div>

              <h2
                className="
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-5xl
                  md:text-7xl
                "
              >
                Capability,
                <br />
                <span className="text-black/35">
                  without the noise.
                </span>
              </h2>

            </div>

            <p
              className="
                max-w-md
                text-base
                font-medium
                leading-relaxed
                text-black/45
                md:text-lg
              "
            >
              Focused expertise, practical execution and a clear path
              from idea to measurable business impact.
            </p>

          </div>


          {/* ========================================================
              BENTO GRID
          ======================================================== */}

          <div className="grid gap-5 lg:grid-cols-12">

            {/* ======================================================
                CORE COMPETENCIES
            ====================================================== */}

            <div
              className="
                overflow-hidden
                rounded-[2.5rem]
                border
                border-black/[0.06]
                bg-white
                shadow-[0_24px_80px_rgba(17,17,20,.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(17,17,20,.11)]
                lg:col-span-7
              "
            >

              {/* Header */}

              <div
                className="
                  border-b
                  border-black/[0.06]
                  px-7
                  py-6
                  md:px-10
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <h3
                    className="
                      text-xl
                      font-black
                      tracking-tight
                      md:text-2xl
                    "
                  >
                    Core competencies
                  </h3>

                  <span
                    className="
                      rounded-full
                      bg-[#111114]
                      px-3
                      py-1.5
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-white
                    "
                  >
                    {String(pillar.features.length).padStart(
                      2,
                      '0'
                    )}{' '}
                    areas
                  </span>

                </div>

              </div>


              {/* Features */}

              <div className="divide-y divide-black/[0.06]">

                {pillar.features.map((feature, i) => {

                  const accent =
                    accentPalette[
                    i % accentPalette.length
                    ];

                  return (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        x: -18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        margin: '-50px',
                      }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.45,
                      }}
                      className="
                        group
                        relative
                        flex
                        gap-5
                        px-7
                        py-7
                        transition-colors
                        hover:bg-[#F6F4F0]/70
                        md:px-10
                        md:py-8
                      "
                    >

                      {/* Hover accent */}

                      <span
                        className="
                          absolute
                          bottom-0
                          left-0
                          top-0
                          w-1
                          origin-bottom
                          scale-y-0
                          transition-transform
                          duration-300
                          group-hover:scale-y-100
                        "
                        style={{
                          background: accent,
                        }}
                      />

                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          transition-all
                          duration-300
                          group-hover:scale-105
                        "
                        style={{
                          background: `${accent}12`,
                        }}
                      >

                        <CheckCircle2
                          size={21}
                          style={{
                            color: accent,
                          }}
                        />

                      </div>


                      {/* Content */}

                      <div className="min-w-0">

                        <div
                          className="
                            mb-1
                            flex
                            items-baseline
                            gap-3
                          "
                        >

                          <span
                            className="
                              text-[9px]
                              font-black
                              tracking-[0.2em]
                            "
                            style={{
                              color: accent,
                            }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>

                          <h4
                            className="
                              text-lg
                              font-black
                              tracking-tight
                              md:text-xl
                            "
                          >
                            {feature.t}
                          </h4>

                        </div>

                        <p
                          className="
                            max-w-2xl
                            text-sm
                            font-medium
                            leading-relaxed
                            text-black/45
                            md:text-base
                          "
                        >
                          {feature.d}
                        </p>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>


            {/* ======================================================
                ECOSYSTEM
            ====================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                bg-[#111114]
                p-8
                text-white
                shadow-[0_28px_90px_rgba(17,17,20,.20)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_38px_110px_rgba(17,17,20,.28)]
                lg:col-span-5
                md:p-10
              "
            >

              {/* Decorative glow */}

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#5E296F]/30
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-32
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#3B7B84]/20
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.3em]
                      text-[#EB6621]
                    "
                  >
                    The ecosystem
                  </span>

                  <Globe
                    size={18}
                    className="text-white/30"
                  />

                </div>


                {/* Description */}

                <p
                  className="
                    mt-12
                    text-xl
                    font-medium
                    leading-relaxed
                    text-white/65
                    md:text-2xl
                  "
                >
                  {pillar.longDesc}
                </p>


                {/* Technologies */}

                <div className="mt-auto pt-12">

                  <p
                    className="
                      mb-4
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.28em]
                      text-white/30
                    "
                  >
                    Tools & technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {pillar.tech.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.055]
                          px-4
                          py-2
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.14em]
                          text-white/60
                          transition-all
                          hover:border-white/25
                          hover:bg-white/10
                          hover:text-white
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ========================================================
              PROJECT CTA STRIP
          ======================================================== */}

          <Link
            to="/contact"
            className="
              group
              mt-6
              block
              overflow-hidden
              rounded-[2.5rem]
              bg-white
              shadow-[0_20px_70px_rgba(17,17,20,.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(17,17,20,.12)]
            "
          >

            <div
              className="
                relative
                flex
                flex-col
                gap-8
                p-8
                md:flex-row
                md:items-center
                md:justify-between
                md:p-10
                lg:p-12
              "
            >

              {/* Brand gradient line */}

              <div
                className="
                  absolute
                  inset-y-0
                  left-0
                  w-1.5
                "
                style={{
                  background:
                    'linear-gradient(to bottom, #3B7B84, #5E296F, #BC2D3F, #EB6621)',
                }}
              />

              <div className="pl-2">

                <p
                  className="
                    mb-2
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-[#5E296F]
                  "
                >
                  Ready when you are
                </p>

                <h3
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    md:text-3xl
                  "
                >
                  Start your {pillar.title} project.
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-black/40
                  "
                >
                  Talk to a solution architect and turn the next idea
                  into a practical plan.
                </p>

              </div>


              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#111114]
                  text-white
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-[#5E296F]
                  md:h-16
                  md:w-16
                "
              >

                <ArrowRight
                  size={23}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </div>

            </div>

          </Link>

        </div>

      </section>


      {/* ============================================================
          SUB-SERVICES
      ============================================================ */}

      {/* ============================================================
    SUB-SERVICE DISCIPLINES
============================================================ */}
      {pillar.subServices &&
        pillar.subServices.length > 0 && (

          <section className="relative overflow-hidden bg-white py-28 md:py-44">

            {/* Background decoration */}

            <div
              className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#5E296F]/[0.035]
          blur-3xl
        "
            />

            <div
              className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#3B7B84]/[0.035]
          blur-3xl
        "
            />


            <div
              className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          md:px-12
        "
            >

              {/* ======================================================
            SECTION INTRO
        ====================================================== */}

              <div
                className="
            grid
            gap-10
            border-b
            border-black/10
            pb-16
            md:grid-cols-[1.15fr_.85fr]
            md:items-end
            md:pb-20
          "
              >

                <div>

                  <div
                    className="
                mb-7
                flex
                items-center
                gap-3
              "
                  >

                    <span
                      className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#EB6621]
                "
                    />

                    <span
                      className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.35em]
                  text-[#5E296F]
                "
                    >
                      Inside the discipline
                    </span>

                  </div>


                  <h2
                    className="
                max-w-4xl
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.055em]
                text-[#111114]
                sm:text-6xl
                md:text-7xl
                lg:text-[6.5rem]
              "
                  >

                    Where the{' '}

                    <span
                      className="
                  bg-gradient-to-r
                  from-[#3B7B84]
                  via-[#5E296F]
                  to-[#EB6621]
                  bg-clip-text
                  text-transparent
                "
                    >
                      {pillar.title.toLowerCase()}
                    </span>

                    <br />

                    work actually happens.

                  </h2>

                </div>


                <div className="md:pb-2">

                  <p
                    className="
                max-w-md
                text-base
                font-medium
                leading-relaxed
                text-black/45
                md:text-lg
              "
                  >
                    Every engagement is broken into focused disciplines,
                    each with its own strategy, tooling and success
                    metrics — giving every part of the work a clear
                    purpose.
                  </p>


                  <div
                    className="
                mt-8
                flex
                items-center
                gap-4
              "
                  >

                    <span
                      className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-[#111114]
                "
                    >
                      {String(pillar.subServices.length).padStart(2, '0')}
                    </span>

                    <span
                      className="
                  max-w-[120px]
                  text-[9px]
                  font-black
                  uppercase
                  leading-relaxed
                  tracking-[0.2em]
                  text-black/30
                "
                    >
                      disciplines
                      <br />
                      working together
                    </span>

                  </div>

                </div>

              </div>


              {/* ======================================================
            DISCIPLINE LIST — ALTERNATING LAYOUT
        ====================================================== */}

              <div className="mt-10 md:mt-16">

                {pillar.subServices.map((sub, i) => {

                  const accent =
                    accentPalette[i % accentPalette.length];

                  const isEven = i % 2 === 0;

                  return (
                    <motion.div
                      key={sub.title}

                      initial={{
                        opacity: 0,
                        y: 30,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      viewport={{
                        once: true,
                        margin: '-80px',
                      }}

                      transition={{
                        duration: 0.65,
                        delay: i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}

                      className="group relative border-b border-black/[0.08] py-14 md:py-20 lg:py-24"
                    >

                      {/* Hover background */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          -z-10
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                        style={{
                          background: isEven
                            ? `linear-gradient(90deg, ${accent}08, transparent 70%)`
                            : `linear-gradient(270deg, ${accent}08, transparent 70%)`,
                        }}
                      />


                      {/* ==================================================
                          EVEN — LEFT TITLE / RIGHT CONTENT
                      ================================================== */}

                      {isEven ? (

                        <div
                          className="
                            grid
                            gap-10
                            md:grid-cols-[80px_1.15fr_1fr_70px]
                            md:items-center
                            md:gap-10
                            lg:grid-cols-[100px_1.1fr_1fr_80px]
                            lg:gap-14
                          "
                        >

                          {/* Number */}

                          <div>

                            <span
                              className="
                                text-4xl
                                font-black
                                leading-none
                                tracking-[-0.06em]
                                md:text-5xl
                                lg:text-6xl
                              "
                              style={{ color: accent }}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </span>

                          </div>


                          {/* Title */}

                          <div>

                            <h3
                              className="
                                max-w-[650px]
                                text-[2.8rem]
                                font-black
                                leading-[0.88]
                                tracking-[-0.06em]
                                text-[#111114]
                                transition-transform
                                duration-500
                                group-hover:translate-x-2
                                sm:text-[3.5rem]
                                md:text-[4rem]
                                lg:text-[4.4rem]
                              "
                            >
                              {sub.title}
                            </h3>

                            <div
                              className="
                                mt-7
                                h-[3px]
                                w-14
                                rounded-full
                                transition-all
                                duration-500
                                group-hover:w-28
                              "
                              style={{ background: accent }}
                            />

                          </div>


                          {/* Description */}

                          <div className="md:pt-2">

                            <p
                              className="
                                max-w-xl
                                text-lg
                                font-medium
                                leading-[1.65]
                                text-black/55
                                md:text-xl
                              "
                            >
                              {sub.description}
                            </p>


                            {/* Tactics */}

                            <p
                              className="
                                mb-3
                                mt-8
                                text-[9px]
                                font-black
                                uppercase
                                tracking-[0.28em]
                                text-black/30
                              "
                            >
                              Key tactics
                            </p>

                            <div className="flex flex-col gap-2.5">

                              {sub.tactics.map((tactic) => (

                                <div
                                  key={tactic}
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-black/[0.08]
                                    bg-[#F6F4F0]
                                    px-5
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    leading-snug
                                    text-black/60
                                    transition-all
                                    duration-300
                                    group-hover:bg-white
                                    md:text-base
                                  "
                                >
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                    style={{ background: accent }}
                                  />
                                  {tactic}
                                </div>

                              ))}

                            </div>

                          </div>


                          {/* Arrow */}

                          <div
                            className="
                              hidden
                              h-16
                              w-16
                              items-center
                              justify-center
                              self-start
                              rounded-full
                              border
                              border-black/10
                              bg-white
                              text-black/30
                              transition-all
                              duration-500
                              group-hover:scale-110
                              md:flex
                              lg:h-[72px]
                              lg:w-[72px]
                            "
                          >
                            <ArrowUpRight
                              size={24}
                              className="
                                transition-transform
                                duration-500
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                              "
                            />
                          </div>

                        </div>

                      ) : (

                        /* ==================================================
                           ODD — RIGHT TITLE / LEFT CONTENT
                        ================================================== */

                        <div
                          className="
                            grid
                            gap-10
                            md:grid-cols-[70px_1fr_1.15fr_80px]
                            md:items-center
                            md:gap-10
                            lg:grid-cols-[80px_1fr_1.1fr_100px]
                            lg:gap-14
                          "
                        >

                          {/* Arrow */}

                          <div
                            className="
                              hidden
                              h-16
                              w-16
                              items-center
                              justify-center
                              self-start
                              rounded-full
                              border
                              border-black/10
                              bg-white
                              text-black/30
                              transition-all
                              duration-500
                              group-hover:scale-110
                              md:flex
                              lg:h-[72px]
                              lg:w-[72px]
                            "
                          >
                            <ArrowUpRight
                              size={24}
                              className="
                                rotate-180
                                transition-transform
                                duration-500
                                group-hover:-translate-x-1
                                group-hover:translate-y-1
                              "
                            />
                          </div>


                          {/* Description */}

                          <div
                            className="
                              order-2
                              md:order-none
                              md:pt-2
                            "
                          >

                            <p
                              className="
                                max-w-xl
                                text-lg
                                font-medium
                                leading-[1.65]
                                text-black/55
                                md:text-xl
                              "
                            >
                              {sub.description}
                            </p>


                            {/* Tactics */}

                            <p
                              className="
                                mb-3
                                mt-8
                                text-[9px]
                                font-black
                                uppercase
                                tracking-[0.28em]
                                text-black/30
                              "
                            >
                              Key tactics
                            </p>

                            <div className="flex flex-col gap-2.5">

                              {sub.tactics.map((tactic) => (

                                <div
                                  key={tactic}
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-black/[0.08]
                                    bg-[#F6F4F0]
                                    px-5
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    leading-snug
                                    text-black/60
                                    transition-all
                                    duration-300
                                    group-hover:bg-white
                                    md:text-base
                                  "
                                >
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                    style={{ background: accent }}
                                  />
                                  {tactic}
                                </div>

                              ))}

                            </div>

                          </div>


                          {/* Title */}

                          <div className="order-1 md:order-none">

                            <div className="flex items-start gap-5">

                              <h3
                                className="
                                  max-w-[650px]
                                  text-[2.8rem]
                                  font-black
                                  leading-[0.88]
                                  tracking-[-0.06em]
                                  text-[#111114]
                                  transition-transform
                                  duration-500
                                  group-hover:-translate-x-2
                                  sm:text-[3.5rem]
                                  md:text-[4rem]
                                  lg:text-[4.4rem]
                                "
                              >
                                {sub.title}
                              </h3>

                            </div>


                            <div
                              className="
                                mt-7
                                ml-auto
                                h-[3px]
                                w-14
                                rounded-full
                                transition-all
                                duration-500
                                group-hover:w-28
                              "
                              style={{ background: accent }}
                            />

                          </div>


                          {/* Number */}

                          <div
                            className="
                              order-3
                              text-right
                              md:order-none
                            "
                          >

                            <span
                              className="
                                text-4xl
                                font-black
                                leading-none
                                tracking-[-0.06em]
                                md:text-5xl
                                lg:text-6xl
                              "
                              style={{ color: accent }}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </span>

                          </div>

                        </div>

                      )}


                      {/* ==================================================
                          COLOR RAIL
                      ================================================== */}

                      <span
                        className={`
                          absolute
                          bottom-0
                          top-0
                          w-1
                          origin-center
                          scale-y-0
                          transition-transform
                          duration-500
                          group-hover:scale-y-100
                          ${isEven ? 'left-0' : 'right-0'}
                        `}
                        style={{
                          background: accent,
                        }}
                      />

                    </motion.div>
                  );
                })}

              </div>


              {/* ======================================================
            BOTTOM STATEMENT
        ====================================================== */}

              <div
                className="
            mt-20
            flex
            flex-col
            justify-between
            gap-8
            border-t
            border-black/10
            pt-8
            md:flex-row
            md:items-center
          "
              >

                <p
                  className="
              max-w-xl
              text-sm
              font-medium
              leading-relaxed
              text-black/35
            "
                >
                  Strategy, execution and technology working as one
                  connected system.
                </p>


                <div className="flex items-center gap-2">

                  {accentPalette.map((color) => (

                    <span
                      key={color}
                      className="
                  h-1
                  w-12
                  rounded-full
                  transition-all
                  duration-300
                  hover:w-20
                "
                      style={{
                        background: color,
                      }}
                    />

                  ))}

                </div>

              </div>

            </div>

          </section>
        )}


      {/* ============================================================
          FINAL CASE STUDY CTA
      ============================================================ */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#111114]
          py-28
          text-center
          text-white
          md:py-48
        "
      >

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.08]
          "
        >

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 20% 20%,
                  ${BRAND.teal} 0,
                  transparent 24%
                ),
                radial-gradient(
                  circle at 80% 70%,
                  ${BRAND.orange} 0,
                  transparent 25%
                )
              `,
            }}
          />

        </div>


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            px-6
            md:px-12
          "
        >

          {/* Label */}

          <div
            className="
              mx-auto
              mb-8
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
              backdrop-blur
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#EB6621]
                shadow-[0_0_12px_#EB6621]
              "
            />

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.3em]
                text-white/45
              "
            >
              Success delivered
            </span>

          </div>


          {/* Main CTA */}

          <h2
            className="
              text-5xl
              font-black
              leading-[0.88]
              tracking-[-0.06em]
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
            "
          >

            See the impact

            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#3B7B84]
                via-[#742A5F]
                to-[#EB6621]
                bg-clip-text
                text-transparent
              "
            >
              in {pillar.caseStudy.name}.
            </span>

          </h2>


          {/* Case study button */}

          <Link
            to={pillar.caseStudy.link}
            className="
              group
              mt-12
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-white
              px-8
              py-4
              text-base
              font-black
              text-[#111114]
              shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#EB6621]
              hover:text-white
              md:px-10
              md:py-5
              md:text-lg
            "
          >

            Explore case study

            <Globe
              size={21}
              className="
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

          </Link>


          {/* Bottom brand spectrum */}

          <div
            className="
              mx-auto
              mt-20
              flex
              max-w-md
              items-center
              gap-2
            "
          >

            {accentPalette.map((color) => (

              <span
                key={color}
                className="
                  h-1
                  flex-1
                  rounded-full
                "
                style={{
                  background: color,
                }}
              />

            ))}

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default ServiceDetailPage;