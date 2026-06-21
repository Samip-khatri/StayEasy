import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import OtherHotels from '../components/OtherHotels'
import PopularDestinations from '../components/PopularDestinations'
import WhyStayEasy from '../components/WhyStayEasy'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <HeroSection />
      <OtherHotels />
      <PopularDestinations />
      <WhyStayEasy />
      <Newsletter />
      <Testimonials />
      <Footer />
    </motion.div>
  )
}

export default LandingPage
