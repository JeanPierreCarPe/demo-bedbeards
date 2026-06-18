import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../components/ui/FadeInSection';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Divider from '../components/ui/Divider';
import SectionHeader from '../components/ui/SectionHeader';
import { services, servicesPage, servicePricing, cta } from '../data/siteContent';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceGroups = services.map(s => ({
    ...s,
    pricing: servicePricing.filter(p => p.serviceId === s.id),
  }));

  return (
    <main>
      <PageHero {...servicesPage.hero} />

      {/* Services detail */}
      <section className="w-full bg-[#0f0f0f] py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[80px] md:gap-[120px]">
          {serviceGroups.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeInSection key={service.id}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>
                  {/* Image */}
                  <div className="w-full md:w-[480px] h-[320px] md:h-[500px] shrink-0 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <Divider />
                      <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] text-[#ba704f]">
                        {service.title}
                      </h2>
                      <p className="font-light text-[16px] leading-[27px] text-white/80 max-w-[60ch]">
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="flex flex-col gap-0 border-t border-white/10">
                      {service.pricing.map(item => (
                        <div key={item.id} className="flex items-center justify-between py-4 border-b border-white/10 gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="font-display text-[18px] text-white">{item.name}</span>
                            <span className="font-light text-[13px] text-white/50">{item.description} · {item.duration}</span>
                          </div>
                          <span className="font-display text-[22px] text-[#ba704f] shrink-0">{item.price}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </section>

      {/* Preview images strip */}
      <section className="w-full bg-[#0f0f0f] pb-[80px] md:pb-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 h-[240px] md:h-[300px]">
          {[...services[0].previewImages, ...services[1].previewImages.slice(0, 1)].map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full relative py-[80px] md:py-[120px] px-5 md:px-[80px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/styles-background.webp" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-12">
          <FadeInSection>
            <SectionHeader tag="FAQ" headline={'Common\nQuestions'} align="left" />
          </FadeInSection>

          <div className="flex flex-col gap-0 max-w-[800px]">
            {servicesPage.faq.map((item, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="border-b border-white/15">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left gap-4 group"
                  >
                    <span className="font-display text-[clamp(1.1rem,2vw,1.4rem)] text-white group-hover:text-[#ba704f] transition-colors leading-tight">
                      {item.q}
                    </span>
                    <svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`shrink-0 text-[#ba704f] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 font-light text-[15px] leading-[26px] text-white/70 max-w-[65ch]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            ))}
          </div>
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
