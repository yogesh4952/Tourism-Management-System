import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const Applayout = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer />
   </div>
  )
}

export default Applayout