// styles
import './ItemListContainer.css'

// components-elements
import { Card } from '../card/Card'
import { Loading } from '../../elements/Loading'

// hooks
import { useGetProducts } from '../../hooks/useProducts'

import { BtnVolver } from '../../elements/buttons/BtnVolver'
import { useParams } from 'react-router-dom'
// import { useState } from 'react'

export function ItemListContainer ({favorites = false}) {
  
  // const [categoryType, setCategoryTipe] = useState({category})
  const {category} = useParams();
  const {products, loading} = useGetProducts({category, favorites})

  // const {favs} = useGetFavs()
  // administrar recibir fav por parametro para poder reutilizar este componente en la ruta favorites
  // recibir parametro que sea fav = true si quiero renderizar solo los favoritos uso el map en el array favs

  // chequear por que no se modifica el estado cuando el category cambia. Chequear usar contexto para eso.

  return(
    <section className='products'>
      <div className='main-products-container'>
        {loading && <Loading />}
        <ul className='products-container'>
          {!loading && products.length > 0 &&
          products.map(item => (
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