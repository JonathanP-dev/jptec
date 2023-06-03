

export function BtnPlus ({onClick, children}) {
  return (
    <button onClick={onClick} className='item-detail-btn-add'>{children}</button>
  )
}