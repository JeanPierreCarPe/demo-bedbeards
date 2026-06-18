import { Link } from 'react-router-dom';
import FadeInSection from '../ui/FadeInSection';
import SectionHeader from '../ui/SectionHeader';
import Divider from '../ui/Divider';
import { blogPosts, blogSection } from '../../data/siteContent';

const ArrowIcon = () => (
  <svg width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-[#0f0f0f] py-[60px] md:py-[100px] px-5 md:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[50px]">
        <FadeInSection>
          <div className="flex flex-col gap-[60px] md:gap-[100px]">
            <Divider />
            <div className="flex flex-col gap-[30px]">
              <SectionHeader
                tag={blogSection.sectionTag}
                headline={blogSection.headline}
                description={blogSection.description}
                align="left"
              />
              <Divider />
            </div>
          </div>
        </FadeInSection>

        <div className="flex flex-wrap gap-8 justify-center">
          {blogPosts.slice(0, 3).map((post, i) => (
            <FadeInSection
              key={post.id}
              delay={i * 0.1}
              className="flex-1 min-w-[280px] max-w-[420px] flex flex-col gap-4"
            >
              {/* Image — always first on mobile; on desktop follows imageBottom flag */}
              <div className={`relative h-[350px] overflow-hidden group ${post.imageBottom ? 'md:order-last' : ''}`}>
                <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className={`flex flex-col gap-2.5 px-0 md:px-[40px] ${post.imageBottom ? 'md:order-first' : ''}`}>
                <div className="flex flex-col gap-1 text-white">
                  <p className="font-bold text-[16px] leading-[21px]">{post.date}</p>
                  <h3 className="font-display text-[24px] leading-[1.2] text-white">{post.title}</h3>
                </div>
                <p className="font-normal text-[16px] leading-normal text-white/80">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="flex gap-1.5 items-center group mt-2">
                  <span className="font-bold text-[16px] text-white group-hover:text-[#ba704f] transition-colors">Read Post</span>
                  <ArrowIcon />
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
