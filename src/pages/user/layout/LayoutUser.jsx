import React from 'react'
import HomePage from '../homepage/HomePage'
import Navbar from '@components/users/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import FooterSection from '@components/users/footerSection/FooterSection'
import ScrollToTop from '@components/users/scrollToTop/ScrollToTop'
import ScrollToTopButton from '@components/users/scrollToTop/ScrollToTopButton'

export default function LayoutUser() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
      <FooterSection />
    </>
  )
}
