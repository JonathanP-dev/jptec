

export const getCartQuantity = ( cart ) => {
  if ( cart.length == 0 ) return 0
  return cart.reduce( ( prev, curr ) => prev + curr.quantity, 0 )
}

export const getCartTotalPrice = ( cart ) => {
  if ( cart.length == 0 ) return 0
  return cart.reduce( ( prev, curr ) => prev + curr.quantity * curr.price, 0 )
}

// export const setStorageFavs = ( { item, singularFav } ) => {

//   try {
//     const storageFavs = localStorage.getItem( 'favorites' )
//     const parsedFavs = JSON.parse( storageFavs )

//     if ( !singularFav ) {
//       console.log( 'entro al if no singular fav' )
//       const favs = parsedFavs.filter( product => product.id !== item.id )
//       localStorage.setItem( 'favorites', JSON.stringify( favs ) )
//     } else {
//       const favs = [...parsedFavs, item]
//       localStorage.setItem( 'favorites', JSON.stringify( favs ) )
//     }
//   } catch ( error ) {
//     // console.log( 'entro al catch' )
//     // const favs = []
//     // localStorage.setItem( 'favorites', JSON.stringify( favs ) )
//   }
// }

// export const getStorageSingularFavs = ( { item } ) => {
//   try {
//     const storageFavs = localStorage.getItem( 'favorites' )
//     const parsedFavs = JSON.parse( storageFavs )
//     const found = parsedFavs.some( product => product.id == item.id )
//     if ( found ) return true
//     return false
//   } catch ( error ) {
//     return false
//   }
// }