import './NavbarIcon.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/Cart'
import { NavLink } from 'react-router-dom'
import { FavContext } from '../contexts/Favorites'

export function NavbarIcon ({type}) {

  const {totalPurchased} = useContext(CartContext)
  const {totalFavs} = useContext(FavContext)

  return (
    <div className='navbar-icons'>
      <NavLink to={type === 'favRed' || type === 'fav' ? 'favorites' : 'cart'}>
        <img className='navbar-icons' src={`${type}.png`} alt="logo de favoritos" />
        {type == 'shoppingCart' ?
          <span>{totalPurchased}</span>
        : type == 'favRed' &&
          <span>{totalFavs}</span>
        }
      </NavLink>
    </div>
  )
}