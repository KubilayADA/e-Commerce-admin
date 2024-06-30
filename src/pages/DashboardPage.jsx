import productsData from "../assets/data/products.json";
import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

import Product from "../components/Product";

const DashboardPage = () => {

  const [products, setProducts] = useState(productsData);
  const handleDelete = (id) => setProducts(products.filter(currentProduct => (currentProduct.id !== id)));


  return (
        <div className="dashboard" style={{textAlign: 'center', padding: '10px'}}>

          <h2>Dashboard</h2>
          {productsData &&
                      productsData.map((currentProduct) => {
                        return (
                            <Link key={currentProduct.id} to = {`/products/${currentProduct.id}`}>
                              <Product product = {currentProduct} 
                               deletProduct ={handleDelete}
                              />                             
                            </Link>
                      
                        );  
    
          })}


          
        </div>
      );
    
}

export default DashboardPage;