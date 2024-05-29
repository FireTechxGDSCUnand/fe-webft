import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Count from './components/section/Count';
import Event from './components/section/Event';
import Hero from './components/section/Hero';

export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Event/>
        <Count/>
        <Footer/>
      
    </div>
  )
}
