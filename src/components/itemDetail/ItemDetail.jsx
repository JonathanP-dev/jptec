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
    <main className='main-item-detail'>
      <section className="item-detail-container">
        {!product ? 
          <div className='no-product-found'>
            <span>No product found..</span>
            <BtnBack path={'/'} text='Go Back'/>
          </div>
          :
          product && !loading ?
          <>
            <div className="item-details">
              <div className='item-img-title'>
                <img className='item-detail-img' src={`${product.images[0]}`} alt={product.description} />
                <h1 className='item-detail-title'>{product.title}</h1>
              </div>
              <div className='item-desc-price'>
                <span className='item-detail-desc'>{product.description}</span>
                <h2 className='item-detail-price'>Price: ${product.price}</h2>
                <BtnPlus onClick={() => addToCart({...product, quantity: 1})} >ADD TO CART</BtnPlus>
              </div>
            </div>
            <BtnBack path={'/'} text='Go Back'/>
          </>
          :
          <>
            <Loading />
          </>
          }
      </section>
    </main>
  )
}