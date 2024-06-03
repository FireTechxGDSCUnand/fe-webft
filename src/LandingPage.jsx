import { Element } from 'react-scroll';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Count from './components/section/Count';
import Event from './components/section/Event';
import Hero from './components/section/Hero';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="event">
        <Event />
      </Element>
      <Element name="count">
        <Count />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}
