import { FeaturedProducts } from '../components/featuredProducts/FeaturedProducs';
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer';


export function Home () {

  return (
    <main>
      <FeaturedProducts/><ItemListContainer />
    </main>
  )
}