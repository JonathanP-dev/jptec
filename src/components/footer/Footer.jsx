import { SocialMedia } from '../../elements/media/SocialMedia'
import './Footer.css'

export function Footer () {
  

  return (
    <footer className='footer'>
      <div className='info'>
        <span>jptec1885@jptec.com</span>
        <span>Ruta 1 2258</span>
        <span>+598 98 654 115</span>
      </div>
      <div className='social-networks'>
        <SocialMedia media='whatsapp'/>
        <SocialMedia media='facebook'/>
        <SocialMedia media='twitter'/>
        <SocialMedia media='instagram'/>
      </div>
    </footer>
  )
}