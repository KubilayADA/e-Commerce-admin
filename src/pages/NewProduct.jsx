import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../NewProduct.css'; // 

const generateInitialState = () => {
  return {
    _id: uuidv4(),
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  };
};

const NewProduct = ({ addNewProduct }) => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState(generateInitialState());

  const handleSubmit = event => {
    event.preventDefault();
    addNewProduct(newProduct);
    setNewProduct(generateInitialState());
    navigate('/'); 
  };

  const handleChange = event => {
    const currentName = event.target.name;
    const currentValue = event.target.value;
    setNewProduct({ ...newProduct, [currentName]: currentValue });
  };

  return (
    <Fragment>
      <div className="form"> {/* Apply className directly to the div */}
        <h3>New Product</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Category
            <input name="category" value={newProduct.category} onChange={handleChange} />
          </label>

          <label>
            Title
            <input name="title" value={newProduct.title} onChange={handleChange} />
          </label>

          <label>
            Brand
            <input name="brand" value={newProduct.brand} onChange={handleChange} />
          </label>

          <label>
            Price
            <input name="price" value={newProduct.price} onChange={handleChange} />
          </label>

          <label>
            Discount
            <input name="discountPercentage" value={newProduct.discountPercentage} onChange={handleChange} />
          </label>

          <button type="submit">Save Item</button>
        </form>
      </div>
    </Fragment>
  );
};

export default NewProduct;
