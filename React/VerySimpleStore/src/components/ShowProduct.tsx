import { useState, type JSX } from "react";
import type Product from "../models/Product";
import './ShowProdduct.css';
import { baseUrl } from "./Products";
import Status from "../models/Status";
import loadingGif from '../assets/Loading_icon.gif';

type ShowProductProps = {
    productLoaded: Product;
    reLoad:boolean;
    onClose: (p: Product | null) => void;
}
export default function ShowProduct({ productLoaded, reLoad, onClose }: ShowProductProps) {
    const [productData, setProductData] = useState<Product|null>(null);
    const [status, setStatus] = useState(Status.success);
    const [error, setError] = useState<string|null>(null);

    function loadProductDetails(){
        setStatus(Status.loading);
        fetch(`${baseUrl}/${productLoaded.id}`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
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

    if(reLoad && !productData && status !== Status.loading && !error){
        loadProductDetails();
    }

    function handleClose(){
        onClose(null);
    }

    let content:JSX.Element|null = null;
    if(!reLoad){
        content = (
            <>
                <h1>{productLoaded.title}</h1>
                <h3>${productLoaded.price.toFixed(2)}</h3>
                <p>{productLoaded.description}</p>
                {
                    productLoaded.images.map((image, index) => (
                        <img key={index} src={image} alt={productLoaded.title} className="showProductDetail" />
                    ))
                }
                <hr />
                {
                    productLoaded.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <h4>{review.reviewerName} - {review.rating} stars</h4>
                            <p>{review.comment}</p>
                            <small>{review.date}</small>
                        </div>
                    ))
                }
            </>
        );
    }
    else{
        if(status === Status.loading){
            content = <img src= {loadingGif} ></img>
        }
        else if(error){
            content = <p style={{color:'red'}}>Error: {error} - <button onClick={e => {
                e.stopPropagation();
                loadProductDetails();
            }}>Reload</button></p>;
        }
        else if(productData){
            content = (
            <>
                <h1>{productData.title}</h1>
                <h3>${productData.price.toFixed(2)}</h3>
                <p>{productData.description}</p>
                {
                    productData.images.map((image, index) => (
                        <img key={index} src={image} alt={productData.title} className="showProductDetail" />
                    ))
                }
                <hr />
                {
                    productData.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <h4>{review.reviewerName} - {review.rating} stars</h4>
                            <p>{review.comment}</p>
                            <small>{review.date}</small>
                        </div>
                    ))
                }
            </>
        );
        }
    }
    return (
        <div className="showProduct" onClick={handleClose}>
            <div className="showProuctContent"
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <div style={{
                    textAlign:'right'
                }}>
                    <button
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