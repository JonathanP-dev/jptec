import { useNavigate } from 'react-router-dom'

export function BtnVolver ({path}) {
  const navigate = useNavigate()
  return (
    <div className="btn-back-container">
      <button className='btn-back' onClick={() => navigate(path)} >Go Back</button>
    </div>
  )
}