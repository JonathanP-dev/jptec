import { useEffect, useState } from 'react'


export function useGetFavs () {
  
  const [favs, setFavs] = useState([])
  const [loading, setLoading] = useState(true)
  let items = []
  useEffect(() => {

    fetch(`./products.json`)
    .then(res => res.json())
    .then(data => {
      items = data.filter(product => product.favorite == true)
      console.log(items)
      setFavs(items)
      setLoading(false)
    })
    .catch(err => console.log(err))
    
  }, [])

  return {favs, loading}
}