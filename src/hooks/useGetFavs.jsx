// import { useEffect, useState } from 'react'


// export function useGetFavs () {
  
//   const [favs, setFavs] = useState([])
//   const [firstTime, setFirstTime] = useState(true)
//   useEffect(() => {

//     try {
//       const storageFavs = localStorage.getItem('favorites')
//       const parsedFavs = JSON.parse(storageFavs)
//       setFavs(parsedFavs) 
//     } catch (error) {
//       localStorage.setItem('favorites', JSON.stringify(favs))
//       setFirstTime(false)
//     }
    
//   }, [firstTime])

//   return {favs}
// }