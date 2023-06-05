import { createContext, useState } from 'react';
import { Alert } from '../elements/alert/Alert';

export const CartContext = createContext('')

export function CartProvider ( { children } ) {
    const [cart, setCart] = useState([])
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState('')

    const addToCart = (item) => {
        setMsg('Product added')
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 1500);
        return setCart([...cart, item])
    }

    const deleteFromCart = (item) => {
        setMsg('Product Deleted')
        setAlert(true)
        const newCart = cart.filter(product => product.id !== item.id)
        setTimeout(() => {
            setAlert(false)
        }, 1500);
        return setCart([...newCart])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart, 
            setCart,
            deleteFromCart
        }}>
            {children}
            {alert && <Alert msg={msg} type={true}/>}
        </CartContext.Provider>
    )
}