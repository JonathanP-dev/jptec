import { BtnBack } from '../elements/buttons/BtnBack';

export function Favorites () {
  return (
    <main style={{minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <span>work in progres..</span>
      <BtnBack path={'/'} text='Go Back'/>
    </main>
  )
}