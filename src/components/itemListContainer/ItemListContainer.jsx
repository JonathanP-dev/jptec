// styles
import './ItemListContainer.css'

// components-elements
import { Card } from '../card/Card'
import { Loading } from '../../elements/Loading'

// hooks
import { useGetProducts } from '../../hooks/useProducts'
import { useFilters } from '../../hooks/useFilters'

import { BtnVolver } from '../../elements/buttons/BtnVolver'
import { useParams } from 'react-router-dom'
import { Aside } from '../aside/Aside'

export function ItemListContainer ({favorites = false}) {
  
  const {category} = useParams();
  const {products, loading} = useGetProducts({category, favorites})

  const filterProducts = useFilters()

  const filteredProducts = filterProducts(products)

  return(
    <section className='products'>
      <Aside />
      <div className='main-products-container'>
        {loading && <Loading />}
        <ul className='products-container'>
          {!loading && products.length > 0 &&
          filteredProducts.map(item => (
            <li key={item.id}>
              <Card item={item}/>
            </li>
          ))
          }
        </ul>
        {(category || favorites) && !loading && <BtnVolver path={'/'}/>}
      </div>
    </section>
  )
}