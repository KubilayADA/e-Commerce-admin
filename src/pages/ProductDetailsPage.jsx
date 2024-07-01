import { useParams, Link, Navigate } from "react-router-dom";

const ProductDetailsPage = ({productsList}) => {
    const {productId} = useParams();
    const product = productsList.find(currentProduct => currentProduct.id === parseInt(productId));

    if(!product) {
      <h2> ProductId: {productId} , ProductId Type: {typeof(productId)} </h2>
      return <Navigate to = '/' />
    }

    return (  
        <div className="product-info">
            <h1>Product Details Page</h1>
            <h1> product.title</h1>
            <p> Here is product details such as description, stock, images and rating, etc.</p>
            <img src= {product.images[3]} alt= 'product images'/>
            <div>
              <p className="xx"> /* toDo: addClassName and styling content of ProdcutDeatilsPage  */
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
          
        </div>
      );
}
 
export default ProductDetailsPage;

