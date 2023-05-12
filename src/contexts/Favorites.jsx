import { createContext, useState } from 'react';
import { useGetProducts } from '../hooks/useProducts';

export const FavContext = createContext()

export function FavProvider ( { children } ) {
    // chequear favoritos, retorna el length bien pero por alguna razon en el navar me toma como 0 el valor inicial
    const {products} = useGetProducts({favorites: true})
    // console.log(products)
    const [totalFavs, setTotalFavs] = useState(products.length)
    return (
        <FavContext.Provider value={{
            totalFavs,
            setTotalFavs
        }}>
            {children}
        </FavContext.Provider>
    )
}