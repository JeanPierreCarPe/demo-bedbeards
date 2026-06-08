import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../../components/FadeInSection';
import { brand, contactPage, barbers } from '../../data/siteContent';

type ServiceId = 'cuts' | 'treatments' | 'products' | 'other';

const SERVICE_OPTIONS: { id: ServiceId; label: string; sub: string }[] = [
  { id: 'cuts',       label: 'Cuts & Styling',      sub: 'Haircut or beard sculpt'   },
  { id: 'treatments', label: 'Beard Treatments',     sub: 'Health and care sessions'  },
  { id: 'products',   label: 'Grooming Products',    sub: 'Consultation or purchase'  },
  { id: 'other',      label: 'Something else',       sub: 'Any other question'        },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const inputClass =
  'w-full bg-transparent border-b border-white/15 focus:border-[#ba704f] outline-none py-3 font-light text-[16px] text-white placeholder:text-white/25 transition-colors duration-200';
const labelClass = 'font-light text-[11px] text-white/35 uppercase tracking-widest';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '' as ServiceId | '',
    barber: 'any',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0f0f0f]">

      {/* ── Split layout ───────────────────────────── */}
      <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto w-full">

        {/* Left: sticky studio image */}
        <div className="w-full md:w-[42%] shrink-0 md:sticky md:top-0 md:self-start md:h-screen relative overflow-hidden h-[75vw] md:h-screen">
          <img
            src={contactPage.hero.image}
            alt="Bedbeards grooming studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/92" />

          {/* Content over image */}
          <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-12 pt-[100px] md:pt-[120px] pb-8 md:pb-12">
            {/* Headline */}
            <FadeInSection>
              <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-white">
                Come In.<br />Sit Down.
              </h1>
            </FadeInSection>

            {/* Info + hours */}
            <FadeInSection delay={0.15} className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <address className="not-italic font-light text-[13px] md:text-[14px] leading-[24px] text-white/65">
                  {brand.address.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < 2 && <br />}</span>
                  ))}
                </address>
                <div className="flex flex-col gap-1">
                  <a href={`tel:${brand.phone}`} className="font-light text-[13px] md:text-[14px] text-white/65 hover:text-[#ba704f] transition-colors w-fit">
                    {brand.phone}
                  </a>
                  <a href={`mailto:${brand.email}`} className="font-light text-[13px] md:text-[14px] text-white/65 hover:text-[#ba704f] transition-colors w-fit">
                    {brand.email}
                  </a>
                </div>
              </div>

              <div className="hidden md:flex flex-col gap-0 border-t border-white/15 pt-5">
                {contactPage.hours.map(h => (
                  <div key={h.day} className="flex items-center justify-between py-1.5 border-b border-white/8">
                    <span className="font-light text-[12px] text-white/45">{h.day}</span>
                    <span className={`font-light text-[12px] ${h.time === 'Closed' ? 'text-white/20' : 'text-white/65'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex-1 min-w-0 bg-[#0f0f0f] px-8 md:px-14 lg:px-20 py-[80px] md:py-[120px]">
          <div className="max-w-[560px] mx-auto flex flex-col gap-14">

            {/* Heading */}
            <FadeInSection>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <p className="font-display text-ghost whitespace-nowrap absolute z-[0]
                    text-[clamp(52px,8vw,100px)] leading-[1] -top-[22px] md:-top-[44px]
                    left-0" aria-hidden>
                    Contact
                  </p>
                  <h2 className="relative z-[1] font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-white">
                    Tell us what<br />you need.
                  </h2>
                </div>
                <p className="font-light text-[15px] leading-[27px] text-white/50 max-w-[48ch]">
                  We respond within 24 hours. For same-day availability, call directly.
                </p>
              </div>
            </FadeInSection>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex flex-col gap-7 py-10 border-t border-white/10"
                >
                  <div className="w-10 h-10 border border-[#ba704f] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ba704f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-white">
                      Request received.
                    </h3>
                    <p className="font-light text-[15px] leading-[27px] text-white/50 max-w-[44ch]">
                      We'll confirm your appointment within 24 hours. Check your inbox. If you need something sooner:
                    </p>
                  </div>
                  <a
                    href={`tel:${brand.phone}`}
                    className="inline-flex items-center gap-2 text-[#ba704f] font-display text-[1.1rem] hover:text-white transition-colors w-fit"
                  >
                    {brand.phone}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-12"
                  noValidate
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  {/* Service selector */}
                  <FadeInSection delay={0.05}>
                    <div className="flex flex-col gap-4">
                      <span className={labelClass}>What are you booking?</span>
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICE_OPTIONS.map(opt => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setForm({ ...form, service: opt.id })}
                            aria-pressed={form.service === opt.id}
                            className={`flex flex-col gap-1 p-4 text-left transition-colors duration-200
                              ${form.service === opt.id
                                ? 'border border-[#ba704f] bg-[rgba(186,112,79,0.07)]'
                                : 'border border-white/10 hover:border-white/25'}`}
                          >
                            <span className={`font-display text-[clamp(0.95rem,1.8vw,1.1rem)] leading-[1.2] transition-colors ${
                              form.service === opt.id ? 'text-white' : 'text-white/65'}`}>
                              {opt.label}
                            </span>
                            <span className={`font-light text-[12px] leading-[18px] transition-colors ${
                              form.service === opt.id ? 'text-white/55' : 'text-white/30'}`}>
                              {opt.sub}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </FadeInSection>

                  {/* Name + Email */}
                  <FadeInSection delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className={labelClass}>Name</label>
                        <input
                          id="name" type="text" required
                          placeholder="Your name"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input
                          id="email" type="email" required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </FadeInSection>

                  {/* Preferred barber */}
                  <FadeInSection delay={0.13}>
                    <div className="flex flex-col gap-4">
                      <span className={labelClass}>Preferred barber</span>
                      <div className="flex gap-2 flex-wrap">
                        {barbers.map(b => (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => setForm({ ...form, barber: b.id })}
                            aria-pressed={form.barber === b.id}
                            className={`flex flex-col items-center gap-2 p-3 w-[82px] shrink-0 transition-colors duration-200
                              ${form.barber === b.id
                                ? 'border border-[#ba704f]'
                                : 'border border-white/10 hover:border-white/25'}`}
                          >
                            <div className="w-11 h-11 overflow-hidden shrink-0">
                              <img
                                src={b.image}
                                alt={b.name}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <span className={`font-light text-[11px] leading-none transition-colors ${
                              form.barber === b.id ? 'text-[#ba704f]' : 'text-white/45'}`}>
                              {b.name.split(' ')[0]}
                            </span>
                          </button>
                        ))}
                        {/* No preference */}
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, barber: 'any' })}
                          aria-pressed={form.barber === 'any'}
                          className={`flex flex-col items-center justify-center gap-2 p-3 w-[82px] shrink-0 transition-colors duration-200
                            ${form.barber === 'any'
                              ? 'border border-[#ba704f]'
                              : 'border border-white/10 hover:border-white/25'}`}
                        >
                          <div className={`w-11 h-11 border flex items-center justify-center transition-colors ${
                            form.barber === 'any' ? 'border-[#ba704f]/50' : 'border-white/10'}`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
                              stroke={form.barber === 'any' ? '#ba704f' : 'rgba(255,255,255,0.3)'}>
                              <circle cx="12" cy="8" r="4" />
                              <path d="M4 20a8 8 0 0 1 16 0" />
                            </svg>
                          </div>
                          <span className={`font-light text-[10px] text-center leading-[14px] transition-colors ${
                            form.barber === 'any' ? 'text-[#ba704f]' : 'text-white/40'}`}>
                            No pref
                          </span>
                        </button>
                      </div>
                    </div>
                  </FadeInSection>

                  {/* Message */}
                  <FadeInSection delay={0.17}>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className={labelClass}>Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Anything we should know before your session?"
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </FadeInSection>

                  {/* Submit */}
                  <FadeInSection delay={0.2}>
                    <button
                      type="submit"
                      className="w-full bg-[#ba704f] hover:bg-[#a86040] active:bg-[#964f32] text-white font-display text-[clamp(1rem,2vw,1.1rem)] py-4 transition-colors duration-200 tracking-wide"
                    >
                      Request Appointment
                    </button>
                  </FadeInSection>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* ── Hours (mobile only — not shown in sticky panel) ────────── */}
      <section className="md:hidden bg-[#0a0a0a] border-t border-white/10 px-8 py-10">
        <div className="flex flex-col gap-4">
          <span className={labelClass}>Hours</span>
          <div className="flex flex-col gap-0">
            {contactPage.hours.map(h => (
              <div key={h.day} className="flex items-center justify-between py-2.5 border-b border-white/10">
                <span className="font-light text-[13px] text-white/50">{h.day}</span>
                <span className={`font-light text-[13px] ${h.time === 'Closed' ? 'text-white/20' : 'text-white/65'}`}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location strip ─────────────────────────────────────────── */}
      <section className="w-full bg-[#0a0a0a] border-t border-white/10 px-8 md:px-[80px] py-[50px] md:py-[70px]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ba704f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className={labelClass}>Find us</span>
            </div>
            <address className="not-italic font-display text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.2] text-white">
              {brand.address.split('\n')[1]}
            </address>
            <p className="font-light text-[13px] text-white/35">{brand.address.split('\n')[2]}</p>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(brand.address.replace(/\n/g, ', '))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 border border-white/15 hover:border-[#ba704f] text-white/50 hover:text-[#ba704f] font-display text-[14px] px-6 py-3.5 transition-colors duration-300 shrink-0 w-fit"
          >
            Open in Maps
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}
