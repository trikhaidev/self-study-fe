import { useState } from "react";
import "./Product.css"
import loadingImage from "../assets/Loading_icon.gif";
import type Product from "../models/Product";

const baseUrl = 'https://dummyjson.com/products';
class Status {
    static loading = 'loading';
    static success = 'success';
}
type ProductsProps = {
    onShowProduct: (p:Product) => void;
}
export default function Products({ onShowProduct }: ProductsProps) {
    const [status, setStatus] = useState(Status.success);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    async function handleSearch() {
        setStatus(Status.loading);
        setError(null);
        try {
            const res = await fetch(`${baseUrl}/search?q=${search}`);
            if (res.ok) {
                const data = await res.json();
                setProducts(data.products);
                setStatus(Status.success);
            }
            else {
                setError(`Error: ${res.status} ${res.statusText}`);
            }
        }
        catch(e){
            setError(`Error catch: ${e}`);
        }
        setStatus(Status.success);
    }
    return (
        <div id="proucts">
            <div id="search">
                <input type="text" value={search} onChange={e => setSearch(e.currentTarget.value)} />
                <button onClick={handleSearch} disabled={status === Status.loading}>Search</button>
            </div>
            {
                status === Status.loading &&
                <img src= {loadingImage} alt="" />
            }
            {
                error &&
                <div id="error">{error}</div>
            }
            {
                status === Status.success && !error &&
                <div id="product-content">
                    {
                        products.length > 0 ?
                        products.map(p => (
                            <div key={p.id} 
                                onClick={e => {
                                    e.stopPropagation();
                                    onShowProduct(p);
                                }}
                            >
                                <h3>{p.title}</h3>
                                <h4>${p.price.toFixed(2)}</h4>
                                <p>{p.description}</p>
                                {
                                    p.images && p.images.length > 0 &&
                                    <img src={p.images[0]} alt="" />
                                }
                            </div>
                        ))
                        : 
                        <div id="no-result">No result</div>
                    }
                </div>
            }
        </div>
    )
}