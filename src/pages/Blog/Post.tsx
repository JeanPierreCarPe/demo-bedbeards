import { useParams, Link } from 'react-router-dom';
import FadeInSection from '../../components/FadeInSection';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import { blogPosts } from '../../data/siteContent';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const related = blogPosts.filter(p => p.slug !== slug);

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-5">
        <h1 className="font-display text-[3rem] text-white">Article not found</h1>
        <Button text="Back to Blog" href="/blog" />
      </main>
    );
  }

  const paragraphs = post.content?.split('\n\n') ?? [];

  return (
    <main>
      {/* Header */}
      <section className="relative w-full h-[480px] md:h-[600px] overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-[60px] px-5 md:px-[80px]">
          <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-light text-[13px] text-[#ba704f]">{post.date}</span>
              {post.readingTime && (
                <>
                  <span className="w-px h-3 bg-white/30" />
                  <span className="font-light text-[13px] text-white/50">{post.readingTime}</span>
                </>
              )}
              {post.author && (
                <>
                  <span className="w-px h-3 bg-white/30" />
                  <span className="font-light text-[13px] text-white/50">By {post.author}</span>
                </>
              )}
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-white max-w-[18ch]">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-[#0f0f0f] py-[80px] md:py-[100px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-20">

          {/* Article body */}
          <article className="flex-1 min-w-0 max-w-[65ch]">
            <FadeInSection>
              <div className="flex flex-col gap-6">
                <p className="font-normal text-[17px] leading-[28px] text-white/80 italic">
                  {post.excerpt}
                </p>
                <Divider />
                <div className="flex flex-col gap-5">
                  {paragraphs.map((para, i) => {
                    if (para.startsWith('**') && para.endsWith('**')) {
                      return null;
                    }
                    const boldParts = para.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p key={i} className="font-light text-[16px] leading-[28px] text-white/75">
                        {boldParts.map((part, j) =>
                          j % 2 === 1
                            ? <strong key={j} className="font-semibold text-white">{part}</strong>
                            : part
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            </FadeInSection>
          </article>

          {/* Sidebar */}
          <aside className="w-full md:w-[280px] shrink-0 flex flex-col gap-8">
            <FadeInSection delay={0.1}>
              <div className="flex flex-col gap-5 p-6 border border-white/10">
                <h3 className="font-display text-[18px] text-white">Book a Session</h3>
                <p className="font-light text-[13px] leading-[22px] text-white/60">
                  Ready to put these tips into practice? Our barbers are available for consultations.
                </p>
                <Button text="Book Now" href="/contact" />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="flex flex-col gap-5">
                <h3 className="font-display text-[16px] text-white/60 uppercase tracking-widest text-[12px]">More Articles</h3>
                <Divider />
                {related.map(p => (
                  <Link key={p.id} to={`/blog/${p.slug}`} className="group flex flex-col gap-2 py-4 border-b border-white/10">
                    <span className="font-light text-[11px] text-[#ba704f]">{p.date}</span>
                    <span className="font-display text-[15px] text-white/80 group-hover:text-white transition-colors leading-tight">{p.title}</span>
                  </Link>
                ))}
              </div>
            </FadeInSection>
          </aside>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-[#0f0f0f] pb-[60px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#ba704f] hover:text-white transition-colors font-semibold text-[14px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
