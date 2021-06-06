import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()

  const [product, setProduct] = useState<TProduct>({})

  useEffect( () => {
    window.fetch(`/api/avo/${query.id}`)
      .then( res => res.json())
      .then( ({ data }) => {
        setProduct(data)
      })
      .catch(err => console.error('Fetch error ', err))
  }, [])

  return (
    <section>
      <h1>Página producto: {product.name}</h1>
    </section>
  )
}

export default ProductPage
