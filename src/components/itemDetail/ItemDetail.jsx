import './ItemDetail.css'

import { BtnVolver } from '../../elements/buttons/BtnVolver';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../hooks/useGetProductById';
import { Loading } from '../../elements/Loading';

export function ItemDetail () {

  const {id} = useParams()
  const {product, loading} = useGetProductById(id)
  return (
    <>
      <section className="item-detail-container">
        {product && !loading ?
          <div className="item-details">
            <div className='item-img-title'>
              <img className='item-detail-img' src={`../${product.images[0]}.jpg`} alt={product.description} />
              <h1 className='item-detail-title'>{product.title}</h1>
            </div>
            <div className='item-desc-price'>
              <span className='item-detail-desc'>{product.description}</span>
              <h2 className='item-detail-price'>Precio: ${product.price}</h2>
              <button className='item-detail-btn-add'>Add to Cart</button>
            </div>
          </div>
          :
          <Loading />
        }
      </section>
      <BtnVolver path={'/'}/>
    </>
  )
}