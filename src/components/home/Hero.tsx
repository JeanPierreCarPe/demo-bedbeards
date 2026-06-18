import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { hero } from '../../data/siteContent';

const FADE = { duration: 0.9, ease: 'easeInOut' as const };

const ArrowBtn = ({
  onClick,
  label,
  rotate,
  size = 48,
}: {
  onClick: () => void;
  label: string;
  rotate: string;
  size?: number;
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="flex items-center justify-center bg-white/10 hover:bg-[#ba704f] transition-colors duration-200"
    style={{ width: size, height: size }}
  >
    <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none" className={rotate}>
      <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = hero.slides.length;

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;
  const currentImg = hero.slides[current].image;
  const prevImg    = hero.slides[prev].image;
  const nextImg    = hero.slides[next].image;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden h-[100svh] min-h-[600px] md:h-[780px]"
    >
      {/* ── Background (shared) ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={FADE}
        >
          <img src={currentImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/90" />
        </motion.div>
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT  (< md)
      ══════════════════════════════════════════ */}
      <div className="md:hidden absolute inset-0 flex flex-col pt-[72px] pb-5">

        {/* Headline */}
        <h1
          className="relative font-display text-white text-center text-shadow-glow px-4 pt-3 pb-2 z-[1]"
          style={{ fontSize: 'clamp(34px,9.5vw,52px)', lineHeight: 1.05 }}
        >
          Sculpt Your Beard,<br />Define Your Style
        </h1>

        {/* Central image */}
        <div className="flex-1 flex items-center justify-center px-5 pb-3 min-h-0">
          <div className="relative overflow-hidden w-full h-full max-w-[84vw]">
            <AnimatePresence mode="sync">
              <motion.img
                key={`center-m-${current}`}
                src={currentImg}
                alt="" aria-hidden
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={FADE}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          </div>
        </div>

        {/* Description + CTA button */}
        <div className="flex flex-col gap-3 items-center text-center px-5 pb-4">
          <p className="font-normal text-[13px] leading-[20px] text-white/85">
            {hero.description}
          </p>
          <Button text="Explore Now" href="/services" />
        </div>

        {/* Counter + arrows — bottom row */}
        <div className="flex items-center justify-between px-4">
          <p className="font-display text-white leading-none">
            <span className="text-[28px]">0{current + 1}/</span>
            <span className="text-[15px]">0{total}</span>
          </p>
          <div className="flex gap-2">
            <ArrowBtn onClick={() => setCurrent((c) => (c - 1 + total) % total)} label="Previous slide" rotate="rotate-90" size={40} />
            <ArrowBtn onClick={() => setCurrent((c) => (c + 1) % total)} label="Next slide" rotate="-rotate-90" size={40} />
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT  (≥ md)
      ══════════════════════════════════════════ */}
      <div className="hidden md:block">

        {/* Central tall frame (624 × 600, centered) */}
        <div
          className="absolute overflow-hidden"
          style={{ width: 624, height: 600, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={`center-${current}`}
              src={currentImg} alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={FADE}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>

        {/* Bottom-left thumbnail (next slide) */}
        <div
          className="absolute overflow-hidden mix-blend-luminosity"
          style={{ width: 296, height: 200, left: 'calc(12.5% + 48px)', top: 'calc(50% + 200px)', transform: 'translate(-50%, -50%)' }}
        >
          <AnimatePresence mode="sync">
            <motion.img key={`bl-${next}`} src={nextImg} alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={FADE}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

        {/* Top-right thumbnail (previous slide) */}
        <div
          className="absolute overflow-hidden mix-blend-luminosity"
          style={{ width: 296, height: 200, left: 'calc(87.5% - 48px)', top: 'calc(50% - 200px)', transform: 'translate(-50%, -50%)' }}
        >
          <AnimatePresence mode="sync">
            <motion.img key={`tr-${prev}`} src={prevImg} alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={FADE}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-white text-right text-shadow-glow absolute pointer-events-none select-none"
          style={{ fontSize: 96, lineHeight: '85px', width: 547, left: 'calc(20.83% + 327px)', top: 'calc(50% - 222px)', transform: 'translateX(-100%)' }}
        >
          Sculpt Your Beard,<br />Define Your Style
        </h1>

        {/* Description + CTA */}
        <div
          className="absolute flex flex-col gap-5 drop-shadow-[0_0_12.5px_rgba(0,0,0,0.5)]"
          style={{ left: 'calc(66.67% - 5px)', top: 462, width: 328 }}
        >
          <p className="font-normal text-[20px] leading-[30px] text-white">{hero.description}</p>
          <Button text="Explore Now" href="/services" />
        </div>

        {/* Social links */}
        <div
          className="absolute flex gap-[60px] font-semibold text-[16px] text-white whitespace-nowrap"
          style={{ left: '50%', top: 723, transform: 'translateX(-50%)' }}
        >
          {hero.socials.map((s) => (
            <a key={s} href="#" className="hover:text-[#ba704f] transition-colors">{s}</a>
          ))}
        </div>

        {/* Slide counter */}
        <p
          className="absolute font-display text-white text-shadow-glow text-right leading-none"
          style={{ left: 'calc(95.83% - 20px)', top: 'calc(50% + 251px)', transform: 'translateX(-100%)' }}
        >
          <span className="text-[64px] leading-[110px]">0{current + 1}/</span>
          <span className="text-[32px] leading-[110px]">0{total}</span>
        </p>

        {/* Prev / Next arrows */}
        <div
          className="absolute flex flex-col gap-3 items-center"
          style={{ left: 'calc(91.67% + 18px)', top: '50%', transform: 'translateY(-50%)' }}
        >
          <ArrowBtn onClick={() => setCurrent((c) => (c - 1 + total) % total)} label="Previous slide" rotate="rotate-180" size={48} />
          <ArrowBtn onClick={() => setCurrent((c) => (c + 1) % total)} label="Next slide" rotate="" size={48} />
        </div>

      </div>
    </section>
  );
}
