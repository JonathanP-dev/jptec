import { useState } from 'react';


export function useCount () {
  const [singularQuantity, setSingularQuantity] = useState(1)

  const handlePlus = () => {
    setSingularQuantity(prev => prev + 1)
  }

  const handleLess = () => {
    if(singularQuantity > 1) {
      setSingularQuantity(prev => prev - 1) 
    }
  }

  return {singularQuantity, handleLess, handlePlus}
}