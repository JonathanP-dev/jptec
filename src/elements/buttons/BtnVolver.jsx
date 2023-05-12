import { useNavigate } from 'react-router-dom'

export function BtnVolver ({path}) {
  const navigate = useNavigate()
  return (
    <div className="btn-volver-container">
      <button className='btn-volver' onClick={() => navigate(path)} >Volver</button>
    </div>
  )
}