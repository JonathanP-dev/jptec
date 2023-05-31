import { useContext } from 'react'
import { FilterContext } from '../contexts/Filters'


export function useFilters () {
  const { filters, setFilters } = useContext( FilterContext)

  const filterProducts = ( products ) => {
    return products.filter( product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    } )
  }
  return filterProducts
}