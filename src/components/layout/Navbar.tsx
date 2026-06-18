import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { brand } from '../../data/siteContent';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Products', href: '/products' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(15,15,15,0.95)] backdrop-blur-sm' : ''
      }`}
    >
      <div className="flex items-center justify-center px-5 md:px-[80px] py-5">
        <div className="flex items-center justify-between w-full max-w-[1280px]">
          <Link to="/" className="shrink-0">
            <img src={brand.logo} alt={brand.name} className="h-[60px] w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 font-nav text-[16px] text-white/85 capitalize">
            {navLinks.map(link => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#ba704f] after:transition-all hover:after:w-full
                  ${isActive ? 'text-white after:w-full' : 'after:w-0'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button text="Book Now" href="/contact" />
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f0f0f] border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col gap-5 px-6 py-8 font-nav text-[18px] text-white/85">
              {navLinks.map(link => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `capitalize transition-colors ${isActive ? 'text-[#ba704f]' : 'hover:text-white'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <Button text="Book Now" href="/contact" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
