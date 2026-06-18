import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../ui/FadeInSection';
import SectionHeader from '../ui/SectionHeader';
import Divider from '../ui/Divider';
import { services, servicesSection } from '../../data/siteContent';

const LAYOUT_EASE = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section id="services" className="w-full bg-[#0f0f0f] py-[60px] md:py-[100px] px-5 md:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[50px]">
        <FadeInSection>
          <div className="flex flex-col gap-[60px] md:gap-[100px]">
            <Divider />
            <div className="flex flex-col gap-[30px]">
              <SectionHeader
                tag={servicesSection.sectionTag}
                headline={servicesSection.headline}
                description={servicesSection.description}
                align="left"
              />
              <Divider />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>

          {/* ══ MOBILE LAYOUT (< md) ══ */}
          <div className="md:hidden flex flex-col gap-3">
            {/* 3 image tiles in a row */}
            <div className="flex gap-1 items-stretch h-[180px]">
              {services.map((service, i) => {
                const isActive = activeTab === i;
                return (
                  <div
                    key={service.id}
                    className="flex-1 relative overflow-hidden cursor-pointer"
                    onClick={() => setActiveTab(isActive ? null : i)}
                  >
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                      style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                    />
                    <div className={`absolute inset-0 transition-colors duration-300 ${isActive ? 'bg-black/10' : 'bg-black/40'}`} />
                    <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                      <p className="font-display text-[11px] leading-tight text-white">{service.label}</p>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"
                        className={`transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ba704f]" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Expanded info panel — below the row */}
            <AnimatePresence>
              {activeTab !== null && (
                <motion.div
                  key={`panel-m-${services[activeTab].id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-5 p-5 bg-[#d0cbc6] items-center text-center">
                    <h3 className="font-display text-[clamp(28px,8vw,40px)] leading-[1.1] text-[#ba704f]">
                      {services[activeTab].title}
                    </h3>
                    <p className="font-light text-[15px] leading-[24px] text-[rgba(15,15,15,0.75)]">
                      {services[activeTab].description}
                    </p>
                    <div className="flex gap-2 h-[140px] w-full">
                      {services[activeTab].previewImages.map((img, j) => (
                        <div key={j} className="flex-1 relative overflow-hidden">
                          <img src={img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ══ DESKTOP LAYOUT (≥ md) ══ */}
          <div className="hidden md:flex flex-col gap-5">
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-8 items-center w-full font-display text-[clamp(28px,3.3vw,48px)] leading-[1.1] text-center text-white">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(activeTab === i ? null : i)}
                  className={`flex-1 min-w-[200px] transition-colors duration-200 text-center ${
                    i === activeTab ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {s.label}
                  {i === activeTab && (
                    <motion.div
                      layoutId="tab-underline"
                      className="h-0.5 bg-[#ba704f] mt-1 mx-auto"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Cards row */}
            <div className="flex gap-8 items-start w-full h-[566px]">
              {services.map((service, i) => {
                const isActive = activeTab === i;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    transition={{ layout: { duration: 0.45, ease: LAYOUT_EASE } }}
                    onClick={() => setActiveTab(isActive ? null : i)}
                    className={`flex h-[566px] overflow-hidden cursor-pointer ${
                      isActive ? 'shrink-0' : 'flex-1 group'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className={`relative h-full overflow-hidden shrink-0 ${isActive ? 'w-[200px]' : 'w-full'}`}>
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      )}
                    </div>

                    {/* Info panel */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key={`panel-${service.id}`}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 24 }}
                          transition={{ duration: 0.35, delay: 0.15 }}
                          className="flex flex-col gap-10 h-full px-[30px] py-10 shrink-0 drop-shadow-[0_0_25px_rgba(0,0,0,0.5)] overflow-hidden"
                          style={{ width: 740, backgroundColor: '#d0cbc6' }}
                        >
                          <div className="flex flex-col gap-[18px] shrink-0" style={{ width: 620 }}>
                            <h3 className="font-display text-[64px] leading-[60px] text-[#ba704f]">
                              {service.title}
                            </h3>
                            <p className="font-light text-[16px] leading-[25px] text-[rgba(15,15,15,0.75)]">
                              {service.description}
                            </p>
                          </div>

                          <div className="flex flex-1 gap-5 min-h-0 drop-shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                            {service.previewImages.map((img, j) => (
                              <div key={j} className="flex-1 h-full relative overflow-hidden">
                                <img src={img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </FadeInSection>
      </div>
    </section>
  );
}
