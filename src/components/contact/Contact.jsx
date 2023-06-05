import './Contact.css'


export function Contact () {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`correo enviado`)
    const inputs = document.querySelectorAll('.contact-input')
    const textarea = document.querySelector('textarea')
    inputs.forEach(input => {
      input.value = ''
      textarea.value = ''
    });
  }

  return (
    <main>
      <form className='contact-form' onSubmit={handleSubmit}>
        
        <input required className='contact-input' type="text" placeholder='Name'/>
        <input required className='contact-input' type="email" placeholder='E-mail'/>
        <input required className='contact-input' type="subject" placeholder='Subject'/>
        <textarea required name="area" id="area" cols="30" rows="10"></textarea>
        <button className='btn-send' type='submit'>Enviar</button>
      </form>
    </main>
  )
}