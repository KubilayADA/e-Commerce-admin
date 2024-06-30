
const Product = ({product, deletProduct}) => {

      return ( 
        <div className = "product-div">
          <div className="images-div">
            <img src= {product.images[0]} /> {/* toDO: add list of images */} 
          </div>
          <div className='details-div'> 
            <p> Product Category: {product.category} </p>
            <p> Brand: {product.brand} </p>
            <p> Model: {product.title} </p>
            <p> Price: {product.price} </p>
            <p> Discount: {product.discountPercentage}</p>
            {product.price <600 && <p> Great Deal </p>}
            {(product.brand === "Apple" && product.price>800) && <p> Get a free Apple watch!</p>}
            <button type = "button" onClick={()=> {deletProduct(product.id)}} > Delete </button> {/* <button onClick={handleDeleteClick}>Delete</button>*/}
          </div>
        </div>
         );
}
 
export default Product;


