import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../components/ui/FadeInSection';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Divider from '../components/ui/Divider';
import { aboutPage, barbers, cta } from '../data/siteContent';
import type { BarberData } from '../types';

type BarberWithBio = BarberData & { bio: string; yearsExp: number };

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function AboutPage() {
  const [expandedBarber, setExpandedBarber] = useState<string | null>(null);
  const barbersWithBio = barbers as BarberWithBio[];

  return (
    <main>
      <PageHero {...aboutPage.hero} />

      {/* Origin story */}
      <section className="w-full bg-[#0f0f0f] py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <FadeInSection direction="left" className="flex-1 min-w-0 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Divider />
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
                {aboutPage.story.headline}
              </h2>
            </div>
            <p className="font-light text-[16px] leading-[28px] text-white/80 max-w-[65ch]">
              {aboutPage.story.paragraphOne}
            </p>
            <p className="font-light text-[16px] leading-[28px] text-white/80 max-w-[65ch]">
              {aboutPage.story.paragraphTwo}
            </p>
            <p className="font-light text-[16px] leading-[28px] text-white/70 max-w-[65ch]">
              The people who built this studio are the people behind every chair. No rotating staff, no franchise standards. When you come back, you come back to the same barber who knows your beard's growth pattern, the side you favor, and what kind of shape you're going for this time. That continuity is not an accident — it's the whole point.
            </p>
            <Button text="Our Services" href="/services" />
          </FadeInSection>

          <FadeInSection direction="right" delay={0.15} className="w-full md:w-[460px] shrink-0 flex flex-col gap-3">
            <div className="relative h-[360px] md:h-[440px] overflow-hidden">
              <img
                src={aboutPage.story.image}
                alt="Bedbeards studio"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1a1a1a] border border-white/10 p-5 flex flex-col gap-1">
                <span className="font-display text-[2.5rem] leading-none text-[#ba704f]">2018</span>
                <span className="font-light text-[13px] text-white/50">Year founded</span>
              </div>
              <div className="bg-[#1a1a1a] border border-white/10 p-5 flex flex-col gap-1">
                <span className="font-display text-[2.5rem] leading-none text-[#ba704f]">4</span>
                <span className="font-light text-[13px] text-white/50">Master barbers</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Philosophy manifesto */}
      <section className="w-full py-[80px] md:py-[100px] px-5 md:px-[80px] bg-[#0a0a0a] border-y border-white/8">
        <div className="max-w-[1280px] mx-auto">
          <FadeInSection className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 min-w-0">
              <p className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-white">
                A beard is not an accessory.<br />
                <span className="text-[#ba704f]">It is architecture.</span>
              </p>
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              <p className="font-light text-[16px] leading-[28px] text-white/70">
                We believe good grooming is not about following trends. It's about understanding structure: the angles of your face, the density of your beard, the growth patterns that are uniquely yours. Every appointment at Bedbeards starts with observation before it starts with scissors.
              </p>
              <p className="font-light text-[16px] leading-[28px] text-white/70">
                The best work we do is invisible. You walk out looking like yourself — just the best version of it.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-[80px] md:py-[120px] px-5 md:px-[80px] relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutPage.hero.image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <FadeInSection className="mb-16">
            <div className="relative">
              <p className="font-display text-ghost whitespace-nowrap absolute z-[0]
                text-[clamp(52px,10vw,128px)] leading-[1] -top-[28px] md:-top-[60px]
                left-0" aria-hidden>
                Values
              </p>
              <h2 className="relative z-[1] font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
                What We Stand On
              </h2>
            </div>
          </FadeInSection>

          <div className="flex flex-col md:flex-row gap-0">
            {aboutPage.values.map((value, i) => (
              <FadeInSection key={value.id} delay={i * 0.1} className="flex-1 min-w-0">
                <motion.div
                  className="flex flex-col gap-5 p-8 md:p-10 border-t md:border-t-0 md:border-l border-white/15 first:border-t-0 first:border-l-0 md:first:border-l-0 h-full"
                  whileHover={{ backgroundColor: 'rgba(186,112,79,0.05)' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-display text-[clamp(3rem,5vw,5rem)] leading-none text-ghost">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.1] text-white">
                    {value.title}
                  </h3>
                  <p className="font-light text-[15px] leading-[26px] text-white/70">
                    {value.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="w-full bg-[#0f0f0f] py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-14">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-end gap-8 md:gap-20">
              <div className="flex-1 min-w-0 flex flex-col gap-4">
                <div className="relative">
                  <p className="font-display text-ghost whitespace-nowrap absolute z-[0]
                    text-[clamp(52px,10vw,128px)] leading-[1] -top-[28px] md:-top-[60px]
                    left-0" aria-hidden>
                    Team
                  </p>
                  <h2 className="relative z-[1] font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
                    The People<br />Behind the Work
                  </h2>
                </div>
                <Divider />
              </div>
              <p className="flex-1 font-light text-[16px] leading-[27px] text-white/70 max-w-[55ch] pb-1">
                Four barbers, four specialties. Combined, over 40 years of professional experience. None of them cut corners — the pun is very much intended.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {barbersWithBio.map((barber, i) => (
              <FadeInSection key={barber.id} delay={i * 0.08}>
                <div className="flex flex-col">
                  <button
                    className="group flex flex-col gap-0 text-left cursor-pointer"
                    onClick={() => setExpandedBarber(expandedBarber === barber.id ? null : barber.id)}
                    aria-expanded={expandedBarber === barber.id}
                  >
                    <div className="relative overflow-hidden h-[240px] md:h-[340px]">
                      <img
                        src={barber.image}
                        alt={barber.name}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-8 h-8 bg-[#ba704f] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d={expandedBarber === barber.id ? 'M18 6L6 18M6 6l12 12' : 'M12 5v14M5 12h14'} stroke="white" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-4 pb-5 border-b border-white/10">
                      <p className="font-light text-[11px] text-[#ba704f] uppercase tracking-widest">{barber.nickname}</p>
                      <h3 className="font-display text-[clamp(1rem,2vw,1.35rem)] leading-[1.2] text-white group-hover:text-[#ba704f] transition-colors">
                        {barber.name}
                      </h3>
                      <p className="font-light text-[12px] md:text-[13px] text-white/50">{barber.specialty}</p>
                      <p className="font-light text-[11px] text-white/30">{barber.yearsExp} years experience</p>
                    </div>
                  </button>

                  {/* Socials row */}
                  <div className="flex gap-3 pt-3">
                    {[
                      { Icon: FacebookIcon, label: 'Facebook', href: barber.socials.facebook },
                      { Icon: InstagramIcon, label: 'Instagram', href: barber.socials.instagram },
                    ].map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={`${barber.name} ${label}`}
                        className="flex items-center justify-center w-7 h-7 text-white/30 hover:text-[#ba704f] transition-colors"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Expanded bio panel */}
          <AnimatePresence mode="wait">
            {expandedBarber && (() => {
              const b = barbersWithBio.find(x => x.id === expandedBarber)!;
              return (
                <motion.div
                  key={expandedBarber}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="border border-[#ba704f]/30 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 bg-[#0a0a0a]"
                >
                  <div className="shrink-0 flex flex-col gap-4">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-cover object-top"
                    />
                    <div>
                      <p className="font-display text-[1.1rem] text-white">{b.name}</p>
                      <p className="font-light text-[13px] text-[#ba704f]">{b.specialty}</p>
                    </div>
                    <button
                      className="text-white/30 text-[12px] font-light hover:text-white transition-colors text-left"
                      onClick={() => setExpandedBarber(null)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="flex-1">
                    <p className="font-light text-[15px] md:text-[16px] leading-[28px] text-white/75 max-w-[70ch]">
                      {b.bio}
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 mt-6 text-[#ba704f] font-semibold text-[14px] hover:text-white transition-colors">
                      Book with {b.name.split(' ')[0]}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* The Studio — 5 place images */}
      <section className="w-full bg-[#0f0f0f] pb-[80px] md:pb-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <FadeInSection className="flex flex-col md:flex-row gap-8 md:gap-20 items-end">
            <div className="flex flex-col gap-4 flex-1">
              <div className="relative">
                <p className="font-display text-ghost whitespace-nowrap absolute z-[0]
                  text-[clamp(52px,10vw,128px)] leading-[1] -top-[28px] md:-top-[60px]
                  left-0" aria-hidden>
                  Space
                </p>
                <h2 className="relative z-[1] font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
                  {aboutPage.space.headline}
                </h2>
              </div>
            </div>
            <p className="flex-1 font-light text-[16px] leading-[27px] text-white/70 max-w-[60ch] pb-1">
              {aboutPage.space.description}
            </p>
          </FadeInSection>

          {/* 5-image editorial grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 h-auto md:h-[560px]">
            {/* Large left image */}
            <FadeInSection delay={0} className="row-span-2 relative overflow-hidden h-[260px] md:h-full">
              <img src={aboutPage.space.images[0]} alt="Bedbeards studio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </FadeInSection>
            {/* Top-middle */}
            <FadeInSection delay={0.07} className="relative overflow-hidden h-[180px] md:h-full">
              <img src={aboutPage.space.images[1]} alt="Bedbeards studio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </FadeInSection>
            {/* Top-right */}
            <FadeInSection delay={0.12} className="relative overflow-hidden h-[180px] md:h-full">
              <img src={aboutPage.space.images[2]} alt="Bedbeards studio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </FadeInSection>
            {/* Bottom-middle */}
            <FadeInSection delay={0.17} className="relative overflow-hidden h-[180px] md:h-full">
              <img src={aboutPage.space.images[3]} alt="Bedbeards studio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </FadeInSection>
            {/* Bottom-right */}
            <FadeInSection delay={0.22} className="relative overflow-hidden h-[180px] md:h-full">
              <img src={aboutPage.space.images[4]} alt="Bedbeards studio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Join the studio */}
      <section className="w-full bg-[#0a0a0a] py-[60px] md:py-[80px] px-5 md:px-[80px] border-y border-white/8">
        <div className="max-w-[1280px] mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] text-white">
                  Think you belong here?
                </h3>
                <p className="font-light text-[15px] leading-[26px] text-white/60 max-w-[50ch]">
                  We're not always hiring, but we're always looking for barbers who take the craft seriously. If you have something to show, we want to see it.
                </p>
              </div>
              <a
                href="mailto:contact@bedbeards.com"
                className="shrink-0 inline-flex items-center gap-3 border border-white/20 hover:border-[#ba704f] text-white hover:text-[#ba704f] font-display text-[16px] px-8 py-4 transition-colors duration-300"
              >
                Get in touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-[80px] md:py-[100px] px-5 md:px-[80px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={cta.background} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <FadeInSection className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
            {cta.headline.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="font-light text-[16px] leading-[25px] text-white/80 max-w-[500px]">{cta.description}</p>
          <Button text={cta.cta} href="/contact" />
        </FadeInSection>
      </section>
    </main>
  );
}
