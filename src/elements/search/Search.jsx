

export function Search () {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleShowSearch = () => {
    const inputSearch = document.getElementById('search')
    inputSearch.classList.toggle('show')
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <button type='Submit' onClick={handleShowSearch} className='search-btn'>
          <img className='search-img' src='https://res.cloudinary.com/dtx4bsvnh/image/upload/v1685985910/JPTEC/lupa_wsesi2.png' alt="logo para buscar" />
        </button>
        <input id='search' className='search-input' type="text" placeholder='Busca tu producto aqui...' />              
      </form>
    </div>
  )
}