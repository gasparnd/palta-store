import React from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Fotter'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
