import React from 'react'
import Header from '../../components/layout/landingPage/Header'
import Footer from '../../components/layout/landingPage/Footer'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className=' min-h-screen '>
      <Header/>
      <div className='mt-2'>
        <Outlet/>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
