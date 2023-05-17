import { useState, useEffect } from 'react'

// test imports
// import { API_PRODUCTS_URL } from '../variables'
import { PRODUCTS } from '../variables'

export function useGetProducts ({category, favorites}) {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetching a API aleatoria para testeo, lo dejo para luego cambiar la URL cuando tenga mi API si es que usamos.
    // fetch(`/products.json`)
    // .then(res => res.json())
    // .then(data => {
    //   setTimeout(() => {
    //     if(category){
    //       const items = data.filter(product => product.category == category)
    //       setProducts(items)
    //       setLoading(false)
    //     } else if (favorites) {
    //       const items = data.filter(product => product.favorite == true)
    //       setProducts(items)
    //       setLoading(false)
    //     }
    //     else {
    //       setProducts(data)
    //       setLoading(false)
    //     }
    //   }, 2000);
    // })
    // .catch(err => console.log(err))
    const products = PRODUCTS;
      setTimeout(() => {
        if(category){
          const items = products.filter(product => product.category == category)
          setProducts(items)
          setLoading(false)
        } else if (favorites) {
          const items = products.filter(product => product.favorite == true)
          setProducts(items)
          setLoading(false)
        }
        else {
          setProducts(products)
          setLoading(false)
        }
      }, 1000);
    
  }, [category])

  return {products, loading}
}

export function useGetFavorites () {
  
  const [favs, setFavs] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {

    fetch(`./products.json`)
    .then(res => res.json())
    .then(data => {
      const items = data.filter(product => product.favorite == true)
      setFavs(items)
      setLoading(false)
    })
    .catch(err => console.log(err))
    
  }, [])

  return {favs, loading}
}
