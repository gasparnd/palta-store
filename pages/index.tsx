import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import ProductListComponent from '@components/ProductList/ProductList'

const HomePage = () => {

  return (
    <>
      <section className="mt-16 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <span className=" text-3xl">Palta</span>
          <Image src="/avocado-icon.png" width="70" height="70" />
          <span className=" text-3xl">Store</span>
        </div>
        <a className="mt-8 mb-4 text-blue-500" href="https://www.iprofesional.com/health-tech/324077-por-que-deberias-comer-palta-beneficios-de-este-alimento" target="_blank" rel="noopener noreferrer">¿Deberia comer una Palta hoy?</a>
      </section>
      <ProductListComponent />
    </>
  )
}

export default HomePage
