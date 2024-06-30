import productsData from "../assets/data/products.json";
import { useParams, Link } from "react-router-dom";

const ProductDetailsPage = () => {
    const {productId} = useParams();
    const product = productsData.find(currentProduct => currentProduct.id === productId);
    console.log(productId,product);

return (  
    <div className="product-info">
        <h1>Product Details Page</h1>
        <div>
         {product && (
           <>
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
       
           </>
         )}
        </div>
    </div>
  );
}
 
export default ProductDetailsPage;

