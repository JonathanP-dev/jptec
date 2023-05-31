import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer';
import { HotSaleBar } from '../components/hotSaleBar/HotSaleBar';
import { FeaturedProducts } from '../components/featuredProducts/FeaturedProducs';
import { ItemDetail } from '../components/itemDetail/ItemDetail';
import { Footer } from '../components/footer/Footer';
import { Contact } from '../components/contact/Contact';


export function Rutas () {
  return (
    <BrowserRouter>
      <Navbar/>
      <HotSaleBar/>
      <Routes>
        <Route path='/' element={<main><FeaturedProducts/><ItemListContainer /></main>}/>
        <Route path={'/product/:id'} element={<ItemDetail />}/>
        {/* chequear favorites que retorna todo, usar contexto????? */}
        <Route path='/favorites' element={<ItemListContainer favorites/>}/>
        <Route path='/:category' element={<ItemListContainer />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}