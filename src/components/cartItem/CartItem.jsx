import { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../contexts/Cart'

export function CartItem ({cartItem}) {

  const {deleteFromCart} = useContext(CartContext)
  const {images, title, description, price, quantity} = cartItem
  
  const handleDelete = () => {
    deleteFromCart(cartItem)
  }
  return (
    <section className="cart-product-container">
      <section className="cart-product">
        <div className="cart-items">
          <section className='cart-items-titles'>
            <span className="cart-title-Product">Product</span>
            <span className="cart-title">Price</span>
            <span className="cart-title">Quantity</span>
            <span className="cart-title">SubTotal</span>
          </section>
        </div>
        <div className="cart-item-data">
          <img className='cart-product-img' src={`${images[0]}`} alt={`${title} ${description}`} />
          <div className="cart-product-info">
            <strong>{title}</strong>
            <span>{description}</span>
          </div>
          <span>${price}</span>
          <span>{quantity}</span>
          <span>${`${price*quantity}`}</span>
        </div>
      </section>
      <div className="delete-container">
        <img onClick={handleDelete} className='delete' src="https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985910/JPTEC/delete_snnyel.png" alt="" />
      </div>
    </section>
  )
}