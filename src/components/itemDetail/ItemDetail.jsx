import './ItemDetail.css'

import { BtnBack } from '../../elements/buttons/BtnBack';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../hooks/useGetProductById';
import { Loading } from '../../elements/Loading';
import { BtnPlus } from '../../elements/buttons/BtnPlus';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';

export function ItemDetail () {
  const {addToCart} = useContext(CartContext)

  const {id} = useParams()
  const {product, loading} = useGetProductById(id)
  return (
    <main>
      <section className="item-detail-container">
        {product && !loading ?
          <div className="item-details">
            <div className='item-img-title'>
              <img className='item-detail-img' src={`../${product.images[0]}`} alt={product.description} />
              <h1 className='item-detail-title'>{product.title}</h1>
            </div>
            <div className='item-desc-price'>
              <span className='item-detail-desc'>{product.description}</span>
              <h2 className='item-detail-price'>Precio: ${product.price}</h2>
              <BtnPlus onClick={() => addToCart({...product, quantity: 1})} >ADD TO CART</BtnPlus>
            </div>
          </div>
          :
          <Loading />
        }
      </section>
      <BtnBack path={'/'} text='Go Back'/>
    </main>
  )
}