import FadeInSection from './FadeInSection';

interface PageHeroProps {
  sectionTag: string;
  headline: string;
  image: string;
  overlay?: string;
}

export default function PageHero({ sectionTag, headline, image, overlay = 'bg-black/70' }: PageHeroProps) {
  return (
    <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
      <img src={image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className={`absolute inset-0 ${overlay}`} />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-[60px] px-5 md:px-[80px]">
        <FadeInSection className="w-full max-w-[1280px] mx-auto">
          <div className="relative">
            <p
              className="font-display text-ghost absolute z-[0] whitespace-nowrap
                text-[clamp(52px,13vw,128px)] leading-[1] -top-[32px] md:-top-[72px]
                left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"
              aria-hidden
            >
              {sectionTag}
            </p>
            <h1 className="relative z-[1] font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-white">
              {headline.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
