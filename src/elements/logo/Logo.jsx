import { NavLink } from 'react-router-dom'

export function Logo () {
  return (
    <div className="logo">
      <NavLink to='/'>
        <img className='logo-img' src="jptec.png" alt="logo de empresa" />
      </NavLink>
    </div>
  )
}