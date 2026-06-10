import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../../components/FadeInSection';
import PageHero from '../../components/PageHero';
import Divider from '../../components/Divider';
import Button from '../../components/Button';
import { products, productsPage, cta } from '../../data/siteContent';
import type { Product } from '../../types';

type CategoryFilter = 'all' | Product['category'];

const categoryFilters: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'oil', label: 'Beard Oils' },
  { value: 'wax', label: 'Wax & Pomade' },
  { value: 'balm', label: 'Balms' },
  { value: 'shampoo', label: 'Shampoos' },
  { value: 'tool', label: 'Tools & Kits' },
];

const categoryLabel: Record<Product['category'], string> = {
  oil: 'Beard Oil',
  wax: 'Wax & Pomade',
  balm: 'Balm',
  shampoo: 'Shampoo',
  tool: 'Tool / Kit',
};

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <main>
      <PageHero {...productsPage.hero} />

      {/* Intro */}
      <section className="w-full bg-[#0f0f0f] pt-[80px] md:pt-[120px] pb-0 px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-end gap-8 md:gap-20">
              <div className="flex-1 min-w-0 flex flex-col gap-4">
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
                  The Studio<br />Catalog
                </h2>
                <Divider />
              </div>
              <p className="flex-1 font-light text-[16px] leading-[27px] text-white/70 max-w-[60ch] pb-1">
                {productsPage.intro}
              </p>
            </div>
          </FadeInSection>

          {/* Filter bar */}
          <FadeInSection delay={0.1}>
            <div className="flex gap-1 overflow-x-auto pb-1 border-b border-white/10" style={{ scrollbarWidth: 'none' }}>
              {categoryFilters.map(f => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`shrink-0 px-4 py-3 font-display text-[clamp(13px,1.8vw,16px)] leading-none transition-colors border-b-2 -mb-[1px]
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
        </div>
      </section>

      {/* Product grid */}
      <section className="w-full bg-[#0f0f0f] py-[60px] md:py-[80px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="flex flex-col gap-0 group"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0f0f0f]/80 font-light text-[10px] text-[#ba704f] uppercase tracking-widest px-2 py-1">
                        {categoryLabel[product.category]}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-4 pb-5 border-b border-white/10">
                    <h3 className="font-display text-[clamp(1rem,2vw,1.25rem)] leading-[1.2] text-white group-hover:text-[#ba704f] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-light text-[11px] md:text-[13px] leading-[20px] text-white/50">
                      {product.tagline}
                    </p>
                    <p className="font-light text-[11px] md:text-[13px] leading-[20px] text-white/40 hidden md:block">
                      {product.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Studio note */}
      <section className="w-full bg-[#0f0f0f] pb-[80px] md:pb-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-8 md:p-10 border border-white/10">
              <img src="/images/premium-grooming-essential-2.webp" alt="Grooming products" className="w-full md:w-[200px] h-[160px] object-cover shrink-0" />
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] text-white">Not sure what you need?</h3>
                <p className="font-light text-[15px] leading-[26px] text-white/60 max-w-[55ch]">
                  Book a free 15-minute product consultation with any visit. Our barbers will walk you through the right routine for your beard type and daily habits.
                </p>
                <Button text="Book a Consultation" href="/contact" />
              </div>
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
          <Button text={cta.cta} href="/contact" />
        </FadeInSection>
      </section>
    </main>
  );
}
