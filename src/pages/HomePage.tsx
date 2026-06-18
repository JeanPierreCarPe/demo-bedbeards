import Hero from '../components/home/Hero';
import AboutUs from '../components/home/AboutUs';
import Services from '../components/home/Services';
import Styles from '../components/home/Styles';
import Barbers from '../components/home/Barbers';
import Testimonials from '../components/home/Testimonials';
import Blog from '../components/home/Blog';
import CTA from '../components/home/CTA';

export default function HomePage() {
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
