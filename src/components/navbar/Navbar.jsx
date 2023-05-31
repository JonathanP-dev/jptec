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
            <NavbarIcon type={totalFavs ? 'favRed' : 'fav'} />
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
          <li><NavLink to='/'>Store</NavLink></li>
          <li><NavLink to='/laptops'>Laptops</NavLink></li>
          <li><NavLink to='/monitors'>Monitors</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
          <li><NavLink to='/accesories'>Accesories</NavLink></li>
          <li><NavLink to='/branchs'>Branch Offices</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </section>
    </div>
  )
}