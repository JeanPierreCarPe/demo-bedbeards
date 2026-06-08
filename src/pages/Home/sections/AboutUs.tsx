import FadeInSection from '../../../components/FadeInSection';
import Button from '../../../components/Button';
import { about } from '../../../data/siteContent';

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-[#0f0f0f] py-[60px] md:py-[100px] overflow-hidden">

      {/* ══ MOBILE LAYOUT (< md) ══ */}
      <div className="md:hidden flex flex-col gap-8 px-5">
        <FadeInSection className="w-full h-[260px] relative overflow-hidden">
          <img src={about.images.main} alt="Bedbeards studio" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </FadeInSection>

        <FadeInSection delay={0.1} className="flex flex-col gap-5 text-center">
          <h2 className="font-display text-[clamp(36px,10vw,52px)] leading-[1.1] text-white">
            Where Beards<br />Meet Mastery
          </h2>
          <p className="font-light text-[16px] leading-[25px] text-white">{about.paragraphLeft}</p>
        </FadeInSection>

        <FadeInSection delay={0.15} className="w-full h-[240px] relative overflow-hidden">
          <img src={about.images.bottomRight} alt="Precision grooming" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </FadeInSection>

        <FadeInSection delay={0.2} className="flex flex-col gap-5 items-center text-center">
          <p className="font-light text-[16px] leading-[25px] text-white">{about.paragraphRight}</p>
          <Button text={about.cta} href="/about" />
        </FadeInSection>
      </div>

      {/* ══ DESKTOP LAYOUT (≥ md) ══ */}
      <div className="hidden md:flex flex-col gap-8 items-start">

        {/* Row 1 */}
        <div className="flex gap-8 items-start w-full">
          <div className="flex items-center shrink-0 w-[71.5%]">
            <FadeInSection direction="left" className="flex-1 self-stretch min-w-0 relative" style={{ marginRight: -80 }}>
              <img src={about.images.main} alt="Bedbeards studio" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </FadeInSection>

            <FadeInSection direction="right" delay={0.1} className="flex-1 min-w-0 flex flex-col gap-[30px] py-[40px] drop-shadow-[0_0_17.5px_rgba(0,0,0,0.5)] relative z-10">
              <div className="relative font-display not-italic flex flex-col items-start">
                <p
                  className="font-display text-ghost text-right text-[128px] leading-[110px] whitespace-nowrap absolute"
                  style={{ left: 349, top: -80, transform: 'translateX(-100%)' }}
                  aria-hidden
                >
                  About us
                </p>
                <h2 className="font-display text-[64px] leading-[60px] text-white relative" style={{ width: 457 }}>
                  Where Beards<br />Meet Mastery
                </h2>
              </div>
              <div className="flex items-center justify-center w-full" style={{ paddingLeft: 110 }}>
                <p className="flex-1 font-light text-[16px] leading-[25px] text-white">{about.paragraphLeft}</p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection direction="right" delay={0.2} className="flex-1 min-w-0 mix-blend-luminosity relative" style={{ height: 190 }}>
            <img src={about.images.topRight} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </FadeInSection>
        </div>

        {/* Row 2 */}
        <div className="flex gap-9 items-start justify-center w-full">
          <FadeInSection direction="left" delay={0.1} className="shrink-0 flex items-center" style={{ paddingTop: 100 }}>
            <div className="relative mix-blend-luminosity" style={{ width: 267, height: 300 }}>
              <img src={about.images.bottomLeft} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>
          </FadeInSection>

          <div className="flex gap-8 items-center shrink-0">
            <FadeInSection direction="up" delay={0.15} className="flex flex-col gap-5 items-end" style={{ width: 511 }}>
              <p className="font-light text-[16px] leading-[25px] text-white text-right w-full">{about.paragraphRight}</p>
              <Button text={about.cta} href="/about" />
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2} className="relative shrink-0" style={{ width: 627, height: 360 }}>
              <img src={about.images.bottomRight} alt="Precision grooming" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </FadeInSection>
          </div>
        </div>

      </div>
    </section>
  );
}
