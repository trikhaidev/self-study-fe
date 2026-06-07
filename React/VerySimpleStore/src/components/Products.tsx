import { useEffect, useRef, useState } from "react";
import loadingImage from "../assets/Loading_icon.gif";
import type Product from "../models/Product";
import Status from "../models/Status";
import useOnlineStatus from "../hooks/UseOnlineStatus";

export const baseUrl = 'https://dummyjson.com/products';

type ProductsProps = {
    onShowProduct: (p: Product) => void;
}
export default function Products({ onShowProduct }: ProductsProps) {
    const [status, setStatus] = useState(Status.loading);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement|null>(null);
    const isOnline = useOnlineStatus();
    const init = useRef(true);

    useEffect(() => {
        let isCancle = false;

        async function SearchAsync(){
            setStatus(Status.loading);
            const res = await fetch(`${baseUrl}/search?q=${search}`);
            if(isCancle){
                return;
            }
            const data = await res.json();
            setProducts(data.products);
            setStatus(Status.success);
        }

        let id:number|null = null;

        if(init.current){
            init.current = false;
            SearchAsync();
        }
        else{
            id = setTimeout(()=> {
                SearchAsync();
            },500);
        }

        return () => {
            if(id){
                clearTimeout(id);
            }
            isCancle = true;
        }
    },[search]);

    async function handleSearch() {
        inputRef.current?.focus();
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
        catch (e) {
            setError(`Error catch: ${e}`);
        }
        setStatus(Status.success);
    }

    return (
        <>
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-24 md:px-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Very Simple Store</h1>
                    <p className="mt-1 text-sm text-slate-600">Search products and click any card to view details.</p>
                </div>
                <div className="top-3 z-20 mb-8 flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.4)] backdrop-blur md:flex-row md:items-center md:p-4 sticky">
                    <input
                        type="text"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                        placeholder="Search products..."
                        value={search}
                        onChange={e => setSearch(e.currentTarget.value)}
                        ref = {inputRef}
                        disabled = {!isOnline}
                    />
                    <button
                        className="h-11 min-w-32 rounded-xl bg-slate-900 px-5 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                        onClick={handleSearch}
                        disabled={status === Status.loading || !isOnline}
                    >
                        Search
                    </button>
                </div>
                {
                    !isOnline &&
                    <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-700">
                        You are currently offline. Please check your internet connection.
                    </div>
                }
                {
                    status === Status.loading &&
                    <div className="flex justify-center rounded-2xl border border-slate-200 bg-white py-10">
                        <img src={loadingImage} alt="Loading" className="w-96 opacity-90" />
                    </div>
                }
                {
                    error &&
                    <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-700">{error}</div>
                }
                {
                    status === Status.success && !error &&
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            products.length > 0 ?
                                products.map(p => (
                                    <div key={p.id}
                                        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-24px_rgba(15,23,42,0.55)]"
                                        onClick={e => {
                                            e.stopPropagation();
                                            onShowProduct(p);
                                        }}
                                    >
                                        <div className="flex flex-1 flex-col p-4">
                                            <p className="mb-2 w-fit rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                                                Product
                                            </p>
                                            <h3 className="min-h-14 text-lg font-bold leading-7 text-slate-900">{p.title}</h3>
                                            <h4 className="mt-1 text-2xl font-black text-slate-800">${p.price.toFixed(2)}</h4>
                                            <p className="mt-2 h-16 overflow-hidden text-sm leading-6 text-slate-600">{p.description}</p>
                                        </div>
                                        {
                                            p.images && p.images.length > 0 &&
                                            <div className="flex h-40 items-center justify-center border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white p-4">
                                                <img src={p.images[0]} alt={p.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" />
                                            </div>
                                        }
                                    </div>
                                ))
                                :
                                <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-10 text-center text-slate-500">
                                    No result
                                </div>
                        }
                    </div>
                }
            </div>
        </>
    )
}
