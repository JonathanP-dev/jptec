import { useNavigate } from 'react-router-dom'

export function BtnBack ({path, text}) {
  const navigate = useNavigate()
  return (
    <div className="btn-back-container">
      <button className='btn-back' onClick={() => navigate(path)} >{text}</button>
    </div>
  )
}