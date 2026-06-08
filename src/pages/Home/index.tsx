import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Styles from './sections/Styles';
import Barbers from './sections/Barbers';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import CTA from './sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Styles />
      <Barbers />
      <Testimonials />
      <Blog />
      <CTA />
    </main>
  );
}
