import type Product from "../models/Product";
import './ShowProdduct.css';
type ShowProductProps = {
    product: Product;
    onClose: (p: Product | null) => void;
}
export default function ShowProduct({ product, onClose }: ShowProductProps) {
    function handleClose(){
        onClose(null);
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
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                {
                    product.images.map((image, index) => (
                        <img key={index} src={image} alt={product.title} className="showProductDetail" />
                    ))
                }
            </div>
        </div>
    );
}