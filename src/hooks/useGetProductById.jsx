import { useState, useEffect } from 'react'

export function useGetProductById (id) {
  
  const [product, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch(`/products.json`)
    .then(res => res.json())
    .then(data => {
      const item = data.find(product => product.id == id)
      setProducts(item)
      setLoading(false)
    })
    .catch(err => console.log('error', err))
    
  }, [])

  return {product, loading}
}