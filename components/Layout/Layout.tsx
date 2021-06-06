import React from 'react'

import Navbar from '../Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>This is the Footer</footer>
    </>
  )
}

export default Layout
