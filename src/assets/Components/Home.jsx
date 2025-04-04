import React from 'react'
import Hero from './Hero'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Footer from './Footer'
import Faq from './Faq'
import Hero4 from './Hero4'
import ProductSection from './ProductSelection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <ProductSection/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home