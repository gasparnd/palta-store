import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect( () => {
    window.fetch('/api/avo')
      .then( res => res.json())
      .then( ({ data, length }) => {
        setProductList(data)
      })
      .catch(err => console.error('Fetch error ', err))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Palta Store </div>
      {
        productList && 
        productList.map( item => (
          <h2 key={item.id} >
            <Link href={`/product/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </h2>
        ))
      }
    </div>
  )
}

export default HomePage
