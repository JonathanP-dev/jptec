

export function Search () {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleShowSearch = () => {
    const inputSearch = document.getElementById('search')
    inputSearch.classList.toggle('show')
    console.log(inputSearch)
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <button type='Submit' onClick={handleShowSearch} className='search-btn'>
          <img className='search-img' src='lupa.png' alt="logo para buscar" />
        </button>
        <input id='search' className='search-input' type="text" placeholder='Busca tu producto aqui...' />              
      </form>
    </div>
  )
}