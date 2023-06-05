import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer';
import { HotSaleBar } from '../components/hotSaleBar/HotSaleBar';
import { ItemDetail } from '../components/itemDetail/ItemDetail';
import { Footer } from '../components/footer/Footer';
import { Contact } from '../components/contact/Contact';
import { BranchListContainer } from '../components/branchListContainer/BranchListContainer';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Cart } from '../pages/Cart';


export function Rutas () {
  return (
    <BrowserRouter>
      <Navbar/>
      <HotSaleBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path={'/product/:id'} element={<ItemDetail />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/:category' element={<ItemListContainer />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/branchs' element={<BranchListContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}