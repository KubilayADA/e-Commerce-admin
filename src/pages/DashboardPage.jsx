import productsData from "../assets/products.json";
import React, { useState } from 'react';

import ProductInfoItem from "../components/ProductInfoItem";

const DashboardPage = () => {

    const [products, setProducs] = useState(productsData);
    const handleDelete = (id) => setProducs(products.filter(currentProduct => (currentProduct.id !== id)));

    return (
        <div>
          <h2>Dashboard</h2>
          {products.map(currentProduct => {
            return <ProductInfoItem key = {currentProduct.id} 
            image ={currentProduct.images[0]}
            brand ={currentProduct.brand}
            title ={currentProduct.title}
            price ={currentProduct.price}
            discountPercentage ={currentProduct.discountPercentage}
            category ={currentProduct.category}
            deletProduct ={handleDelete}       
            />;
          })}
        </div>
      );
    
}

export default DashboardPage;




