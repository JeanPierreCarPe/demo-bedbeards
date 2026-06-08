import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../../components/FadeInSection';
import PageHero from '../../components/PageHero';
import { galleryItems, galleryPage } from '../../data/siteContent';
import type { GalleryItem } from '../../types';

type Filter = 'all' | GalleryItem['category'];

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'beards', label: 'Beards' },
  { value: 'cuts', label: 'Cuts' },
  { value: 'treatments', label: 'Treatments' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeFilter);

  return (
    <main>
      <PageHero {...galleryPage.hero} />

      {/* Craft commitment intro */}
      <section className="w-full bg-[#0f0f0f]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row min-h-[420px] md:min-h-[500px]">
          {/* Image side */}
          <FadeInSection direction="left" className="w-full md:w-[50%] shrink-0 relative overflow-hidden min-h-[280px] md:min-h-full">
            <img
              src="/images/person-cutting-beard-to-man-1.webp"
              alt="Barber at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </FadeInSection>

          {/* Text side */}
          <FadeInSection direction="right" delay={0.12} className="flex-1 flex flex-col justify-center gap-8 px-8 md:px-14 py-12 md:py-16">
            <div className="relative">
              <p className="font-display text-ghost whitespace-nowrap absolute z-[0]
                text-[clamp(52px,8vw,100px)] leading-[1] -top-[20px] md:-top-[44px]
                left-0" aria-hidden>
                Craft
              </p>
              <h2 className="relative z-[1] font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] text-white">
                Every photo here<br />is a regular session.
              </h2>
            </div>
            <p className="font-light text-[16px] leading-[28px] text-white/70 max-w-[55ch]">
              We don't post our best work. We post our regular work. The standard that shows up in these images is the one we hold ourselves to every day — not for the camera, but because that's what precision looks like when it becomes routine.
            </p>
            <p className="font-light text-[15px] leading-[27px] text-white/55 max-w-[55ch]">
              Every cut, every fade, every beard edge in this gallery was done by the same four barbers who will be behind the chair when you walk in. What you see is what we deliver.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#ba704f]" />
              <span className="font-light text-[13px] text-[#ba704f] uppercase tracking-widest">Bedbeards Studio</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Gallery section */}
      <section className="w-full bg-[#0f0f0f] pt-[60px] md:pt-[80px] pb-[80px] md:pb-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">

          {/* Filter bar */}
          <FadeInSection>
            <div className="flex gap-1 border-b border-white/10">
              {filters.map(f => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-5 py-3 font-display text-[clamp(14px,2vw,18px)] leading-none transition-colors border-b-2 -mb-[1px]
                    ${activeFilter === f.value
                      ? 'text-white border-[#ba704f]'
                      : 'text-white/40 border-transparent hover:text-white/70'
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Masonry-style grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className={`relative overflow-hidden cursor-pointer group
                    ${i % 5 === 0 ? 'md:col-span-2 h-[300px] md:h-[440px]' : 'h-[220px] md:h-[300px]'}`}
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-light text-[13px] text-white/80">{item.alt}</p>
                    <span className="font-display text-[11px] text-[#ba704f] uppercase tracking-widest capitalize">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-[90vw] max-h-[85vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={lightbox.alt}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="font-light text-[13px] text-white/80">{lightbox.alt}</p>
                <span className="font-display text-[11px] text-[#ba704f] uppercase tracking-widest capitalize">{lightbox.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
