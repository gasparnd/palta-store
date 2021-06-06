import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const ProductListComponent = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect( () => {
    window.fetch('/api/avo')
      .then( res => res.json())
      .then( ({ data, length }) => {
        setProductList(data)
      })
      .catch(err => console.error('Fetch error ', err))
  }, [])

  return(
    <div className="md:flex md:justify-center">
      <section className=" md:w-3/4 flex flex-wrap justify-center">
      {
        productList.map( avo => (
          <article key={avo.id} className="
            inine-block m-3 border border-gray-300 rounded-md shadow-md hover:shadow-2xl
          ">
            <Link href={`/product/${avo.id}`}>
              <a>
                <div>
                  <img src={avo.image} />
                </div>
                <div className="border-t border-gray-300 py-4 px-3">
                  <h2 className="font-bold text-xl text-gray-900">{avo.name}</h2>
                  <p className="text-gray-700">${avo.price}</p>
                </div>
              </a>
            </Link>
            
          </article>
        ))
      }
    </section>
    </div>
  )
}

export default ProductListComponent
