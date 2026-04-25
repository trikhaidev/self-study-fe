import { useState } from 'react';
import './App.css'
import Products from './components/Products'
import type Product from './models/Product';
import ShowProduct from './components/ShowProduct';

function App() {
  const [product, setProduct] = useState<Product|null>(null);
  function handleToggleShowProduct(p:Product|null){
    setProduct(p);
  }
  return (
    <>
      <Products onShowProduct={handleToggleShowProduct}/>
      {
        product &&
        <ShowProduct product={product} onClose={handleToggleShowProduct}></ShowProduct>
      }
    </>
  )
}

export default App
