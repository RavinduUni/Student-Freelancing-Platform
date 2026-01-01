import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <div>
        <NavBar /> 
        <HeroBanner />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home