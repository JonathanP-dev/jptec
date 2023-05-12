import { useContext } from 'react'

import './Navbar.css'

import { NavbarIcon } from '../../elements/NavbarIcon'
import { Logo } from '../../elements/logo/Logo'
import { Search } from '../../elements/search/Search'

import { NavLink } from 'react-router-dom'
import { FavContext } from '../../contexts/Favorites'

import { useNavigate } from 'react-router-dom'

export function Navbar () {
  
  const {totalFavs} = useContext(FavContext)
  // const handleFav = () => {
  //   setFav(!fav)
  // }

  const navigate = useNavigate();

  const handleShowMenu = () => {
    const menuNav = document.querySelector('.navbar')
    menuNav.classList.toggle('show')

    const line2 = document.querySelector('.menu-btn')
    line2.classList.toggle('collapse')
  }
  return (
    <div className="navbar-container">

      <section className="brand-search-icons-container">
        <Logo />
        <div className="navbar-icons-container">
          <Search />
          {
            totalFavs
            ? <NavbarIcon type={'favRed'} />
            : <NavbarIcon type={'fav'} />
          }
          <NavbarIcon type={'shoppingCart'}/>
          <button onClick={handleShowMenu} className='menu-btn'>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
        </div>
      </section>
      <section className="navbar">
        <ul className='navbar-menu'>
          <li><NavLink onClick={()=> navigate('/')} to='/'>Store</NavLink></li>
          <li><NavLink onClick={()=> navigate('/laptops')} to='/laptops'>Laptops</NavLink></li>
          <li><NavLink onClick={()=> navigate('/monitors')} to='/monitors'>Monitors</NavLink></li>
          <li><NavLink onClick={()=> navigate('/computers')} to='/computers'>Computers</NavLink></li>
          <li><NavLink onClick={()=> navigate('/accesories')} to='/accesories'>Accesories</NavLink></li>
          <li><NavLink onClick={()=> navigate('/branchs')} to='/branchs'>Branch Offices</NavLink></li>
          <li><NavLink onClick={()=> navigate('/contact')} to='/contact'>Contact</NavLink></li>
        </ul>
      </section>
    </div>
  )
}