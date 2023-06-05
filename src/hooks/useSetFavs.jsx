// import { useEffect, useState } from 'react'


// export const useSetFavs = (item) => {
  
//   const [favs, setFavs] = useState([])
//   const [firstTime, setFirstTime] = useState(true)

//   useEffect(() => {
//     try {
//       const storageFavs = localStorage.getItem( 'favorites' )
//       const parsedFavs = JSON.parse( storageFavs )
//       setFavs({ ...parsedFavs, item })
//       localStorage.setItem( 'favorites', JSON.stringify( favs ) )
//     } catch ( error ) {
//       localStorage.setItem( 'favorites', JSON.stringify( favs ) )
//       setFirstTime(false)
//     }

//   }, [firstTime])

//   return true
// }