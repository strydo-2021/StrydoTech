
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Clock3,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Loader2,
  AlertCircle
} from 'lucide-react';


// ============================================================
// CONTACT DETAILS
// ============================================================

const contactDetails = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'vellore.strydo@gmail.com',
    sub: 'For general enquiries & projects',
    color: '#5E296F',
    bg: '#F3EAF6'
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+91 93626 20620',
    sub: 'Mon — Sat · 10:00 AM — 7:00 PM',
    color: '#EB6621',
    bg: '#FFF0E7'
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: 'Vellore | Tirupati',
    sub: 'Serving clients across India',
    color: '#3B7B84',
    bg: '#E8F3F4'
  }
];


// ============================================================
// EMAILJS CONFIGURATION
// ============================================================

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


// ============================================================
// GOOGLE SHEETS WEBHOOK
// ============================================================

const SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxPYX0YhOw3qSF_Pqt7_-7TuTSoKFzXz-San20zHcHhwZ9glXlEAu6FRwOrZLg1VLSh/exec';


// ============================================================
// CONTACT PAGE
// ============================================================

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: 'Web Development',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  // idle | sending | sent | error


  // ==========================================================
  // HANDLE INPUT CHANGE
  // ==========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  // ==========================================================
  // HANDLE FORM SUBMIT
  // ==========================================================

  const handleSubmit = async (e) => {

    e.preventDefault();


    // --------------------------------------------------------
    // BASIC VALIDATION
    // --------------------------------------------------------

    if (
      !formData.name.trim() ||
      !formData.email.trim()
    ) {
      setStatus('error');
      return;
    }


    setStatus('sending');


    try {

      // ======================================================
      // 1. SEND EMAIL THROUGH EMAILJS
      // ======================================================

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,

          time: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short'
          })
        },
        EMAILJS_PUBLIC_KEY
      );


      // ======================================================
      // 2. SAVE LEAD TO GOOGLE SHEETS
      // ======================================================

      fetch(SHEET_WEBHOOK_URL, {
        method: 'POST',

        mode: 'no-cors',

        headers: {
          'Content-Type': 'text/plain'
        },

        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.title,
          message: formData.message,

          time: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short'
          })
        })
      }).catch((err) => {
        console.error(
          'Google Sheets logging error:',
          err
        );
      });


      // ======================================================
      // 3. SHOW SUCCESS
      // ======================================================

      setStatus('sent');


      // ======================================================
      // 4. RESET FORM
      // ======================================================

      setFormData({
        name: '',
        email: '',
        title: 'Web Development',
        message: ''
      });


      // ======================================================
      // 5. RESET STATUS AFTER 5 SECONDS
      // ======================================================

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (err) {

      console.error(
        'EmailJS error:',
        err
      );

      setStatus('error');
    }
  };


  // ==========================================================
  // RETURN UI
  // ==========================================================

  return (

    <div className="min-h-screen bg-[#F3F1EC] text-[#111114] overflow-hidden">

      <Navbar />


      {/* ======================================================
          HERO / CONTACT SECTION
      ====================================================== */}

      <section className="relative pt-40 md:pt-52 pb-28 md:pb-40">


        {/* ====================================================
            BACKGROUND DECORATION
        ==================================================== */}


        {/* Technical Grid */}

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#111114 1px, transparent 1px),
              linear-gradient(90deg, #111114 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px'
          }}
        />


        {/* Teal Glow */}

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[600px]
            h-[600px]
            rounded-full
            blur-[160px]
            pointer-events-none
          "
          style={{
            background: 'rgba(59,123,132,0.12)'
          }}
        />


        {/* Purple Glow */}

        <div
          className="
            absolute
            top-40
            right-[-250px]
            w-[700px]
            h-[700px]
            rounded-full
            blur-[170px]
            pointer-events-none
          "
          style={{
            background: 'rgba(94,41,111,0.10)'
          }}
        />


        {/* Orange Glow */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[500px]
            rounded-full
            blur-[170px]
            pointer-events-none
          "
          style={{
            background: 'rgba(235,102,33,0.07)'
          }}
        />


        {/* ====================================================
            MAIN CONTAINER
        ==================================================== */}

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">


          {/* ==================================================
              TOP LABEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7
            }}
            className="mb-12"
          >

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-4
                py-2.5
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-[#111114]/[0.08]
                shadow-sm
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#3B7B84]
                  animate-pulse
                "
              />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-[#111114]/50
                "
              >
                Start a conversation
              </span>

            </div>

          </motion.div>


          {/* ==================================================
              MAIN GRID
          ================================================== */}

          <div
            className="
              grid
              lg:grid-cols-[0.9fr_1.1fr]
              gap-16
              xl:gap-28
              items-start
            "
          >


            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.1
              }}
            >


              {/* Heading */}

              <h1
                className="
                  text-6xl
                  md:text-7xl
                  xl:text-[100px]
                  font-black
                  leading-[0.82]
                  tracking-tighter
                  mb-10
                "
              >

                Let's build

                <br />

                <span
                  className="
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#3B7B84]
                    via-[#5E296F]
                    to-[#EB6621]
                  "
                >
                  together.
                </span>

              </h1>


              {/* Description */}

              <p
                className="
                  text-xl
                  md:text-2xl
                  text-[#111114]/45
                  leading-relaxed
                  max-w-xl
                  mb-14
                "
              >
                Have an idea, a challenge, or a project in mind?
                Tell us what you're building and we'll figure out
                the smartest way to move it forward.
              </p>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div className="space-y-4">

                {contactDetails.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <motion.div
                      key={item.label}

                      initial={{
                        opacity: 0,
                        y: 20
                      }}

                      animate={{
                        opacity: 1,
                        y: 0
                      }}

                      transition={{
                        duration: 0.6,
                        delay: 0.25 + index * 0.1
                      }}

                      className="
                        group
                        relative
                        flex
                        items-center
                        gap-5
                        p-5
                        md:p-6
                        rounded-[26px]
                        bg-white/75
                        backdrop-blur-sm
                        border
                        border-[#111114]/[0.07]
                        hover:bg-white
                        hover:-translate-y-1
                        hover:shadow-[0_20px_50px_rgba(17,17,20,0.08)]
                        transition-all
                        duration-500
                      "
                    >


                      {/* Icon */}

                      <div
                        className="
                          w-14
                          h-14
                          md:w-16
                          md:h-16
                          rounded-[20px]
                          flex
                          items-center
                          justify-center
                          shrink-0
                          transition-transform
                          duration-500
                          group-hover:scale-105
                          group-hover:rotate-3
                        "
                        style={{
                          backgroundColor: item.bg,
                          color: item.color
                        }}
                      >

                        <Icon size={23} />

                      </div>


                      {/* Text */}

                      <div className="min-w-0">

                        <p
                          className="
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.25em]
                            mb-1.5
                          "
                          style={{
                            color: item.color
                          }}
                        >
                          {item.label}
                        </p>


                        <p
                          className="
                            text-base
                            md:text-lg
                            font-black
                            text-[#111114]
                            truncate
                          "
                        >
                          {item.value}
                        </p>


                        <p
                          className="
                            text-xs
                            md:text-sm
                            text-[#111114]/35
                            font-medium
                            mt-1
                          "
                        >
                          {item.sub}
                        </p>

                      </div>


                      {/* Arrow */}

                      <ArrowUpRight
                        size={18}
                        className="
                          ml-auto
                          shrink-0
                          text-[#111114]/20
                          group-hover:text-[#111114]/60
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all
                        "
                      />

                    </motion.div>

                  );

                })}

              </div>


              {/* =================================================
                  AVAILABILITY
              ================================================= */}

              <div className="mt-8 flex items-center gap-3">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2.5
                    rounded-full
                    bg-[#E8F3EE]
                    border
                    border-[#3B7B84]/10
                  "
                >

                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#3B7B84]
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                      text-[#3B7B84]
                    "
                  >
                    Usually replies within 24 hours
                  </span>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT SIDE — FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="relative"
            >


              {/* Outer Glow */}

              <div
                className="
                  absolute
                  -inset-6
                  rounded-[55px]
                  blur-[45px]
                  opacity-30
                  pointer-events-none
                "
                style={{
                  background:
                    'linear-gradient(135deg, rgba(59,123,132,0.12), rgba(94,41,111,0.12), rgba(235,102,33,0.08))'
                }}
              />


              {/* =================================================
                  FORM CARD
              ================================================= */}

              <div
                className="
                  relative
                  bg-white
                  rounded-[42px]
                  p-7
                  md:p-10
                  xl:p-12
                  border
                  border-[#111114]/[0.07]
                  shadow-[0_35px_100px_rgba(17,17,20,0.10)]
                "
              >


                {/* Form Header */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-6
                    mb-10
                  "
                >

                  <div>

                    <div
                      className="
                        w-12
                        h-12
                        rounded-[17px]
                        bg-[#F3EAF6]
                        text-[#5E296F]
                        flex
                        items-center
                        justify-center
                        mb-5
                      "
                    >
                      <MessageCircle size={22} />
                    </div>


                    <h2
                      className="
                        text-3xl
                        md:text-4xl
                        font-black
                        tracking-tighter
                        mb-2
                      "
                    >
                      Tell us about it.
                    </h2>


                    <p
                      className="
                        text-[#111114]/40
                        font-medium
                      "
                    >
                      We'll get back to you shortly.
                    </p>

                  </div>


                  {/* Decorative Mark */}

                  <div
                    className="
                      hidden
                      sm:flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      rounded-full
                      border
                      border-[#111114]/[0.07]
                    "
                  >

                    <Sparkles
                      size={18}
                      className="text-[#EB6621]"
                    />

                  </div>

                </div>


                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >


                  {/* =================================================
                      NAME + EMAIL
                  ================================================= */}

                  <div
                    className="
                      grid
                      md:grid-cols-2
                      gap-5
                    "
                  >


                    {/* Name */}

                    <div className="space-y-2">

                      <label
                        className="
                          block
                          text-[11px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#111114]/50
                          ml-1
                        "
                      >
                        Full Name
                      </label>


                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required

                        className="
                          w-full
                          bg-[#F4F2ED]
                          border
                          border-transparent
                          rounded-[18px]
                          px-5
                          py-4
                          text-sm
                          font-semibold
                          text-[#111114]
                          placeholder:text-[#111114]/25
                          outline-none
                          transition-all
                          duration-300
                          focus:bg-white
                          focus:border-[#5E296F]/30
                          focus:ring-4
                          focus:ring-[#5E296F]/[0.06]
                        "
                      />

                    </div>


                    {/* Email */}

                    <div className="space-y-2">

                      <label
                        className="
                          block
                          text-[11px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#111114]/50
                          ml-1
                        "
                      >
                        Email Address
                      </label>


                      <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required

                        className="
                          w-full
                          bg-[#F4F2ED]
                          border
                          border-transparent
                          rounded-[18px]
                          px-5
                          py-4
                          text-sm
                          font-semibold
                          text-[#111114]
                          placeholder:text-[#111114]/25
                          outline-none
                          transition-all
                          duration-300
                          focus:bg-white
                          focus:border-[#5E296F]/30
                          focus:ring-4
                          focus:ring-[#5E296F]/[0.06]
                        "
                      />

                    </div>

                  </div>


                  {/* =================================================
                      SUBJECT
                  ================================================= */}

                  <div className="space-y-2">

                    <label
                      className="
                        block
                        text-[11px]
                        font-black
                        uppercase
                        tracking-[0.16em]
                        text-[#111114]/50
                        ml-1
                      "
                    >
                      What can we help with?
                    </label>


                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleChange}

                      className="
                        w-full
                        bg-[#F4F2ED]
                        border
                        border-transparent
                        rounded-[18px]
                        px-5
                        py-4
                        text-sm
                        font-semibold
                        text-[#111114]
                        outline-none
                        transition-all
                        duration-300
                        focus:bg-white
                        focus:border-[#5E296F]/30
                        focus:ring-4
                        focus:ring-[#5E296F]/[0.06]
                        cursor-pointer
                      "
                    >

                      <option>
                        Web Development
                      </option>

                      <option>
                        AI / ML Solutions
                      </option>

                      <option>
                        ERP / CRM Development
                      </option>

                      <option>
                        Custom Software
                      </option>

                      <option>
                        UI / UX Design
                      </option>

                      <option>
                        Cloud & DevOps
                      </option>

                      <option>
                        Other Enquiry
                      </option>

                    </select>

                  </div>


                  {/* =================================================
                      MESSAGE
                  ================================================= */}

                  <div className="space-y-2">

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <label
                        className="
                          block
                          text-[11px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#111114]/50
                          ml-1
                        "
                      >
                        Your Message
                      </label>


                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-[#111114]/20
                        "
                      >
                        Optional
                      </span>

                    </div>


                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell us about your idea, goals, timeline or challenge..."
                      value={formData.message}
                      onChange={handleChange}

                      className="
                        w-full
                        bg-[#F4F2ED]
                        border
                        border-transparent
                        rounded-[18px]
                        px-5
                        py-4
                        text-sm
                        font-semibold
                        leading-relaxed
                        text-[#111114]
                        placeholder:text-[#111114]/25
                        outline-none
                        resize-none
                        transition-all
                        duration-300
                        focus:bg-white
                        focus:border-[#5E296F]/30
                        focus:ring-4
                        focus:ring-[#5E296F]/[0.06]
                      "
                    />

                  </div>


                  {/* =================================================
                      SUBMIT BUTTON
                  ================================================= */}

                  <button
                    type="submit"
                    disabled={status === 'sending'}

                    className="
                      group
                      relative
                      w-full
                      overflow-hidden
                      bg-[#111114]
                      text-white
                      rounded-[20px]
                      py-5
                      px-7
                      flex
                      items-center
                      justify-center
                      gap-4
                      font-black
                      text-sm
                      uppercase
                      tracking-[0.16em]
                      transition-all
                      duration-500
                      hover:bg-[#5E296F]
                      hover:shadow-[0_20px_50px_rgba(94,41,111,0.22)]
                      hover:-translate-y-0.5
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                      disabled:hover:translate-y-0
                    "
                  >


                    {/* Hover Gradient */}

                    <span
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(59,123,132,0.3), rgba(94,41,111,0.5), rgba(235,102,33,0.25))'
                      }}
                    />


                    {/* Button Text */}

                    <span className="relative z-10">

                      {status === 'sending' &&
                        'Sending...'}

                      {status === 'sent' &&
                        'Message Sent'}

                      {status === 'error' &&
                        'Try Again'}

                      {status === 'idle' &&
                        'Send Message'}

                    </span>


                    {/* Button Icon */}

                    {status === 'sending' ? (

                      <Loader2
                        size={18}
                        className="
                          relative
                          z-10
                          animate-spin
                        "
                      />

                    ) : (

                      <Send
                        size={18}
                        className="
                          relative
                          z-10
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-transform
                          duration-300
                        "
                      />

                    )}

                  </button>


                  {/* =================================================
                      SUCCESS MESSAGE
                  ================================================= */}

                  {status === 'sent' && (

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        pt-1
                      "
                    >

                      <CheckCircle2
                        size={14}
                        className="text-[#3B7B84]"
                      />

                      <p
                        className="
                          text-[11px]
                          font-bold
                          text-[#3B7B84]
                          uppercase
                          tracking-[0.1em]
                        "
                      >
                        Thanks! We'll be in touch shortly.
                      </p>

                    </div>

                  )}


                  {/* =================================================
                      ERROR MESSAGE
                  ================================================= */}

                  {status === 'error' && (

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        pt-1
                      "
                    >

                      <AlertCircle
                        size={14}
                        className="text-[#EB6621]"
                      />

                      <p
                        className="
                          text-[11px]
                          font-bold
                          text-[#EB6621]
                          uppercase
                          tracking-[0.1em]
                        "
                      >
                        Something went wrong. Please try again.
                      </p>

                    </div>

                  )}


                  {/* =================================================
                      PRIVACY MESSAGE
                  ================================================= */}

                  {status === 'idle' && (

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        pt-1
                      "
                    >

                      <CheckCircle2
                        size={14}
                        className="text-[#3B7B84]"
                      />

                      <p
                        className="
                          text-[10px]
                          font-bold
                          text-[#111114]/30
                          uppercase
                          tracking-[0.12em]
                        "
                      >
                        Your information stays confidential
                      </p>

                    </div>

                  )}

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ======================================================
          BOTTOM STRIP
      ====================================================== */}

      <section
        className="
          relative
          bg-[#EAE7E1]
          border-t
          border-[#111114]/[0.06]
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-12
            py-8
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
            "
          >


            {/* Working Hours */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <Clock3
                size={17}
                className="text-[#5E296F]"
              />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#111114]/40
                "
              >
                Monday — Saturday · 10:00 AM — 7:00 PM
              </span>

            </div>


            {/* Ready */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#3B7B84]
                  animate-pulse
                "
              />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#111114]/40
                "
              >
                Ready when you are
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </div>
  );
};


export default ContactPage;

