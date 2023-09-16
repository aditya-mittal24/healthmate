import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Service from './components/Service'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div className=''>
        <Navbar/>
        <Main/>
        <Service/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default LandingPage