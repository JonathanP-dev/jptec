import './HotSaleBar.css'

export function HotSaleBar () {

  const hotSaleStarts = 'Jueves'
  const hotSaleEnds = 'Domingo'
  const descuento = 20
  return (
    <div className='hot-sale'>
      <span className='vibrate hot-sale-date'><span className='hot-sale-text'>HOT SALE! </span>{`De ${hotSaleStarts} a ${hotSaleEnds} ${descuento}% de descuento`}</span>
    </div>
  )
}