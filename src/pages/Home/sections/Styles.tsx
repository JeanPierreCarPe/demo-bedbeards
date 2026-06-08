import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../../../components/FadeInSection';
import Divider from '../../../components/Divider';
import { beardStyles, stylesSection } from '../../../data/siteContent';

export default function Styles() {
  const [active, setActive] = useState(0);
  const style = beardStyles[active];

  return (
    <section id="styles" className="relative w-full py-[60px] md:py-[100px] px-5 md:px-[80px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={stylesSection.background} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-[50px] items-center">
        {/* Heading */}
        <FadeInSection>
          <div className="relative text-center w-full">
            <p className="font-display text-ghost whitespace-nowrap absolute left-1/2 -translate-x-1/2 z-[0]
              text-[clamp(52px,13vw,128px)] leading-[1] -top-[32px] md:-top-[70px]" aria-hidden>
              {stylesSection.sectionTag}
            </p>
            <h2 className="relative z-[1] font-display text-[clamp(36px,4.4vw,64px)] leading-[1.1] text-white text-center w-full">
              {stylesSection.headline}
            </h2>
          </div>
        </FadeInSection>

        {/* Styles selector */}
        <FadeInSection delay={0.15} className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[470px] items-start lg:items-center w-full">
            {/* Style list — horizontal scroll on mobile, vertical on desktop */}
            <div
              className="flex lg:flex-col gap-5 lg:gap-[35px] w-full lg:flex-1 shrink-0 lg:shrink font-display
                overflow-x-auto lg:overflow-visible pb-1 lg:pb-0"
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {beardStyles.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`shrink-0 transition-all duration-200 lg:text-left text-center leading-tight
                    ${i === active
                      ? 'text-[clamp(28px,4.5vw,44px)] text-white'
                      : 'text-[clamp(24px,4vw,40px)] text-white/50 hover:text-white/75'
                    }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Style image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={style.id + '-img'}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full lg:flex-1 h-[300px] lg:h-[470px] overflow-hidden"
              >
                <img src={style.image} alt={style.name} className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            </AnimatePresence>

            {/* Style description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={style.id + '-desc'}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-5 flex-1 min-w-0"
              >
                <Divider />
                <p className="font-normal text-[20px] leading-[29px] text-white w-full text-center lg:text-left">
                  {style.description}
                </p>
                <Divider />
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
