import React, { useEffect, useRef, useState } from "react";

type ProductPageProps = {
    children:React.ReactNode
}
export default function ProductPage({children}:ProductPageProps) {
    const [text, setText] = useState('');
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<Product[]>([]);
    const initRef = useRef(true);
    useEffect(() => {
        let cancel = false;
        async function loadProducts(){
            const res = await fetch(`https://dummyjson.com/products/search?q=${text}`)
            if(cancel){
                return;
            }

            const data = await res.json();
            const productList = data.products as Product[];
            setProducts(productList.slice((page - 1) * 5, page * 5));
        }
        let timeoutId = 0;
        if(initRef.current){
            initRef.current = false;
            loadProducts();
        }
        else{
            timeoutId = setTimeout(() => {
                loadProducts();
            },1000);
        }

        return () => {
            cancel = true;
            clearTimeout(timeoutId);
        }
    },[text,page]);

    return (
        <div style={
            {
                border:'2px solid black',
                padding: 10,
                marginTop: 15
            }
        }>
            <h3>{children}</h3>
            <div>
                <input type="text" value={text} onChange={e => setText(e.currentTarget.value)} />
            </div>
            <div>
                <button onClick={() => setPage(page == 1 ? 1 : page - 1)}>Prev</button>
                {' '}
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
            <ol>
                {
                    products.map(p => <li key={p.id}>{p.title} - {p.price}</li>)
                }
            </ol>
        </div>
    );
}

interface Product {
    id: number;
    title: string;
    price: number;
}