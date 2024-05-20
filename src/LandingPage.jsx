import Navbar from "./components/Navbar"
import Hero from "./components/section/Hero"
import Count from "./components/section/Count"
import Event from "./components/section/Event"
import Footer from "./components/Footer"
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
