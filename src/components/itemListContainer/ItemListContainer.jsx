// styles
import './ItemListContainer.css'

// components-elements
import { ItemDetail } from '../itemDetail/ItemDetail'
import { Loading } from '../../elements/Loading'

// hooks
import { useProducts } from '../../hooks/useProducts'

export function ItemListContainer () {

  const {products, loading} = useProducts()

  return(
    <section className='products'>
      <div className='main-products-container'>
        {loading && <Loading />}
        <ul className='products-container'>
          {!loading && products.length > 0 &&
          products.map(item => (
            <li key={item.id}>
              <ItemDetail item={item}/>
            </li>
          ))
          }
        </ul>
      </div>
    </section>
  )
}