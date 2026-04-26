import { useState } from 'react';
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
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#bae6fd_0,_transparent_32%),radial-gradient(circle_at_80%_20%,_#a7f3d0_0,_transparent_26%),linear-gradient(#f8fafc,#eef2ff)]" />
    <div className="relative z-10 fixed left-4 top-4 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
      <div className="flex items-center gap-2.5">
        <input id='reLoadProduct' type="checkbox" className="h-4 w-4 accent-emerald-600" checked= {reLoadProduct} onChange={e => {
          e.stopPropagation();
          setReLoadProduct(e.currentTarget.checked);
        }}/>
        <label htmlFor="reLoadProduct" className="text-xs font-semibold uppercase tracking-wide text-slate-600">Reload Detail API</label>
      </div>
    </div>
      <div className="relative z-0">
        <Products onShowProduct={handleToggleShowProduct}/>
      </div>
      {
        product &&
        <ShowProduct productLoaded={product} onClose={handleToggleShowProduct} reLoad= {reLoadProduct}></ShowProduct>
      }
    </div>
  )
}

export default App
