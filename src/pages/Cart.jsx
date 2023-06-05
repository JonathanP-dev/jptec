import { useContext, useState, useRef } from 'react'
import { CartContext } from '../contexts/Cart'
import { CartItem } from '../components/cartItem/CartItem'
import { BtnBack } from '../elements/buttons/BtnBack'
import { getCartTotalPrice } from '../helpers/helpers'
import { BtnPlus } from '../elements/buttons/BtnPlus'
import { Alert } from '../elements/alert/Alert'

import { db } from '../firebase.config'
import { addDoc, collection } from 'firebase/firestore'


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

  const {cart, setCart} = useContext(CartContext)

  const [cartForm, setCartForm] = useState(
    {
      buyer: {
        name: '',
        lastname: '',
        phone: '',
        email: ''
      },
      items: cart,
      total: getCartTotalPrice(cart)
    }
  )

  const handlePurchease = () => {
    setPurcheaseConfirmation( true )
    cartContainerRef.current.classList.toggle('show-cart')
    formRef.current.classList.toggle('show-center')
    console.log(cartContainerRef.current)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    if(name == 'name') {
      setName(e.target.value)
    }
    if(name == 'lastname') {
      setLastname(e.target.value)
    }
    if(name == 'phone') {
      setPhone(e.target.value)
    }
    if(name == 'email') {
      setEmail(e.target.value)
    }
    if(name == 'email2') {
      setEmail2(e.target.value)
    }
    if(name !== 'email2') {
      setCartForm({
        ...cartForm,
        buyer: {
          ...cartForm.buyer,
          [name]:value
        }
      })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
      if(name == '' || lastname == '' || phone == '' || email == '' || email2 == '') {
        setMsg('Empty field')
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

      const col = collection(db, 'orders')
      const order = await addDoc(col, cartForm)

      cartContainerRef.current.classList.toggle('show-cart')
      formRef.current.classList.toggle('show-center')
      console.log('confirmacion de compra')
      setPurcheaseConfirmation(false)
      setMsg(`Purchease completed (ID: ${order.id})`)
        setType(true)
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 3500);
      setCart([])
      setCartForm(
        {
          buyer: {
            name: '',
            lastname: '',
            phone: '',
            email: ''
          },
          items: cart,
          total: getCartTotalPrice(cart)
        }
      )
  }

  const handleCancel = () => {
    cartContainerRef.current.classList.toggle('show-cart')
    formRef.current.classList.toggle('show-center')
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
          <div className='cancel-container'>
            <span className='cancel' onClick={handleCancel}>X</span>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input required type="text" name='name' id='name' value={name} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="lastname">Lastname:</label>
            <input required type="text" name='lastname' id='lastname' value={lastname} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input required type="text" name='phone' id='phone' value={phone} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input required  type="email" name='email' id='email' value={email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email2">E-Mail confirmation:</label>
            <input required type="email" name='email2' id='email2' value={email2} onChange={handleChange}/>
          </div>
          <BtnPlus onClick={handleSubmit} >COMPRAR</BtnPlus>
        </form>
      </div>
      {alert && <Alert msg={msg} type={type}/>}
    </main>
  )
}