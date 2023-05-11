import { createContext, useState } from 'react';

export const CartContext = createContext()

export function CartProvider ( { children } ) {
    const [totalPurchased, setTotalPurchased] = useState(0)
    return (
        <CartContext.Provider value={{
            totalPurchased,
            setTotalPurchased
        }}>
            {children}
        </CartContext.Provider>
    )
}