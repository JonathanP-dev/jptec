import { useState, useEffect } from 'react'
import { PRODUCTS } from '../variables';

export function useGetProductById (id) {
  
  const [product, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // fetch(`/products.json`)
    // .then(res => res.json())
    // .then(data => {
    //   const item = data.find(product => product.id == id)
    //   setProducts(item)
    //   setLoading(false)
    // })
    // .catch(err => console.log('error', err))
    const products = PRODUCTS;
      setTimeout(() => {
          const items = products.find(product => product.id == id)
          setProducts(items)
          setLoading(false)
      }, 2000);
  }, [])

  return {product, loading}
}