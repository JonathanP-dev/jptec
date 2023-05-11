import './App.css'
import { FeaturedProducts } from './components/featuredProducts/FeaturedProducs'
import { HotSaleBar } from './components/hotSaleBar/HotSaleBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'

import { Navbar } from './components/navbar/Navbar'

import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <HotSaleBar />
      <main>
        <FeaturedProducts />
        <ItemListContainer/>
      </main>
    </>
  )
}

export default App
