import { createContext, useEffect, useState } from 'react';

export const FavContext = createContext()

export function FavProvider ( { children } ) {
    const [totalFavs, setTotalFavs] = useState(1)
    return (
        <FavContext.Provider value={{
            totalFavs,
            setTotalFavs
        }}>
            {children}
        </FavContext.Provider>
    )
}