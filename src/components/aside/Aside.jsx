import { useContext, useId } from 'react'
import { FilterContext } from '../../contexts/Filters'

import './Aside.css'

export function Aside () {

  const {filters, setFilters} = useContext(FilterContext)

  const PRICE_ID = useId()
  const CATEGORY_ID = useId()

  const handleChangePrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return(
    <aside>
      <div className="price">
        <label htmlFor={PRICE_ID}>Min price</label>
        <div>
          <input className='price-input' type="range" name="price" id={PRICE_ID} min={0} max={100000} step={1000} value={filters.minPrice} onChange={handleChangePrice}/>
          <span>{filters.minPrice}</span>
        </div>
      </div>
      <div className='category'>
        <label htmlFor={CATEGORY_ID}>Category</label>
        <select className='select-category' id={CATEGORY_ID} defaultValue={filters.category} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="monitors">Monitors</option>
          <option value="computers">Computers</option>
          <option value="accesories">Accesories</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </aside>
  )
}