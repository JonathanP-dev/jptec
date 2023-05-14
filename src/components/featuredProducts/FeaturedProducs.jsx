// import { useEffect, useState } from 'react'
import './FeaturedProducts.css'

export function FeaturedProducts () {

  // para implementar banner ???
  // const promotionImages = [
  //   {
  //     title: 'Promotion 1',
  //     url: "https://t4.ftcdn.net/jpg/02/62/03/53/360_F_262035364_gGi8uJsPl9uljis8C6oxI0w6AM7MKDLq.jpg"
  //   },
  //   {
  //     title: 'Promotion 2',
  //     url: "https://static.fibre2fashion.com//articleresources/images/60/5921/promotional-analysis.jpg"
  //   },
  //   {
  //     title: 'Promotion 3',
  //     url: "https://www.gefu.com/media/image/4e/c0/1e/Promotion-1000x562.jpg"
  //   }
  // ]

  // SOLUCIONAR CARROUSEL
  return (
    <section className='featured-container'>
      <div className="slider">
        <img src="https://t4.ftcdn.net/jpg/02/62/03/53/360_F_262035364_gGi8uJsPl9uljis8C6oxI0w6AM7MKDLq.jpg" alt="promotion one" />
        {/* {promotionImages.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} />
        ))} */}
      </div>
    </section>
  )
}