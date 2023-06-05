import './NavbarIcon.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/Cart'
import { NavLink } from 'react-router-dom'
import { FavContext } from '../contexts/Favorites'
import { getCartQuantity } from '../helpers/helpers'

export function NavbarIcon ({type}) {

  const {cart} = useContext(CartContext)
  const cartQuantity = getCartQuantity(cart)
  const {totalFavs} = useContext(FavContext)

  return (
    <div className='navbar-icons'>
      <NavLink to={type === 'favRed' || type === 'fav' ? 'favorites' : 'cart'}>
        <img className='navbar-icons' src={type === 'favRed' ? 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985910/JPTEC/favRed_utualv.png' : 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985911/JPTEC/shoppingCart_m4i5st.png'} alt="logo de favoritos" />
        {type == 'shoppingCart' ?
          <span>{cartQuantity}</span>
        : type == 'favRed' &&
          <span>{totalFavs}</span>
        }
      </NavLink>
    </div>
  )
}