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
    return (
        <CartContext.Provider value={{
            cart,
            addToCart
        }}>
            {children}
            {alert && <Alert msg={msg} type={true}/>}
        </CartContext.Provider>
    )
}