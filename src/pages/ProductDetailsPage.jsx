import { Fragment } from "react";
import productsData from "../assets/data/products.json";
import { useParams, Link, Navigate } from "react-router-dom";

const ProductDetailsPage = () => {
    const {productId} = useParams();
    const product = productsData.find(currentProduct => currentProduct.id === productId);
    console.log(productId,product);

    if(!product) {
      return <Navigate to = '/' />
    }


    return (  
        <Fragment className="product-info">
            <h1>Product Details Page</h1>
            <h1> product.title</h1>
            <p> Here is product details such as description, stock, images and rating, etc.</p>
            <img src= {product.images[3]} alt= 'product images'/>
            <div>
              <p className="xx">
                  <strong>More details here:</strong>{" "}
                  <a href=''
                      target="_blank"
                  > Text to link </a>
              </p>
            </div>
            {/* Back button */}
            <Link to = "/">    
              <button className="back-btn" style={{backgroundColor: 'red'}}>
                Back
              </button>
            </Link>    
          
        </Fragment>
      );
}
 
export default ProductDetailsPage;

