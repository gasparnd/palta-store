import React from 'react'
import { useRouter } from 'next/router'

import Navbar from '../../components/Navbar/Navbar'

const ProductItem = () => {
  const { query: {
    productId
  } } = useRouter()

  return (
    <div>
      <Navbar />
      <h2>Product page: { productId }</h2>
    </div>
  )
}

export default ProductItem
