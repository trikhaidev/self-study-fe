import { useEffect, useState, type JSX } from "react";
import type Product from "../models/Product";
import { baseUrl } from "./Products";
import Status from "../models/Status";
import loadingGif from '../assets/Loading_icon.gif';

type ShowProductProps = {
    productLoaded: Product;
    reLoad: boolean;
    onClose: (p: Product | null) => void;
}
export default function ShowProduct({ productLoaded, reLoad, onClose }: ShowProductProps) {
    const [productData, setProductData] = useState<Product | null>(null);
    const [status, setStatus] = useState(Status.success);
    const [error, setError] = useState<string | null>(null);

    function loadProductDetails() {
        setStatus(Status.loading);
        fetch(`${baseUrl}/${productLoaded.id}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    const errorMessage = `Failed to fetch product details: ${res.status} ${res.statusText}`;
                    throw new Error(errorMessage);
                }
            })
            .then(data => {
                setProductData(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setStatus(Status.success);
            });
    }
    const productId = productLoaded.id;
    useEffect(() => {
        let isCancle = false;
        if (reLoad) {
            async function loadProductData() {
                try {
                    setStatus(Status.loading);
                    const res = await fetch(`${baseUrl}/${productId}`);
                    if (!isCancle) {
                        if (res.ok) {
                            const data = await res.json();
                            setProductData(data);
                        }
                    }
                }
                catch {
                    setError('Error :(((');
                }
                setStatus(Status.success);
            }
            loadProductData();
        }
        return () => {
            isCancle = true;
        }
    }, [reLoad, productId]);

    function handleClose() {
        onClose(null);
    }

    let content: JSX.Element | null = null;
    if (!reLoad) {
        content = (
            <>
                <h1 className="text-3xl font-black tracking-tight text-slate-900">{productLoaded.title}</h1>
                <h3 className="mt-2 text-2xl font-black text-emerald-700">${productLoaded.price.toFixed(2)}</h3>
                <p className="mt-3 rounded-xl bg-slate-50 p-3 text-slate-600">{productLoaded.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {
                        productLoaded.images.map((image, index) => (
                            <div key={index} className="flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
                                <img src={image} alt={productLoaded.title} className="h-full w-full object-contain" />
                            </div>
                        ))
                    }
                </div>
                <hr className="my-5 border-slate-200" />
                <div className="space-y-3">
                    {
                        productLoaded.reviews.map((review, index) => (
                            <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                <h4 className="font-semibold text-slate-700">{review.reviewerName} - {review.rating} stars</h4>
                                <p className="mt-1 text-sm leading-6 text-slate-600">{review.comment}</p>
                                <small className="mt-1 block text-xs text-slate-500">{review.date}</small>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
    else {
        if (status === Status.loading) {
            content = <img src={loadingGif} alt="Loading" className="mx-auto w-96 opacity-90" ></img>
        }
        else if (error) {
            content = <p className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-rose-700">Error: {error} - <button className="ml-1 rounded-md bg-rose-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-rose-700" onClick={e => {
                e.stopPropagation();
                loadProductDetails();
            }}>Reload</button></p>;
        }
        else if (productData) {
            content = (
                <>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900">{productData.title}</h1>
                    <h3 className="mt-2 text-2xl font-black text-emerald-700">${productData.price.toFixed(2)}</h3>
                    <p className="mt-3 rounded-xl bg-slate-50 p-3 text-slate-600">{productData.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {
                            productData.images.map((image, index) => (
                                <div key={index} className="flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
                                    <img src={image} alt={productData.title} className="h-full w-full object-contain" />
                                </div>
                            ))
                        }
                    </div>
                    <hr className="my-5 border-slate-200" />
                    <div className="space-y-3">
                        {
                            productData.reviews.map((review, index) => (
                                <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                                    <h4 className="font-semibold text-slate-700">{review.reviewerName} - {review.rating} stars</h4>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">{review.comment}</p>
                                    <small className="mt-1 block text-xs text-slate-500">{review.date}</small>
                                </div>
                            ))
                        }
                    </div>
                </>
            );
        }
    }
    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/45 p-4 backdrop-blur-[2px]" onClick={handleClose}>
            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_30px_120px_-32px_rgba(2,6,23,0.6)] sm:p-6"
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <div className="mb-4 flex justify-end">
                    <button
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                        onClick={e => {
                            e.stopPropagation();
                            handleClose();
                        }}
                    >Close</button>
                </div>
                {content}
            </div>
        </div>
    );
}
