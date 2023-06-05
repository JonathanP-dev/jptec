import { useContext, useState, useRef } from 'react'
import { CartContext } from '../contexts/Cart'
import { CartItem } from '../components/cartItem/CartItem'
import { BtnBack } from '../elements/buttons/BtnBack'
import { getCartTotalPrice } from '../helpers/helpers'
import { BtnPlus } from '../elements/buttons/BtnPlus'
import { Alert } from '../elements/alert/Alert'


export function Cart () {

  const [purcheaseConfirmation, setPurcheaseConfirmation] = useState(false)
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [email2, setEmail2] = useState('')

  const [alert, setAlert] = useState(false)
  const [msg, setMsg] = useState('')
  const [type, setType] = useState(true)

  const cartContainerRef = useRef()
  const formRef = useRef()

  const {cart} = useContext(CartContext)
  const handlePurchease = () => {
    setPurcheaseConfirmation( true )
    cartContainerRef.current.classList.toggle('show-cart')
    formRef.current.classList.toggle('show-center')
    console.log(cartContainerRef.current)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if(purcheaseConfirmation) {
      if(name == '' || lastname == '' || phone == '' || email == '' || email2 == '') {
        setMsg('Error reading information')
        setType(false)
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 1500);
        return
      }
      if(email !== email2) {
        setMsg('E-mail confimation Failed')
        setType(false)
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 1500);
        return
      }
      cartContainerRef.current.classList.toggle('show-cart')
      formRef.current.classList.toggle('show-center')
      console.log('confirmacion de compra')
      setPurcheaseConfirmation(false)
      setMsg('Purchease completed')
        setType(true)
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 1500);
    // }
  }
  return (
    <main>
      <ul ref={cartContainerRef} className="cart-container">
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
      <div ref={formRef} className="purchease-container">
        <form className='purchease-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input required type="text" id='name' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="lastname">Lastname:</label>
            <input required type="text" id='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input required type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input required  type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email2">E-Mail confirmation:</label>
            <input required type="email" id='email2' value={email2} onChange={(e) => setEmail2(e.target.value)}/>
          </div>
          <BtnPlus onClick={handleSubmit} >COMPRAR</BtnPlus>
        </form>
      </div>
      {alert && <Alert msg={msg} type={type}/>}
    </main>
  )
}