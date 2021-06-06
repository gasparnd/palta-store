import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="my-0 mx-0">
      <menu className="my-0 mx-0">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}
