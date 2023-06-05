import { useContext } from 'react'

import './Navbar.css'

import { NavbarIcon } from '../../elements/NavbarIcon'
import { Logo } from '../../elements/logo/Logo'

import { NavLink } from 'react-router-dom'
import { FavContext } from '../../contexts/Favorites'


export function Navbar () {
  
  const {totalFavs} = useContext(FavContext)

  const handleShowMenu = () => {
    const menuNav = document.querySelector('.navbar')
    menuNav.classList.toggle('show')

    const line2 = document.querySelector('.menu-btn')
    line2.classList.toggle('collapse')
  }

  const handleNoShowMenu = () => {
    setTimeout(() => {
      const menuNav = document.querySelector('.navbar')
      menuNav.classList.remove('show')
  
      const line2 = document.querySelector('.menu-btn')
      line2.classList.remove('collapse')
    }, 200);
  }
  return (
    <div className="navbar-container">

      <section className="brand-search-icons-container">
        <Logo />
        <div className="navbar-icons-container">
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
          <li onClick={handleNoShowMenu}><NavLink to='/'>Store</NavLink></li>
          <li onClick={handleNoShowMenu}><NavLink to='/laptops'>Laptops</NavLink></li>
          <li onClick={handleNoShowMenu}><NavLink to='/monitors'>Monitors</NavLink></li>
          <li onClick={handleNoShowMenu}><NavLink to='/computers'>Computers</NavLink></li>
          <li onClick={handleNoShowMenu}><NavLink to='/accesories'>Accesories</NavLink></li>
          <li onClick={handleNoShowMenu}><NavLink to='/branchs'>Branch Offices</NavLink></li>
          <li onClick={handleNoShowMenu}><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </section>
    </div>
  )
}