    import { Fragment, useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { v4 as uuidv4 } from 'uuid'
    
    const generateInitialState = () => {
      return {
        _id: uuidv4(),
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: [ ],
       }
    }
    
    const NewProduct = ({ addNewProduct }) => {
      const navigate = useNavigate()
      const [newProduct, setNewProduct] = useState(generateInitialState())
    
      const handleSubmit = event => {
        event.preventDefault()
        addNewProduct(newProduct)
        setNewProduct(generateInitialState())
        navigate('/'); // navigate to dashboard
      }
    
      const handleChange = event => {
        const currentName = event.target.name
        const currentValue = event.target.value
        console.log({ currentName, currentValue })
        setNewProduct({ ...newProduct, [currentName]: currentValue })
      }
    
      return (
        <Fragment className = 'form'>
          <h3>New Product</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Category
              <input name='category' value={newProduct.category} onChange={handleChange} />
            </label>

            <label>
              Title
              <input name='title' value={newProduct.title} onChange={handleChange} />
            </label>
    
            <label>
              Brand
              <input name='brand' value={newProduct.brand} onChange={handleChange} />
            </label>
    
            <label>
              Price
              <input name='price' value={newProduct.price} onChange={handleChange} />
            </label>
    
            <label>
              Discount
              <input name='discountPercentage' value={newProduct.discountPercentage} onChange={handleChange} />
            </label>
            <button type='submit'>Save Item</button>
          </form>
        </Fragment>
      )
    }
    
    export default NewProduct;
    