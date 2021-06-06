import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return(
    <footer className="
      border-t border-gray-300 p-8 mt-16 w-full flex sm:flex-row flex-col items-start md:items-center justify-around 
    ">
      <div className="my-4">
        <p className="font-bold text-lg mb-4">Nosotros</p>
        <ul>
          <li>
            <Link href="/test">
              <a className="text-blue-600">Conoce más</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <p className="font-bold text-lg mb-4">Servicios</p>
        <ul>
          <li>
            <Link href="/">
              <a className="text-blue-600">Todos los productos</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <p className="font-bold text-lg mb-4">Como estoy hecho</p>
        <ul>
          <li>
            <a className="text-blue-600 flex items-center" href="http://github.com/gasparnd/palta-store" target="_blank" rel="noopener noreferrer">
              <FaGithub size="20" color="black" className="mr-3" /> Repositorio de GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
