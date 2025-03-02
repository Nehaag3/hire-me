import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Testimonial from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar/>

      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
