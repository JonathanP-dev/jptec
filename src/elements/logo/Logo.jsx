import { NavLink } from 'react-router-dom'

export function Logo () {
  return (
    <div className="logo">
      <NavLink to='/'>
        <img className='logo-img' src="https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685986173/JPTEC/jptec_xzq0lv.png" alt="logo de empresa" />
      </NavLink>
    </div>
  )
}