const ProductInfoItem = ({images, brand, title, price, discountPercentage,category, deletProduct }) => {
    return ( 
        <div className = "product-div">
          <img src= {images} />
          <div className='details-div'> 
            <p> Product Category: {category} </p>
            <p> Brand: {brand} </p>
            <p> Model: {title} </p>
            <p> Price: {price} </p>
            <p> Discount: {discountPercentage}</p>
            {price <600 && <p> Great Deal </p>}
            {(brand === "Apple" && price>800) && <p> Get a free Apple watch!</p>}
            <button type = "button" onClick={()=> deletProduct(product.id)} > Delete </button>
          </div>
        </div>
         );
}
 
export default ProductInfoItem;

