import React from 'react'

import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-red-500">
      <Navbar />
      {children}
      <footer>This is the Footer</footer>
    </div>
  )
}

export default Layout
