import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../../components/FadeInSection';
import PageHero from '../../components/PageHero';
import Button from '../../components/Button';
import { blogPosts } from '../../data/siteContent';
import type { BlogCategory } from '../../types';

type FilterValue = 'all' | BlogCategory;

const categoryFilters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All Posts' },
  { value: 'care', label: 'Beard Care' },
  { value: 'style', label: 'Style Guide' },
  { value: 'technique', label: 'Technique' },
  { value: 'products', label: 'Products' },
  { value: 'culture', label: 'Culture' },
];

const categoryLabel: Record<BlogCategory, string> = {
  care: 'Beard Care',
  style: 'Style Guide',
  technique: 'Technique',
  products: 'Products',
  culture: 'Culture',
};

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const isFiltered = activeFilter !== 'all';
  const filteredPosts = isFiltered
    ? blogPosts.filter(p => p.category === activeFilter)
    : blogPosts;

  const [featured, second, third, ...rest] = blogPosts;

  return (
    <main>
      <PageHero
        sectionTag="Journal"
        headline={'From the Studio,\nWritten Down'}
        image="/images/blog-1.webp"
      />

      {/* Editorial masthead + filter bar */}
      <section className="w-full bg-[#0f0f0f] pt-[60px] md:pt-[80px] pb-0 px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          {/* Masthead top row */}
          <div className="flex items-end justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-6">
              <span className="font-light text-[11px] text-white/30 uppercase tracking-widest">Bedbeards Studio</span>
              <span className="w-px h-4 bg-white/15" />
              <span className="font-light text-[11px] text-white/30 uppercase tracking-widest">Grooming and Craft</span>
            </div>
            <span className="font-light text-[11px] text-white/25 uppercase tracking-widest hidden md:block">
              {blogPosts.length} Articles
            </span>
          </div>

          {/* Filter bar */}
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
        </div>
      </section>

      {/* Content — editorial layout when 'all', filtered grid otherwise */}
      <AnimatePresence mode="wait">
        {isFiltered ? (
          <motion.section
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#0f0f0f] py-[60px] md:py-[80px] px-5 md:px-[80px]"
          >
            <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
              {/* Category heading */}
              <FadeInSection>
                <div className="flex items-end gap-6">
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] text-white">
                    {categoryLabel[activeFilter as BlogCategory]}
                  </h2>
                  <span className="font-light text-[13px] text-white/30 pb-2">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>
              </FadeInSection>

              {filteredPosts.length === 0 ? (
                <p className="font-light text-[16px] text-white/40">No articles in this category yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {filteredPosts.map((post, i) => (
                    <FadeInSection key={post.id} delay={i * 0.06}>
                      <Link to={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden">
                        <div className="relative h-[240px] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#ba704f] font-light text-[10px] text-white uppercase tracking-widest px-2.5 py-1">
                              {post.category ? categoryLabel[post.category] : ''}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 pt-5 pb-5 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <span className="font-light text-[12px] text-white/40">{post.date}</span>
                            {post.readingTime && (
                              <>
                                <span className="w-px h-3 bg-white/15" />
                                <span className="font-light text-[12px] text-white/30">{post.readingTime}</span>
                              </>
                            )}
                          </div>
                          <h3 className="font-display text-[clamp(1.1rem,2.2vw,1.5rem)] leading-[1.2] text-white group-hover:text-[#ba704f] transition-colors">
                            {post.title}
                          </h3>
                          <p className="font-light text-[13px] leading-[22px] text-white/55 max-w-[55ch]">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-1">
                            <span className="font-light text-[12px] text-white/30">By {post.author}</span>
                            <div className="flex items-center gap-1.5 text-[#ba704f] font-semibold text-[12px]">
                              Read
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </FadeInSection>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Featured — full editorial spread */}
            <section className="w-full bg-[#0f0f0f]">
              <div className="max-w-[1280px] mx-auto">
                <FadeInSection>
                  <Link
                    to={`/blog/${featured.slug}`}
                    className="group flex flex-col md:flex-row min-h-[460px] md:min-h-[560px] overflow-hidden"
                  >
                    <div className="relative w-full md:w-[60%] h-[300px] md:h-auto shrink-0 overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-500" />
                      <div className="absolute bottom-5 left-5">
                        <div className="bg-[#ba704f] px-3 py-1.5">
                          <span className="font-light text-[11px] text-white uppercase tracking-widest">{featured.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between px-8 md:px-12 py-10 md:py-14 bg-[#0a0a0a] border-r border-b border-white/10">
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-px bg-[#ba704f]" />
                          <span className="font-light text-[11px] text-[#ba704f] uppercase tracking-widest">Featured</span>
                        </div>
                        <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-white group-hover:text-[#ba704f] transition-colors duration-300">
                          {featured.title}
                        </h2>
                        <p className="font-light text-[15px] leading-[27px] text-white/65 max-w-[55ch]">
                          {featured.excerpt}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 pt-8 border-t border-white/10 mt-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-light text-[13px] text-white/40">By {featured.author}</span>
                            <span className="w-px h-3 bg-white/15" />
                            <span className="font-light text-[13px] text-white/30">{featured.readingTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#ba704f] font-semibold text-[13px]">
                            Read
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              </div>
            </section>

            {/* Two secondary articles */}
            <section className="w-full bg-[#0f0f0f] px-5 md:px-[80px] pt-[60px] md:pt-[80px]">
              <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
                {[second, third].filter(Boolean).map((post, i) => (
                  <FadeInSection key={post.id} delay={i * 0.1}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className={`group flex flex-col overflow-hidden pb-8 md:pb-10
                        ${i === 0 ? 'md:border-r border-b md:border-b-0 md:pr-8' : 'md:pl-8'}`}
                    >
                      <div className="relative h-[240px] md:h-[300px] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#0f0f0f]/70 font-light text-[11px] text-[#ba704f] uppercase tracking-widest px-2.5 py-1">
                            {post.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pt-6">
                        <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.2] text-white group-hover:text-[#ba704f] transition-colors">
                          {post.title}
                        </h3>
                        <p className="font-light text-[14px] leading-[25px] text-white/60 max-w-[55ch]">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="font-light text-[12px] text-white/35">By {post.author}</span>
                          <div className="flex items-center gap-1.5 text-[#ba704f] font-semibold text-[12px]">
                            Read More
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeInSection>
                ))}
              </div>
            </section>

            {/* Remaining posts — full 3-col grid */}
            <section className="w-full bg-[#0f0f0f] pb-[80px] md:pb-[120px] px-5 md:px-[80px]">
              <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
                <FadeInSection>
                  <div className="flex items-center gap-4">
                    <span className="font-light text-[11px] text-white/30 uppercase tracking-widest">More from the Studio</span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {rest.map((post, i) => (
                    <FadeInSection key={post.id} delay={i * 0.06}>
                      <Link to={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden">
                        <div className="relative h-[200px] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                          {post.category && (
                            <div className="absolute top-3 left-3">
                              <span className="bg-[#0f0f0f]/70 font-light text-[10px] text-[#ba704f] uppercase tracking-widest px-2 py-1">
                                {categoryLabel[post.category]}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-2 pt-4 pb-5 border-b border-white/10">
                          <span className="font-light text-[11px] text-[#ba704f]">{post.date}</span>
                          <h3 className="font-display text-[clamp(1rem,2vw,1.25rem)] leading-[1.2] text-white group-hover:text-[#ba704f] transition-colors">
                            {post.title}
                          </h3>
                          <p className="font-light text-[13px] leading-[22px] text-white/55 max-w-[55ch]">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="font-light text-[11px] text-white/30">By {post.author}</span>
                            {post.readingTime && (
                              <span className="font-light text-[11px] text-white/25">{post.readingTime}</span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Pull quote */}
            <section className="w-full px-5 md:px-[80px] py-[60px] md:py-[80px]">
              <div className="max-w-[1280px] mx-auto">
                <FadeInSection>
                  <div className="relative flex flex-col md:flex-row items-center gap-8 py-10 md:py-12 border-t border-b border-white/15">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
                      <span className="font-display text-[5rem] leading-none text-[#ba704f]/20 select-none">&ldquo;</span>
                    </div>
                    <blockquote className="flex-1 font-display text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.35] text-white/80 text-center md:text-left md:px-16">
                      The detail that most clients say makes the biggest visible difference is the one they never thought to ask about.
                    </blockquote>
                    <div className="shrink-0 flex flex-col items-center gap-2 text-center">
                      <img src="/images/team-ava-harris.webp" alt="Ava Harris" className="w-14 h-14 object-cover object-top" />
                      <p className="font-display text-[14px] text-white">Ava Harris</p>
                      <p className="font-light text-[12px] text-white/40">Creative Barber</p>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </section>

            {/* CTA */}
            <section className="w-full bg-[#0a0a0a] py-[60px] md:py-[80px] px-5 md:px-[80px] border-t border-white/10">
              <div className="max-w-[1280px] mx-auto">
                <FadeInSection>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex flex-col gap-4 flex-1">
                      <div className="relative">
                        <p className="font-display text-ghost whitespace-nowrap absolute z-[0]
                          text-[clamp(52px,9vw,110px)] leading-[1] -top-[24px] md:-top-[48px]
                          left-0" aria-hidden>
                          Studio
                        </p>
                        <h3 className="relative z-[1] font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] text-white">
                          Ready to stop reading<br />and start looking better?
                        </h3>
                      </div>
                      <p className="font-light text-[15px] leading-[26px] text-white/60 max-w-[50ch]">
                        Everything in this journal applies to the chair. Book a session and put it into practice.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Button text="Book a Session" href="/contact" />
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
