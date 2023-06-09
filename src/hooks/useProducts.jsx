import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'

export function useGetProducts ({category}) {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const col = collection(db, 'products')
        const data = await getDocs(col)
        const result = data.docs.map(doc => doc={id:doc.id, ...doc.data()})

        if(category) {
          const items = result.filter(product => product.category == category)
          setProducts(items)
        } else {
          setProducts(result)
        }
      } catch (error) {
        return setProducts(false)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [category])

  return {products, loading}
}