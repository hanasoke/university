import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Programs from '../components/home/Programs'
import Testimonials from '../components/home/Testimonials'
import CampusLive from '../components/home/CampusLive'
import Degree from '../components/home/Degree'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <CampusLive />
      <Testimonials />
      <Degree />
      <Footer />
    </>
  )
}
