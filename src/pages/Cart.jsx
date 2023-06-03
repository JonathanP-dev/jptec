import { useContext } from 'react'
import { CartContext } from '../contexts/Cart'
import { CartItem } from '../components/cartItem/CartItem'
import { BtnBack } from '../elements/buttons/BtnBack'
import { getCartTotalPrice } from '../helpers/helpers'
import { BtnPlus } from '../elements/buttons/BtnPlus'


export function Cart () {

  const {cart} = useContext(CartContext)
  const handlePurchease = () => {
    console.log('compraste todo we')
  }
  return (
    <main>
      <ul className="cart-container">
        {cart.length == 0
        ? <>
            <span className='empty-cart-msg'>There are no products in the cart...</span>
            <BtnBack path={'/'} text='Go to Store' />
          </>
        : <>
            <section className='cart-items-titles-big'>
              <span className="cart-title-Product">Product</span>
              <span className="cart-title">Price</span>
              <span className="cart-title">Quantity</span>
              <span className="cart-title">SubTotal</span>
            </section>
            {cart.map((cartItem,index) => {
            return (
              <li className='cart-container-element' key={index} >
                <CartItem cartItem={cartItem} />
              </li>
            )
            })}
            <span className='cart-total'>{`Total: $${getCartTotalPrice(cart)}`}</span>
            <BtnPlus onClick={handlePurchease}>COMPRAR</BtnPlus>
          </>
        }
      </ul>
    </main>
  )
}