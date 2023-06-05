// styles
import './ItemListContainer.css'

// components-elements
import { Card } from '../card/Card'
import { Loading } from '../../elements/Loading'

// hooks
import { useGetProducts } from '../../hooks/useProducts'
import { useFilters } from '../../hooks/useFilters'

import { BtnBack } from '../../elements/buttons/BtnBack'
import { useParams } from 'react-router-dom'
import { Aside } from '../aside/Aside'

export function ItemListContainer () {
  const {category} = useParams();
  const {products, loading} = useGetProducts({category})

  const filterProducts = useFilters()

  const filteredProducts = filterProducts(products)

  return(
    <main className='products'>
      <Aside />
      <div className='main-products-container'>
        {loading && <Loading />}
        <ul className='products-container'>
          {!loading && products.length > 0 &&
          filteredProducts.length == 0 
          ? <span className='filtered-no-products'>No products to show..</span>
          : filteredProducts.map(item => (
            <li key={item.id}>
              <Card item={item}/>
            </li>
          ))
          }
        </ul>
        {(category) && !loading && <BtnBack path={'/'} text='Go Back'/>}
      </div>
    </main>
  )
}