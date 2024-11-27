import React from 'react'
import Header from '../components/ Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Contact from '../components/contect/Contec'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout
