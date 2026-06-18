import FadeInSection from '../ui/FadeInSection';
import SectionHeader from '../ui/SectionHeader';
import Divider from '../ui/Divider';
import { barbers, barbersSection } from '../../data/siteContent';

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Barbers() {
  return (
    <section id="barbers" className="w-full bg-[#0f0f0f] py-[60px] md:py-[100px] px-5 md:px-[80px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[50px]">
        <FadeInSection>
          <div className="flex flex-col gap-[60px] md:gap-[100px]">
            <Divider />
            <div className="flex flex-col gap-[30px]">
              <SectionHeader
                tag={barbersSection.sectionTag}
                headline={barbersSection.headline}
                description={barbersSection.description}
                align="right"
              />
              <Divider />
            </div>
          </div>
        </FadeInSection>

        {/* Barber cards grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {barbers.map((barber, i) => (
            <FadeInSection
              key={barber.id}
              delay={i * 0.1}
              direction="up"
              className={`flex-1 min-w-[250px] max-w-[624px] flex flex-col ${barber.offset === 'up' ? 'mt-0 md:pt-[100px]' : 'md:pb-[100px]'}`}
            >
              <div className="flex flex-col gap-5 items-center">
                {/* Photo */}
                <div className="relative w-full h-[400px] overflow-hidden group">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Social icons overlay */}
                  <div className="absolute bottom-5 left-5 flex flex-col gap-2.5 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    {barber.socials.facebook && (
                      <a href={barber.socials.facebook} aria-label="Facebook" className="flex items-center justify-center w-9 h-9 bg-[#0f0f0f] rounded-lg p-1.5 hover:bg-[#ba704f] transition-colors">
                        <FacebookIcon />
                      </a>
                    )}
                    {barber.socials.instagram && (
                      <a href={barber.socials.instagram} aria-label="Instagram" className="flex items-center justify-center w-9 h-9 bg-[#0f0f0f] rounded-lg p-1.5 hover:bg-[#ba704f] transition-colors">
                        <InstagramIcon />
                      </a>
                    )}
                    {barber.socials.linkedin && (
                      <a href={barber.socials.linkedin} aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 bg-[#0f0f0f] rounded-lg p-1.5 hover:bg-[#ba704f] transition-colors">
                        <LinkedinIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2.5 items-center text-white text-center">
                  <p className="font-display text-[28px] leading-[1.2]">{barber.nickname}</p>
                  <p className="font-display text-[20px] leading-[1.2]">{barber.name}</p>
                  <p className="font-normal text-[16px] text-center text-white/70">{barber.specialty}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
