import { useState, useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase.config';

export function useGetProductById (id) {
  
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
          setProduct(docSnap.data())
        } else {
          setProduct(false)
        }
      } catch (error) {
        console.log('error en firestore', error)
        return setProduct(false)
      } finally {
        setLoading(false)
      }
    }
    getProduct()
  }, [id])
  return {product, loading}
}