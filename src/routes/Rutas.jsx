import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer';
import { HotSaleBar } from '../components/hotSaleBar/HotSaleBar';
import { FeaturedProducts } from '../components/featuredProducts/FeaturedProducs';
import { ItemDetail } from '../components/itemDetail/ItemDetail';


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
        <Route path='/laptops' element={<ItemListContainer category='laptop'/>}/>
        <Route path='/monitors' element={<ItemListContainer category='monitor'/>}/>
        <Route path='/accesories' element={<ItemListContainer category='accesories'/>}/>
        <Route path='/computers' element={<ItemListContainer category='computers'/>}/>
        {/* <Route path='/' element={<ItemListContainer/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}