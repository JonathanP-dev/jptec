

export const getCartQuantity = ( cart ) => {
  if ( cart.length == 0 ) return 0
  return cart.reduce( ( prev, curr ) => prev + curr.quantity, 0 )
}

export const getCartTotalPrice = ( cart ) => {
  if ( cart.length == 0 ) return 0
  return cart.reduce( ( prev, curr ) => prev + curr.quantity * curr.price, 0 )
}

export const checkExistInCart = ( cart, item ) => {
  return cart.some( cartItem => cartItem.id == item.id )
}

export const plusQuantity = ( cart, item ) => {
  const newCart = cart.map( cartItem => {
    if ( cartItem.id == item.id ) {
      cartItem = { ...cartItem, quantity: cartItem.quantity + item.quantity }
    }
    return cartItem
  } )
  return newCart
}