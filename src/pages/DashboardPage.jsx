import productsData from "../assets/products.json";
import React, { useState } from 'react';

import Product from "../components/Product";

const DashboardPage = () => {

    const [products, setProducs] = useState(productsData);
    const handleDelete = (id) => setProducs(products.filter(currentProduct => (currentProduct.id !== id)));

    return (
        <div>
          {products.map(currentProduct => {
            return <Product key = {currentProduct.id}
            id = {currentProduct.id}
            image ={currentProduct.images[0]} /* toDO: add list of images  */
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




