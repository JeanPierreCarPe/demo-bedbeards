import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../../../components/FadeInSection';
import Divider from '../../../components/Divider';
import { testimonials, testimonialsSection } from '../../../data/siteContent';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const NavDots = () => (
    <div className="flex gap-3">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          aria-label={`Testimonial ${i + 1}`}
          className={`h-[6px] rounded-full transition-all duration-300 ${i === active ? 'w-10 bg-[#ba704f]' : 'w-4 bg-white/30'}`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="relative w-full py-[60px] md:py-[100px] px-5 md:px-[80px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={testimonialsSection.background} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-wrap gap-8 items-center justify-center">
        {/* Left: heading + description (no dots on mobile here) */}
        <FadeInSection direction="left" className="relative flex flex-col gap-6 w-full lg:w-[515px] shrink-0 pl-0 lg:pl-[100px]">
          <p className="font-display text-ghost whitespace-nowrap absolute z-[0]
            text-[clamp(52px,13vw,128px)] leading-[1] -top-[32px] md:-top-[66px]
            left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0" aria-hidden>
            {testimonialsSection.sectionTag}
          </p>
          <h2 className="relative z-[1] font-display text-[clamp(36px,4.4vw,64px)] leading-[1.1] text-white text-center lg:text-left">
            {testimonialsSection.headline}
          </h2>
          <p className="font-light text-[16px] leading-[25px] text-white text-center lg:text-left">
            {testimonialsSection.description}
          </p>

          {/* Nav dots — desktop only here */}
          <div className="hidden lg:flex gap-3">
            <NavDots />
          </div>
        </FadeInSection>

        {/* Right: testimonial card */}
        <div className="flex-1 min-w-0 max-w-[733px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-5 items-center"
            >
              {/* Photo */}
              <div className="relative w-full md:w-[313px] h-[300px] md:h-[405px] shrink-0 overflow-hidden">
                <img src={t.image} alt={t.author} className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Quote — centered on mobile */}
              <div className="flex flex-col gap-6 flex-1 min-w-0 drop-shadow-[0_0_10px_rgba(0,0,0,0.35)] items-center md:items-start text-center md:text-left">
                <img src="/images/quote-marks.svg" alt="" aria-hidden width={52} height={44} />
                <p className="font-normal text-[clamp(18px,2vw,28px)] leading-[40px] text-white">
                  {t.quote}
                </p>
                <div className="flex flex-col gap-3 w-full">
                  <Divider />
                  <p className="font-bold text-[24px] text-white">{t.author}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav dots — mobile only, at bottom */}
        <div className="w-full flex justify-center lg:hidden">
          <NavDots />
        </div>
      </div>
    </section>
  );
}
