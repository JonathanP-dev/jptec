import { useState, useEffect } from 'react'
import { API_PRODUCTS_URL } from '../variables'

export function useProducts () {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_PRODUCTS_URL}?offset=0&limit=10`)
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setProducts(data)
    })
    .catch(err => console.log(err))
  }, [])

  return {products, loading}
}