import { useState } from 'react'


export function SingularCount () {

  const [singularQuantity, setSingularQuantity] = useState(1)

  const handlePlus = () => {
    setSingularQuantity(prev => prev + 1)
  }

  const handleLess = () => {
    if(singularQuantity > 1) {
      setSingularQuantity(prev => prev - 1) 
    }
  }
  return (
    <div className='card-count-btns'>
        <button onClick={handlePlus} className='card-count-btn'>+</button>
        
        {singularQuantity > 1 && 
        <>
          <span>{singularQuantity}</span>
          <button onClick={handleLess} className='card-count-btn'>-</button>
        </>}
      </div>
  )
}