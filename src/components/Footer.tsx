import { Link } from 'react-router-dom';
import { brand } from '../data/siteContent';

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

const footerNav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 px-5 md:px-[80px] pt-[60px] pb-[40px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Top row */}
        <div className="flex flex-wrap gap-y-10 justify-center md:justify-between mb-12">
          {/* Logo + tagline */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-3">
            <Link to="/">
              <img src={brand.logo} alt={brand.name} className="h-[70px] w-auto object-contain" />
            </Link>
            <p className="font-light text-[13px] text-white/40 max-w-[200px] text-center md:text-left">
              Sculpt Your Beard, Define Your Style.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4">
            <nav className="flex flex-col gap-3">
              <span className="font-light text-[11px] text-white/30 uppercase tracking-widest">Studio</span>
              {footerNav.slice(0, 4).map(l => (
                <Link key={l.href} to={l.href} className="font-light text-[14px] text-white/60 hover:text-[#ba704f] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="font-light text-[11px] text-white/30 uppercase tracking-widest">More</span>
              {footerNav.slice(4).map(l => (
                <Link key={l.href} to={l.href} className="font-light text-[14px] text-white/60 hover:text-[#ba704f] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + socials */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-5 text-center md:text-right">
            <address className="not-italic font-normal text-[14px] leading-[24px] text-white/50">
              {brand.address.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && <br />}</span>
              ))}
            </address>
            <div className="flex flex-col gap-1 text-[14px] text-white/50">
              <a href={`tel:${brand.phone}`} className="hover:text-[#ba704f] transition-colors">{brand.phone}</a>
              <a href={`mailto:${brand.email}`} className="hover:text-[#ba704f] transition-colors">{brand.email}</a>
            </div>
            <div className="flex gap-[10px] items-center">
              {[
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: LinkedinIcon, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 bg-[#0f0f0f] border border-white/15 hover:border-[#ba704f] transition-colors p-[6px]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-white/20">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
