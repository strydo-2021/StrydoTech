import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Users,
  Rocket,
  Code2,
  HeartHandshake,
  Zap,
  CheckCircle2,
  Send,
  ChevronRight,
  X,
  Loader2,
  AlertCircle
} from 'lucide-react';


// ============================================================
// LIVE JOB DATA SOURCE (read)
// ============================================================
// Jobs are stored in a public Google Sheet and fetched at runtime
// via the opensheet.elk.sh proxy, which turns a published sheet
// into a plain JSON API. No backend, no redeploy — edit the sheet,
// refresh the page.
//
// Sheet columns (header row, exact names):
//   title | location | type | dept | color | bg | description | skills
const SHEET_ID = '1AvsuLm3NHCOSHY-zj36h6G9lzBQKy4rp8ktCKmGAHHY';
const TAB_NAME = 'Jobs'; // must match the actual tab name at the bottom of the sheet
const JOBS_URL = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`;

// Used only if the fetch fails, so the page never renders empty.
const FALLBACK_JOBS = [
  {
    title: 'Full Stack Developer',
    location: 'Vellore / Remote',
    type: 'Full-time',
    dept: 'Engineering',
    color: '#3B7B84',
    bg: '#E8F3F4',
    description:
      'Build scalable web applications and digital products using modern technologies.',
    skills: ['React', 'Node.js', 'TypeScript']
  }
];


// ============================================================
// APPLICATION SUBMISSION ENDPOINT (write)
// ============================================================
// opensheet is read-only, so applications are written via a tiny
// Google Apps Script Web App bound to the same spreadsheet. It
// appends each submission as a new row in an "Applications" tab
// (created automatically on first submit). No server to host —
// Google runs it. See the doPost() script + deployment steps
// provided alongside this file.
//
// Replace this with your own deployed Web App URL
// (Deploy → New deployment → Web app → copy the /exec URL).
const APPLICATIONS_URL = 'https://script.google.com/macros/s/AKfycbw8Pae0CmbII6U7FzXErA6JVRS0hgEo5afSAWzXQiJNuZlrpVVP4RIVR295Pj78CD_k/exec';


// ============================================================
// CULTURE DATA
// ============================================================

const culture = [
  {
    icon: Rocket,
    title: 'Growth Oriented',
    description:
      'Clear career paths, mentorship, and opportunities to take ownership.',
    color: '#3B7B84',
    bg: '#E8F3F4'
  },
  {
    icon: Code2,
    title: 'Modern Stack',
    description:
      'Work with React, AI, cloud infrastructure and modern engineering practices.',
    color: '#5E296F',
    bg: '#F3EAF6'
  },
  {
    icon: Users,
    title: 'Flexible Work',
    description:
      'A flexible working environment built around trust, collaboration and results.',
    color: '#EB6621',
    bg: '#FFF0E7'
  },
  {
    icon: HeartHandshake,
    title: 'Real Ownership',
    description:
      'Your ideas matter. Take responsibility, make decisions and see your work ship.',
    color: '#BC2D3F',
    bg: '#FBEAEC'
  }
];


// ============================================================
// APPLY MODAL
// ============================================================

const EMPTY_FORM = { name: '', email: '', phone: '', resumeLink: '', message: '' };

const ApplyModal = ({ job, onClose }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  useEffect(() => {
    // Reset the form whenever a different job is opened.
    setForm(EMPTY_FORM);
    setStatus('idle');
  }, [job]);

  useEffect(() => {
    // Let Escape close the modal.
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setStatus('submitting');

    const payload = {
      jobTitle: job.title,
      dept: job.dept,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      resumeLink: form.resumeLink.trim(),
      message: form.message.trim()
    };

    try {
      // Apps Script web apps don't return CORS headers that the
      // browser can read from the frontend origin, so we fire the
      // request in no-cors mode. We can't inspect the response body,
      // but the request itself completes and the row gets appended —
      // a network-level failure is still caught below.
      await fetch(APPLICATIONS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#111114]/60 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.35 }}
          className="relative w-full max-w-lg bg-white rounded-[32px] p-8 md:p-10 shadow-[0_40px_100px_rgba(17,17,20,0.25)] max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F3F1EC] flex items-center justify-center text-[#111114]/50 hover:text-[#111114] hover:bg-[#EAE7E1] transition-colors"
          >
            <X size={16} />
          </button>

          {status === 'success' ? (
            <div className="py-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: job.bg, color: job.color }}
              >
                <CheckCircle2 size={30} />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-2">
                Application sent.
              </h3>
              <p className="text-sm text-[#111114]/45 leading-relaxed mb-8">
                Thanks for applying to <strong>{job.title}</strong>. We'll
                review your details and reach out if it's a fit.
              </p>
              <button
                onClick={onClose}
                className="px-7 py-3.5 rounded-[16px] bg-[#111114] text-white text-xs font-black uppercase tracking-[0.15em] hover:bg-[#5E296F] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div
                className="text-[10px] font-black uppercase tracking-[0.25em] mb-2"
                style={{ color: job.color }}
              >
                {job.dept}
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-1">
                Apply — {job.title}
              </h3>
              <p className="text-sm text-[#111114]/40 mb-8">
                {job.location} · {job.type}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-[#111114]/40 mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3.5 rounded-[14px] bg-[#F3F1EC] border border-transparent focus:border-[#5E296F]/30 focus:bg-white outline-none text-sm font-medium transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-[#111114]/40 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3.5 rounded-[14px] bg-[#F3F1EC] border border-transparent focus:border-[#5E296F]/30 focus:bg-white outline-none text-sm font-medium transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-[#111114]/40 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-[14px] bg-[#F3F1EC] border border-transparent focus:border-[#5E296F]/30 focus:bg-white outline-none text-sm font-medium transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-[#111114]/40 mb-2">
                    Resume / portfolio link
                  </label>
                  <input
                    type="url"
                    name="resumeLink"
                    value={form.resumeLink}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-3.5 rounded-[14px] bg-[#F3F1EC] border border-transparent focus:border-[#5E296F]/30 focus:bg-white outline-none text-sm font-medium transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-[#111114]/40 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Anything you'd like us to know"
                    className="w-full px-4 py-3.5 rounded-[14px] bg-[#F3F1EC] border border-transparent focus:border-[#5E296F]/30 focus:bg-white outline-none text-sm font-medium transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-[#BC2D3F] text-xs font-bold">
                    <AlertCircle size={15} />
                    Something went wrong sending that — please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full mt-2 flex items-center justify-center gap-3 px-7 py-4 rounded-[16px] bg-[#111114] text-white text-xs font-black uppercase tracking-[0.15em] hover:bg-[#5E296F] transition-colors disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Submit application
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


// ============================================================
// CAREERS PAGE
// ============================================================

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [applyJob, setApplyJob] = useState(null); // job currently being applied to, or null

  useEffect(() => {
    let cancelled = false;

    fetch(JOBS_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Sheet fetch failed');
        return res.json();
      })
      .then((rows) => {
        if (cancelled) return;

        const parsed = rows
          .filter((row) => row.title)
          .map((row) => ({
            title: row.title,
            location: row.location || '',
            type: row.type || 'Full-time',
            dept: row.dept || 'General',
            color: row.color || '#3B7B84',
            bg: row.bg || '#E8F3F4',
            description: row.description || '',
            skills: row.skills
              ? row.skills.split(',').map((s) => s.trim()).filter(Boolean)
              : []
          }));

        setJobs(parsed.length > 0 ? parsed : FALLBACK_JOBS);
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError(true);
          setJobs(FALLBACK_JOBS);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F1EC] text-[#111114] overflow-hidden">

      <Navbar />

      <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />


      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative pt-40 md:pt-56 pb-32 md:pb-44 overflow-hidden">

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

        <div
          className="absolute -top-48 -left-48 w-[650px] h-[650px] rounded-full blur-[170px] pointer-events-none"
          style={{ background: 'rgba(59,123,132,0.12)' }}
        />

        <div
          className="absolute top-20 right-[-250px] w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: 'rgba(94,41,111,0.10)' }}
        />

        <div
          className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[650px] h-[450px] rounded-full blur-[170px] pointer-events-none"
          style={{ background: 'rgba(235,102,33,0.08)' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-[#111114]/[0.08] shadow-sm">
              <Sparkles size={13} className="text-[#5E296F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111114]/50">
                Careers at Strydo
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl xl:text-[125px] font-black tracking-tighter leading-[0.8]">
              Build the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                future with us.
              </span>
            </h1>

            <p className="mt-12 text-xl md:text-2xl text-[#111114]/40 max-w-2xl mx-auto leading-relaxed font-medium">
              We are looking for thinkers, builders, designers,
              problem-solvers and innovators who want to create
              technology that actually matters.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-3">
              {['Engineering', 'Design', 'AI & Cloud', 'Business'].map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-white/60 border border-[#111114]/[0.07] text-[10px] font-black uppercase tracking-[0.18em] text-[#111114]/40"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex justify-center"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#111114]/25">
                Explore opportunities
              </span>
              <div className="w-px h-10 bg-gradient-to-b from-[#5E296F] to-transparent" />
            </div>
          </motion.div>

        </div>

      </section>


      {/* ======================================================
          OPEN POSITIONS
      ====================================================== */}

      <section className="relative bg-[#EAE7E1] py-28 md:py-40 overflow-hidden">

        <div className="absolute -right-48 top-20 w-[500px] h-[500px] rounded-full border border-[#5E296F]/[0.07] pointer-events-none" />
        <div className="absolute -right-24 top-44 w-[300px] h-[300px] rounded-full border border-[#5E296F]/[0.05] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-[#EB6621] font-black uppercase tracking-[0.35em] text-[10px]">
                Opportunities
              </span>
              <h2 className="mt-5 text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Open positions.
              </h2>
            </div>

            <p className="text-[#111114]/40 max-w-sm leading-relaxed font-medium">
              Find a role where your skills, curiosity and ambition
              can make a real difference.
            </p>
          </div>

          {loadError && (
            <div className="mb-8 rounded-2xl border border-dashed border-[#BC2D3F]/30 bg-[#FBEAEC] px-6 py-4 text-sm font-medium text-[#BC2D3F]">
              Couldn't load the latest listings — showing a cached set instead.
            </div>
          )}

          <div className="space-y-5">

            {loading ? (
              [0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-[164px] md:h-[140px] rounded-[32px] bg-white border border-[#111114]/[0.07] animate-pulse"
                />
              ))
            ) : (
              jobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-[32px] p-7 md:p-9 border border-[#111114]/[0.07] hover:border-[#111114]/[0.13] hover:shadow-[0_30px_80px_rgba(17,17,20,0.10)] transition-all duration-500 overflow-hidden"
                >
                  <div
                    className="absolute left-10 right-10 top-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${job.color}, transparent)` }}
                  />

                  <div className="flex flex-col lg:flex-row lg:items-center gap-7">

                    <div
                      className="w-16 h-16 rounded-[21px] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500"
                      style={{ backgroundColor: job.bg, color: job.color }}
                    >
                      <Briefcase size={26} />
                    </div>

                    <div className="flex-1">
                      <div
                        className="text-[10px] font-black uppercase tracking-[0.25em] mb-2"
                        style={{ color: job.color }}
                      >
                        {job.dept}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3">
                        {job.title}
                      </h3>

                      <p className="text-sm md:text-base text-[#111114]/40 max-w-2xl leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5">
                        <span className="flex items-center gap-2 text-[11px] font-bold text-[#111114]/40">
                          <MapPin size={15} style={{ color: job.color }} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-2 text-[11px] font-bold text-[#111114]/40">
                          <Clock size={15} style={{ color: job.color }} />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="hidden xl:flex flex-wrap gap-2 max-w-[220px]">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-2 rounded-full bg-[#F4F2ED] text-[9px] font-black uppercase tracking-wider text-[#111114]/35"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setApplyJob(job)}
                      className="flex items-center justify-center gap-3 shrink-0 px-6 py-4 rounded-[18px] bg-[#F3F1EC] text-[#111114]/60 text-[10px] font-black uppercase tracking-[0.18em] group-hover:text-white transition-all duration-500"
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = job.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F3F1EC'; }}
                    >
                      Apply
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                  </div>

                </motion.div>
              ))
            )}

          </div>

          <div className="mt-10 p-8 rounded-[30px] border border-dashed border-[#111114]/15 bg-white/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black tracking-tight mb-1">
                Don't see your role?
              </h3>
              <p className="text-sm text-[#111114]/40">
                We're always interested in meeting talented people.
              </p>
            </div>

            <button
              onClick={() =>
                setApplyJob({
                  title: 'General Application',
                  dept: 'Open Application',
                  location: 'Anywhere',
                  type: 'Any',
                  color: '#5E296F',
                  bg: '#F3EAF6'
                })
              }
              className="flex items-center gap-3 text-[#5E296F] font-black text-xs uppercase tracking-[0.18em]"
            >
              Send us your profile
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </section>


      {/* ======================================================
          CULTURE
      ====================================================== */}

      <section className="relative py-28 md:py-40 bg-[#F7F5F0] overflow-hidden">

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[170px] opacity-[0.08] pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #3B7B84, #5E296F, #EB6621)' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="max-w-3xl mb-20">
            <span className="text-[#3B7B84] font-black uppercase tracking-[0.35em] text-[10px]">
              Life at Strydo
            </span>

            <h2 className="mt-5 text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Work that
              <br />
              <span className="text-[#111114]/25">moves you.</span>
            </h2>

            <p className="mt-8 text-lg md:text-xl text-[#111114]/40 leading-relaxed max-w-2xl">
              We believe great work happens when talented people
              have the freedom to think, experiment, collaborate
              and take ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {culture.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="group bg-white rounded-[32px] p-8 md:p-9 border border-[#111114]/[0.07] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(17,17,20,0.08)] transition-all duration-500"
                >
                  <div
                    className="w-14 h-14 rounded-[19px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: item.bg, color: item.color }}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-black tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#111114]/40 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </section>


      {/* ======================================================
          TEAM PHILOSOPHY / MANIFESTO
      ====================================================== */}

      <section className="px-6 md:px-10 py-10 bg-[#F7F5F0]">

        <div className="max-w-7xl mx-auto rounded-[45px] md:rounded-[60px] bg-[#EAE7E1] border border-[#111114]/[0.06] overflow-hidden relative">

          <div
            className="absolute right-[-150px] top-[-150px] w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.12]"
            style={{ background: 'linear-gradient(135deg, #5E296F, #EB6621)' }}
          />

          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 p-9 md:p-16 lg:p-20 relative z-10">

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5E296F]">
                  <Zap size={18} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111114]/40">
                  Our mindset
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-8">
                Think big.
                <br />
                Build boldly.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] to-[#EB6621]">
                  Stay curious.
                </span>
              </h2>

              <p className="text-lg text-[#111114]/45 leading-relaxed max-w-xl">
                We don't expect everyone to know everything.
                We expect people to ask questions, learn quickly,
                share ideas and care deeply about the work they put
                into the world.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {['Learn continuously', 'Own your work', 'Challenge assumptions', 'Build for real people'].map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-4 bg-white/70 rounded-[20px] px-5 py-4 border border-[#111114]/[0.06]"
                >
                  <CheckCircle2
                    size={18}
                    className={index % 2 === 0 ? 'text-[#3B7B84]' : 'text-[#5E296F]'}
                  />
                  <span className="font-bold text-sm text-[#111114]/60">
                    {value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative py-32 md:py-48 bg-[#F7F5F0] overflow-hidden">

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#111114]/[0.04]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-[#111114]/[0.035]" />

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[170px] opacity-[0.12] pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #3B7B84, #5E296F, #EB6621)' }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#111114]/[0.07] shadow-sm mb-9">
              <span className="w-2 h-2 rounded-full bg-[#EB6621] animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#111114]/40">
                Your next chapter starts here
              </span>
            </div>

            <h2 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.8]">
              Ready to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                build?
              </span>
            </h2>

            <p className="mt-10 text-lg md:text-xl text-[#111114]/40 max-w-xl mx-auto leading-relaxed">
              Don't wait for the perfect opportunity.
              Create one with us.
            </p>

            <button
              onClick={() =>
                setApplyJob({
                  title: 'General Application',
                  dept: 'Open Application',
                  location: 'Anywhere',
                  type: 'Any',
                  color: '#5E296F',
                  bg: '#F3EAF6'
                })
              }
              className="group mt-12 inline-flex items-center gap-4 bg-[#111114] text-white px-9 md:px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.15em] hover:bg-[#5E296F] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(94,41,111,0.22)] transition-all duration-500"
            >
              <Send size={17} />
              Join the team
              <ChevronRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default CareersPage;