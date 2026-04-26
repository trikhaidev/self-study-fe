import { useState } from 'react';
import './App.css'
import Products from './components/Products'
import type Product from './models/Product';
import ShowProduct from './components/ShowProduct';

function App() {
  const [product, setProduct] = useState<Product|null>(null);
  const [reLoadProduct, setReLoadProduct] = useState(false);
  function handleToggleShowProduct(p:Product|null){
    setProduct(p);
  }
  return (
    <>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0, 
    }}>
      <input id='reLoadProduct' type="checkbox" checked= {reLoadProduct} onChange={e => {
        e.stopPropagation();
        setReLoadProduct(e.currentTarget.checked);
      }}/>
      <label htmlFor="reLoadProduct">Reload Product</label>
    </div>
      <Products onShowProduct={handleToggleShowProduct}/>
      {
        product &&
        <ShowProduct productLoaded={product} onClose={handleToggleShowProduct} reLoad= {reLoadProduct}></ShowProduct>
      }
    </>
  )
}

export default App
