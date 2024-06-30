import './App.css'
import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Sidebar from "./components/Sidebar" 
import { Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import UserLoginPage from './pages/UserLoginPage';


function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <div className='page-content'>
        <Sidebar/>

        <Routes>
          <Route path= '/about' element = {<AboutPage/>} />
          <Route path= '/' element = {<DashboardPage />} />
          <Route path= '/products/:productId' element = {<ProductDetailsPage/>} />
          <Route path= '/userLogin' element = {<UserLoginPage/>} />
          <Route path= '*' element = {<NotFoundPage/>} /> {/* fallback page  */}
        </Routes> 
        
      </div>


      <Footer/>
    </div>
  )
}
export default App