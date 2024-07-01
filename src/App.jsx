import './App.css'
import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Sidebar from "./components/Sidebar" 
import { Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import NewProduct from './pages/NewProduct';
import UserLoginPage from './pages/UserLoginPage';
import ContactPage from './pages/ContactPage';
import productsData from "./assets/data/products.json";
import React, { useState } from 'react';



function App() {

  const [products, setProducts] = useState(productsData);
  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]) //latest entries on top
  }
  
  return (
    <div className='App'>
      <Navbar/>
      <div className='page-content'>
        <Sidebar/>

        <Routes>
          <Route path= '/about' element = {<AboutPage/>} />
          <Route path= '/' element = {<DashboardPage productsList = {products} setProductsList ={setProducts} />} />
          <Route path= '/products/newProduct' element = {<NewProduct productsList = {products} addNewProduct={addProduct} />} />
          <Route path= '/products/:productId' element = {<ProductDetailsPage productsList = {products}/>} />
          <Route path= '/userLogin' element = {<UserLoginPage/>} />
          <Route path= '/contact' element = {<ContactPage/>} />
          <Route path= '*' element = {<NotFoundPage/>} /> {/* fallback page  */}
        </Routes> 
        
      </div>


      <Footer/>
    </div>
  )
}
export default App