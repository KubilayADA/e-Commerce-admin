import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import '../ProductDetails.css'; // Import your CSS file for styling

const ProductDetailsPage = ({ productsList }) => {
    const { productId } = useParams();
    const product = productsList.find(currentProduct => currentProduct.id === parseInt(productId));

    if (!product) {
        return <Navigate to='/' />;
    }

    return (
        <div className="product-info">
            <h1 className="page-title">Product Details Page</h1>
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">Das P30 von HUAWEI: Ein wunderschönes Smartphone mit überzeugender Technik!

Beim Design des Geräts wurde schließlich eine Gestaltung in Black gewählt, was für ein besonders geschmackvolles Erscheinungsbild sorgt.</p>
            <img className="product-image" src={product.images[3]} alt="Product Images" />
            <div className="more-details">
                <p className="details-text">
                    <strong>More details here:</strong>{" "}
                    <a href="#" target="_blank" rel="noopener noreferrer">Text to link</a>
                </p>
            </div>
            {/* Back button */}
            <Link to="/" className="back-link">
                <button className="back-btn">Back</button>
            </Link>
        </div>
    );
}

export default ProductDetailsPage;
