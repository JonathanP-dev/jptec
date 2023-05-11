import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import './ItemDetail.css'

export function ItemDetail ({item}) {
  const {setTotalPurchased} = useContext(CartContext)

  const [singularQuantity, setSingularQuantity] = useState(0)
  const {title, price, images} = item

  const handlePlus = () => {
    setSingularQuantity(prev => prev + 1)
    setTotalPurchased(prev => prev + 1)
  }
  const handleLess = () => {
    if(singularQuantity > 0) {
      setSingularQuantity(prev => prev - 1)
      setTotalPurchased(prev => prev - 1)
    }
  }
  return (
    <div className='card-container'>
      <img className='card-img' src={images[0]} alt={`item ${title}`} />
      <strong className='card-title'>{title}</strong>
      <strong className='card-price'>${price}</strong>
      <div className='card-count-btns'>
        <button onClick={handlePlus} className='card-count-btn'>+</button>
        
        {singularQuantity > 0 && 
        <>
          <span>{singularQuantity}</span>
          <button onClick={handleLess} className='card-count-btn'>-</button>
        </>}
      </div>
      <button className='card-btn'>ver mas</button>
    </div>
  )
}