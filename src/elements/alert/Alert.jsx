import './Alert.css'

export function Alert ({msg, type}) {
  return (
    <div className={type ? 'alert' : 'alert error'}>
      {msg}
    </div>
  )
}