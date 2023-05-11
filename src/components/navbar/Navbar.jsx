import { useState } from 'react'

import './Navbar.css'

import { NavbarIcon } from '../../elements/NavbarIcon'

import { NavLink } from 'react-router-dom'

export function Navbar () {
  
  const [fav, setFav] = useState(3)
  const [cart, setCart] = useState(3)
  // const handleFav = () => {
  //   setFav(!fav)
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleShowSearch = () => {
    const inputSearch = document.getElementById('search')
    inputSearch.classList.toggle('show')
    console.log(inputSearch)
  }

  const handleShowMenu = () => {
    // const menuBtn = document.querySelector('.menu-btn')
    const menuNav = document.querySelector('.navbar')
    menuNav.classList.toggle('show')

    const line2 = document.querySelector('.menu-btn')
    line2.classList.toggle('collapse')
    console.log(menuNav)
    console.log(line2)
  }
  return (
    <div className="navbar-container">

      <section className="brand-search-icons-container">
        <div className="logo">
          <img className='logo-img' src="jptec.png" alt="logo de empresa" />
        </div>
        <div className="navbar-icons-container">
          <div className="search">
            <form onSubmit={handleSubmit} className="search-form">
              <button onClick={handleShowSearch} className='search-btn'>
                <img className='search-img' src='lupa.png' alt="logo para buscar" />
              </button>
              <input id='search' className='search-input' type="text" placeholder='Busca tu producto aqui...' />              
            </form>
          </div>
          {
            fav
            ? <NavbarIcon type={'favRed'} />
            : <img className='navbar-icons' src="fav.png" alt="logo de favoritos" />
          }
          {
            cart
            ? <NavbarIcon type={'shoppingCart'}/>
            : <img className='navbar-icons' src="shoppingCart.png" alt="logo de favoritos" />
          }
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