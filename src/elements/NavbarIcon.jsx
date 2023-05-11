import './NavbarIcon.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/Cart'

export function NavbarIcon ({type}) {

  const {totalPurchased} = useContext(CartContext)
  return (
    <div className='navbar-icons'>
      <img className='navbar-icons' src={`${type}.png`} alt="logo de favoritos" />
      {type !== 'favRed' && 
        <span>{totalPurchased}</span>
      }
    </div>
  )
}