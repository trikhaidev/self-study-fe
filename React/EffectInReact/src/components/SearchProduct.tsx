import { useEffect, useRef, useState } from "react";

const BASE_URL = 'https://dummyjson.com/products/search?q=';

interface Product{
    id:number;
    title:string
}

export default function SearchProduct(){
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [status, setStatus] = useState('done');
    const refInit = useRef(true);
    useEffect(() => {
        console.log('Effect load product');
        let cancle = false;
        async function loadProduct(){
            const res = await fetch(`${BASE_URL}${search}`);
            if(cancle){
                return;
            }
            const data = await res.json();
            setProducts(data.products);
            setStatus('done');
        }
        let id:number|null;
        if(refInit.current){
            loadProduct();
            refInit.current = false;
        }
        else{
            setStatus('loading');
            id = setTimeout(() => {
                loadProduct();
            }, 1000);
        }

        return () => {
            if(id){
                clearTimeout(id);
            }
            cancle = true;
        }
    },[search]);

    useEffect(() => {
        console.log('Second Effect');
    });

    function handleSearch(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setSearch(e.currentTarget.value);
    }

    return (
        <>
            <div>
                <input type="text" value={search} onChange={handleSearch}/>
            </div>
            {
                status === 'done' ?
                <ul>
                    {products.map(x => <li key={x.id}>{x.title}</li>)}
                </ul>
                :
                <p>Loading ...</p>
            }
        </>
    );
}