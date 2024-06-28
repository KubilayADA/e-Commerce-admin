import './App.css'
import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Sidebar from "./components/Sidebar" 
import { Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Sidebar/>

    
      <Routes>
        <Route path= '/' element = {<DashboardPage />} />
        <Route path= '/about' element = {<AboutPage/>} />
        <Route path= '/details' element = {<ProductDetailsPage/>} />

        <Route path= '*' element = {<NotFoundPage/>} />
      </Routes> 

      <Footer/>
    </div>
  )
}
export default App