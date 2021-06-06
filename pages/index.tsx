import React, { useState, useEffect } from 'react'
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
      <div>Palta Store </div>
      {
        productList && 
        productList.map( item => (
          <h2 className="hover:underline" key={item.id} >
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
