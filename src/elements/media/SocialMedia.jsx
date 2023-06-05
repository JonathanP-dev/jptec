

export function SocialMedia ({media}) {

  const imgURL = media == 'whatsapp' ? 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985911/JPTEC/whatsapp_pfr0mu.png' 
  : media == 'facebook' ? 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985910/JPTEC/facebook_kdghgu.png'
  : media == 'twitter' ? 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985911/JPTEC/twitter_jjdfph.png'
  : 'https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985910/JPTEC/instagram_i4tywf.png'


  return(
    <img src={imgURL} alt={`${media} access`} />
  )
}