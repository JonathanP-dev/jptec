

export const getCartQuantity = ( cart ) => {
  if ( cart.length == 0 ) return 0
  return cart.reduce( ( prev, curr ) => prev + curr.quantity, 0 )
}

export const getCartTotalPrice = ( cart ) => {
  if ( cart.length == 0 ) return 0
  return cart.reduce( ( prev, curr ) => prev + curr.quantity * curr.price, 0 )
}