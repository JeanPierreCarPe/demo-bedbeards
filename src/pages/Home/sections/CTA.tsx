import FadeInSection from '../../../components/FadeInSection';
import Button from '../../../components/Button';
import Divider from '../../../components/Divider';
import { cta } from '../../../data/siteContent';

export default function CTA() {
  return (
    <section id="cta" className="relative w-full overflow-hidden">
      <img src={cta.background} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-[80px] py-[30px] flex justify-center md:justify-end drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]">
        <FadeInSection direction="right">
          <div className="bg-[#0f0f0f] flex flex-col gap-5 items-center px-5 md:px-[40px] py-[60px] md:py-[80px] w-full max-w-[515px] shadow-[0_0_25px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-5 w-full">
              <h2 className="font-display text-[clamp(40px,4.4vw,64px)] leading-[1.1] text-white text-center">
                {cta.headline}
              </h2>
              <Divider />
              <div className="px-5">
                <p className="font-light text-[20px] leading-[25px] text-white text-center">
                  {cta.description}
                </p>
              </div>
              <Divider />
            </div>
            <Button text={cta.cta} href="/contact" />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
