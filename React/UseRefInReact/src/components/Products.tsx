import { useRef, useState } from "react";

const BASE_URL = "https://dummyjson.com/products";
export default function Products(){
    const [search,setSearch] = useState('');
    const [products, setProducts] = useState<unknown[]|undefined|null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null|string>(null);
    const delay = useRef<null|number>(null);

    function handleSearch(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        if(delay.current){
            clearTimeout(delay.current);
        }
        const newSeach = e.currentTarget.value;
        setSearch(newSeach);

        delay.current = setTimeout(() =>{
            setIsLoading(true);
            fetch(`${BASE_URL}/search?q=${newSeach}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(e => {
                setError(e);
            })
            .finally(() => {
                setIsLoading(false)
            });
        },1000);
    }

    return (
        <>
            <input type="text" value={search} onChange={handleSearch}/>
            {
                error && <p>{error}</p>
            }
            {
                isLoading ? 
                <p>loading . . .</p>
                :
                products?.map(x => {
                    return <p key={x.id}>{x.title}</p>
                })
            }
        </>
    );
}