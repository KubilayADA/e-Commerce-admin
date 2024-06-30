import { Link } from "react-router-dom";

import Product from "../components/Product";

const DashboardPage = ({productsList, setProductsList}) => {

  const handleDelete = (id) => setProductsList(productsList.filter(currentProduct => (currentProduct.id !== id)));

  return (
        <div className="dashboard" style={{textAlign: 'center', padding: '10px'}}>

          
          <Link to='/products/newProduct'> 
            <h2>Add Product</h2>
          </Link>
          {productsList &&
                      productsList.map((currentProduct) => {
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