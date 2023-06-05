import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import './Card.css'

import { useNavigate } from 'react-router-dom'
import { BtnPlus } from '../../elements/buttons/BtnPlus'
import { useCount } from '../../hooks/useCount'

export function Card ({item}) {
  const {addToCart} = useContext(CartContext)


  const navigate = useNavigate()
  const [singularFav, setSingularFav] = useState(false)
  const {title, price, images} = item

  const {singularQuantity, handleLess, handlePlus} = useCount()

  const handleFav = () => {
    setSingularFav(!singularFav)
  }

  return (
    <div className='card-container'>
      <img 
        onClick={handleFav}
        className='card-fav' 
        src={singularFav 
          ? 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985910/JPTEC/favRed_utualv.png' 
          : 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985910/JPTEC/fav_m6sz0q.png'}
        alt="" />
      <img className='card-img' src={`${images[0]}`} alt={`item ${title}`} />
      <strong className='card-title'>{title}</strong>
      <strong className='card-price'>${price}</strong>
      <div className='card-count-btns'>
        <button onClick={handlePlus} className='card-count-btn'>+</button>
        {singularQuantity > 1 && 
        <>
          <span>{singularQuantity}</span>
          <button onClick={handleLess} className='card-count-btn'>-</button>
        </>}
      </div>
      <BtnPlus onClick={() => addToCart({...item, quantity: singularQuantity})}>ADD TO CART</BtnPlus>
      <button onClick={() => navigate(`/product/${item.id}`)} className='card-btn'>ver mas</button>
    </div>
  )
}