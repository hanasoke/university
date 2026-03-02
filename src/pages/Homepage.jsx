import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Programs from '../components/home/Programs'
import Testimonials from '../components/home/Testimonials'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Testimonials />
      <Footer />
    </>
  )
}
