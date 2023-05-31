import './Branch.css'

export function Branch ({data}) {
  const {address, department, image, phone} = data
  return (
    <section className='branch'>
      <img className='branch-img' src={`${image}.jpg`} alt={`Pic of the ${department} branch`} />
      <strong className='branch-dpt'>{department}</strong>
      <address className='branch-address'>{address}</address>
      <span className='branch-phone'>phone: {phone}</span>
    </section>
  )
}