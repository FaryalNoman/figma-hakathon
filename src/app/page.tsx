import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Sidetable from './components/Sidetable'
import Toppicks from './components/Toppicks'


const page = () => {
  return (
    <div>
     <Header />
      <Hero/>
      <Sidetable/>
      <Toppicks/>
      <Footer/>
    </div>
  )
}

export default page
