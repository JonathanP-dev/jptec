import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import './Card.css'
import { FavContext } from '../../contexts/Favorites'

import { useNavigate } from 'react-router-dom'
import { BtnPlus } from '../../elements/buttons/BtnPlus'

export function Card ({setCart, item}) {
  const {setTotalFavs} = useContext(FavContext)
  const {addToCart} = useContext(CartContext)

  const navigate = useNavigate()
  const [singularQuantity, setSingularQuantity] = useState(1)
  const [singularFav, setSingularFav] = useState(item.favorite)
  const {title, price, images} = item

  const handlePlus = () => {
    setSingularQuantity(prev => prev + 1)
  }

  const handleLess = () => {
    if(singularQuantity > 1) {
      setSingularQuantity(prev => prev - 1) 
    }
  }

  const handleFav = () => {
    setSingularFav(!singularFav)
    if(singularFav) {
      setTotalFavs(prev => prev - 1)
    } else {
      setTotalFavs(prev => prev + 1)
    }
  }

  return (
    <div className='card-container'>
      <img onClick={handleFav} className='card-fav' src={singularFav ? 'favRed.png' : './fav.png'} alt="" />
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